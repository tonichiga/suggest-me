import s from "./HeadPoster.module.scss";

const HeadPoster = ({backdrop}) => {
    return ( 
    <div className={s.head_poster}>
        <img src={backdrop} alt="" />
         </div>
        
    );
}
 
export default HeadPoster;