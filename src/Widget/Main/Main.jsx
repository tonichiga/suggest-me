import s from "./Main.module.scss";
import Info from "../Info/Info";
import InputRadio from "../InputRadio/InputRadio";

const FilmsList = [
    {
        id: 1,
        title: "Black Widow",
        rate: 6.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        rate: 7.9,
    },
    {
        id: 3,
        title: "Loki",
        rate: 8.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        rate: 8.3,
    },
    {
        id: 5,
        title: "Money Heist",
        rate: 8.3,
    },
    {
        id: 6,
        title: "Friends",
        rate: 8.8,
    },
    {
        id: 7,
        title: "Big Bang Theory",
        rate: 8.1,
    },
    {
        id: 8,
        title: "Two And A Half Man",
        rate: 7,
    },
];

const Main = () => {
    return (
        <div className={s.MainContainer}>
            <Info />
            <InputRadio />
            <div>
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


    )
};

export default Main;