import React from 'react'

export default function Players({ src }) {
  return (
    <div  style={{ height: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        src={src}
        title="Hook"
        frameborder="0"
        bordeRadius='32px'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}
