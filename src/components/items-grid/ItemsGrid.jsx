import React from 'react';

import { container } from './ItemsGrid.module.scss';

import { connect } from 'react-redux';
import ItemBox from '../item-box/ItemBox';
import { getShields } from '../../redux/selectors';

const NUMBER_OF_BOXES = 20;
const numberOfBoxes = Array.from({ length: NUMBER_OF_BOXES });

const ItemsGrid = ({ shields, ...props }) => {
  return (
    <div className={container}>
      {numberOfBoxes.map((_, index) => (
        <ItemBox key={index} img={shields[index] && shields[index].imageURL} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  shields: getShields(state),
});

export default connect(mapStateToProps)(ItemsGrid);
