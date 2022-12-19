import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from "./components/Navb";
import { Row } from "react-bootstrap";
import Movieslist from "./components/Movieslist";
import axios from "axios";



function App() {

  const [movies,setMovies] = useState([])
  const [moviesPages,setPages] = useState([])


  const getAllMovies= async ()=>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=10c7824fcb18333079c100c234ba14b5&language=en-US")
    setMovies(res.data.results)
    setPages(res.data.selected)
    
  }

  useEffect(() => {
    
 getAllMovies()
  
  }, [])

  const getPages= async (page)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=10c7824fcb18333079c100c234ba14b5&language=en-US&page=${page}`)
    setMovies(res.data.results)
    setPages(res.data.selected)
  }


  const search= async (word,data)=>{
    if(word === ""){
      getAllMovies()
      setPages(data.selected)
    }
    else{
    const res= await axios.get(` https://api.themoviedb.org/3/search/movie?api_key=10c7824fcb18333079c100c234ba14b5&language=en-US&query=${word}`)
    setMovies(res.data.results)}
    setPages(data.selected)
  }

  
  
  
  return (
    <div>
    <Navb search={search}/>
    
    <Row>
    <Movieslist movies={movies} pages={getPages} count={moviesPages}/>
    </Row>

    
    </div>
  );
}

export default App;
