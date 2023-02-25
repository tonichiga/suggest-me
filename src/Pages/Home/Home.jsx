import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import Card from "../../Widget/Card/Card";
import Title from "../../Widget/Title/Title";
import Input from "../../Widget/Input/Input";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState("Any");

    const getMovies = async () => {
        try {
            const response = await fetch(
                `https://practice-lib.onrender.com/movie/list`
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
                `https://practice-lib.onrender.com/movie/list/${value}`
            );
            const data = await response.json();

            setMovies(data);
            console.log(data);
        } catch (error) {
            console.log(error);
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

    const handleSuggestBtnClick = (value) => {
        getMoviesForQuery(value);
    };

    return (
        <div className={style.container}>
            <div className={style.content}>
                <Title />
                <div className={style.input_checker}>
                    <Input onChange={handleInput} value={inputValue}/>
                </div>
                <div className={style.list_info}>
                    {inputValue}
                </div>
                <ul className={style.list}>
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
                <div className={style.bottom}>
                    <div>Didn’t find the one you looking for?</div>
                    <button id="suggestBtn" onClick={() => handleSuggestBtnClick(inputValue)}>Suggest more</button>
                </div>

            </div>
        </div>
    );
}

export default Home;

