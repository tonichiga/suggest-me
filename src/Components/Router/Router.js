import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home/Home'
import Details from "../../Pages/Details/Details";
function Router() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={"details/:id"} element={<Details/>} />

        </Routes>
    );
}

export default Router;