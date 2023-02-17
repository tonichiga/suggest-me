import s from "./Layout.module.scss";
import HeadTitle from "../HeadTitle/HeadTitle";
import Input from "../../Components/UI/Input/Input";
import TextGenre from "../../Components/TextGenre/TextGenre";
import Card from "../Card/Card";
import QuestionSearch from "../../Components/UI/QuestionSearch/QuestionSearch";
import PurpleButton from "../../Components/UI/PurpleButton"; 

import WidowImage from "../../assets/images/BlackW.jpg";
import LokiImage from "../../assets/images/Loki.jpg";
import ShangChiImage from "../../assets/images/ShangChi.jpg";
import MotherImage from "../../assets/images/Howmet.jpg";
import HeistImage from "../../assets/images/Money.jpg";
import FriendsImage from "../../assets/images/Friends.jpg";
import BigBangImage from "../../assets/images/BigBang.jpg";
import TwoMenImage from "../../assets/images/Two.jpg";

const data = [
    {
        id: 1,
        title: "Black Widow",
        background: WidowImage,
        rate: 9.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        background: ShangChiImage,
        rate: 8.9,
    },
    {
        id: 3,
        title: "Loki",
        background: LokiImage,
        rate: 6.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        background: MotherImage,
        rate: 9.3,
    },
    {
        id: 5,
        title: "Money Heist",
        background: HeistImage,
        rate: 8.5,
    },
    {
        id: 6,
        title: "Friends",
        background: FriendsImage,
        rate: 8.9,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        background: BigBangImage,
        rate: 10,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        background: TwoMenImage,
        rate: 10,
    },
];

const Layout = () => {
    return <div className={s.layout_wrapper}>
                 <div className={s.layout_block}>
                    <HeadTitle/>
                    <Input/>
                    <TextGenre />
                    <div className={s.card_wrapper}>
                        {data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <Card data={item}/>
                                </div>
                            );
                        })}
                    </div>
                    <QuestionSearch />
                    <PurpleButton/>
                </div>
        </div>
}

export default Layout;