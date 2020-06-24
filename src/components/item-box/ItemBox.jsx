import React from 'react';

import { box } from './ItemBox.module.scss';

const ItemBox = ({img, ...props}) => {
  return (
    <div className={box}>
      {img }
    </div>
  )
};

export default ItemBox;