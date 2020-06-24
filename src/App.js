import React from 'react';

import { mainWrapper } from './App.module.scss';

import Layout from './components/layout/Layout'
import Categories from './components/categories/Categories';
import ItemsGrid from './components/items-grid/ItemsGrid';

function App() {
  return <div className={mainWrapper}>
    <Layout>
      <Categories />
      <ItemsGrid />
      <div style={{color: 'white'}}>BonusBoxes</div>
      <div style={{color: 'white'}}>ItemDescription</div>
    </Layout>
  </div>;
}

export default App;