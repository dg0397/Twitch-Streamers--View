import {useContext} from 'react';
import StreamersContext from 'context/StreamerContext'


export default function useGlobalStreamers({typeStatus}){
    const {channelsStatus} = useContext(StreamersContext) ;
    console.log(channelsStatus);
    return channelsStatus.filter( channel => {
        if(typeStatus === "online"){
            return channel.partner === true
        }else{
            return channel.partner === false
        }
    })
}