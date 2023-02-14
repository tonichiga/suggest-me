import { Header, Footer, Layout, Info, Buttons} from "./Widget";

const Container = () => {
  return (
    <div className="container">
      <Header />
        <Info/>
        <Buttons/>
      <Layout />
      <Footer />
    </div>
  );
};

export default Container;
