import {useState, useEffect} from 'react'
import { getGifs } from  '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading :  true
    })
        
    useEffect(()=>{
        setTimeout(() => {
            getGifs (category)
            .then(imgs => {
                setstate({
                    data : imgs,
                    loading : false
                })
            })
        }, 2000);
    }, [category])


    return state;
}
