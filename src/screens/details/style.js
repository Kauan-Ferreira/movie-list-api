import Styled  from "styled-components";

export  const Container =Styled.div`
 h1{
    margin:3rem 0;

 }
 .movie{
    display:flex;
    align-items:center;
    justify-content:center;
    height:600px;
 }
 .details{
   display: flex;
   flex-direction:column;
   align-items:flex-start;
   margin-left:64px ;
   max-width:50%;
    
 }
 button{
   background-color:#0d0979;
   border-radius:1rem;
   cursor:pointer;
   color:white;
   padding:14px 32px;
   margin-top:16px;
   font-size:100%;
   transition:all 0.2s;
 }
 button:hover{
   background: purple;
 }
 span{
   line-height:130%;
   margin-bottom:16px;
   font-size:20px;
 }
 
`