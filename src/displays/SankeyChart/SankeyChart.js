import React, { Component } from 'react'
import drawSankeyChart from './drawSankey'
import './SankeyChart.css'

const TYPES = ['INITIALIZATION', 'ACTION', 'CONFIRMATION', 'OUTCOME', 'COMPLETED']

const NODES = [
  {'type':'INITIALIZATION','id':'all','parent':null,'name':'Open All Applicants path'},

  {'type':'ACTION','id':'aa','parent':null,'name':'archiving an active list'},
  {'type':'ACTION','id':'ao','parent':null,'name':'archiving other lists'},
  {'type':'ACTION','id':'da','parent':null,'name':'deleting an active list'},
  {'type':'ACTION','id':'do','parent':null,'name':'deleting other lists'},

  {'type':'CONFIRMATION','id':'action1','parent':null,'name':'do something'},
  {'type':'CONFIRMATION','id':'action2','parent':null,'name':'do something else'},

  {'type':'OUTCOME','id':'outcome1','parent':null,'name':'something happen'},
  {'type':'OUTCOME','id':'outcome2','parent':null,'name':'something else happen'},
  {'type':'OUTCOME','id':'outcome7','parent':null,'name':'another thing happen'},
  {'type':'OUTCOME','id':'outcome8','parent':null,'name':'yet another thing happen'},

  {'type':'COMPLETED','id':'outcome3','parent':null,'name':'then outcome 1 appears'},
  {'type':'COMPLETED','id':'outcome4','parent':null,'name':'then outcome 2 appears'},
  {'type':'COMPLETED','id':'outcome5','parent':null,'name':'then outcome 3 appears'},
  {'type':'COMPLETED','id':'outcome6','parent':null,'name':'then outcome 4 appears'},
]

const LINKS = [
  {'source':'all', 'target':'aa', 'value': 1},
  {'source':'all', 'target':'ao', 'value': 1},
  {'source':'all', 'target':'da', 'value': 1},
  {'source':'all', 'target':'do', 'value': 1},

  {'source':'aa', 'target':'action1', 'value': 1},
  {'source':'ao', 'target':'action1', 'value': 1},
  {'source':'da', 'target':'action1', 'value': 1},
  {'source':'do', 'target':'action1', 'value': 1},

  {'source':'aa', 'target':'action2', 'value': 1},
  {'source':'ao', 'target':'action2', 'value': 1},
  {'source':'da', 'target':'action2', 'value': 1},
  {'source':'do', 'target':'action2', 'value': 1},

  {'source':'action1', 'target':'outcome1', 'value': 1},
  {'source':'action2', 'target':'outcome1', 'value': 1},
  {'source':'action1', 'target':'outcome2', 'value': 1},
  {'source':'action2', 'target':'outcome2', 'value': 1},
  {'source':'action1', 'target':'outcome7', 'value': 1},
  {'source':'action1', 'target':'outcome8', 'value': 1},

  {'source':'outcome1', 'target':'outcome3', 'value': 1},
  {'source':'outcome1', 'target':'outcome4', 'value': 1},
  {'source':'outcome1', 'target':'outcome5', 'value': 1},
  {'source':'outcome2', 'target':'outcome4', 'value': 1},
  {'source':'outcome2', 'target':'outcome5', 'value': 1},
  {'source':'outcome2', 'target':'outcome6', 'value': 1},
]

class SankeyChart extends Component {
  static defaultProps = {}

  componentDidMount() {
    drawSankeyChart(
      'chart',
      {
        nodes: NODES,
        links: LINKS
      },
      TYPES
    )
  }

  render() {
    return (
      <div className='SankeyChart' id='chart'></div>
    )
  }
}

export default SankeyChart
