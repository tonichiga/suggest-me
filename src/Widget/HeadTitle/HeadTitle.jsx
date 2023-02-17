import s from "./HeadTitle.module.scss" ;

const HeadTitle = () => {
    return <div className={s.htitle_cont}>
        <h1 className={s.headline}>Suggest.me</h1>
        <p className={s.inside}>
        Discover new and exciting movies with Suggest.me! 
        <br/>
        <br/>
        Our platform generates a personalized list of films for you to enjoy,
        <br/> 
        making it easy to find your next favorite. 
        <br/>
        <br/>
        Give it a try and see what the algorithm suggests for you 😉
        </p>
    </div>;
}
 
export default HeadTitle;