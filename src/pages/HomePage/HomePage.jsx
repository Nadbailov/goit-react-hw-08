import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.home}>
      <div className={s.homeCont}>
        <h1 className={s.homeTitle}>Welcome to Phone Book</h1>
        <p className={s.homeText}>Manage your contacts easily and effectively</p>
      </div>
    </div>
  );
};

export default HomePage;
