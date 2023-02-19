import { Header, Footer, Layout, Info, Buttons} from "./Widget";
import  './assets/styles/global.scss'
import {Home, Details} from './Pages'  //Home from './Pages/Home/Home'
import DetailsTitle from "./Components/UI/DetailsTitle/DetailsTitle";
// import Details from './Pages/Details/Details'
const Container = () => {
  return (
    <div className='container'>
        <div className="our-container">
            <Header />
            <Details/>
            {/*<DetailsTitle/>*/}
            {/*<Home/>*/}
            {/*<Footer />*/}
    </div>
    </div>
  );
};

export default Container;
