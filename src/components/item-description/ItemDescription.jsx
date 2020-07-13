import React from 'react';

import './ItemDescription.scss';

import { categoriesIcons } from '../../images/svgs';

const ItemDescription = ({
  title,
  currentValue,
  nextValue,
  text,
  isEquipped,
  category,
  ...props
}) => {
  return (
    <div className="ItemDescription">
      <div className="ItemDescription__is-equipped" />
      <div className="ItemDescription__title">{'Shield of Power'}</div>
      <div className="ItemDescription__values">
        <div className="category-icon">{categoriesIcons.shields}</div>
        <div className="value current">{2}</div>
        <div className="arrow">&#10142;</div>
        <div className="value next">{12}</div>
      </div>
      <div className="ItemDescription__text">{`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`}</div>
    </div>

    // <div className="ItemDescription">
    //   <div className="ItemDescription__is-equipped" />
    //   <div className="ItemDescription__title">{title}</div>
    //   <div className="ItemDescription__values">
    //   <div className="type-icon">{}</div>
    //     <div className="current">{currentValue}</div>
    //     <div className="arrow" />
    //     <div className="next">{nextValue}</div>
    //   </div>
    //   <div className="ItemDescription__text">{text}</div>
    // </div>
  );
};

export default ItemDescription;
