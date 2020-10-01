import React from 'react'
import { Helmet } from 'react-helmet';
import Loader from 'components/ContentLoader/Loader';
import StreamerList from 'components/StreamerList'
import useGlobalStreamers from 'hooks/useGlobalContext'


export default function OflinePage() {
    const { dataChannels,loading } = useGlobalStreamers({typeStatus : 'ofline'})
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
                            {`${dataChannels.length} Ofline Users`} | Twitch Streamers
                        </title>
                    </Helmet>
                    <StreamerList channels = {dataChannels}/>
                </>
            }
        </>
    )
}
