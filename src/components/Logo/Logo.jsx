import React from 'react';

const CustomLogo = ({url}) => {
  const logoClasses = `w-36 md:w-48 md:h-30 mx-auto rounded-lg bg-cover bg-no-repeat`;
  const logoUrl = url?`url(${url})`:`url(./src/assets/logo.png)`; 
  console.log(logoUrl);
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
