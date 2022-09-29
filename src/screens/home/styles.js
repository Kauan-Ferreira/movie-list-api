import styled from "styled-components";



export const Container = styled.div`
    h1{
      text-align:center;
      font-size:3em;
      margin-top:40px ;
      font-style: 'Anton', sans-serif;
    }

`
export const CardsMovies = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr)) ;
    margin:20px;
    gap: 15px;
`
export const Movies = styled.div`
    display:flex;
    flex-direction: column;
    margin: 10px auto;
    align-items: center;

  span{
  margin-top:15px;
  font-size:20px;
  font-weight:bold;
  }

`
 
  
