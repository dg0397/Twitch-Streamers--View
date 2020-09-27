import React, {useState} from 'react'

const Context = React.createContext({});

export function StreamersContextProvider({children}){
    const [channelsStatus,setChannelsStatus] = useState([])
    return (
        <Context.Provider value = {{channelsStatus,setChannelsStatus}} >
            {children}
        </Context.Provider>
    )
}

export default Context
