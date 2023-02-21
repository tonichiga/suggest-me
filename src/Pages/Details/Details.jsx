//import { Card } from "../";
import styles from "./Details.module.scss";
import Rate from "../../Components/UI/Rate/Rate";
import DetailsProps from "../../Components/UI/DetailsProps/DetailsProps";
import DetailsTitle from "../../Components/UI/DetailsTitle/DetailsTitle";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";


/*Image import*/
import AvengersPoster from "../../assets/images/Avengers_poster.jpg";
import AvengersImage from "../../assets/images/Avengers.jpg";
import WidowImage from "../../assets/images/Black_widow.jpg";
import LokiImage from "../../assets/images/Loki.jpg";
import ShangChiImage from "../../assets/images/ShangChi.jpg";
import MotherImage from "../../assets/images/Mother.jpg";
import HeistImage from "../../assets/images/Heist.jpg";
import FriendsImage from "../../assets/images/Friends.jpg";
import BigBangImage from "../../assets/images/BigBang.jpg";
import TwoMenImage from "../../assets/images/TwoMen.jpg";
////////////////////////////////////////



const data = [
    {
        id: 1,
        title: "Black Widow",
        background: WidowImage,
        rate: 6.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        background: ShangChiImage,
        rate: 7.9,
    },
    {
        id: 3,
        title: "Loki",
        background: LokiImage,
        rate: 8.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        background: MotherImage,
        rate: 8.3,
    },
    {
        id: 5,
        title: "Money Heist",
        background: HeistImage,
        rate: 8.3,
    },
    {
        id: 6,
        title: "Friends",
        background: FriendsImage,
        rate: 8.8,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        background: BigBangImage,
        rate: 8.1,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        background: TwoMenImage,
        rate: 7,
    },
];


const Details = () => {

    const [movies, _] = useState(data);

    const params = useParams();

    const movie = useMemo(() => {
        return movies.find((item) => item.id === Number(params.id));
    },[movies,params]);

    return <div className={styles.layout_wrapper}>
        <div className={styles.layout_block}>
            <div className={styles.poster_block}><img src={AvengersPoster} className={styles.poster} alt="Poster" /></div>
            <div className={styles.details_block}>
                <img className={styles.detailImage } src={movie.background} alt="Images" />
                <div className={styles.props_block}>
                    <p className={styles.title}>Part of the journey is the end.</p>
                    <p className={styles.subtitle}>
                        After the devastating events of Avengers: Infinity War, the universe
                        is in ruins due to the efforts of the Mad Titan, Thanos. With the
                        help of remaining allies, the Avengers must assemble once more in
                        order to undo Thanos' actions and restore order to the universe once
                        and for all, no matter what consequences may be in store.
                    </p>
                    <Rate rate={movie.rate} />
                        <DetailsProps label={"Type"} value={"Movie"} />
                        <DetailsProps label={"Release Date"} value={"2019-04-24"} />
                        <DetailsProps label={"Run time"} value={"181 min"} />
                        <DetailsProps
                            label={"Genres"}
                            value={"Adventure,  Science Fiction, Action"}
                        />
                </div>
                <div className={styles.title_absolute}><DetailsTitle data={movie} /></div>
            </div>
        </div>
    </div>
}

export default Details;
