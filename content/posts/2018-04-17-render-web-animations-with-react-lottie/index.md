---
title: Render web animations with React Lottie
date: 2018-04-17
category: frontend
tags:
  - react
  - lottie
  - adobe-after-effects
  - bodymovin
  - svg
  - canvas
  - json
  - animation
  - web
  - native
excerpt: How to render animations from Adobe After Effects using Bodymovin/Lottie and React web.
---

So I heard you like animations? Me too! :D

> Maybe you came here from React-Native grounds looking to improve your user experience with beauty animations. Well, in this post I'm going to focus on animations for web, but it's all based on the same foundations, therefore, the content may help for any of the cases.

## The user experience

Just a little bit of context, I always like to share this talk when the subject is about making things more interesting:

<Video id="Fy0aCDmgnxg" />

Let's go from the take: "adding juice to games or apps or websites". This is about improving the experience. Make something static to feel more alive and reaching emotions through interactions. We are not on paper anymore, this is the digital experience! Every little detail counts to engage our user.

## Animations for the web

<Animation animation="reyUpdated" />

Remember the Macromedia/Adobe Flash days? I do remember a lot. Oh, nostalgia. I built so many full animated websites and even small pieces of animations or just animated videos for the fun. Nowadays we, web and app developers, don't use Flash anymore, mostly. Well, not as much as we used before and not for the same purposes. But what replaced that amazing tool?

Yeah, that's a good question! Firstly, there were valid reasons for the Flash to fall into disuse. Reasons like going against the open web, shame on SWF. But let's make clear that the capabilities of the Flash software by itself wasn't one of the reasons. I can ensure you. And now that we don't use such tooling anymore, what do we use to create animations?

Tell you the truth: I don't know exactly what's the new standard! I guess there aren't any ultimate standard currently. There are just too many ways nowadays. CSS/SVG/JS animations are becoming stronger and it's capabilities getting better and better over time. Dozens of JS libraries out there that do a great job supporting animations. ¯\\\_(ツ)\_/¯

## Bodymovin & Lottie

The thing is that the source code of animations aren't everything. In many cases, we need powerful software with a full-featured interface and stuff. And here shines the [Adobe After Effects](https://www.adobe.com/products/aftereffects.html). This software is around not just nowadays but since a long time already. So many great video effects can be made. But yeah, let's go back to the web!

There is a plugin for After Effects called [Bodymovin](https://github.com/airbnb/lottie-web) that can export animations in JSON format, that can be used on the web and native apps!

Watch this walkthrough on how to export the animation JSON from your After Effects project:

<Video id="5XMUJdjI0L8" />

Pretty easy! Now, if you want to render the animation in your web/native project as SVG/Canvas/HTML format, all you need is the [AirBnb's Lottie web](https://github.com/airbnb/lottie-web) library (the docs are good if you are looking for instructions: http://airbnb.io/lottie/).

And if you want to leverage the use case here for a React website, you can use the https://github.com/chenqingspring/react-lottie component. It simplifies the adoption really well, check out some demos:

<Animation animation="legoLoader" height="340" />

Yeah, Lego... Components... got it? Haha. That's infinite animation with a loop, but Bodymovin supports other events as well. Check the example bellow of the "favorite" star animation clicking on it:

<Animation
  animation="favouriteAppIcon"
  autoplay={false}
  loop={false}
  width="200"
  height="200"
/>

### My React component

Alright, if you are curious about how I included Lottie web animation in the content of this blog, then first take a look at this post I wrote: [Markdown renderer component that can render other React components](https://bernardodiasdacruz.com/2018/04/09/markdown-renderer-component-that-can-render-other-react-components).

For my use case I create the `<Animation />` component:

```jsx
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

  handleClick = () => {
    this.setState({ isPaused: !this.state.isPaused })
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
          onClick={this.handleClick}
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
```

You can always check the source code of this website too: [Animation](https://github.com/bernardodiasc/bernardodiasc.github.io/blob/3e4289e5d8aedb72d44cc82a559eec20fae7372c/src/displays/Animation/Animation.js)

### Animation credits:

- Rey updated: https://www.lottiefiles.com/82-rey-updated
- Lego loader: https://www.lottiefiles.com/410-lego-loader
- Favoutire app icon: https://www.lottiefiles.com/72-favourite-app-icon

There are many more cool examples in https://www.lottiefiles.com/ website!

## Moar about animations!1!!

Since we saw the goodness of Lottie web, let me tell you about one drawback I had to deal with recently. You know, it's good to be realistic about technical choices, not everything is flowers.

The case was: In a Meteor project I've been working on, I had to include an animation and our team decided to use Lottie web. The problem is that the library relies on `window` object that's not available for SSR. Server-side rendering is a default feature on Meteor apps. Until the date of this post, this issue isn't resolved, although it's a known problem and I believe will be addressed soon.

As I told before, there are many ways to create interactive animations for the web and for this particular case I decided to go with CSS keyframes, the result went as expected, you can take a look here:

<Codepen title="Rocket animation" hash="QmPybv" height="350" />

I hope to get back on animation topic much more often on future blog posts. I've been using several different approaches and still can't tell which one is the best. My guess is that there are cases and cases that will rely on different solutions. See ya!
