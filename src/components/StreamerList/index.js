import React from 'react'
import Streamer from 'components/Streamer'

export default function StreamerList({channels}){
    return (
        <div className = 'Channels-List'>
            {
                channels.map(({logo,display_name},index) => {
                    return (
                        <Streamer  
                        key = {index}
                        logo = {logo}
                        name = {display_name} />
                    )
                })
            }
        </div>
    )
}
