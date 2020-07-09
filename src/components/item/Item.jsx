import React from 'react';
import classNames from 'classnames';

import './Item.scss';

import { ReactComponent as NewItem } from '../../images/new-item.svg';

const Item = ({ img, value, isActive, isNew, onClick, ...props }) => {
  const itemClasses = classNames('Item', {
    active: isActive,
  });
  const cornersClasses = classNames('corners', {
    active: isActive,
  });

  return (
    <div className={itemClasses} onClick={onClick}>
      <div className={cornersClasses}>
        <div className="corner top-left" />
        <div className="corner top-right" />
        <div className="corner bottom-right" />
        <div className="corner bottom-left" />
      </div>
      {img && <img src={img} alt="item" />}
      {isNew && <div className="new-item"><NewItem /></div>}
      {img && <div className="quantity-box">{value}</div>}
    </div>
  );
};

export default Item;
