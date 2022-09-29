import React from "react";
import {Container,CardsMovies,Movies} from "./styles"
import {useState, useEffect} from 'react'
import Apikey from "../../apikey/config";
import axios from "axios"
import {Link} from "react-router-dom"

function Home(){

    const [dadosmovies,setMovies] = useState([])
    const image = `https://image.tmdb.org/t/p/w500/`
   
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=en-US&page=1`)
      .then(response=>{
          setMovies(response.data.results)
          console.log(response.data.results)
      })
      .catch(error =>{
          console.log(error.message)
      })
   },[])

    return(
      <Container>
       <h1>Popcorn Movies</h1>
        <CardsMovies>
       {dadosmovies.map(movie => {
             return(
                <Movies>
                  <Link to={`/details/${movie.id}`}><img src={`${image}${movie.poster_path}`} alt={movie.title}/></Link>
                 <span>{movie.title}</span>
               </Movies>
             )
       })}
       </CardsMovies>
      </Container>
    )
   
}

export default Home;