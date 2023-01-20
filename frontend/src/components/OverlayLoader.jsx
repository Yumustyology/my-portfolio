import React from 'react'
import "../styles/overlayLoaderBox.css"
import {ScaleLoader} from "react-spinners"
function OverlayLoader() {
  return (
    <div>
        <div className='overlay-loader-box'>
<ScaleLoader width={8} height={49} color="#696767"/>
        </div>
    </div>
  )
}

export default OverlayLoader