import s from "./DetailsTitle.module.scss";

const DetailsTitle = ({ title, backdrop }) => {
  return (
    <div
      className={s.container}
      // style={{ backgroundImage: `url(${backdrop})` }}
    >
      <p>{title}</p>

      <img src={backdrop} alt="poster" />
    </div>
  );
};

export default DetailsTitle;
