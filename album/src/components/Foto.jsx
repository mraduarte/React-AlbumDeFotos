import React from 'react'

function Foto({dados}) {
  return (
    <div className="foto">
        <img src={dados.urls.small} alt={dados.alt_description} />
    </div>
  )
}

export default Foto