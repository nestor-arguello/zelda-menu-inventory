import React from 'react';

import './BonusBox.scss';

import { bonusIcons } from '../../images/svgs';
import { LEVELS_PER_BONUS } from '../../constants';

const levels = Array.from({ length: LEVELS_PER_BONUS });

const BonusBox = ({ bonus, levelNum, ...props }) => {
  return (
    <div className="BonusBox">
      <div className="BonusBox__icon">{bonusIcons[bonus]}</div>
      <div className="BonusBox__meter">
        {levels.map((_, index) => {
          const activeClass = index <= levelNum ? 'active' : '';

          return <div key={index} className={`level ${activeClass}`} />;
        })}
      </div>
    </div>
  );
};

export default BonusBox;