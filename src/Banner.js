import React, { useEffect, useState } from 'react'
import axios from './axios';
import Requests from './Requests';
import './Banner.css'

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

    console.log(movie);
    return (
        <header className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`

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
                <h1 className='banner__description'> {truncate(movie?.overview, 150) } </h1>
           </div>
        </header>
    )
}

export default Banner
