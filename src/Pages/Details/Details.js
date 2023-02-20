import React, {useMemo, useState} from 'react';
import DetailsTitle from "../../Components/UI/DetailsTitle/DetailsTitle";
import s from './Details.module.scss'
import poster from './marvel.png'
import Rate from "../../Components/UI/Rate/Rate";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp";
import data from "../Home/data";
import {useParams} from "react-router-dom";
function Details() {
    const [movies, _] = useState(data)

    const params = useParams()

    const movie = useMemo(() => {
        return movies.find((item) => item.id === Number(params.id));
    }, [movies, params]);


    return (
        <div className={s.details_container}>
        <DetailsTitle/>
            <div className={s.content}>
                <img src={poster} alt="poster" />
                <div className={s.second_content}>

                <h1 className={s.h1}>{movie.title}</h1>
                <p className={s.description}> After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos.
                    With the help of remaining allies, the Avengers must assemble once more in order to undo
                    Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>
                    <div className={s.prop_list}>
                        {/*<DetailsProp isRate={true} label={"Rate"} value={"7.8"} />*/}
                        <DetailsProp isRate={true} label={"Rate"} value={movie.rate} />
                        <DetailsProp label={"Type"} value={"Movie"} />
                        <DetailsProp label={"Release Date"} value={"2019-04-24"} />
                        <DetailsProp label={"Run time"} value={"181 min"} />
                        {/*<DetailsProp*/}
                        {/*    label={"Genres"}*/}
                        {/*    value={"Adventure,  Science Fiction, Action"}*/}
                        {/*/>*/}
                        <DetailsProp
                            label={"Genres"}
                            value={movie.about}
                        />
                    </div>
                    {/*<div className={s.rate}>*/}
                    {/*    <Rate className={s.rate} rate={8.3}/>*/}
                    {/*</div>*/}

                {/*<div className={s.type_movie}>*/}
                {/*    <p className={s.type}>Type</p>*/}
                {/*    <p className={s.movie}>Movie</p>*/}
                {/*</div>*/}

                {/*    <div className={s.real_date}>*/}
                {/*        <p className={s.date}>Release Date</p>*/}
                {/*        <p className={s.date_number}>2019-04-24</p>*/}
                {/*    </div>*/}


                {/*    <div className={s.run_time}>*/}
                {/*        <p className={s.time}>Run time</p>*/}
                {/*        <p className={s.run_time}>181 min</p>*/}
                {/*    </div>*/}

                {/*    <div className={s.film_genres}>*/}
                {/*        <p className={s.genres}>Genres</p>*/}
                {/*        <p className={s.genres_list}>Adventure,  Science Fiction, Action</p>*/}
                {/*    </div>*/}


                </div>
            </div>

        </div>
    );
}

export default Details;