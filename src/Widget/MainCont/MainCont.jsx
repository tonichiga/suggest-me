import style from "./MainCont.module.scss";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Input from "../Input/Input";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp"
import ReversDetailsProp from "../../Components/UI/ReversDetailsProp/ReversDetailsProp"

import BlackWidow from "../../assets/images/BlackWidow.jpg"
import ShangChi from "../../assets/images/ShangChi.jpg"
import Loki from "../../assets/images/Loki.jpg"
import Mother from "../../assets/images/Mother.jpg"
import MoneyHeist from "../../assets/images/MoneyHeist.jpg"
import Friends from "../../assets/images/Friends.jpg"
import BigBang from "../../assets/images/BigBang.jpg"
import TwoMen from "../../assets/images/TwoMen.jpg"
import LargeAve from "../../assets/images/LargeAvengers.jpg"
import SmallAve from "../../assets/images/SmallAvengers.jpg"

const data = [
    {
        id: 1,
        title: "Black Widow",
        image: BlackWidow,
        rate: 6.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        image: ShangChi,
        rate: 7.9,
    },
    {
        id: 3,
        title: "Loki",
        image: Loki,
        rate: 8.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        image: Mother,
        rate: 8.3,
    },
    {
        id: 5,
        title: "Money Heist",
        image: MoneyHeist,
        rate: 8.3,
    },
    {
        id: 6,
        title: "Friends",
        image: Friends,
        rate: 8.8,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        image: BigBang,
        rate: 8.1,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        image: TwoMen,
        rate: 7,
    },
];
const MainCont = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                {/*<Title />*/}
                {/*<div className={style.input_checker}>*/}
                {/*    <Input />*/}
                {/*</div>*/}
                {/*<div className={style.list_info}>*/}
                {/*    Any <span>(120)</span>*/}
                {/*</div>*/}
                {/*<ul className={style.list}>*/}
                {/*    {data.map((item) => {*/}
                {/*        return (*/}
                {/*            <li key={item.id}>*/}
                {/*                <Card data={item} />*/}
                {/*            </li>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</ul>*/}
                {/*<div className={style.bottom}>*/}
                {/*    <div>Didin’t find the one you looking for?</div>*/}
                {/*    <button>Suggest more</button>*/}
                {/*</div>*/}


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
                        <img className={style.film_image} src={SmallAve} alt="SmallAve"/>
                    </div>
                    <div className={style.prop_list}>
                        <ReversDetailsProp label={"Part of the journey is the end."} value={"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."} />
                        <DetailsProp isRate={true} label={"Rate"} value={"7.8"} />
                        <DetailsProp label={"Type"} value={"Movie"} />
                        <DetailsProp label={"Release Date"} value={"2019-04-24"} />
                        <DetailsProp label={"Run time"} value={"181 min"} />
                        <DetailsProp
                            label={"Genres"}
                            value={"Adventure,  Science Fiction, Action"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainCont;

