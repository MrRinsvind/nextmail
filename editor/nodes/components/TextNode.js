import React from 'react'

export default function TextNode({ settings }) {
  return <div dangerouslySetInnerHTML={{ __html: settings.text }}></div>
}
