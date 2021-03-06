/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import DisplaysReadme from 'displays/README.md'
storiesOf('Displays', module)
  .add('About display components', () => <Docs>{DisplaysReadme}</Docs>)

import 'displays/Layout/Layout.story.js'
import 'displays/Layout/Tabs/Tabs.story.js'
// import 'displays/Layout/HeaderBar/HeaderBar.story.js'
// import 'displays/Layout/Languages/Languages.story.js'
// import 'displays/Layout/BreadCrumbs/BreadCrumbs.story.js'
import 'displays/PageContent/PageContent.story.js'
import 'displays/PostHeader/PostHeader.story.js'
import 'displays/PostDetails/PostDetails.story.js'
import 'displays/PostsListing/PostsListing.story.js'
import 'displays/CategoryDetails/CategoryDetails.story.js'
import 'displays/AppLink/AppLink.story.js'
import 'displays/TextBlock/TextBlock.story.js'
import 'displays/Icon/Icon.story.js'
import 'displays/Disqus/Disqus.story.js'
import 'displays/MarkdownRenderer/MarkdownRenderer.story.js'
import 'displays/Share/Share.story.js'
import 'displays/SankeyChart/SankeyChart.story.js'
