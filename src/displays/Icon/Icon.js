import React, { PureComponent } from 'react'
import './Icon.css'

// https://dmfrancisco.github.io/react-icons/
// https://materialdesignicons.com/
const icons = [
  {
    name: 'person',
    svg: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
  },
  {
    name: 'explore',
    svg: <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zm0-8.9c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm2.19 12.19l-8.19 3.81 3.81-8.19 8.19-3.81-3.81 8.19z" />,
  },
  {
    name: 'filter-list',
    svg: <path d="M10 18h4v-2h-4v2zm-7-12v2h18v-2h-18zm3 7h12v-2h-12v2z" />,
  },
  {
    name: 'search',
    svg: <path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />,
  },
  {
    name: 'calendar',
    svg: <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />,
  },
  {
    name: 'home',
    svg: <path d="M10 20v-6h4v6h5v-8h3l-10-9-10 9h3v8z" />,
  },
  {
    name: 'guy-fawkes-mask',
    svg: <path d="M21,13A9,9 0 0,1 12,22A9,9 0 0,1 3,13L3.03,4.43C5.68,2.88 8.76,2 12.05,2C15.3,2 18.36,2.87 21,4.38V13M13,19.93C16.39,19.44 19,16.5 19,13V5.59C16.9,4.57 14.54,4 12.05,4C9.5,4 7.08,4.6 4.94,5.66L5,13C5,16.5 7.63,19.44 11,19.93V18H13V19.93M11,16H8L6,13L9,14H10L11,13H13L14,14H15L18,13L16,16H13L12,15L11,16M6,9.03C6.64,8.4 7.5,8.05 8.5,8.05C9.45,8.05 10.34,8.4 11,9.03C10.34,9.65 9.45,10 8.5,10C7.5,10 6.64,9.65 6,9.03M13,9.03C13.64,8.4 14.5,8.05 15.5,8.05C16.45,8.05 17.34,8.4 18,9.03C17.34,9.65 16.45,10 15.5,10C14.5,10 13.64,9.65 13,9.03Z" />,
  },
]

class Icon extends PureComponent {
  static defaultProps = {
    icon: '',
  }

  render() {
    const getIcon = icons.find(i => i.name === this.props.icon)
    return getIcon ? (
      <svg
        className="Icon"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
      >
        {getIcon.svg}
      </svg>
    ) : null
  }
}

export default Icon
