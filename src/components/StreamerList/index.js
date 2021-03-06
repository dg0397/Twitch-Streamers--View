import React from 'react'
import Streamer from 'components/Streamer'

export default function StreamerList({channels}){
    return (
        <div className = 'Channels-List'>
            {
                channels.map(({logo,display_name,url,status,partner},index) => {
                    return (
                        <Streamer  
                        key = {index}
                        logo = {logo}
                        url = {url}
                        name = {display_name}
                        status = {status}
                        partner = {partner} />
                    )
                })
            }
        </div>
    )
}
