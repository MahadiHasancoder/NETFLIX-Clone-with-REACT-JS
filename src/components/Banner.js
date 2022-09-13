/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react'
import axios from '../lib/axios';
import Requests from '../lib/Requests';
import '../style/Banner.css'

const Banner = () => { 
    const [movie, setmovie] = useState([])

    function truncate(des, number){
        return des?.length > number ? des.substr(0, number -1 ) + "..."  :des ;
    }

    useEffect(() => {
        async function fetchfnc(){
            let request = await axios.get(Requests.fetchNetflixOriginals)
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
            return request
        }
        fetchfnc()
    }, [])


    return (
        <header className='banner' style={{
            background: `${movie?.backdrop_path ? `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}") ` : '#000'} `
        }}>
           <div className='banner__container'>
                {/* title */}
                <h1 className='banner__title'>{ movie?.name || movie?.original_name } </h1>
                {/* 2button */}
                <div className='banner__buttons'>
                    <button>play</button>
                    <button>My list</button>
                </div>
                {/* description */}
                <p className='banner__description'> {truncate(movie?.overview, 150) } </p>
           </div>
        </header>
    )
}

export default Banner
