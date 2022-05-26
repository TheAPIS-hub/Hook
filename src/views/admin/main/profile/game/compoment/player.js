import React from 'react'
import styles from './player.css'

export default function Players({ src, ht, wd, divht }) {
  return (
    <div className={styles.videobox} style={{ height: '100%' }}>
      <iframe
        width={wd}
        height={ht}
        src={src}
        title="Hook"
        frameborder="0"
        bordeRadius="32px"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}
