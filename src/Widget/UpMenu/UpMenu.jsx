import s from "./UpMenu.module.scss";

const Menu = () => {
    return (
        <div className={s.navbar}>
            <a href="/">Movie</a>
            <a href="/">TV Show</a>
            <a href="/">Suggest me</a>
        </div>
    );
};

export default Menu;