import HeadPoster from "../../Components/UI/HeadPoster/HeadPoster";
import s from "./Details.module.scss";
import NameFilm from "../../Components/UI/NameFilm/NameFilm";
import DetailsAboutFilm from "../../Components/UI/DetailsAboutFilm/DetailsAboutFilm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Details = () => {
  const [movie, setMovie] = useState({});
  console.log(movie);
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(
          `https://vadyms-movies-api.onrender.com/movie/${params.id}`
        );
        const data = await response.json();

        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [params]);

  const getStringGenres = (movieGenre) => {
    console.log(movieGenre);
    return movieGenre;
  };

  const getStringDate = (movieDate) => {
    let string = "";

    if (!movieDate) {
      return string;
    }

    const date = new Date(movieDate);
    string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    return string;
  };


    return ( 
    <div className={s.main}>
        <HeadPoster backdrop={movie.backdrop}/>
        <div className={s.about_film}>
        <NameFilm title={movie.title} category={movie.genres}/>
            <div className={s.details}>
                <img src={movie.poster} alt="poster" />
                <div className={s.detail_block}>
                    <p className={s.title}>{movie.tagline}</p>
                    <p className={s.description}>{movie.description}</p>

                  

                    <div className={s.about_list}>
                    <DetailsAboutFilm isRate={true} value={Number(movie.rating).toFixed(1)} />
                    <DetailsAboutFilm label={"Release Date"} value={getStringDate(movie.data)} />
                    <DetailsAboutFilm label={"Run time"} value={movie.runtime} />
                    <DetailsAboutFilm label={"Genres"} value={getStringGenres(movie.genres)} />
            </div>
                </div>
            </div>
        </div>
    </div>
 );
}
 
export default Details;