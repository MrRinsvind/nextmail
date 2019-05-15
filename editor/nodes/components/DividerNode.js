import React from 'react'


export default function DividerNode({ settings, globalSettings }) {
  return (
    <div style={{ padding: '10px 0' }}>
      <div style={{borderTop: `${settings.height || globalSettings.dividerHeight}px ${settings.style || globalSettings.dividerStyle } ${settings.color || globalSettings.dividerColor}` }} />
    </div>
  )
}
