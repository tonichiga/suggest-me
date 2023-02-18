import s from "./Details.module.scss";
import Star from "../../Components/UI/Star/Star";
import DetailsProps from "../../Components/UI/DetailsProps/DetailsProps";
import Block from "../../Components/UI/Block/Block";


import Avengers from "../../assets/Images/Avengers.svg";
import AvengersPoster from "../../assets/Images/AvengersPoster.svg";

const Details = () => {
    return <div className={s.MainContainer}>
        <div className={s.layout_block}>
            <div><img src={Avengers} className={s.poster} alt="Poster" /></div>

            <div className={s.AboutFilm}>
                <Block />

            <div className={s.details_block}>
                <img src={AvengersPoster} alt="Avenger" />
                <div className={s.props_block}>
                    <p className={s.title}>Part of the journey is the end.</p>
                    <p className={s.Paragraph}>
                        After the devastating events of Avengers: Infinity War, the universe
                        is in ruins due to the efforts of the Mad Titan, Thanos. With the
                        help of remaining allies, the Avengers must assemble once more in
                        order to undo Thanos' actions and restore order to the universe once
                        and for all, no matter what consequences may be in store.
                    </p>
                    <Star rate={8.3} />
                    <DetailsProps label={"Type"} value={"Movie"} />
                    <DetailsProps label={"Release Date"} value={"2019-04-24"} />
                    <DetailsProps label={"Run time"} value={"181 min"} />
                    <DetailsProps
                        label={"Genres"}
                        value={"Adventure,  Science Fiction, Action"}
                    />
                </div>
                </div>
                </div>
        </div>
    </div>
}

export default Details;