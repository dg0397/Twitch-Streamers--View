import useStreamers from 'hooks/useStreamers'
import React from 'react'
import StreamerList from 'components/StreamerList'
import Loader from 'components/ContentLoader/Loader';

function Home() {
    const {channelsStatus,loading} = useStreamers();
    console.log(channelsStatus,loading)
    return (
        <>
            {
                loading ? <Loader/> :
                <StreamerList channels = {channelsStatus}/>
            }
        </>
    )
}

export default React.memo(Home)
