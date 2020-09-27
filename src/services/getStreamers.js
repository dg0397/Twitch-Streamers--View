import {API_URL} from './settings'

export default function getStreamers(setState,setStatus,{channels}) {
    const promises = channels.map( channel => fetch(`${API_URL}/${channel}`));
    console.log(promises)
    setStatus(true)
    //let data = [];
//I NEED TO USE PROMISE.RESOLVE
    Promise.all(promises)
        .then(values => Promise.all(values.map(value => value.json())))
        .then(res => res.map( channel => {
            const {status,display_name,logo,url,partner} = channel;

            return {status,display_name,logo,url,partner}
        }))
        .then(data => setState(prevState => prevState.concat(data)))
    setStatus(false)
    //channels.forEach( async (channel) => {
    //    const fetchingData = await fetch(`${API_URL}/${channel}`);
    //    const jsonResponse = await fetchingData.json();
    //    const {status,display_name,logo,url,partner} = await jsonResponse;
//
    //    console.log({status,display_name,logo,url,partner})
    //    await data.push({status,display_name,logo,url,partner})
    //});
    //console.log(data) ;
}

