import useStreamers from 'hooks/useStreamers'
import React from 'react'
//import StreamerList from 'components/StreamerList'

function Home() {
    const {data,loading} = useStreamers();
    console.log(data,loading)
    return (
        <h1>Hello</h1>
    )
}

export default React.memo(Home)
