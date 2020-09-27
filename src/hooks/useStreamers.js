import {useState,useEffect, useContext} from 'react'
import getStreamers from 'services/getStreamers'
import StreamersContext from 'context/StreamerContext'

const USERS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


export default function useStreamers(){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState([])

    useEffect(()=>{
        const interval = setTimeout(()=> {
            getStreamers(setData,setLoading,{channels : USERS})
        },5000)
        return ()=> clearTimeout(interval)
    },[setData])
    return {data,loading}
}