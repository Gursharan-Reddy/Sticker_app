import React from 'react'
import './StickerButton.css'

const StickerButton = ({ imageSrc, onClick }) => {
  return (
    <button className="sticker-button" onClick={onClick}>
      <img src={imageSrc} alt="sticker" className="sticker-icon" />
    </button>
  )
}

export default StickerButton
