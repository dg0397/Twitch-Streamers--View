import React from 'react'
import Loader from 'components/ContentLoader/Loader';
import { Helmet } from 'react-helmet';
import StreamerList from 'components/StreamerList'
import useGlobalStreamers from 'hooks/useGlobalContext'


export default function OnlinePage() {
    const { dataChannels,loading } = useGlobalStreamers({typeStatus : 'online'})
    //console.log(dataChannels)
    return (
        <>
            {
                loading ? 
                <>
                    <Helmet>
                        <title>
                            Loading...
                        </title>
                    </Helmet>
                    <Loader/>
                </>:
                <>
                    <Helmet>
                        <title>
                            {`${dataChannels.length} Online Users`} | Twitch Streamers
                        </title>
                    </Helmet>
                    <StreamerList channels = {dataChannels}/>
                </>
            }
        </>
    )
}
