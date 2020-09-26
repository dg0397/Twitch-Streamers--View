import {API_URL} from './settings'

export default function getStreamers(setStatus,{channels}) {
    setStatus(true)
    let data = [];
//I NEED TO USE PROMISE.RESOLVE
    channels.forEach( async (channel) => {
        const fetchingData = await fetch(`${API_URL}/${channel}`);
        const jsonResponse = await fetchingData.json();
        const {status,display_name,logo,url,partner} = await jsonResponse;

        console.log({status,display_name,logo,url,partner})
        await data.push({status,display_name,logo,url,partner})
    });
    console.log(data) ;
}

