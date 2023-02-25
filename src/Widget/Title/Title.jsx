import style from "./Title.module.scss";
const Title = () => {
    return (
        <div>
            <h1>Suggest.me</h1>
            <div className={style.title_text}>Discover new and exciting movies with Suggest.me!</div>
            <br/>
            <div className={style.title_text}>Our platform generates a personalized list of films for you to enjoy,<br/>
                making it easy to find your next favorite.</div>
            <br/>
            <div className={style.title_text}>Give it a try and see what the algorithm suggests for you 😉</div>
        </div>
    );
};

export default Title;