import React, {useState} from 'react'

const Context = React.createContext({});

export function StreamersContextProvider({children}){
    const [usersStatus,setUsersStatus] = useState([])
    return (
        <Context.Provider value = {{usersStatus,setUsersStatus}} >
            {children}
        </Context.Provider>
    )
}

export default Context
