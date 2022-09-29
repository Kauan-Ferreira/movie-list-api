import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import Apikey from "../../apikey/config";
import axios from "axios";
import { Container } from "./style";



function Details(){
    const image = `https://image.tmdb.org/t/p/w500/`
    const {id} = useParams()
    const [movieList, setMovies] = useState({})
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${Apikey}&language=en-US&page=1`)
        .then(response=>{
            const {title, poster_path, overview} = response.data
            const movieList = {
                id,
                title,
                sinopse:overview,
                image:`${image}${poster_path}`,
            }
            setMovies(movieList)
            console.log(movieList)
             
        })
        .catch(error =>{
            console.log(error.message)
        })
     },[id])
    return(
        <Container>
            <div className="movie">
                <img src={movieList.image} alt = {movieList.title}/>
                 <div className="details">
                    <h1>{movieList.title}</h1>
                    <span>sinopse:{movieList.sinopse}</span>
                    <Link to="/"><button>go back</button></Link>
                </div>        
            </div>
        </Container>
    )
}
export default Details