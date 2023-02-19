import Router from "./Components/Router/Router";
import { Details } from "./Pages";
import { Header } from "./Widget";

const Container = () => {
  return (
    <div className="container">
      <Header />
      {/* <Home/> */}
      {/* <Details /> */}

      <Router />
    </div>
  );
};

export default Container;
