import css from "../SearchBox/SearchBox.module.css";

import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";


const SearchBox = () => {
  
    const dispatch = useDispatch();
    const handleChange = (e) => {
      dispatch(changeFilter(e.target.value))
    }
    

  return (
    <input
      className={css["search-input"]}
      type="text"
      onChange={handleChange}
      placeholder="Search contacts..."
    />
  );
};


export default SearchBox;
