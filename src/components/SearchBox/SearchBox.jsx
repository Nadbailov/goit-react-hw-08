import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.searchBox}>
      <input
        className={s.search}
        type="text"
        onChange={(e) => dispatch(selectFilter(e.target.value))}
        placeholder="Enter a name for your search!"
      />
      <button className={s.button} type="button">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
