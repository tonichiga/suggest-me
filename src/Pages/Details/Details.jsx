import s from "./Details.module.scss";
import Star from "../../Components/UI/Star/Star";
import DetailsProps from "../../Components/UI/DetailsProps/DetailsProps";
import Block from "../../Components/UI/Block/Block";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";


import Avengers from "../../assets/Images/Avengers.svg";
import AvengersPoster from "../../assets/Images/AvengersPoster.svg";


import WidowPoster from "../../assets/Images/WidowPoster.svg";
import ChiPoster from "../../assets/Images/ChiPoster.svg";
import LokiPoster from "../../assets/Images/LokiPoster.svg";
import MotherPoster from "../../assets/Images/MotherPoster.svg";
import HeistPoster from "../../assets/Images/HeistPoster.svg";
import FriendsPoster from "../../assets/Images/FriendsPoster.svg";
import BangPoster from "../../assets/Images/BangPoster.svg";
import MenPoster from "../../assets/Images/MenPoster.svg";


const data = [
    {
        id: 1,
        title: "Black Widow",
        about: "Drama, Action | 2020",
        image: WidowPoster,
        rate: 6.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        about: "Drama, Action | 2020",
        image: ChiPoster,
        rate: 7.9,
    },
    {
        id: 3,
        title: "Loki",
        about: "Drama, Action | 2020",
        image: LokiPoster,
        rate: 8.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        about: "Drama, Action | 2020",
        image: MotherPoster,
        rate: 8.3,
    },
    {
        id: 5,
        title: "Money Heist",
        about: "Drama, Action | 2020",
        image: HeistPoster,
        rate: 8.3,
    },
    {
        id: 6,
        title: "Friends",
        about: "Drama, Action | 2020",
        image: FriendsPoster,
        rate: 8.8,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        about: "Drama, Action | 2020",
        image: BangPoster,
        rate: 8.1,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        about: "Drama, Action | 2020",
        image: MenPoster,
        rate: 7,
    },
];


const Details = () => {

const [movies, _] = useState(data);

    const params = useParams();
    m
    const movie = useMemo(() => {
        return movies.find((item) => item.id === Number(params.id));
    }, [movies, params]);

    return <div className={s.MainContainer}>
        <div className={s.layout_block}>
            <div><img src={Avengers} className={s.poster} alt="Poster" /></div>

            <div className={s.AboutFilm}>
                <Block />

            <div className={s.details_block}>
                <img src={AvengersPoster} alt="Avenger" />
                <div className={s.props_block}>
                    <p className={s.title}>Part of the journey is the end.</p>
                    <p className={s.Paragraph}>
                        After the devastating events of Avengers: Infinity War, the universe
                        is in ruins due to the efforts of the Mad Titan, Thanos. With the
                        help of remaining allies, the Avengers must assemble once more in
                        order to undo Thanos' actions and restore order to the universe once
                        and for all, no matter what consequences may be in store.
                    </p>
                    <Star rate={8.3} />
                    <DetailsProps label={"Type"} value={"Movie"} />
                    <DetailsProps label={"Release Date"} value={"2019-04-24"} />
                    <DetailsProps label={"Run time"} value={"181 min"} />
                    <DetailsProps
                        label={"Genres"}
                        value={"Adventure,  Science Fiction, Action"}
                    />
                </div>
                </div>
                </div>
        </div>
    </div>
}

export default Details;