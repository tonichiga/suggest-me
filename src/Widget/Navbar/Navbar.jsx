import s from "./Navbar.module.scss";


// навбар который при наведении подсвечивается

const Navbar = () => {
    return <div className={s.link_block}>
                <a href="/">Movies</a>
                <a href="/">TV Shows</a>
                <a href="/">Suggest me &rarr;</a>
           </div>
}

export default Navbar;