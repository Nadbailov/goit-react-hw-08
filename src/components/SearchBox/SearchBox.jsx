import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.searchBox}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        onChange={(event) => dispatch(changeFilter(event.target.value))}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
