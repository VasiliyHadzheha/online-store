import React from "react";
import { useSelector } from 'react-redux';
import './index.sass';
import goods from '../../goods.json'

function MainPageDisplay() {
  const {
    search: { searchBar },
    byValue: { colors, camerasNumber, isPopular, manufacturer },
  } = useSelector((state: any) => state.filters);

  const filterContent = ({ name, color, camerasQty, isPopular: isGoodPopular, manufacturer: isManufacturer }: any) => {
    if (!name.toUpperCase().includes(searchBar?.toUpperCase())) {
      return false;
    }

    if (!!colors) {
      if (colors !== color) {
        return false;
      }
    }

    if (!!camerasNumber) {
      if (camerasNumber !== camerasQty) {
        return false;
      }
    }

    if (!!manufacturer) {
      if (manufacturer !== isManufacturer) {
        return false
      }
    }

    if (isPopular == true && isGoodPopular !== isPopular) {
      return false;
    }

    return true;
  }

  const filtredContent = goods.filter((good: any) => filterContent(good));

  return(
    <section className="content-container-main">
    {
      filtredContent.map((
      { 
        name, 
        qty, 
        releaseDate, 
        manufacturer, 
        color, 
        camerasQty, 
        isPopular, 
        image, 
        mobilesLeft 
      }, index) => (
      <div className="info-bar" key={index}>
        <p style={{fontSize: '22px'}}>{name}</p>
        {!!image && <img src={image} alt="phone-product-photo" />}
        <p>Quantity: {qty}</p>
        <p>Release date: {releaseDate}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Color: {color}</p>
        <p>Cameras qty: {camerasQty}</p>
        <p>Is popular: {isPopular ? 'yes' : 'no'}</p>
        <p>Mobiles left: {mobilesLeft}</p>
      </div>))
    }
    </section>
  );
}

export default MainPageDisplay;