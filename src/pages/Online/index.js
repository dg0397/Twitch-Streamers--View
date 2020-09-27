import useGlobalStreamers from 'hooks/useGlobalContext'
import React from 'react'

export default function OnlinePage() {
    const channels = useGlobalStreamers({typeStatus : 'online'})
    console.log(channels)
    return (
        <h1>
            Online
        </h1>
    )
}
