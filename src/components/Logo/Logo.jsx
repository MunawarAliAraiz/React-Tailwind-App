import React from 'react';

const CustomLogo = ({ isVisibleOnMd, url}) => {
  const logoClasses = `w-40 h-40 bg-cover bg-no-repeat ${
    isVisibleOnMd ? 'mx-3' : ''
  }`;
  const logoUrl = url?`url(${url})`:`url(./src/assets/logo.png)`; 
  return (
    <span
      className={logoClasses}
      style={{ backgroundImage: logoUrl }}
      role="img"
      aria-label="Logo"
    />
  );
};

export default CustomLogo;
