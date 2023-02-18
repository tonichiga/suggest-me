import { Header } from "./Widget";
import {Home} from "./Pages";
import { Details } from "./Pages";
import s from "./assets/styles/global.scss";

const Container = () => {
  return (
    <div className="container">
      <Header />
          {/*<Home />*/}
          <Details/>
    </div>
  );
};

export default Container;
