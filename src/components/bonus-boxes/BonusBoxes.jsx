import React from 'react';

import './BonusBoxes.scss';

import BonusBox from '../bonus-box/BonusBox';

const BonusBoxes = ({ ...props }) => {
  return (
    <div className="BonusBoxes">
      <BonusBox bonus="swimming" levelNum={0} />
      <BonusBox bonus="climbing" levelNum={2} />
      <BonusBox bonus="resistFire" levelNum={1} />
    </div>
  );
};

export default BonusBoxes;
