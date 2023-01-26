import React from "react";
import './index.sass';
import {useDispatch, useSelector} from 'react-redux';
import { contentSortArray } from "../../../constants";

function Search() {
  const dispatch = useDispatch()

  return(
    <section className="search-filter">
      <p className="title">Search</p>
      <input type="search" id="search-bar" onChange={((e) => dispatch({type: 'SEARCH_TEXT', payload: e.target.value}))} />
      <p className="sort-title">Sorting</p>
      <select name="" id="select">
        {contentSortArray.map((el, i) => {
          if (el === '') {
            return (<option key={`${i}`} value="disabled"></option>)
          }
          return (<option key={`${i}`} value="">{el}</option>)
        })}

      </select>
    </section>
  );
}

export default Search;


