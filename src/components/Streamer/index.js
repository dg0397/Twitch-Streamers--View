import React from 'react'
import logoFallback from './fallback-profile_image.png'
import {StreamerComponent,StreamerContainerImg,StreamerImg,Title,Link,Status} from './styles'
import './styles.css'

export default function Streamer({logo,name,url,status,partner}) {
    return (
        <StreamerComponent status = {partner}>
            <StreamerContainerImg>
                <StreamerImg src = {logo} alt = "channel logo" onError = {(e) => console.log(e.target.src = logoFallback) } />
            </StreamerContainerImg>
            <Title><Link href = {url} target = '_blanck'>{name}</Link></Title>
            <Status>{partner ? status : "Ofline" }</Status>
        </StreamerComponent>
    )
}
