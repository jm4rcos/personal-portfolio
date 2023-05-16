import React from 'react';

export const Word = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <p
    >
      {children}
    </p>
  );
};
