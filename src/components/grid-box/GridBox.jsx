import React from 'react';
import classNames from 'classnames';

import './GridBox.scss';

import { NewItemIcon, bonusIcons } from '../../images/svgs';

const GridBox = ({ item, isActive, isSelected, onClick, ...props }) => {
  const image = item && item.imageURL;
  const isNew = item && item.isNew;
  const value = item && item.value;
  const bonus = item && item.bonus;

  const gridBoxClasses = classNames('GridBox', {
    active: isActive,
  });
  const cornersClasses = classNames('GridBox__corners', {
    active: isActive,
  });

  return (
    <div className={gridBoxClasses} onClick={onClick}>
      <div className={cornersClasses}>
        <div className="GridBox__corner top-left" />
        <div className="GridBox__corner top-right" />
        <div className="GridBox__corner bottom-right" />
        <div className="GridBox__corner bottom-left" />
      </div>
      {image && <img src={image} alt="item" />}
      {isNew && (
        <div className="GridBox__new-item">
          <NewItemIcon />
        </div>
      )}
      {bonus && <div className="GridBox__bonus">{bonusIcons[bonus]}</div>}
      {image && <div className="GridBox__quantity-box">{value}</div>}
    </div>
  );
};

export default GridBox;
