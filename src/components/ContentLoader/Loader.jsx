import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={"90%"}
    height={500}
    viewBox="0 0 380 500"
    backgroundColor="#ffffff28"
    foregroundColor="#AAB0E9"
    {...props}
  >
    <circle cx="30" cy="30" r="20" /> 
    <rect x="61" y="13" rx="5" ry="5" width="300" height="30" /> 
    <circle cx="30" cy="90" r="20" /> 
    <rect x="61" y="73" rx="5" ry="5" width="300" height="30" /> 
    <circle cx="30" cy="150" r="20" /> 
    <rect x="60" y="133" rx="5" ry="5" width="300" height="30" /> 
    <circle cx="30" cy="210" r="20" /> 
    <rect x="61" y="193" rx="5" ry="5" width="300" height="30" /> 
    <circle cx="30" cy="270" r="20" /> 
    <rect x="61" y="250" rx="5" ry="5" width="300" height="30" /> 
    <circle cx="30" cy="330" r="20" /> 
    <rect x="61" y="313" rx="5" ry="5" width="300" height="30" /> 
    <circle cx="30" cy="390" r="20" /> 
    <rect x="61" y="373" rx="5" ry="5" width="300" height="30" /> 
    <circle cx="30" cy="450" r="20" /> 
    <rect x="61" y="434" rx="5" ry="5" width="300" height="30" />
  </ContentLoader>
)

export default function MyLoader(){
    return(
        <div style = {{margin : "0 auto"}} >
            <Loader />
        </div>
    )
}