import React from 'react';

import './App.scss';

import Layout from './components/layout/Layout'
import Categories from './components/categories/Categories';
import ItemsGrid from './components/items-grid/ItemsGrid';
import ShieldFigure from './components/shield-figure/ShieldFigure';
import BonusBoxes from './components/bonus-boxes/BonusBoxes';
import ItemDescription from './components/item-description/ItemDescription';

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="App__items-view">
          <Categories />
          <ItemsGrid />
        </div>
        <div className="App__information-view">
          <div className="iconography">
            <ShieldFigure />
            <BonusBoxes />
          </div>
          <ItemDescription />
        </div>
      </Layout>
    </div>
  );
}

export default App;
