import React from 'react';

import { mainWrapper } from './App.module.scss';

import Layout from './components/Layout/Layout'

function App() {
  return <div className={mainWrapper}>
    <Layout />
  </div>;
}

export default App;
