import React from 'react'

import CellNode from './CellNode'
import { fontsEmbed } from '../../utils/constants'


export default function RootNode({ node, ...props }) {
  const {
    backgroundColor,
    fontSize,
    lineHeight,
    fontColor,
    linkColor,
    fontFamily,
    headingFontSize,
    headingLineHeight,
    headingFontColor,
    headingFontWeight,
    headingFontFamily,
    ...globalSettings } = node.settings
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        table p {
          font-size: ${fontSize}px;
          line-height: ${lineHeight};
          color: ${fontColor};
          font-family: ${fontFamily};
        }

        table a, table a:link {
          color: ${linkColor};
        }

        table h1,
        table h2,
        table h3,
        table h4,
        table h5 {
          line-height: ${headingLineHeight};
          color: ${headingFontColor};
          font-family: ${headingFontFamily};
          font-weight: ${headingFontWeight};
        }

        table h1 {
          font-size: ${headingFontSize}px;
        }

        table h2 {
          font-size: ${headingFontSize - 3}px;
        }

        table h3 {
          font-size: ${headingFontSize - 6}px;
        }
      `}} />
      {fontFamily && <link href={`https://fonts.googleapis.com/css?family=${fontsEmbed[fontFamily]}`} rel="stylesheet"></link>}
      {headingFontFamily && <link href={`https://fonts.googleapis.com/css?family=${fontsEmbed[headingFontFamily]}`} rel="stylesheet"></link>}
      <table width="100%" style={{ tableLayout: 'fixed', backgroundColor, height: '100%' }}>
        <tbody>
          <tr>
            <CellNode {...props} {...node} globalSettings={globalSettings} dragType="ROOT" isMain={true} />
          </tr>
        </tbody>
      </table>
    </>
  )
}
