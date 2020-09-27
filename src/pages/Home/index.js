import useStreamers from 'hooks/useStreamers'
import React from 'react'
import { Link } from 'wouter';
import StreamerList from 'components/StreamerList'

function Home() {
    const {channelsStatus,loading} = useStreamers();
    console.log(channelsStatus,loading)
    return (
        <>
            <h1>Hello</h1>
            <Link href = "/online">Online</Link>
            <Link href = "/ofline">Ofline</Link>
            <>
                {
                    loading ? <p>Loading...</p> :
                    <StreamerList channels = {channelsStatus}/>
                }
            </>
        </>
    )
}

export default React.memo(Home)
