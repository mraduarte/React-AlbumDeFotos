import React from 'react'

function FotoAmpliada({foto}) {
  return (
    <div className="foto-ampliada-backdrop">
        <div className="foto-ampliada-container">
            <img src={foto.urls.regular} alt={foto.alt_description} />
        </div>
    </div>
  )
}

export default FotoAmpliada