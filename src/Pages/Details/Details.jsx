import s from "./Details.module.scss";
import Star from "../../Components/UI/Star/Star";
import DetailsProps from "../../Components/UI/DetailsProps/DetailsProps";
import Block from "../../Components/UI/Block/Block";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";




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
            <div><img src={movie.poster} className={s.poster} alt="Poster" /></div>

            <div className={s.AboutFilm}>
                <Block />

            <div className={s.details_block}>
                <img src={AvengersPoster} alt="Avenger" />
                <div className={s.props_block}>
                        <p className={s.title}>{movie.tagline}</p>
                        <p className={s.Paragraph}>{movie.description}</p>
                        <DetailsProp
                            isRate={true}
                            label={"Rate"}
                            value={movie.rating?.toFixed(1)}
                        />
                        <DetailsProps label={"Type"} value={movie.type} />
                        <DetailsProps label={"Release Date"} value={getStringDate(movie.date)} />
                    <DetailsProps label={"Run time"} value={"181 min"} />
                    <DetailsProps
                        label={"Genres"}
                            value={getStringGenres(movie.genres)}
                    />
                </div>
                </div>
                </div>
        </div>
    </div>
}

export default Details;