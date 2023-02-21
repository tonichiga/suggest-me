import Router from "./Components/Router/Router";
import { Header } from "./Widget";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";

const Container = () => {
  return (
    <div className="container">
        <Header />
        {/*<Details />*/}
        {/*<Home />*/}
        <Router />
    </div>
  );
};

export default Container;
