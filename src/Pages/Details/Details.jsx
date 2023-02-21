import HeadPoster from "../../Components/UI/HeadPoster/HeadPoster";
import s from "./Details.module.scss";
import NameFilm from "../../Components/UI/NameFilm/NameFilm";
import poster from "../../assets/small_poster/ave.png";
import DetailsAboutFilm from "../../Components/UI/DetailsAboutFilm/DetailsAboutFilm";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";


const data = [
    {
        id: 1,
        title: "Black Widow",
        about: "Drama, Comedy | 2000",
        rate: 9.8,
    },
    {
        id: 2,
        title: "Shang Chi",
        about: "Action | 2000",
        rate: 8.9,
    },
    {
        id: 3,
        title: "Loki",
        about: "Action | 2000",
        rate: 6.4,
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        about: "Action | 2000",
        rate: 9.3,
    },
    {
        id: 5,
        title: "Money Heist",
        about: "Action | 2000",
        rate: 8.5,
    },
    {
        id: 6,
        title: "Friends",
        about: "Drama, Comedy | 2000",
        rate: 8.9,
    },
    {
        id: 7,
        title: "The Big Bang Theory",
        about: "Drama, Comedy | 2000",
        rate: 10,
    },
    {
        id: 8,
        title: "Two And a Half Men",
        about: "Drama, Comedy | 2000",
        rate: 10,
    },
];



const Details = () => {

    const [movies,_] = useState(data);

    const params = useParams();

    const movie = useMemo(() => {


        return movies.find((item) => item.id === Number(params.id));
    }, [movies,params]);



    return ( <div className={s.main}>
        <HeadPoster/>
        <div className={s.about_film}>
            <NameFilm />
            <div className={s.details}>
                <img src={poster} alt="poster" />
                <div className={s.detail_block}>
                    <p className={s.title}>{movie.title}</p>
                    <p className={s.description}>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>

                  

                    <div className={s.about_list}>
                    <DetailsAboutFilm isRate={true} value={movie.rate} />
                    <DetailsAboutFilm label={"Type"} value={"Movie"} />
                    <DetailsAboutFilm label={"Release Date"} value={"2019-04-24"} />
                    <DetailsAboutFilm label={"Run time"} value={"181 min"} />
                    <DetailsAboutFilm label={"Genres"} value={movie.about} />
            </div>
                </div>
            </div>
        </div>
    </div>
 );
}
 
export default Details;