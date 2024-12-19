import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div className={s.list}>
        <p className={s.info}>{name}</p>

        <a className={s.info} href={number}>
          {number}
        </a>
      </div>
      <button className={s.deleteButton} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
