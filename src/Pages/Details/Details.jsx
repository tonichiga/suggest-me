import style from "./Details.module.scss";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp"
import ReversDetailsProp from "../../Components/UI/ReversDetailsProp/ReversDetailsProp"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
    const [movie, setMovie] = useState({});

    const params = useParams();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(
                    `https://practice-lib.onrender.com/movie/${params.id}`
                );
                const data = await response.json();

                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        };

        getMovie();
    }, [params]);

    const getStringGenres = () => {
        return movie.genres?.map((genre) => genre.name).join(", ");
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
        <div className={style.container}>
            <div className={style.content}>
                <div>
                    <img className={style.large_image} src={movie.backdrop} alt="Large"/>
                    <div className={style.title_box}>
                        <div className={style.title_genre}>
                            {getStringGenres(movie.genres)}
                        </div>
                        <div className={style.title_name}>
                            {movie.title}
                        </div>
                    </div>
                </div>
                <div className={style.film_content}>
                    <div>
                        <img className={style.film_image} src={movie.poster} alt="SmallAve"/>
                    </div>
                    <div className={style.prop_list}>
                        <ReversDetailsProp label={movie.tagline} value={movie.description} />
                        <div className={style.rate_details}>
                            <DetailsProp
                                isRate={true}
                                label={"Rate"}
                                value={movie.rating?.toFixed(1)}
                            />
                        </div>
                        <DetailsProp label={"Type"} value={movie.type} />
                        <DetailsProp
                            label={"Release Date"}
                            value={getStringDate(movie.date)}
                        />
                         <DetailsProp label={"Run time"} value={movie.runtime} />
                        <DetailsProp
                            label={"Genres"}
                            value={getStringGenres(movie.genres)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;

