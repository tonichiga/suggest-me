import s from "./Info.module.scss";

const Info = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Suggest.me</h1>
            <p className={s.description}>
                Discover new and exciting movies with Suggest.me!
                <br />
                <br />
                Our platform generates a personalized list of films for you to enjoy,
                making it easy to find your next favorite.
                <br />
                <br />
                Give it a try and see what the algorithm suggests for you
            </p>
        </div>
    );
};

export default Info;