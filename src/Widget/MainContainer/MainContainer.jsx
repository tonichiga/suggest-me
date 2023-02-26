import Card from "../Card/Card";
import InputRadio from "../InputRadio/InputRadio";
import Title from "../Title/Title";
import s from "./MainContainer.module.scss";

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

const MainContainer = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.content_head}>
          <div className={s.title_wrapper}>
            <Title />
          </div>
          <InputRadio />
        </div>
        <ul className={s.list}>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <Card data={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainContainer;
