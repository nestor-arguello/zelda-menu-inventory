import React from 'react';

import './ItemMenu.scss';

/**
 * TODO: move all SASS constants to a single file
 */

const ItemMenu = ({ ...props }) => {
  return (
    <div className="ItemMenu">
      <div className="ItemMenu__btn">Equip</div>
      <div className="ItemMenu__btn">Drop</div>
      <div className="ItemMenu__btn">Cancel</div>
    </div>
  );
};

export default ItemMenu;
