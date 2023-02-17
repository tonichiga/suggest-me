import s from "./NameFilm.module.scss";

const NameFilm = () => {
    return ( 
        <div className={s.name_film}>
                        <span className={s.category}>Action</span>
                        <h1 className={s.film}>Avengers: Endgame</h1>
        </div>
     );
}
 
export default NameFilm;