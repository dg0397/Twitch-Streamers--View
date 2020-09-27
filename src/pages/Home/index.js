import useStreamers from 'hooks/useStreamers'
import React from 'react'
import StreamerList from 'components/StreamerList'

function Home() {
    const {channelsStatus,loading} = useStreamers();
    console.log(channelsStatus,loading)
    return (
        <>
            {
                loading ? <p>Loading...</p> :
                <StreamerList channels = {channelsStatus}/>
            }
        </>
    )
}

export default React.memo(Home)
