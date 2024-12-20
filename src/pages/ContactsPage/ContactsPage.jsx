import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import { selectError, selectFilteredContacts, selectLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={s.addForm}>
      <div className={s.addContent}>
        <h1 className={s.addTitle}>Phone book</h1>
        <ContactForm />
      </div>

      {isLoading && (
        <div className={s.loader}>
          <Loader />
        </div>
      )}
      {isError && (
        <div className={s.loader}>
          <h2>Error...</h2>
        </div>
      )}

      {filteredContacts.length > 0 ? <ContactList /> : <h3 className={s.noContact}>Contacts not found!</h3>}
    </div>
  );
};

export default ContactsPage;
