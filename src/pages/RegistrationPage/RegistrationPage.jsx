import RegisterForm from "../../components/RegisterForm/RegisterForm";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={s.registerPage}>
      <div className={s.registerContent}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
