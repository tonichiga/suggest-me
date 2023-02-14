import { Card } from "../";
import styles from "./Layout.module.scss";
import Input from "../../Components/UI/input/Input";
import Button from "../../Components/UI/Button/Button"


const arrayGenerator = (length) => {
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
      {/* <input /> */}
      <Button />
    </div>
  );
};

export default Layout;
