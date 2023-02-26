import { Rate } from "../";
import s from "./DetailsProp.module.scss";

const DetailsProps = ({ isRate, label, value }) => {
  if (!value) return null;

  return (
    <div className={s.detail_prop}>
      <span>{label}</span>
      {isRate ? <Rate rate={value} /> : <span>{value}</span>}
    </div>
  );
};

export default DetailsProps;
