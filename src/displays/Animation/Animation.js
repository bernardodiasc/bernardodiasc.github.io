import React, { PureComponent } from 'react'
import Lottie from 'react-lottie'
import animations from './animations'
import './Animation.css'

class Animation extends PureComponent {
  static defaultProps = {
    animation: '',
    width: '100%',
    height: '100%',
    loop: true,
    autoPlay: true,
  }

  constructor(props) {
    super(props)
    this.state = {
      isStopped: !this.props.autoPlay,
      isPaused: !this.props.autoPlay,
      isComplete: false,
    }
  }

  handleEvent = (obj) => {
    if (!this.props.loop) {
      if (obj.currentTime === (obj.totalTime - 1)) {
        if (this.state.isComplete) {
          this.setState({ isStopped: true, isComplete: false })
        } else {
          this.setState({ isStopped: false, isComplete: true })
        }
      }
    }
  }

  render() {
    const animation = animations[this.props.animation]
    const defaultOptions = {
      loop: this.props.loop,
      autoplay: this.props.autoPlay,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    }
    const makeValidNumber = (value) =>
      value.substr(value.length - 1) === '%' ? value : Number(value)

    return (
      <div className="Animation">
        <Lottie
          onClick={() => {}}
          options={defaultOptions}
          width={makeValidNumber(this.props.width)}
          height={makeValidNumber(this.props.height)}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          eventListeners={
            [
              {
                eventName: 'enterFrame',
                callback: obj => this.handleEvent(obj),
              },
            ]
          }
        />
      </div>
    )
  }
}

export default Animation
