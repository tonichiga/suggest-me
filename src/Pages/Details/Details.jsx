import s from "./Details.module.scss";
import DetailsProps from "../../Components/UI/DetailsProps/DetailsProps";
import Block from "../../Components/UI/Block/Block";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";




const Details = () => {

    const [movie, setMovie] = useState({});

    const params = useParams();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(
                    `https://cogitize-practice-suggest.onrender.com/movie/${params.id}`
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

    return <div className={s.MainContainer}>
        <div className={s.layout_block}>
            <div><img src={movie.backdrop} className={s.poster} alt="Poster" /></div>
            <div className={s.AboutFilm}>
            <div className={s.Block}>
                <Block genres={getStringGenres(movie.genres)} title={movie.title}  />
            </div>
            <div className={s.details_block}>
                <img src={movie.poster} alt="Avenger" className={s.smallposter} />
                <div className={s.props_block}>
                        <p className={s.title}>{movie.tagline}</p>
                        <p className={s.Paragraph}>{movie.description}</p>
                        <DetailsProps
                            isRate={true}
                            label={"Rate"}
                            value={movie.rating?.toFixed(1)}
                        />
                        <DetailsProps label={"Type:"} value={movie.type} />
                        <DetailsProps label={"Release Date:"} value={getStringDate(movie.date)}  />
                    <DetailsProps label={"Run time:"} value={movie.runtime}  />
                    <DetailsProps
                        label={"Genres:"}
                            value={getStringGenres(movie.genres)}
                    />
                </div>
                </div>
                </div>
        </div>
    </div>
}

export default Details;