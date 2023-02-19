import { DetailsTitle } from "../../Components/UI";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp";
import s from "./Details.module.scss";
import posterImg from "../../assets/images/poster.jpeg";
import { useParams } from "react-router-dom";

const Details = () => {
  const navigate = useParams();

  console.log(navigate);
  return (
    <div className={s.details_container}>
      <DetailsTitle />
      <div className={s.content}>
        <img src={posterImg} alt="poster" />
        <div className={s.detail_block}>
          <p className={s.title}>Part of the journey is the end.</p>
          <p className={s.description}>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </p>

          <div className={s.prop_list}>
            <DetailsProp isRate={true} label={"Rate"} value={"7.8"} />
            <DetailsProp label={"Type"} value={"Movie"} />
            <DetailsProp label={"Release Date"} value={"2019-04-24"} />
            <DetailsProp label={"Run time"} value={"181 min"} />
            <DetailsProp
              label={"Genres"}
              value={"Adventure,  Science Fiction, Action"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
