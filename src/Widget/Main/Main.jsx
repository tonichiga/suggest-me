import s from "./Main.module.scss";
import Info from "../Info/Info";
import InputRadio from "../InputRadio/InputRadio";
import Card from "../Card/Card";
import Button from "../../Components/UI/Button/Button";
import Text from "../../Components/UI/Text/Text";


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
        rate: 6.8,
        image: WidowPoster,

    },
    {
        id: 2,
        title: "Shang Chi",
        rate: 7.9,
        image: ChiPoster,
    },
    {
        id: 3,
        title: "Loki",
        rate: 8.4,
        image: LokiPoster,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        rate: 8.3,
        image: MotherPoster,
    },
    {
        id: 5,
        title: "Money Heist ",
        rate: 8.3,
        image: HeistPoster,
    },
    {
        id: 6,
        title: "Friends",
        rate: 8.8,
        image: FriendsPoster,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        rate: 8.1,
        image: BangPoster,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        rate: 7,
        image: MenPoster,
    },
];

const Main = () => {
    return (
        <div className={s.MainContainer}>
            <Info />
            <InputRadio />
            <Text />
            <ul className={s.list}>
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            <Card data={item} />
                        </li>
                    );
                })}
            </ul>
            <div className={s.LastButton}>
                <h3 className={s.LastMessage}>Didn’t find the one you looking for?</h3>
                <Button />
            </div>
        </div>


    )
};
export default Main;