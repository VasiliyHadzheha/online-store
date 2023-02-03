import './index.sass';
import {useDispatch, useSelector} from 'react-redux';
import { contentSortArray } from "../../../constants";

function Search() {
  const dispatch = useDispatch();
  const selectList = (e: any) => dispatch({type: 'SELECT_SORT_TYPE', payload: e.target.value});
  const selectValue = useSelector((state: any) => state.filters.search.sort);
  return(
    <section className="search-filter">
      <p className="title">Search</p>
      <input type="search" id="search-bar" onChange={((e) => dispatch({type: 'SEARCH_TEXT', payload: e.target.value}))} />
      <p className="sort-title">Sorting</p>
      <select name="" id="select" onChange={selectList} value={selectValue}>
        {contentSortArray.map((el, i) => <option key={i}>{el}</option>)}
      </select>
    </section>
  );
}

export default Search;