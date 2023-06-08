import React, { useEffect } from 'react'
import { useState } from 'react'
import './Movie.css'
import Spinner from './Spinner'


function Movie() {
    const [movieData, setMovieData] = useState([])
    const [loading, setLoading] = useState(false)
    
    const imageNotFound = 'https://www.shutterstock.com/shutterstock/photos/549465907/display_1500/stock-vector-not-available-grunge-rubber-stamp-on-white-background-vector-illustration-549465907.jpg'
   

    const fetchApi = async ()=>{
      setLoading(true)
      let fetchData = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
      fetchData =  await fetchData.json()
      setLoading(false)
      console.log('Movie',fetchData)
      setMovieData(fetchData)
    }
    
   useEffect(() => {
    fetchApi()
  },[])
   

  return (
    <div className='main_div'>
      {
        loading? <Spinner/>:''
      }
     
        {  
            movieData.map((item,id)=>
            <div className="content" key={id}>
                <div className="inner_content">
             <img className='poster_img' src={item.Poster?item.Poster:imageNotFound} alt=""height={200} />
            </div>
             <div className="movie_details">
                <h3>{item.Title}</h3>
                <h4>Year : {item.Year}</h4>
                <p>Duration : {item.Runtime}</p>
         </div>
    </div>
            )
        }
       
       {/* <button className='get_movie_btn' onClick={fetchApi}>Get Movie</button> */}

    </div>
  )
}

export default Movie
