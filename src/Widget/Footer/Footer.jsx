import styles from "./Footer.module.scss";

const Footer = () => {
  return (
      <div className={styles.footer}>
          <p className={styles.ptext}>Didin’t find the one you looking for?</p>
          <button className={styles.footerbutton}>Suggest more</button>
            {/*<footer className={styles.footer}></footer>*/}
      </div>
  );
};

export default Footer;
