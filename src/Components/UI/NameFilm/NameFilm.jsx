import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./NameFilm.module.scss";

const data = [
    {
      id: 1,
      title: "GREYHOUND",
      about: "Drama, Action | 2020",
      rate: 4,
    },
    {
      id: 2,
      title: "Black Widow",
      about: "Drama, Comedy | 2000",
      rate: 9,
    },
    {
      id: 3,
      title: "ONCE UPON A TIME... IN HOLLYWOOD ",
      about: "Drama, Action | 2011",
      rate: 5.5,
    },
    {
      id: 4,
      title: "GREYHOUND",
      about: "Drama, Action | 2020",
      rate: 3.6,
    },
    {
      id: 5,
      title: "LITTLE WOMEN ",
      about: "Drama | 2019",
      rate: 7,
    },
    {
      id: 6,
      title: "DAVID CROSBY: REMEMBER MY NAME",
      about: "Action | 2000",
      rate: 9,
    },
    {
      id: 7,
      title: "AQUARELA",
      about: "Drama, Action | 2020",
      rate: 6.5,
    },
    {
      id: 8,
      title: "LITTLE WOMEN ",
      about: "Drama, Action | 2020",
      rate: 7.4,
    },
  ];

const NameFilm = () => {
    
    const [movies, _] = useState(data);

    const params = useParams();

    const movie = useMemo(() => {
        return movies.find((item) => item.id ===Number(params.id));
    }, [movies, params]);

    return ( 
        <div className={s.name_film}>
                        <span className={s.category}>{movie.about}</span>
                        <h1 className={s.film}>{movie.title}</h1>
        </div>
     );
}
 
export default NameFilm;