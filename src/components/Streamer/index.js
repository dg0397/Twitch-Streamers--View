import React from 'react'
import logoFallback from './fallback-profile_image.png'
import './styles.css'

export default function Streamer({logo,name}) {
    return (
        <div className = 'Streamer' >
            <div className = 'Container-Img' >
                <img src = {logo} alt = "channel logo" onError = {(e) => console.log(e.target.src = logoFallback) } />
            </div>
            <h3>{name}</h3>
        </div>
    )
}
