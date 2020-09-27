import useGlobalStreamers from 'hooks/useGlobalContext'
import React from 'react'

export default function OnlinePage() {
    const channels = useGlobalStreamers({typeStatus : 'ofline'})
    console.log(channels)
    return (
        <h1>
            Ofline
        </h1>
    )
}
