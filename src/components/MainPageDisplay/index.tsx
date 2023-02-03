import React from "react";
import { useSelector } from 'react-redux';
import './index.sass';
import goods from '../../goods.json';
import { contentSortArray } from "../../constants/";

function MainPageDisplay() {
  const {
    search: { searchBar, sort: sortType },
    byValue: { colors, camerasNumber, isPopular, manufacturer },
    byRange: { mobilesLeft, releaseDate }
  } = useSelector((state: any) => state.filters);

  const filterContent = ({ 
    name, 
    color, 
    camerasQty, 
    isPopular: isGoodPopular, 
    manufacturer: isManufacturer, 
    mobilesLeft: itemMobilesLeft, 
    releaseDate: itemReleaseDate 
  }: any) => {
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
        return false;
      }
    }

    if (isPopular == true && isGoodPopular !== isPopular) {
      return false;
    }

    if (!!releaseDate && itemReleaseDate > releaseDate) {
      return false;
    }

    if (!!mobilesLeft && Number(itemMobilesLeft) > mobilesLeft) {
      return false;
    }
    return true;
  }

  const sortContent = (sortType: any) => {
    switch (sortType) {
      case contentSortArray[1]: 
        return (a: any, b: any) => {
          return a.name.localeCompare(b.name);
        }
      case contentSortArray[2]: 
        return (a: any, b: any) => {
          return b.name.localeCompare(a.name);
        }
      case contentSortArray[3]: 
        return (a: any, b: any) => {
          return a.releaseDate - b.releaseDate;
        }
      case contentSortArray[4]: 
        return (a: any, b: any) => {
          return b.releaseDate - a.releaseDate;
        }
      case contentSortArray[5]: 
        return (a: any, b: any) => {
          return Number(b.mobilesLeft) - Number(a.mobilesLeft);
        }
      default :
        return () => 1;
    }
  }

  const filtredContent = goods.filter((good: any) => filterContent(good));
  const sortedContent = filtredContent.sort(sortContent(sortType));
  

  return(
    <section className="content-container-main">
    {
      sortedContent.map((
      { 
        name, 
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