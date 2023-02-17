import { Header, Footer, Layout, Info, Buttons} from "./Widget";
import MainContainer from "./Widget/MainContainer/MainContainer";
import global from './assets/styles/global.scss'
const Container = () => {
  return (
    <div className={global.global}>
        <div className="our-container">
      <Header />
        <Info/>
        <Buttons/>
      <Layout />
      <Footer />
    </div>
    </div>
  );
};

export default Container;
