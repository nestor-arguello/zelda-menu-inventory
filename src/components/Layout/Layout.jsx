import React from 'react';

import { container } from './Layout.module.scss'

import itemsData from '../../itemsData'

const Layout = ({...props}) => {
  const shields = itemsData.allIds.reduce((acc, itemId) => {
    if (itemsData.byId[itemId].type === 'shield') {
      acc.push(itemsData.byId[itemId])
    }
    return acc;
  }, [])
  console.log(shields)
  return (
    <div className={container}>
      <div>CATEGORIES</div>
      <div>ITEMS GRID</div>
    </div>
  )
}

export default Layout;