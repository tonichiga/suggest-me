import HeadTitle from "../HeadTitle/HeadTitle";
import s from "./MainCont.module.scss" ;
import Input from "../../Components/UI/Input/Input";
import Card from "../Card/Card";
import QuestionSearch from "../../Components/UI/QuestionSearch/QuestionSearch";
import PurpleButton from "../../Components/UI/PurpleButton/PurpleButton";


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

const MainCont = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
             <div className={s.content_h}>
                <div className={s.content_w}>
            <HeadTitle/>
         </div>
            <Input/>
            <div className={s.any}>
                    Any <span>(120)</span>
                </div>
            <div className={s.card_wrapper}>
                        {data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <Card data={item}/>
                                </div>
                            );
                        })}
                    </div>
                    
            </div> 
            </div>
            <div className={s.bottom}>
                    <p>Didn`t find the one you looking for?</p>
                    <button>Suggest more</button>
                </div>
        </div>
    );
};
 
export default MainCont;