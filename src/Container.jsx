// import Home from "./Pages/Home/Home";
import { Header } from "./Widget";
// import {Details} from "./Pages";
import Router from "./Components/Router/Router";



const Container = () => {
  return (
    <div className="container">
      <Header /> 
      {/* <Home/> */}
     {/* <Details/> */}
     <Router/>

    </div>
  );
};

export default Container;
