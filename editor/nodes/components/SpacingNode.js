import React from 'react'


export default function SpacingNode({ settings }) {
  return (
    <table width="100%">
      <tbody>
        <tr>
          <td height={settings.height}/>
        </tr>
      </tbody>
    </table>
  )
}
