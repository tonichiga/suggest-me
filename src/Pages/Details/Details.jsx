import style from "./Details.module.scss";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp"
import ReversDetailsProp from "../../Components/UI/ReversDetailsProp/ReversDetailsProp"
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";

import LargeAve from "../../assets/images/LargeAvengers.jpg"
import SmallAve from "../../assets/images/SmallAvengers.jpg"


import BlackWidow from "../../assets/images/BlackWidow.jpg"
import ShangChi from "../../assets/images/ShangChi.jpg"
import Loki from "../../assets/images/Loki.jpg"
import Mother from "../../assets/images/Mother.jpg"
import MoneyHeist from "../../assets/images/MoneyHeist.jpg"
import Friends from "../../assets/images/Friends.jpg"
import BigBang from "../../assets/images/BigBang.jpg"
import TwoMen from "../../assets/images/TwoMen.jpg"

const data = [
    {
        id: 1,
        title: "Black Widow",
        about: "Drama, Action | 2020",
        image: BlackWidow,
        rate: 6.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        about: "Drama, Action | 2020",
        image: ShangChi,
        rate: 7.9,
    },
    {
        id: 3,
        title: "Loki",
        about: "Drama, Action | 2020",
        image: Loki,
        rate: 8.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        about: "Drama, Action | 2020",
        image: Mother,
        rate: 8.3,
    },
    {
        id: 5,
        title: "Money Heist",
        about: "Drama, Action | 2020",
        image: MoneyHeist,
        rate: 8.3,
    },
    {
        id: 6,
        title: "Friends",
        about: "Drama, Action | 2020",
        image: Friends,
        rate: 8.8,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        about: "Drama, Action | 2020",
        image: BigBang,
        rate: 8.1,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        about: "Drama, Action | 2020",
        image: TwoMen,
        rate: 7,
    },
];
const Details = () => {
    const [movies, _] = useState(data);

    const params = useParams();

    const movie = useMemo(() => {
        return movies.find((item) => item.id === Number(params.id));
    }, [movies, params]);
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div>
                    <img className={style.large_image} src={LargeAve} alt="Large"/>
                    <div className={style.title_box}>
                        <div className={style.title_genre}>
                            Actions
                        </div>
                        <div className={style.title_name}>
                            Avengers: Endgame
                        </div>
                    </div>
                </div>
                <div className={style.film_content}>
                    <div>
                        <img className={style.film_image} src={movie.image} alt="SmallAve"/>
                    </div>
                    <div className={style.prop_list}>
                        <ReversDetailsProp label={movie.title} value={"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."} />
                        <div className={style.rate_details}>
                        <DetailsProp isRate={true} label={"Rate"} value={movie.rate} />
                        </div>
                        <DetailsProp label={"Type"} value={"Movie"} />
                        <DetailsProp label={"Release Date"} value={"2019-04-24"} />
                        <DetailsProp label={"Run time"} value={"181 min"} />
                        <DetailsProp label={"Genres"} value={movie.about}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;

