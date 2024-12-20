import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import SearchBox from "../SearchBox/SearchBox";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.appBar}>
      <div className={s.appContent}>
        <Navigation />
        {isLoggedIn ? (
          <div className={s.appUser}>
            <SearchBox />
            <UserMenu />
          </div>
        ) : (
          <AuthNav />
        )}
      </div>
    </header>
  );
};

export default AppBar;
