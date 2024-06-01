import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.containerHero}>
      <div className={css.containerUnlock}>
        <h1 className={css.title}>
          Unlock your potential with the best{" "}
          <span className={css.spanLanguage}>language</span> tutors
        </h1>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button type="button" className={css.button}>
          Get started
        </button>
      </div>
      <div className={css.containerImg}></div>
      <div className={css.containerList}>
        <ul className={css.list}>
          <li className={css.itemList}>
            <p className={css.textList}>32,000 +</p>
            <span className={css.spanList}>Experienced tutors</span>
          </li>
          <li className={css.itemList}>
            <p className={css.textList}>300,000 +</p>
            <span className={css.spanList}>5-star tutor reviews</span>
          </li>
          <li className={css.itemList}>
            <p className={css.textList}>120 +</p>
            <span className={css.spanList}>Subjects taught</span>
          </li>
          <li className={css.itemList}>
            <p className={css.textList}>200 +</p>
            <span className={css.spanList}>Tutor nationalities</span>
          </li>
        </ul>
        <p>test</p>
      </div>
    </div>
  );
};

export default Hero;
