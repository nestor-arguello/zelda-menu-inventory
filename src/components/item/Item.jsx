import React from 'react';
import classNames from 'classnames';

import './Item.scss';

import { NewItemIcon, bonusIcons } from '../../images/svgs';

const Item = ({ img, value, isActive, isNew, bonus, onClick, ...props }) => {
  const itemClasses = classNames('Item', {
    active: isActive,
  });
  const cornersClasses = classNames('Item__corners', {
    active: isActive,
  });

  return (
    <div className={itemClasses} onClick={onClick}>
      <div className={cornersClasses}>
        <div className="Item__corner top-left" />
        <div className="Item__corner top-right" />
        <div className="Item__corner bottom-right" />
        <div className="Item__corner bottom-left" />
      </div>
      {img && <img src={img} alt="item" />}
      {isNew && (
        <div className="Item__new-item">
          <NewItemIcon />
        </div>
      )}
      {bonus && <div className="Item__bonus">{bonusIcons[bonus]}</div>}
      {img && <div className="Item__quantity-box">{value}</div>}
    </div>
  );
};

export default Item;
