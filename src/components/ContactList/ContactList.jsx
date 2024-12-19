import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const filterContactName = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={s.list}>
        {filterContactName.map((item) => {
          return (
            <li key={item.id} className={s.contactList}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
