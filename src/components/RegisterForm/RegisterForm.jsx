import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import s from "./RegisterForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome to our app, ${res.user.name}`);
      });
    options.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });

  return (
    <div className={s.form}>
      <h1 className={s.formTitle}>Welcome</h1>
      <p className={s.formText}>Let's create your account!</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className={s.formList}>
            <Field name="name" type="text" placeholder="Name" className={s.formField} />
            <ErrorMessage name="name" component="div" className={s.formError} />
          </div>

          <div className={s.formList}>
            <Field name="email" type="email" placeholder="Email" className={s.formField} />
            <ErrorMessage name="email" component="div" className={s.formError} />
          </div>

          <div className={s.formList}>
            <Field name="password" type="password" placeholder="Password" className={s.formField} />
            <ErrorMessage name="password" component="div" className={s.formError} />
          </div>

          <button type="submit" className={s.formButton}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
