import React, {useState} from 'react';
import Header from "../../Widget/Header/Header";
import Info from '../../Widget/Info/Info'
import Buttons from "../../Widget/Buttons/Buttons";
import s from './Home.module.scss'
import Card from "../../Widget/Card/Card";
import data from './data'
import Footer from "../../Widget/Footer/Footer";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const API_URL = 'https://cogitize-practice-suggest.onrender.com/movie/list'
const MainContainer = () => {

    const [movie, setMovie] = useState([]);
    const [inputValue, setInputValue] = useState("Any");

    const getMovie = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.log("Catch error :", error);
        }
    }

    useEffect (() => {
        getMovie();
    }, []);



    const getMoviesForQuery = async (value) => {
        try {
            const response = await fetch(
                `https://practice-api-vlasenko-bohdan.onrender.com/movie/list?genre=${value}`
            );
            const data = await response.json();

            setMovie(data);
        } catch (error) {
            console.log("Catch error :", error);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    const handleInput = (e) => {
        const value = e.target.id;
        setInputValue(value);

        getMoviesForQuery(value);
    };


    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.content_head}>
                    <div className={s.title_wrapper}>
                        <Info />
                    </div>
                    <Buttons onChange={handleInput} value={inputValue}/>
                </div>
                <span className={s.any}>Any(120)</span>
                <ul className={s.list} >
                    {movie.map((item) => {
                        return (
                            <li key={item._id}>
                            <Link to={`details/${item._id}`}>
                                <Card data={item}  />
                            </Link>
                            </li>
                        );
                    })}
                </ul>
                <Footer/>
            </div>
        </div>
    );
};

export default MainContainer;