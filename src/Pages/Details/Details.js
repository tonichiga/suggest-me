import React, {useMemo, useState} from 'react';
import DetailsTitle from "../../Components/UI/DetailsTitle/DetailsTitle";
import s from './Details.module.scss'
import Rate from "../../Components/UI/Rate/Rate";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp";
import data from "../Home/Home";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
function Details() {
    const [movies, setMovies] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const params = useParams()

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(
                    `https://cogitize-practice-suggest.onrender.com/movie/${params.id}`
                );
                const data = await response.json();

                setMovies(data);
                // console.log(data.genres[0].name);
                console.log(movies.genres[0].name);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        };

        getMovie();
    }, [params]);


    const getStringGenres = () => {
        let strGenre = movies.genres?.map((item) => item.name).join(", ");
        return strGenre
        console.log('str', strGenre);
    };
    console.log(getStringGenres(), 'hi');

    const getStringDate = (movieDate) => {
        let string = "";

        if (!movieDate) {
            return string;
        }

        const date = new Date(movieDate);
        string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

        return string;
    };
    // console.log(movies?.genres[0].name);
    return (
        <>
            {isLoading ? (
                <h1 style={{fontSize:'300px'}}>is Loading...</h1>
            ) : (
                <div className={s.details_container}>
                    <DetailsTitle backdrop={movies.backdrop} title={movies.title}
                                  genres={getStringGenres(movies.genres)}/>
                    <div className={s.content}>
                        <img src={movies.poster} alt="poster"/>
                        <div className={s.second_content}>

                            <h1 className={s.h1}>{movies.title}</h1>
                            <p className={s.description}> {movies.description}</p>
                            <div className={s.prop_list}>
                                <DetailsProp isRate={true} label={"Rate"} value={movies.rate?.toFixed(1)}/>
                                <DetailsProp label={"Type"} value={movies.type}/>
                                <DetailsProp label={"Release Date"} value={getStringDate(movies.date)}/>
                                <DetailsProp label={"Run time"} value={movies.runtime}/>

                                <DetailsProp
                                    label={"Genres"}
                                    value={getStringGenres(movies.genres)}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Details;