import {API_URL} from './settings'

export default function getStreamers(setState,setStatus,{channels}) {
    const promises = channels.map( channel => fetch(`${API_URL}/${channel}`));
    setStatus(true)
    Promise.all(promises)
        .then(values => Promise.all(values.map(value => value.json())))
        .then(res => res.map( channel => {
            const {status,display_name,logo,url,partner} = channel;

            return {status,display_name,logo,url,partner}
        }))
        .then(data => {
            setState(data)
            setStatus(false)
        })
}

