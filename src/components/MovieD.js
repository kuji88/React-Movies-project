import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Col, Row} from 'react-bootstrap'
import { useParams} from "react-router-dom";

const MovieD = () => {
  const param = useParams();
  console.log(param.id)

  const [movie,setPages] = useState(0)


  const getPages= async ()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=10c7824fcb18333079c100c234ba14b5&language=en-US`)
    setPages(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getPages()
  }, [])
  
  return (
    <div>
    <Row>
      <Col sm="4">
        <img className='h-screen' alt='phot' src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}/>
        </Col>
      <Col sm="8">
        <div className='text-center mt-20'>
        <h1 className='text-8xl'>Tittle: {movie.title}</h1>
        <h5 className='mt-3'>Release Date: {movie.release_date}</h5>
        <h3></h3>
        <p className='mt-56 mx-auto w-7/12 text-slate-600'>Description: {movie.overview}</p>

        <div className='flex justify-between px-96 mt-56'>
          <a href={movie.homepage}>
          <Button variant='danger'>Watch it</Button>
          </a>

          <a href='/'>
          <Button>Back to main</Button>
          </a>
        </div>
        </div>
      </Col>
    </Row>

    </div>
  )
}

export default MovieD