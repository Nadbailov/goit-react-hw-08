import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success("Contact successfully deleted!");
      })
      .catch(() => {
        toast.error("Contact not deleted, please try again!");
      });
  };

  return (
    <div className={s.contact}>
      <div className={s.avatar}>
        <FaUser className={s.avatarIcon} />
      </div>
      <div className={s.containerList}>
        <p className={s.contactInfo}>
          <FaUser className={s.icon} />
          {name}
        </p>

        <a className={s.contactInfo} href={number}>
          <FaPhoneAlt className={s.icon} />
          {number}
        </a>
      </div>
      <button className={s.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
