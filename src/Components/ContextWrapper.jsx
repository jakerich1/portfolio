/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { React, useState } from 'react';
import DarkModeContext from '../Hooks/useDarkMode';

export default (props) => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
