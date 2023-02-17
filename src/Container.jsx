import { Header } from "./Widget";
import Layout from "./Widget/Layout/Layout";
import MainCont from "./Widget/MainCont/MainCont";

const Container = () => {
  return (
    <div className="container">
      <Header /> 
      <MainCont/>
      <Layout/>
    </div>
  );
};

export default Container;
