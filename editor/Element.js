import React, { Component } from 'react'

import nodesMap from './nodes'


class Element extends Component {

  render() {
    const { node, isDraggable = true, dragType = 'DEFAULT', onDelete, onDuplicate, globalSettings } = this.props
    const NodeComponent = nodesMap[node.kind].component
    const nodeSettings = nodesMap[node.kind].settings

    if(!isDraggable) {
      return (
        <NodeComponent {...node} onDelete={onDelete} onDuplicate={onDuplicate} globalSettings={globalSettings} />
      )
    }

    return (
            <NodeComponent {...nodeSettings} {...node}/>
    )
  }
}

export default Element
