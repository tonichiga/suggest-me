// import Home from "./Pages/Home/Home";
import { Header } from "./Widget";
import {Details} from "./Pages";



const Container = () => {
  return (
    <div className="container">
      <Header /> 
      {/* <Home/> */}
     <Details/>
    </div>
  );
};

export default Container;
