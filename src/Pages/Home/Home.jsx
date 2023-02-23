import s from "./Home.module.scss";
import Info from "../../Widget/Info/Info";
import InputRadio from "../../Widget/InputRadio/InputRadio";
import Card from "../../Widget/Card/Card";
import Button from "../../Components/UI/Button/Button";
import Text from "../../Components/UI/Text/Text";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Home = () => {

    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState("Any");

    const getMovies = async () => {
        try {
            const response = await fetch(
                `https://cogitize-practice-suggest.onrender.com/movie/list`
            );
            const data = await response.json();

            setMovies(data);
        } catch (error) {
            console.log("Catch error :", error);
        }
    };

    const getMoviesForQuery = async (value) => {
        try {
            const response = await fetch(
                `https://cogitize-practice-suggest.onrender.com/movie/list?category=${value}`
            );
            const data = await response.json();

            setMovies(data);
        } catch (error) {
            console.log("Catch error :", error);
        }
    };

    useEffect(() => {
        getMovies();
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
            <Text />
            <ul className={s.list}>
                {movies.map((item) => {
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
                <Button />
            </div>
        </div>


    )
};
export default Home;