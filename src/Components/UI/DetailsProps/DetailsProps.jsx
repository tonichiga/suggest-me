import s from "./DetailsProps.module.scss";


const DetailsProps = ({ label, value }) => {
    return (
        <div className={s.DetailsProp}>
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}

export default DetailsProps;