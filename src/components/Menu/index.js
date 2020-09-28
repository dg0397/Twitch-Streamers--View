import useStreamers from 'hooks/useStreamers';
import React, { useState } from 'react'
import { useLocation } from 'wouter';
import './styles.css'

export default function Menu() {
    const [location, setLocation] = useLocation();
    const [menuActive,setMenuActive] =  useState(false)

    const handleCurrentPage = (e) => {
        if(location === e.target.dataset.value) return;
        setLocation(e.target.dataset.value)
        console.log(e.target.dataset.value)
        handleClick()
    }

    const handleClick = () => {
        setMenuActive( preState => preState === true ? false : true)
    }

    return (
        <div className = 'Container-Menu' >
            <div className = 'Menu'>
                <p>
                    {
                        location === '/'? 
                        'Home' : 
                        location === '/online'?
                        'Online':
                        'Ofline'
                    }
                </p>
                <label onClick = {handleClick} >⯆</label>
            </div>
            <ul className = {menuActive && "active"} >
                <li onClick = {handleCurrentPage} data-value = '/'>Home</li>
                <li onClick = {handleCurrentPage} data-value = '/online' >Online</li>
                <li onClick = {handleCurrentPage} data-value = '/ofline' >Ofline</li>
            </ul>
        </div>
    )
}
