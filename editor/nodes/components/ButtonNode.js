import React from 'react'


export default function ButtonNode({ settings: { url, text, width, ...style }, id }) {
  return (
    <table align={style.align} width={`${width}px`} id={id}>
      <tbody>
        <tr>
          <td>
            <a
              href={url || '#'}
              style={{
                ...style,
                lineHeight: `${style.height}px`,
                height: `${style.height}px`,
                borderRadius: `${style.borderRadius}px`,
                fontSize: `${style.fontSize}px`,
                display: 'block',
                width: '100%',
                textAlign: 'center',
              }}
            >
              {text}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
