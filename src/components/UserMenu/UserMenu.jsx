import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        toast.success(`See you soon, ${user.name}!`);
      })
      .catch(() => {
        toast.error("Failed");
      });
  };

  return (
    <div className={s.user}>
      {isLoggedIn && <p>Welcome, {user.name}!</p>}
      <button onClick={handleLogout} type="button" className={s.logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
