import styled from '@emotion/styled'

export const ContainerMenu = styled.div`
    width: 100%;
    position: relative;
    background-color: var(--purple-bar-menu);
    color: white;
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    font-size: 1.7rem;
`

export const MenuButton = styled.span`
    cursor:pointer;
`
export const MenuOptions = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 1.5rem;
    z-index: -10;
    transition: all .5s ease-in;
    position: absolute;
    transform: translateY(-100%);
    background-color: var(--purple-bar-menu);
    color: white;

    ${({active})=> {
        return active && `transform:  translateY(0);
            z-index: 10;`
    }}
`
export const MenuOption = styled.li`
    margin-bottom: .5rem;
    cursor:pointer;
    ${({currentCheck}) => {
        return currentCheck && "background-color : var(--dark-purple-bar-menu)";
    }}
`