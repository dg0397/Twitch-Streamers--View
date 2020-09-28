import styled from '@emotion/styled'

export const StreamerComponent = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: 
    "img title" 
    "img status" ;
    justify-items: center;
    align-content: center;
    gap: 0 10px;
    padding: .5rem;
    background-color: #E2F4FF;

    ${({status}) => {
        return status === true ? 'background-color:#C6EFE6' : null  
    }}
`

export const StreamerContainerImg = styled.div`
    grid-area: img;
    align-self: center;
    justify-self: center;    
`
export const StreamerImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
`
export const Title = styled.h3`
    grid-area: title;
    align-self: center;
    justify-self: center;   
`
export const Link = styled.a`
    color: #1c1c1c;
    text-decoration: none;
    font-style:italic
`
export const Status = styled.p`
    grid-area: status;
    align-self: center;
    justify-self: center;    
`