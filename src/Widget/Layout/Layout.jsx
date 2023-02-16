//import { Card } from "../";
import styles from "./Layout.module.scss";
import Title from "../../Components/UI/Title/Title";
import Input from "../../Components/UI/Input/Input";
import TextGenre from "../../Components/UI/TextGenreAmount/TextGenre";
import Card from "../../Components/UI/Card/Card";

/*const arrayGenerator = (length) => {
  let array = [];
  for (let i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};

const Layout = () => {
  const mockData = arrayGenerator(10);

    return (
    <div className={styles.layout}>
      {mockData.map((element) => {
        return <Card data={element} />;
      })}
    </div>
  );
};*/

const data = [
    {
        id: 1,
        title: "GREYHOUND",
        rate: 4,
    },
    {
        id: 2,
        title: "Black Widow",
        rate: 9,
    },
    {
        id: 3,
        title: "ONCE UPON A TIME... IN HOLLYWOOD ",
        rate: 5.5,
    },
    {
        id: 4,
        title: "GREYHOUND",
        rate: 3.6,
    },
    {
        id: 5,
        title: "LITTLE WOMEN ",
        rate: 7,
    },
    {
        id: 6,
        title: "DAVID CROSBY: REMEMBER MY NAME",
        rate: 9,
    },
    {
        id: 7,
        title: "AQUARELA",
        rate: 6.5,
    },
    {
        id: 8,
        title: "LITTLE WOMEN ",
        rate: 7.4,
    },
];

const Layout = () => {
    return <div className={styles.layout}>
                <Title />
                <Input />
                <TextGenre />
                <div className={styles.card_wrapper}>
                    {data.map((item) => {
                        return (
                            <div key={item.id}>
                                <Card data={item} />
                            </div>
                        );
                    })}
                </div>
                
        </div>
}

export default Layout;
