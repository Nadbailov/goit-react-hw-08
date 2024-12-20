import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import toast from "react-hot-toast";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string()
      .matches(
        /^[\d\(\)\-\s]+$/,
        "Phone number is not valid. Only numbers, spaces, dashes and parentheses are allowed."
      )
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    const addNewContact = {
      name: values.name,
      number: values.number,
    };

    const duplicateContact = filteredContacts.some((contact) => contact.number === addNewContact.number);
    if (duplicateContact) {
      toast.error("This contact is already in your phone book!");

      return;
    }

    dispatch(addContact(addNewContact))
      .then(() => {
        toast.success("Contact successfully added to your phone book!");
      })
      .catch(() => {
        toast.error("Contact has not been added to your phone book!");
      });
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className={s.form}>
          <div className={s.formList}>
            <label htmlFor="name">Name</label>
            <Field className={s.inputList} name="name" type="text" id="name" placeholder="Enter first and last name!" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>

          <div className={s.formList}>
            <label htmlFor="number">Number</label>
            <Field
              className={s.inputList}
              type="text"
              name="number"
              id="number"
              placeholder="Enter the phone number!"
            />
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>

          <button className={s.addButton} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
