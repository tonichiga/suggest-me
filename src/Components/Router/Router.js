import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home/Home'
import Details from "../../Pages/Details/Details";
import Pixabay from '../../Pages/Pixabay/Pixabay'
function Router() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={"details/:id"} element={<Details/>} />
            <Route path={"pixabay"} element={<Pixabay />} />
        </Routes>
    );
}

export default Router;