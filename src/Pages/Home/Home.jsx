import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Widget/Card/Card";
import InputRadio from "../../Widget/InputRadio/InputRadio";
import Title from "../../Widget/Title/Title";
import s from "./Home.module.scss";

// const data = [
//   {
//     id: 1,
//     title: "GREYHOUND",
//     about: "Drama, Action | 2020",
//     rate: 4,
//   },
//   {
//     id: 2,
//     title: "Black Widow",
//     about: "Drama, Comedy | 2000",
//     rate: 9,
//   },
//   {
//     id: 3,
//     title: "ONCE UPON A TIME... IN HOLLYWOOD ",
//     about: "Drama, Action | 2011",
//     rate: 5.5,
//   },
//   {
//     id: 4,
//     title: "GREYHOUND",
//     about: "Drama, Action | 2020",
//     rate: 3.6,
//   },
//   {
//     id: 5,
//     title: "LITTLE WOMEN ",
//     about: "Drama | 2019",
//     rate: 7,
//   },
//   {
//     id: 6,
//     title: "DAVID CROSBY: REMEMBER MY NAME",
//     about: "Action | 2000",
//     rate: 9,
//   },
//   {
//     id: 7,
//     title: "AQUARELA",
//     about: "Drama, Action | 2020",
//     rate: 6.5,
//   },
//   {
//     id: 8,
//     title: "LITTLE WOMEN ",
//     about: "Drama, Action | 2020",
//     rate: 7.4,
//   },
// ];

const MainContainer = () => {
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
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.content_head}>
          <div className={s.title_wrapper}>
            <Title />
          </div>
          <InputRadio onChange={handleInput} value={inputValue} />
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
      </div>
    </div>
  );
};

export default MainContainer;
