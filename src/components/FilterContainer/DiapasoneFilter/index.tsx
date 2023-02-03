import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './index.sass';

function DiapasoneFilter() {
  const dispatch = useDispatch();
  const { byRange: { mobilesLeft, releaseDate } } = useSelector((state: any) => state.filters);
  const changeItemDateAction = (e: any) => dispatch({type: 'RELEASE_DATE', payload: e.target.value});
  const changeItemCountAction = (e: any) => dispatch({type: 'MOBILES_LEFT', payload: Number(e.target.value)});

  return(
    <section className="diapasone-filter">
      <p className="title">Filter by diapasone</p>
      <div className="ranges-bar">
        <p>Mobiles left:</p>
        <input type="range" name="" id="first-range" 
        value={mobilesLeft} onChange={(e) => {
          changeItemCountAction(e)
        }}
        />
        <p id="first-value">{mobilesLeft}</p>
        <p>Release date:</p>
        <input type="range" min="2000" max="2023" name="" id="second-range"
        value={releaseDate} onChange={(e) => {
          changeItemDateAction(e)
        }}
        />
        <p className="second-value">{releaseDate}</p>
      </div>
    </section>
  );
}

export default DiapasoneFilter;