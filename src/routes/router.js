import React from "react";
import { Route,Routes } from "react-router-dom";
import Details from "../screens/details";
import Home from "../screens/home";

export default function Router(){
    return(
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Details/>} path="/details/:id"/>
        </Routes>
    )
}