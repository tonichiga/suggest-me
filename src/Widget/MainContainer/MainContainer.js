import React from 'react';
import Header from "../Header/Header";
import Info from "../Info/Info";
import Buttons from "../Buttons/Buttons";
import s from './MainContainer.module.css'
import Card from "../Card/Card";
import data from './data'
import Footer from "../Footer/Footer";



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
                <div className={s.any}>
                    <span className={s.any}>Any(120)</span>
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
                <Footer/>
            </div>
        </div>
    );
};

export default MainContainer;