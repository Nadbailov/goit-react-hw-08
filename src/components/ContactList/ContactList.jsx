import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filterContactName = useSelector(selectFilteredContacts);

  return (
    <div className={s.contactGallery}>
      <ul className={s.contactList}>
        {filterContactName.map((item) => {
          return (
            <li key={item.id} className={s.contactItem}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
