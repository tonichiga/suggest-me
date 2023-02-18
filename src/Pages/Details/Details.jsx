//import { Card } from "../";
import styles from "./Details.module.scss";
import Rate from "../../Components/UI/Rate/Rate";
import DetailsProps from "../../Components/UI/DetailsProps/DetailsProps";
import DetailsTitle from "../../Components/UI/DetailsTitle/DetailsTitle";

import AvengersPoster from "../../assets/images/Avengers_poster.jpg";
import AvengersImage from "../../assets/images/Avengers.jpg";



const Details = () => {
    return <div className={styles.layout_wrapper}>
        <div className={styles.layout_block}>
            <div className={styles.poster_block}><img src={AvengersPoster} className={styles.poster} alt="Poster" /></div>
            <div className={styles.details_block}>
                <img src={AvengersImage} alt="Avenger" />
                <div className={styles.props_block}>
                    <p className={styles.title}>Part of the journey is the end.</p>
                    <p className={styles.subtitle}>
                        After the devastating events of Avengers: Infinity War, the universe
                        is in ruins due to the efforts of the Mad Titan, Thanos. With the
                        help of remaining allies, the Avengers must assemble once more in
                        order to undo Thanos' actions and restore order to the universe once
                        and for all, no matter what consequences may be in store.
                    </p>
                    <Rate rate={8.3} />
                        <DetailsProps label={"Type"} value={"Movie"} />
                        <DetailsProps label={"Release Date"} value={"2019-04-24"} />
                        <DetailsProps label={"Run time"} value={"181 min"} />
                        <DetailsProps
                            label={"Genres"}
                            value={"Adventure,  Science Fiction, Action"}
                        />
                </div>
                <div className={styles.title_absolute}><DetailsTitle /></div>
            </div>
        </div>
    </div>
}

export default Details;
