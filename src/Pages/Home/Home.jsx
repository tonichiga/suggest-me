import HeadTitle from "../../Widget/HeadTitle/HeadTitle";
import s from "./Home.module.scss" ;
import Input from "../../Components/UI/Input/Input";
import { Card } from "../../Widget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Home = () => {

        const [movies, setMovies] = useState([]);
        const [inputValue, setInputValue] = useState("Any");
        


      
        const getMoviesForQuery = async (value) => {
          console.log(value);
          try {
            const response = await fetch(
              `https://vadyms-movies-api.onrender.com/movie/list?genre=${value}&amount=8`
            );
            console.log(response);
            const data = await response.json();
      
            setMovies(data);
          } catch (error) {
            console.log("Catch error :", error);
          }
        };
        // const nowMovieGenre = "";
       
        // if(isFirst){ 
        //   getMoviesForQuery("Any")
        //   isFirst = false;
        // };
      
        useEffect(() => {
          document.getElementById("suggestBtn").addEventListener(
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
        <div className={s.container}>
            <div className={s.content}>
             <div className={s.content_h}>
                <div className={s.content_w}>
{/* / Описание сайта                    */}
            <HeadTitle/>
         </div>
         {/* Выбор категории фильма */}
         <Input onChange={handleInput} value={inputValue} />
            {/* <div className={s.any}>
                    Any <span>(120)</span>
                </div> */}
                <ul className={s.list}>
                    {movies.map((item) => {
                        return (
                        <li key={item.id}>
                          <Link to={`details/${item.id}`}>
                            <Card data={item} />
                            </Link>
                        </li>
                        );
                    })}
                </ul>
                {/* карточки с фильмами */}
            </div> 
            </div>
            {/* типо футера, мб нужно будет поменять и будет продолжение страницы */}
            <div className={s.bottom}>
                    <p>Didn`t find the one you looking for?</p>

                    <button id="suggestBtn">Suggest more</button>
        
                </div>
        </div>
    );
};
export default Home ;