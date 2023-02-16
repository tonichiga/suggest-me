import styles from "./MainCont.module.scss";
import Card from "../Card/Card";


const data = [
    {
        id: 1,
        title: "Black Widow",
        image: "BlackWidow",
        rate: 6.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        image: "../../assets/images/ShangChi",
        rate: 7.9,
    },
    {
        id: 3,
        title: "Loki",
        image: "../../assets/images/Loki",
        rate: 8.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        image: "../../assets/images/Mother",
        rate: 8.3,
    },
    {
        id: 5,
        title: "Money Heist",
        image: "../../assets/images/MoneyHeist",
        rate: 8.3,
    },
    {
        id: 6,
        title: "Friends",
        image: "../../assets/images/Friends",
        rate: 8.8,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        image: "../../assets/images/BigBang",
        rate: 8.1,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        image: "../../assets/images/TwoMen",
        rate: 7,
    },
];
const MainCont = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.content_head}>
                    <div className={s.title_wrapper}>
                        <Title />
                    </div>
                    <InputRadio />
                </div>
                <ul className={s.list}>
                    {data.map((item) => {
                        return (
                            <li key={item.id}>
                                <Card data={item} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default MainCont;

