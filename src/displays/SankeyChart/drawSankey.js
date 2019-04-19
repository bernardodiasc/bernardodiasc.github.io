import * as d3 from 'd3'
import d3BiHiSankey from './bihisankey'

export default function drawSankeyChart (elementId, data, types) {
  let svg, tooltip, biHiSankey, path, defs, colorScale, highlightColorScale, isTransitioning

  const OPACITY = {
    NODE_DEFAULT: 0.9,
    NODE_FADED: 0.1,
    NODE_HIGHLIGHT: 0.8,
    LINK_DEFAULT: 0.6,
    LINK_FADED: 0.05,
    LINK_HIGHLIGHT: 0.9
  }
  const TYPES = types
  const TYPE_COLORS = ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d']
  const TYPE_HIGHLIGHT_COLORS = ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494']
  const LINK_COLOR = '#b3b3b3'
  const INFLOW_COLOR = '#2E86D1'
  const OUTFLOW_COLOR = '#D63028'
  const NODE_WIDTH = 36
  const COLLAPSER = {
    RADIUS: NODE_WIDTH / 2,
    SPACING: 2
  }
  const OUTER_MARGIN = 10
  const MARGIN = {
    TOP: 2 * (COLLAPSER.RADIUS + OUTER_MARGIN),
    RIGHT: OUTER_MARGIN,
    BOTTOM: OUTER_MARGIN,
    LEFT: OUTER_MARGIN
  }
  const TRANSITION_DURATION = 400
  const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM
  const WIDTH = 960 - MARGIN.LEFT - MARGIN.RIGHT
  const LAYOUT_INTERATIONS = 32
  // const REFRESH_INTERVAL = 7000

  const formatNumber = function (d) {
    const numberFormat = d3.format(',.0f') // zero decimal places
    return '£' + numberFormat(d)
  }

  const formatFlow = function (d) {
    const flowFormat = d3.format(',.0f') // zero decimal places with sign
    return '£' + flowFormat(Math.abs(d)) + (d < 0 ? ' CR' : ' DR')
  }

  // Used when temporarily disabling user interractions to allow animations to complete
  const disableUserInteractions = function (time) {
    isTransitioning = true
    setTimeout(function() {
      isTransitioning = false
    }, time)
  }

  const hideTooltip = function () {
    return tooltip
      .transition()
      .duration(TRANSITION_DURATION)
      .style('opacity', 0)
  }

  const showTooltip = function (event) {
    return tooltip
      // .style('left', d3.event.pageX + 'px')
      // .style('top', d3.event.pageY + 15 + 'px')
      .style('left', d3.mouse(event)[0] + 'px')
      .style('top', d3.mouse(event)[1] + 15 + 'px')
      .transition()
      .duration(TRANSITION_DURATION)
      .style('opacity', 1)
  }

  colorScale = d3
    .scale
    .ordinal()
    .domain(TYPES)
    .range(TYPE_COLORS)

  highlightColorScale = d3
    .scale
    .ordinal()
    .domain(TYPES)
    .range(TYPE_HIGHLIGHT_COLORS)

  svg = d3
    .select(`#${elementId}`)
    .append('svg')
    .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
    .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
    .append('g')
    .attr('transform', 'translate(' + MARGIN.LEFT + ',' + MARGIN.TOP + ')')

  svg
    .append('g')
    .attr('id', 'links')

  svg
    .append('g')
    .attr('id', 'nodes')

  svg
    .append('g')
    .attr('id', 'collapsers')

  tooltip = d3
    .select(`#${elementId}`)
    .append('div')
    .attr('id', 'tooltip')

  tooltip
    .style('opacity', 0)
    .append('p')
    .attr('class', 'value')

  biHiSankey = d3BiHiSankey()

  // Set the biHiSankey diagram properties
  biHiSankey
    .nodeWidth(NODE_WIDTH)
    .nodeSpacing(10)
    .linkSpacing(4)
    .arrowheadScaleFactor(0.5) // Specifies that 0.5 of the link's stroke WIDTH should be allowed for the marker at the end of the link.
    .size([WIDTH, HEIGHT])

  path = biHiSankey
    .link()
    .curvature(0.45)

  defs = svg
    .append('defs')

  defs
    .append('marker')
    .style('fill', LINK_COLOR)
    .attr('id', 'arrowHead')
    .attr('viewBox', '0 0 6 10')
    .attr('refX', '1')
    .attr('refY', '5')
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', '1')
    .attr('markerHeight', '1')
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z')

  defs
    .append('marker')
    .style('fill', OUTFLOW_COLOR)
    .attr('id', 'arrowHeadInflow')
    .attr('viewBox', '0 0 6 10')
    .attr('refX', '1')
    .attr('refY', '5')
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', '1')
    .attr('markerHeight', '1')
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z')

  defs
    .append('marker')
    .style('fill', INFLOW_COLOR)
    .attr('id', 'arrowHeadOutlow')
    .attr('viewBox', '0 0 6 10')
    .attr('refX', '1')
    .attr('refY', '5')
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', '1')
    .attr('markerHeight', '1')
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z')

  function update () {
    let link, linkEnter, node, nodeEnter, collapser, collapserEnter

    // function dragmove(node) {
    //   node.x = Math.max(0, Math.min(WIDTH - node.width, d3.event.x))
    //   node.y = Math.max(0, Math.min(HEIGHT - node.height, d3.event.y))

    //   d3
    //     .select(this)
    //     .attr('transform', 'translate(' + node.x + ',' + node.y + ')')

    //   biHiSankey
    //     .relayout()

    //   svg
    //     .selectAll('.node')
    //     .selectAll('rect')
    //     .attr('height', function (d) { return d.height })

    //   link
    //     .attr('d', path)
    // }

    function containChildren(node) {
      node.children.forEach(function (child) {
        child.state = 'contained'
        child.parent = this
        child._parent = null
        containChildren(child)
      }, node)
    }

    function expand(node) {
      node.state = 'expanded'
      node.children.forEach(function (child) {
        child.state = 'collapsed'
        child._parent = this
        child.parent = null
        containChildren(child)
      }, node)
    }

    function collapse(node) {
      node.state = 'collapsed'
      containChildren(node)
    }

    function restoreLinksAndNodes() {
      link
        .style('stroke', LINK_COLOR)
        .style('marker-end', function () { return 'url(#arrowHead)' })
        .transition()
        .duration(TRANSITION_DURATION)
        .style('opacity', OPACITY.LINK_DEFAULT)

      node
        .selectAll('rect')
        .style('fill', function (d) {
          d.color = colorScale(d.type.replace(/ .*/, ''))
          return d.color
        })
        .style('stroke', function (d) {
          return d3.rgb(colorScale(d.type.replace(/ .*/, ''))).darker(0.1)
        })
        .style('fill-opacity', OPACITY.NODE_DEFAULT)

      node
        .filter(function (n) { return n.state === 'collapsed' })
        .transition()
        .duration(TRANSITION_DURATION)
        .style('opacity', OPACITY.NODE_DEFAULT)
    }

    function showHideChildren(node) {
      disableUserInteractions(2 * TRANSITION_DURATION)
      hideTooltip()
      if (node.state === 'collapsed') { expand(node) }
      else { collapse(node) }
      biHiSankey.relayout()
      update()
      link.attr('d', path)
      restoreLinksAndNodes()
    }

    function getConnectedLinks(current) {
      const rightLinks = []
      const leftLinks = []

      function getRightLinks(element) {
        if (element.target.rightLinks.length > 0) {
          element.target.rightLinks.forEach(function(rightLink) {
            rightLinks.push(rightLink)
            getRightLinks(rightLink)
          })
        }
      }

      function getLeftLinks(element) {
        if (element.source.leftLinks.length > 0) {
          element.source.leftLinks.forEach(function(leftLink) {
            leftLinks.push(leftLink)
            getLeftLinks(leftLink)
          })
        }
      }

      // eslint-disable-next-line
      link.filter(function (d) {
        if (d.source === current) {
          rightLinks.push(d)
          getRightLinks(d)
        }
        if (d.target === current) {
          leftLinks.push(d)
          getLeftLinks(d)
        }
      })

      return {
        connectedLinks: [...rightLinks, ...leftLinks],
        rightLinks,
        leftLinks
      }
    }

    function getConnectedNodes(current) {
      const rightNodes = []
      const leftNodes = []
      let currentNode = {}

      function getRightNodes(element) {
        if (element.rightLinks.length > 0) {
          element.rightLinks.forEach(function(rightLink) {
            rightNodes.push(rightLink.target)
            getRightNodes(rightLink.target)
          })
        }
      }

      function getLeftNodes(element) {
        if (element.leftLinks.length > 0) {
          element.leftLinks.forEach(function(leftLink) {
            leftNodes.push(leftLink.source)
            getLeftNodes(leftLink.source)
          })
        }
      }

      // eslint-disable-next-line
      node.filter(function (d) {
        if (d.name === current.name) {
          currentNode = d
          getRightNodes(d)
          getLeftNodes(d)
        }
      })

      return {
        connectedNodes: [currentNode, ...rightNodes, ...leftNodes],
        rightNodes,
        leftNodes
      }
    }

    function highlightConnected(g) {
      const { rightLinks, leftLinks } = getConnectedLinks(g)
      link
        .filter(function (d) { return rightLinks.indexOf(d) >= 0 })
        .style('marker-end', function () { return 'url(#arrowHeadInflow)' })
        .style('stroke', OUTFLOW_COLOR)
        .style('opacity', OPACITY.LINK_DEFAULT)

      link
        .filter(function (d) { return leftLinks.indexOf(d) >= 0 })
        .style('marker-end', function () { return 'url(#arrowHeadOutlow)' })
        .style('stroke', INFLOW_COLOR)
        .style('opacity', OPACITY.LINK_DEFAULT)
    }

    function fadeUnconnected(g) {
      const { connectedLinks } = getConnectedLinks(g)
      const { connectedNodes } = getConnectedNodes(g)

      link
        .filter(function (d) { return connectedLinks.indexOf(d) < 0 })
        .style('marker-end', function () { return 'url(#arrowHead)' })
        .transition()
        .duration(TRANSITION_DURATION)
        .style('opacity', OPACITY.LINK_FADED)

      node
        .filter(function (d) { return connectedNodes.indexOf(d) < 0 })
        .transition()
        .duration(TRANSITION_DURATION)
        .style('opacity', OPACITY.NODE_FADED)
    }

    link = svg
      .select('#links')
      .selectAll('path.link')
      .data(biHiSankey.visibleLinks(), function (d) { return d.id })

    link
      .transition()
      .duration(TRANSITION_DURATION)
      .style('stroke-WIDTH', function (d) { return Math.max(1, d.thickness) })
      .attr('d', path)
      .style('opacity', OPACITY.LINK_DEFAULT)

    link
      .exit()
      .remove()

    linkEnter = link
      .enter()
      .append('path')
      .attr('class', 'link')
      .style('fill', 'none')

    linkEnter.on('mouseenter', function (d) {
      if (!isTransitioning) {
        showTooltip(this)
          .select('.value')
          .text(function () {
            if (d.direction > 0) {
              return d.source.name + ' → ' + d.target.name + '\n' + formatNumber(d.value)
            }
            return d.target.name + ' ← ' + d.source.name + '\n' + formatNumber(d.value)
          })

        d3.select(this)
          .style('stroke', LINK_COLOR)
          .transition()
          .duration(TRANSITION_DURATION / 2)
          .style('opacity', OPACITY.LINK_HIGHLIGHT)
      }
    })

    linkEnter.on('mouseleave', function () {
      if (!isTransitioning) {
        hideTooltip()

        d3
          .select(this)
          .style('stroke', LINK_COLOR)
          .transition()
          .duration(TRANSITION_DURATION / 2)
          .style('opacity', OPACITY.LINK_DEFAULT)
      }
    })

    linkEnter
      .sort(function (a, b) { return b.thickness - a.thickness })
      .classed('leftToRight', function (d) {
        return d.direction > 0
      })
      .classed('rightToLeft', function (d) {
        return d.direction < 0
      })
      .style('marker-end', function () {
        return 'url(#arrowHead)'
      })
      .style('stroke', LINK_COLOR)
      .style('opacity', 0)
      .transition()
      .delay(TRANSITION_DURATION)
      .duration(TRANSITION_DURATION)
      .attr('d', path)
      .style('stroke-WIDTH', function (d) { return Math.max(1, d.thickness) })
      .style('opacity', OPACITY.LINK_DEFAULT)

    node = svg
      .select('#nodes')
      .selectAll('.node')
      .data(biHiSankey.collapsedNodes(), function (d) { return d.id })

    node
      .transition()
      .duration(TRANSITION_DURATION)
      .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' })
      .style('opacity', OPACITY.NODE_DEFAULT)
      .select('rect')
      .style('fill', function (d) {
        d.color = colorScale(d.type.replace(/ .*/, ''))
        return d.color
      })
      .style('stroke', function (d) { return d3.rgb(colorScale(d.type.replace(/ .*/, ''))).darker(0.1) })
      .style('stroke-WIDTH', '1px')
      .attr('height', function (d) { return d.height })
      .attr('width', biHiSankey.nodeWidth())

    node
      .exit()
      .transition()
      .duration(TRANSITION_DURATION)
      .attr('transform', function (d) {
        let collapsedAncestor, endX, endY
        collapsedAncestor = d.ancestors.filter(function (a) {
          return a.state === 'collapsed'
        })[0]
        endX = collapsedAncestor ? collapsedAncestor.x : d.x
        endY = collapsedAncestor ? collapsedAncestor.y : d.y
        return 'translate(' + endX + ',' + endY + ')'
      })
      .remove()

    nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')

    nodeEnter
      .attr('transform', function (d) {
        const startX = d._parent ? d._parent.x : d.x
        const startY = d._parent ? d._parent.y : d.y
        return 'translate(' + startX + ',' + startY + ')'
      })
      .style('opacity', 1e-6)
      .transition()
      .duration(TRANSITION_DURATION)
      .style('opacity', OPACITY.NODE_DEFAULT)
      .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' })

    nodeEnter
      .append('text')

    nodeEnter
      .append('rect')
      .style('fill', function (d) {
        d.color = colorScale(d.type.replace(/ .*/, ''))
        return d.color
      })
      .style('stroke', function (d) {
        return d3.rgb(colorScale(d.type.replace(/ .*/, ''))).darker(0.1)
      })
      .style('stroke-WIDTH', '1px')
      .attr('height', function (d) { return d.height })
      .attr('width', biHiSankey.nodeWidth())

    node
      .on('mouseenter', function (g) {
        if (!isTransitioning) {
          restoreLinksAndNodes()
          highlightConnected(g)
          fadeUnconnected(g)

          d3
            .select(this)
            .select('rect')
            .style('fill', function (d) {
              d.color = d.netFlow > 0 ? INFLOW_COLOR : OUTFLOW_COLOR
              return d.color
            })
            .style('stroke', function (d) {
              return d3
                .rgb(d.color)
                .darker(0.1)
            })
            .style('fill-opacity', OPACITY.LINK_DEFAULT)

          tooltip
            .style('left', g.x + MARGIN.LEFT + 'px')
            .style('top', g.y + g.height + MARGIN.TOP + 15 + 'px')
            .transition()
            .duration(TRANSITION_DURATION)
            .style('opacity', 1)
            .select('.value')
            .text(function () {
              const additionalInstructions = g.children.length ? '\n(Double click to expand)' : ''
              return g.name + '\nNet flow: ' + formatFlow(g.netFlow) + additionalInstructions
            })
        }
      })

    node
      .on('mouseleave', function () {
        if (!isTransitioning) {
          hideTooltip()
          restoreLinksAndNodes()
        }
      })

    node
      .filter(function (d) { return d.children.length })
      .on('dblclick', showHideChildren)

    // allow nodes to be dragged to new positions
    // node
    //   .call(
    //     d3
    //       .behavior
    //       .drag()
    //       .origin(function (d) { return d })
    //       .on('dragstart', function () { this.parentNode.appendChild(this) })
    //       .on('drag', dragmove)
    //   )

    // add in the text for the nodes
    node
      .filter(function (d) { return d.value !== 0 })
      .select('text')
      .attr('x', -6)
      .attr('y', function (d) { return d.height / 2 })
      .attr('dy', '.35em')
      .attr('text-anchor', 'end')
      .attr('transform', null)
      .text(function (d) { return d.name })
      .filter(function (d) { return d.x < WIDTH / 2 })
      .attr('x', 6 + biHiSankey.nodeWidth())
      .attr('text-anchor', 'start')

    collapser = svg
      .select('#collapsers')
      .selectAll('.collapser')
      .data(biHiSankey.expandedNodes(), function (d) { return d.id })

    collapserEnter = collapser
      .enter()
      .append('g')
      .attr('class', 'collapser')

    collapserEnter
      .append('circle')
      .attr('r', COLLAPSER.RADIUS)
      .style('fill', function (d) {
        d.color = colorScale(d.type.replace(/ .*/, ''))
        return d.color
      })

    collapserEnter
      .style('opacity', OPACITY.NODE_DEFAULT)
      .attr('transform', function (d) {
        return 'translate(' + (d.x + d.width / 2) + ',' + (d.y + COLLAPSER.RADIUS) + ')'
      })

    collapserEnter
      .on('dblclick', showHideChildren)

    collapser
      .select('circle')
      .attr('r', COLLAPSER.RADIUS)

    collapser
      .transition()
      .delay(TRANSITION_DURATION)
      .duration(TRANSITION_DURATION)
      .attr('transform', function (d, i) {
        return 'translate('
          + (COLLAPSER.RADIUS + i * 2 * (COLLAPSER.RADIUS + COLLAPSER.SPACING))
          + ','
          + (-COLLAPSER.RADIUS - OUTER_MARGIN)
          + ')'
      })

    collapser
      .on('mouseenter', function (g) {
        if (!isTransitioning) {
          showTooltip(this)
            .select('.value')
            .text(function () {
              return g.name + '\n(Double click to collapse)'
            })

          const highlightColor = highlightColorScale(g.type.replace(/ .*/, ''))

          d3
            .select(this)
            .style('opacity', OPACITY.NODE_HIGHLIGHT)
            .select('circle')
            .style('fill', highlightColor)

          node
            .filter(function (d) {
              return d.ancestors.indexOf(g) >= 0
            })
            .style('opacity', OPACITY.NODE_HIGHLIGHT)
            .select('rect')
            .style('fill', highlightColor)
        }
      })

    collapser
      .on('mouseleave', function (g) {
        if (!isTransitioning) {
          hideTooltip()

          d3
            .select(this)
            .style('opacity', OPACITY.NODE_DEFAULT)
            .select('circle')
            .style('fill', function (d) { return d.color })

          node
            .filter(function (d) {
              return d.ancestors.indexOf(g) >= 0
            })
            .style('opacity', OPACITY.NODE_DEFAULT)
            .select('rect')
            .style('fill', function (d) { return d.color })
        }
      })

    collapser
      .exit()
      .remove()
  }

  biHiSankey
    .nodes(data.nodes)
    .links(data.links)
    .initializeNodes(function (node) {
      node.state = node.parent ? 'contained' : 'collapsed'
    })
    .layout(LAYOUT_INTERATIONS)

  disableUserInteractions(2 * TRANSITION_DURATION)

  update()
}
