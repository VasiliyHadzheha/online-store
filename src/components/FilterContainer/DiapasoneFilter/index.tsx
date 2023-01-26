import React, { useState } from "react";
import './index.sass';

function DiapasoneFilter() {
  const [firstValue, setFirstValue] = useState('0')
  const [secondValue, setSecondValue] = useState('0')
  return(
    <section className="diapasone-filter">
      <p className="title">Filter by diapasone</p>
      <div className="ranges-bar">
        <p>Mobiles left:</p>
        <input type="range" name="" id="first-range" 
        value={firstValue} onChange={(e) => {
          setFirstValue(e.target.value)
        }}
        />
        <p id="first-value">{firstValue}</p>
        <p>Release date:</p>
        <input type="range" min="2000" max="2022" name="" id="second-range"
        value={secondValue} onChange={(e) => {
          setSecondValue(e.target.value)
        }}
        />
        <p className="second-value">{secondValue}</p>
      </div>
    </section>
  );
}

export default DiapasoneFilter;