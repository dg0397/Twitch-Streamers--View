import React from 'react'
import logoFallback from './fallback-profile_image.png'
import './styles.css'

export default function Streamer({logo,name,url,status,partner}) {
    return (
        <div className = 'Streamer' >
            <div className = 'Container-Img' >
                <img src = {logo} alt = "channel logo" onError = {(e) => console.log(e.target.src = logoFallback) } />
            </div>
            <h3><a href = {url} target = '_blanck'>{name}</a></h3>
            <p>{partner ? status : "Ofline" }</p>
        </div>
    )
}
