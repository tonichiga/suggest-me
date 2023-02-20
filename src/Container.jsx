import { Header} from "./Widget";
import  './assets/styles/global.scss'
import Router from "./Components/Router/Router";
// import Details from './Pages/Details/Details'
const Container = () => {
  return (
    <div className='container'>
        <div className="our-container">
            <Header />
            <Router/>
            {/*<Details/>*/}
            {/*<Home/>*/}
    </div>
    </div>
  );
};

export default Container;
