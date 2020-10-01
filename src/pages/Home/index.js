import React from 'react'
import StreamerList from 'components/StreamerList'
import Loader from 'components/ContentLoader/Loader';
import { Helmet } from 'react-helmet';
import useGlobalStreamers from 'hooks/useGlobalContext'



function Home() {
    const { dataChannels,loading } = useGlobalStreamers({typeStatus : 'home'})

    //console.log(dataChannels,loading)
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
                            Home | Twitch Streamers
                        </title>
                        <meta
                            name="description"
                            content="witch Streamers Viewer"
                        />
                    </Helmet>
                    <StreamerList channels = {dataChannels}/>
                </>
            }
        </>
    )
}

export default React.memo(Home)
