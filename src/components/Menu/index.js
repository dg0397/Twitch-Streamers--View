import React from 'react'
import { useLocation } from 'wouter';

export default function Menu() {
    const [location, setLocation] = useLocation();

    const handleCurrentPage = (e) => {
        if(location === e.target.dataset.value) return;
        setLocation(e.target.dataset.value)
        console.log(e.target.dataset.value)
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
            </div>
            <ul>
                <li onClick = {handleCurrentPage} data-value = '/'>Home</li>
                <li onClick = {handleCurrentPage} data-value = '/online' >Online</li>
                <li onClick = {handleCurrentPage} data-value = '/ofline' >Ofline</li>
            </ul>
        </div>
    )
}
