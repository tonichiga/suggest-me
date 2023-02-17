import HeadTitle from "../HeadTitle/HeadTitle";
import s from "./MainCont.module.scss" ;
import Input from "../../Components/UI/Input/Input";

const MainCont = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
             <div className={s.content_h}>
                <div className={s.content_w}>
            <HeadTitle/>
         </div>
            <Input/>
            </div>
            <ul className={s.list}>
                <li></li>
             </ul>
            </div>
        </div>
    );
};
 
export default MainCont;