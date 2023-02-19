import React from 'react';
import Header from "../../Widget/Header/Header";
import Info from '../../Widget/Info/Info'
import Buttons from "../../Widget/Buttons/Buttons";
import s from './Home.module.scss'
import Card from "../../Widget/Card/Card";
import data from './data'
import Footer from "../../Widget/Footer/Footer";



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
                <span className={s.any}>Any(120)</span>
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