import React from 'react';

import { container } from './Layout.module.scss';

const Layout = ({ children, ...props }) => {
  return <div className={container}>{children}</div>;
};

export default Layout;
