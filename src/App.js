import React from 'react';

import './App.scss';

import Layout from './components/layout/Layout'
import Categories from './components/categories/Categories';
import ItemsGrid from './components/items-grid/ItemsGrid';

function App() {
  return <div className="App">
    <Layout>
      <Categories />
      <ItemsGrid />
      <div style={{color: 'white', marginTop: '30px'}}>BonusBoxes</div>
      <div style={{color: 'white', marginTop: '30px'}}>ItemDescription</div>
    </Layout>
  </div>;
}

export default App;
