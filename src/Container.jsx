import { Header, Footer, Layout, Info, Buttons} from "./Widget";
import MainContainer from "./Widget/MainContainer/MainContainer";
import global from './assets/styles/global.scss'
// import Home from './Pages/Home'
// import Details from "../../Pages/Details/Details";

const Container = () => {
  return (
    <div className={global.global}>
        <div className="our-container">
            <Header />
            {/*<Home/>*/}
            <MainContainer/>

      {/*<Footer />*/}
    </div>
    </div>
  );
};

export default Container;
