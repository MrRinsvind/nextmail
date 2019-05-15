import React from 'react'

import { imagesSocial } from '../../utils/constants'


export default function ShareNode({ settings: { align, social } }) {
  return (
    <table align="center" style={{ minHeight: 46, width:"100%"}}>
      <tbody>
      <tr>
        <td align={align || 'center'}>
          {
            social && social.map(i =>
              <a href={i.url} style={{ padding: '5px', display: 'inline-block' }} key={i.social}>
                <img src={imagesSocial[i.social]} width="40px" />
              </a>
            )
          }
        </td>
      </tr>
      </tbody>
    </table>
  )
}
