import React, { PureComponent } from 'react'
import './Languages.css'

class Languages extends PureComponent {
  static defaultProps = {
    activeLanguage: [],
    availableLanguages: '',
    selectLanguage: () => {},
  }

  render() {
    const { activeLanguage, availableLanguages, selectLanguage } = this.props
    return availableLanguages.length > 0 && (
      <ul className="Layout-Languages">
        {availableLanguages.map(language => (
          <li
            key={language}
            onClick={() => selectLanguage(language)}
            className={`Layout-Languages__each ${activeLanguage === language && 'Layout-Languages__each--active'}`}
          >
            {language}
          </li>
        ))}
      </ul>
    )
  }
}

export default Languages
