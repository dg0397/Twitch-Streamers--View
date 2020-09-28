import {useState,useEffect, useContext} from 'react'
import getStreamers from 'services/getStreamers'
import StreamersContext from 'context/StreamerContext'

const USERS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


export default function useStreamers(){
    const {channelsStatus,setChannelsStatus} = useContext(StreamersContext)
    const [loading,setLoading] = useState([])

    useEffect(()=>{
        const interval = setTimeout(()=> {
            getStreamers(setChannelsStatus,setLoading,{channels : USERS})
        },5000)
        return ()=> clearTimeout(interval)
    },[setChannelsStatus])
    return {channelsStatus,loading}
}