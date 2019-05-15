import React from 'react'
import RootNode from './nodes/components/RootNode'



export default function BlockeditorBoard({ node }) {
  return (
    <div className="editor relative">
      <RootNode node={node}/>
    </div>
  )
}
