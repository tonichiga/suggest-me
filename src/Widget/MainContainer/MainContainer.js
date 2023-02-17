import React from 'react';
import Header from "../Header/Header";
import Info from "../Info/Info";
import Buttons from "../Buttons/Buttons";
import s from './MainContainer.module.css'
import Card from "../Card/Card";

const data = [
    {
        id: 1,
        title: "Black Widow",
        rate: 6.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        rate: 9,
    },
    {
        id: 3,
        title: "Loki",
        rate: 5.5,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        rate: 3.6,
    },
    {
        id: 5,
        title: "Money Heist",
        rate: 7,
    },
    {
        id: 6,
        title: "Friends",
        rate: 9,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        rate: 6.5,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        rate: 7.4,
    },
    // {
    //     id: 9,
    //     title: "Hi",
    //     rate: 1.4,
    // },
];

// function MainContainer(props) {
//     return (
//         <div className={s.main}>
//             <Header/>
//             <Info />
//             <Buttons/>
//         </div>
//     );
// }

const MainContainer = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.content_head}>
                    <div className={s.title_wrapper}>
                        <Info />
                    </div>
                    <Buttons />
                </div>
                <ul className={s.list} >
                    {data.map((item) => {
                        return (
                            <li key={item.title}>
                                <Card data={item}  />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MainContainer;