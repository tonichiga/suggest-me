import s from "./Home.module.scss";
import Info from "../../Widget/Info/Info";
import InputRadio from "../../Widget/InputRadio/InputRadio";
import Card from "../../Widget/Card/Card";
import Button from "../../Components/UI/Button/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = 'https://practice-suggest-me.onrender.com/movie/list'

const Home = () => {

     const [movie, setMovie] = useState([]);
    const [inputValue, setInputValue] = useState("Any");
    const [loading, setLoading]  = useState(true)
    const getMovie = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.log("Catch error :", error);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect (() => {
        getMovie();
    }, []);



    const getMoviesForQuery = async (value) => {
        try {
            const response = await fetch(
                `https://cogitize-practice-suggest.onrender.com/movie/list?genre=${value}`
            );
            const data = await response.json();

            setMovie(data);
        } catch (error) {
            console.log("Catch error :", error);
        }
        finally
        {
            setLoading(false)
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
        <div className={s.MainContainer}>
            <Info />
            <InputRadio onChange={handleInput} value={inputValue} />
             <div className={s.MainText}>
                    <span className={s.Category}>{inputValue}</span>
                    <span className={s.CategoryNum}>(8)</span>
                </div>
            <ul className={s.list}>
                {movie.map((item) => {
                    return (
                        <li key={item._id}>
                            <Link to={`details/${item._id}`}>
                                <Card data={item} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className={s.LastButton}>
                <h3 className={s.LastMessage}>Didn’t find the one you looking for?</h3>
                <button id="suggestBtn">Suggest more</button>
            </div>
        </div>


    )
};
export default Home;