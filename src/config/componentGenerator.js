const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const CHOICES = fs.readdirSync(`${__dirname}/templates`)
const OUTPUT_DIR = path.resolve(__dirname, '..')

inquirer
  .prompt([
    {
      name: 'componentType',
      type: 'list',
      message: 'What type of component would you like to generate?',
      choices: CHOICES
    },
    {
      name: 'componentName',
      type: 'input',
      message: 'Component name:',
      validate: function (input) {
        if (/^([A-Za-z])+$/.test(input)) return true
        else return 'Component name may only include letters.'
      }
    },
    {
      name: 'nestedComponent',
      type: 'confirm',
      message: 'Nested component?',
      default: false
    },
    {
      name: 'parentComponent',
      type: 'input',
      message: 'Parent component:',
      validate: function (input) {
        if (/^([A-Za-z])+$/.test(input)) return true
        else return 'Component name may only include letters.'
      },
      when: function(answers) {
        return answers.nestedComponent;
      }
    }
  ])
  .then(answers => {
    const componentType = answers.componentType
    const componentName = answers.componentName
    const parentComponent = answers.parentComponent
    const templatePath = `${__dirname}/templates/${componentType}`
    const componentPath = `${parentComponent ? `${parentComponent}/` : ''}${componentName}`
    const componentClass = `${parentComponent ? `${parentComponent}-` : ''}${componentName}`
    const componentFullPath = `${OUTPUT_DIR}/${componentType}/${componentPath}`
    const options = { componentName, componentType, parentComponent, componentPath, componentClass }

    fs.mkdirSync(componentFullPath)
    createDirectoryContents(templatePath, componentFullPath, options)
  })

function createDirectoryContents (templatePath, componentFullPath, options) {
  const filesToCreate = fs.readdirSync(templatePath)

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`
    const stats = fs.statSync(origFilePath)
    const checkName = file.match(/^ComponentName/g)
    let newFile = file

    if (checkName && checkName[0] === 'ComponentName') {
      newFile = file.replace('ComponentName', options.componentName)
    }

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8')
      const writePath = `${componentFullPath}/${newFile}`
      const render = ejs.render(contents, options)

      fs.writeFileSync(writePath, render, 'utf8')
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${componentFullPath}/${newFile}`)
      createDirectoryContents(`${templatePath}/${file}`, `${componentFullPath}/${newFile}`, options)
    }
  })
}
