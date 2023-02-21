//import { Card } from "../";
import styles from "./Home.module.scss";
import Title from "../../Components/UI/Title/Title";
import Input from "../../Components/UI/Input/Input";
import TextGenre from "../../Components/UI/TextGenreAmount/TextGenre";
import Card from "../../Components/UI/Card/Card";
import QuestionSearch from "../../Components/UI/QuestionSearch/Question";
import PurpleButton from "../../Components/UI/Button/Button";
import { Link } from "react-router-dom";

import WidowImage from "../../assets/images/Black_widow.jpg";
import LokiImage from "../../assets/images/Loki.jpg";
import ShangChiImage from "../../assets/images/ShangChi.jpg";
import MotherImage from "../../assets/images/Mother.jpg";
import HeistImage from "../../assets/images/Heist.jpg";
import FriendsImage from "../../assets/images/Friends.jpg";
import BigBangImage from "../../assets/images/BigBang.jpg";
import TwoMenImage from "../../assets/images/TwoMen.jpg";


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

const Home = () => {
    return <div className={styles.layout_wrapper}>
        <div className={styles.layout_block}>
            <Title />
            <Input />
            <TextGenre />
            <div className={styles.card_wrapper}>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={`details/${item.id}`}>
                                <Card data={item} />
                            </Link>
                        </div>
                    );
                })}
            </div>
            <QuestionSearch />
            <PurpleButton />
        </div>
    </div>
}

export default Home;
