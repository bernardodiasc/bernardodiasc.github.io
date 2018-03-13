const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const CHOICES = fs.readdirSync(`${__dirname}/content`)
const OUTPUT_DIR = path.resolve(__dirname, '..', '..', 'public', 'content')

inquirer
  .prompt([
    {
      name: 'contentType',
      type: 'list',
      message: 'What type of content would you like to generate?',
      choices: CHOICES
    },
    {
      name: 'contentName',
      type: 'input',
      message: 'Content name:',
      validate: function (input) {
        if (/^([A-Za-z\d\-])+$/.test(input)) return true
        else return 'Content name may only include letters.'
      }
    }
  ])
  .then(answers => {
    const contentType = answers.contentType
    const contentName = answers.contentName
    const templatePath = `${__dirname}/content/${contentType}`
    const contentFullPath = `${OUTPUT_DIR}/${contentType}/${contentName}`
    const options = { contentName, contentType }

    fs.mkdirSync(contentFullPath)
    createDirectoryContents(templatePath, contentFullPath, options)
  })

function createDirectoryContents (templatePath, contentFullPath, options) {
  const filesToCreate = fs.readdirSync(templatePath)

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`
    const stats = fs.statSync(origFilePath)
    const checkName = file.match(/^contentName/g)
    let newFile = file

    if (checkName && checkName[0] === 'contentName') {
      newFile = file.replace('contentName', options.contentName)
    }

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8')
      const writePath = `${contentFullPath}/${newFile}`
      const render = ejs.render(contents, options)

      fs.writeFileSync(writePath, render, 'utf8')
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${contentFullPath}/${newFile}`)
      createDirectoryContents(`${templatePath}/${file}`, `${contentFullPath}/${newFile}`, options)
    }
  })
}
