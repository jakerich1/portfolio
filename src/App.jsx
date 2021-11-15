import { React, useContext } from 'react';
import './Style/fonts.css';
import { GlobalStyle } from './Style/Utility.style';
import Intro from './Components/Intro/Intro';
import Stack from './Components/Stack/Stack';
import DarkModeContext from './Hooks/useDarkMode';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="App">
      <GlobalStyle darkMode={darkMode} />
      <Intro />
      <Stack />
    </div>
  );
}

export default App;
