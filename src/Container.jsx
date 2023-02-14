import { Header, Footer, Layout, Info } from "./Widget";

const Container = () => {
  return (
    <div className="container">
      <Header />
        <Info/>
      <Layout />
      <Footer />
    </div>
  );
};

export default Container;
