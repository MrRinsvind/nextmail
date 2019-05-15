import React from 'react'

import Element from '../../Element'


export default function CellNode({ uuid, nodes = [], dragType = 'DEFAULT', isMain }) {
  let className = (!nodes.length) ? 'empty': ''
  if(!isMain) {
    className += ' editor-cell'
  } else {
    className += ' root-cell'
  }
  return (
    <td
      className={className}
      id={uuid}
      style={{
        verticalAlign: isMain ? 'top' : 'middle',
        padding: isMain ? '30px 0' : '0',
      }}
    >
      <table width="100%">
        <tbody>
        <tr>
          <td>
            {nodes.map((child, index) => <Element key={child.uuid} node={child}/>)}
          </td>
        </tr>
        </tbody>
      </table>
    </td>
  )
}
