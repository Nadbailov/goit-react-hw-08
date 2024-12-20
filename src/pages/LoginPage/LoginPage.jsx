import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={s.loginPage}>
      <div className={s.loginContent}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
