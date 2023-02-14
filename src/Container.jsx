import { Header, Footer, Layout, Info, Buttons} from "./Widget";

const Container = () => {
  return (
    <div className="container">
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
