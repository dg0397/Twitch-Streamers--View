import useStreamers from './useStreamers';


export default function useGlobalStreamers({typeStatus}){
    const {channelsStatus,loading} = useStreamers();

    const dataChannels = channelsStatus.filter( channel => {
                            if(typeStatus === "online"){
                                return channel.partner === true
                            }else if(typeStatus === "ofline"){
                                return channel.partner === false
                            }else{
                                return true
                            }
                        })
                        
    return { dataChannels,loading }
}