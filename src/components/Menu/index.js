import React, { useState } from 'react'
import { useLocation } from 'wouter';
import {ContainerMenu,Menu,MenuOptions,MenuOption} from './styles'

export default function MenuComponent() {
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
        <ContainerMenu>
            <Menu>
                <p>
                    {
                        location === '/'? 
                        'Home' : 
                        location === '/online'?
                        'Online':
                        'Ofline'
                    }
                </p>
                <p onClick = {handleClick} ><span aria-label = "button icon" role = "img" >▼</span></p>
            </Menu>
            <MenuOptions active = {menuActive}>
                <MenuOption onClick = {handleCurrentPage} data-value = '/' currentCheck = {location === '/'? true : false}>Home</MenuOption>
                <MenuOption onClick = {handleCurrentPage} data-value = '/online' currentCheck = {location === '/online'? true : false}>Online</MenuOption>
                <MenuOption onClick = {handleCurrentPage} data-value = '/ofline' currentCheck = {location === '/ofline'? true : false}>Ofline</MenuOption>
            </MenuOptions>
        </ContainerMenu>
    )
}
