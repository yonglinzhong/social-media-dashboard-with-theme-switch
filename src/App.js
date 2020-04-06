import React, { useState, useEffect } from 'react';
import { merge, get } from 'lodash';

import { ThemeProvider } from 'styled-components';
import theme from './lib/theme';

import DashBoard from './pages/Dashboard';

const modes = ['light', 'dark'];
// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, theme, {
    colors: get(theme.colors.modes, mode, theme.colors),
  });

function App(props) {
  // state for changing modes dynamically
  const [mode, setMode] = useState(modes[0]);
  const modeTheme = getTheme(mode);

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.backgroundColor = modeTheme.colors.bodyBackground;
  });

  return (
    <ThemeProvider theme={modeTheme}>
      <DashBoard onModeChange={(index) => setMode(modes[index])}></DashBoard>
    </ThemeProvider>
  );
}

export default App;
