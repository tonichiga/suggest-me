import s from "./Home.module.scss";
import Info from "../../Widget/Info/Info";
import InputRadio from "../../Widget/InputRadio/InputRadio";
import Card from "../../Widget/Card/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {

    const [movies, setMovies] = useState([]);
        const [inputValue, setInputValue] = useState("Any");



        const getMoviesForQuery = async (value) => {
          console.log(value);
          try {
            const response = await fetch(
              `https://cogitize-practice-suggest.onrender.com/movie/list?genre=${value}&amount=8`
            );
            console.log(response);
            const data = await response.json();

            setMovies(data);
          } catch (error) {
            console.log("Catch error :", error);
          }
        };
        useEffect(() => {
          document.getElementById("ButtonN").addEventListener(
            "click",
            () => {
              loadNewMovies()
            }
          )
            getMoviesForQuery("Any");
        }, []);

        const handleInput = (e) => {
          const value = e.target.id;
          setInputValue(value);
          getMoviesForQuery(value);
        };
        const loadNewMovies = () => {
          getMoviesForQuery("Any")
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
                <button id="ButtonN">Suggest more</button>
            </div>
        </div>


    )
};
export default Home;