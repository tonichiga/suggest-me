import HeadPoster from "../../Components/UI/HeadPoster/HeadPoster";
import s from "./Details.module.scss";
import NameFilm from "../../Components/UI/NameFilm/NameFilm";
import poster from "../../assets/small_poster/ave.png";
import DetailsAboutFilm from "../../Components/UI/DetailsAboutFilm/DetailsAboutFilm";


const Details = () => {
    return ( <div className={s.main}>
        <HeadPoster/>
        <div className={s.about_film}>
            <NameFilm />
            <div className={s.details}>
                <img src={poster} alt="poster" />
                <div className={s.detail_block}>
                    <p className={s.title}>Part of the journey is the end.</p>
                    <p className={s.description}>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>

                  

                    <div className={s.about_list}>
                    <DetailsAboutFilm isRate={true} value={"8.3"} />
                    <DetailsAboutFilm label={"Type"} value={"Movie"} />
                    <DetailsAboutFilm label={"Release Date"} value={"2019-04-24"} />
                    <DetailsAboutFilm label={"Run time"} value={"181 min"} />
                    <DetailsAboutFilm label={"Genres"} value={"Adventure,  Science Fiction, Action"} />
            </div>
                </div>
            </div>
        </div>
    </div>
 );
}
 
export default Details;