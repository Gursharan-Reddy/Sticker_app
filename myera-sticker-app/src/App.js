import React, { useState } from 'react'
import Canvas from './components/Canvas'
import StickerButton from './components/StickerButton'
import './App.css'

function App() {
  const [stickers, setStickers] = useState([])

  const handleAddSticker = (src) => {
    setStickers([...stickers, { src, x: 50, y: 50 }])
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <StickerButton
          imageSrc={require('./assets/stickers/luffy.jpg')}
          onClick={() => handleAddSticker(require('./assets/stickers/luffy.jpg'))}
        />
        <StickerButton
          imageSrc={require('./assets/stickers/anime.jpg')}
          onClick={() => handleAddSticker(require('./assets/stickers/anime.jpg'))}
        />
        <StickerButton
          imageSrc={require('./assets/stickers/THANK_YOU_STICKER.png')}
          onClick={() => handleAddSticker(require('./assets/stickers/THANK_YOU_STICKER.png'))}
        />
      </div>
      <Canvas stickers={stickers} setStickers={setStickers} />
    </div>
  )
}

export default App
