import React from "react";
import './index.sass';
import {useDispatch, useSelector} from 'react-redux';

function FilterOne() {
  const dispatch = useDispatch();
  const createActionChangeColor = (e: any) => dispatch({type: 'CHANGE_COLOR', payload: e.target.id});
  const createActionCamerasQty = (element: any) => dispatch({type: 'CAMERAS', payload: element});
  const reset = (e: any) => dispatch({type: 'RESET', payload: e.target.id});
  const isPopular = (e: any) => dispatch({type: 'POPULAR_FLAG', payload: e.target.checked});
  const createActionManufacturer = (e: any) => dispatch({type: 'MANUFACTURER', payload: e.target.id});


  return (
    <section className="filter-value">
      <p className="title">Filter by value</p>
      <div className="filter-brand">
        <p>Manufacturer:</p>
        <div className="brand-samsung" ><img src={'./samsung-logo.svg'} alt="samsung logo" id="Samsung" onClick={createActionManufacturer} /></div>
        <div className="brand-apple" ><img src={'./apple-logo.svg'} alt="appe logo" id="Apple" onClick={createActionManufacturer} /></div>
        <div className="brand-xiaomi" ><img src={'./xiaomi-logo.svg'} alt="xiaomi logo" id="Xiaomi" onClick={createActionManufacturer} /></div>
      </div>
      <div className="camera-qty">
        <p>Cameras quantity:</p>
        {['1','2','3'].map((element, index) => <div className="qty-one" key={index} onClick={() => createActionCamerasQty(element)}><p>{element}</p></div>)}
      </div>
      <div className="filter-color">
        <p>Color:</p>
        <div className="color-one" id="white" onClick={createActionChangeColor}></div>
        <div className="color-two" id="black" onClick={createActionChangeColor}></div>
        <div className="color-three" id="dark-blue" onClick={createActionChangeColor}></div>
      </div>
      <div className="is-popular-flag">
        <p>Popular only:</p>
        <input type="checkbox" className="check" onClick={isPopular}/>
        <button id="reset" onClick={reset}>RESET</button>
      </div>
    </section>
  );
}

export default FilterOne;