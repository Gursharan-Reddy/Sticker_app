import React, { useRef } from 'react'
import { Stage, Layer, Image as KonvaImage } from 'react-konva'
import useImage from 'use-image'

const DraggableSticker = ({ src, x, y, onDoubleClick }) => {
  const [image] = useImage(src)
  return (
    <KonvaImage
      image={image}
      x={x}
      y={y}
      draggable
      width={100}
      height={100}
      onDblClick={onDoubleClick}
    />
  )
}

const Canvas = ({ stickers, setStickers }) => {
  const stageRef = useRef()

  const handleDownload = () => {
    const uri = stageRef.current.toDataURL()
    const link = document.createElement('a')
    link.download = 'canvas.png'
    link.href = uri
    link.click()
  }

  const handleDelete = (index) => {
    const updated = [...stickers]
    updated.splice(index, 1)
    setStickers(updated)
  }

  return (
    <div style={{ margin: '20px' }}>
      <Stage width={window.innerWidth} height={500} ref={stageRef} style={{ border: '1px solid #ccc' }}>
        <Layer>
          {stickers.map((sticker, index) => (
            <DraggableSticker
              key={index}
              src={sticker.src}
              x={sticker.x}
              y={sticker.y}
              onDoubleClick={() => handleDelete(index)}
            />
          ))}
        </Layer>
      </Stage>
      <button onClick={handleDownload} style={{ marginTop: '10px', padding: '8px 16px' }}>
        Download Canvas
      </button>
    </div>
  )
}

export default Canvas
