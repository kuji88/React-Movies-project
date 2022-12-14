import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from "./components/Navb";
import { Row } from "react-bootstrap";
import Movieslist from "./components/Movieslist";
import axios from "axios";



function App() {

  const [movies,setMovies] = useState([])



  const getAllMovies= async ()=>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=10c7824fcb18333079c100c234ba14b5&language=en-US")
    setMovies(res.data.results)
    
  }

  useEffect(() => {
    
 getAllMovies()
  
  }, [])
  
  
  return (
    <div>
    <Navb/>
    
    <Row>
    <Movieslist movies={movies}/>
    </Row>

    
    </div>
  );
}

export default App;
