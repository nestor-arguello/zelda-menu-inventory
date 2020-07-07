import React from 'react';

import './Layout.scss';

const Layout = ({ children, ...props }) => {
  return <div className="Layout">{children}</div>;
};

export default Layout;
