import React from 'react'
import { placeholderImg } from '../../utils/constants'


function Image({ settings }) {
  return <img
    src={settings.src || placeholderImg}
    alt={settings.alt}
    width="100%"
    className="editor-image"
  />
}

export default function ImageNode({ settings, id }) {
  const width = settings.fullWidth ? '100%' : settings.width
  return (
    <table
      width={width}
      align={settings.align}
      style={{
        maxWidth: '100%',
      }}
    >
      <tbody>
        <tr>
          <td>
            {
              settings.url ?
              <a href={settings.url} target="_blank">
                <Image settings={settings} />
              </a> :
              <Image settings={settings} />
            }
          </td>
        </tr>
      </tbody>
    </table>
  )
}
