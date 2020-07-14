import React from 'react';
import classNames from 'classnames';

import './GridBox.scss';

import { NewItemIcon, bonusIcons } from '../../images/svgs';

const GridBox = ({ img, value, isActive, isNew, bonus, onClick, ...props }) => {
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
      {img && <img src={img} alt="item" />}
      {isNew && (
        <div className="GridBox__new-item">
          <NewItemIcon />
        </div>
      )}
      {bonus && <div className="GridBox__bonus">{bonusIcons[bonus]}</div>}
      {img && <div className="GridBox__quantity-box">{value}</div>}
    </div>
  );
};

export default GridBox;
