import React, {useState,useEffect, useContext} from 'react'
import getStreamers from 'services/getStreamers'
import StreamersContext from 'context/StreamerContext'

export default function useStreamers(){
    const {usersStatus,setUsersStatus} = useContext(StreamersContext)
    const [loading,setLoading] = useState([])

    useEffect(()=>{
        const interval = setTimeout(()=> {
            
        },5000)
        return ()=> clearTimeout(interval)
    })

}