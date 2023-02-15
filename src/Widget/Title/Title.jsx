import s from "./Title.module.scss";

const Title = () => {
  return (
    <div className={s.title_container}>
      <h1 className={s.title}>Filmoteka</h1>
      <p className={s.description}>
        Discover new and exciting movies with Suggest.me!
        <br />
        <br />
        Our platform generates a personalized list of films for you to enjoy,
        making it easy to find your next favorite.
        <br />
        <br />
        Give it a try and see what the algorithm suggests for you 😉
      </p>
    </div>
  );
};

export default Title;
