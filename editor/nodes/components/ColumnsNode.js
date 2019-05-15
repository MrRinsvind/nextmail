import React from 'react'
import range from 'lodash/range'

import Element from '../../Element'


export default function ColumnsNode({ nodes, count = 3, settings, onDelete, onDuplicate, globalSettings }) {
  const { backgroundColor, align, spacing, url } = settings
  let urlData = `no-repeat ${backgroundColor} center`
  if(url) {
    urlData += ` url(${url}) `
  }
  return (
    <>
      <table width="100%" style={{ background: align === 'full width' && urlData }} className="editor-column">
        <tbody>
          <tr>
            <td>
              <table
                width={align === 'boxed' ? '620px' : '600px'}
                align="center"
                style={{
                  tableLayout: 'fixed',
                  background: align === 'content width' && urlData,
                  borderSpacing: align === 'boxed' ? '10px' : '0px',
                  borderCollapse: align === 'boxed' ? 'separate' : 'collapse',
                }}>
                <tbody>
                  <tr>
                    {range(count).map(index => (
                      <td className="editor-main-cell" style={{ padding: 0 }} key={index}>
                        <table
                          width="100%"
                          style={{
                            padding: 0,
                            background: align === 'boxed' && urlData
                          }}
                        >
                          <tbody>
                            <tr>
                              <Element node={nodes[index]} onDelete={onDelete} onDuplicate={onDuplicate} globalSettings={globalSettings} columnSettings={settings} isDraggable={false} dragType="ROOT" />
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      {
        !!spacing &&
        <table>
          <tbody>
            <tr>
              <td height={spacing} style={{ height: `${spacing}px` }}></td>
            </tr>
          </tbody>
        </table>
      }
    </>
  )
}
