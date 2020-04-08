const BrandColors = {
  900: '#1db489',
  800: '#3ebb93',
  700: '#55c29c',
  600: '#69caa6',
  500: '#7bd1b0',
  400: '#8cd8ba',
  300: '#9ddfc4',
  200: '#ade6cf',
  100: '#bdedd9',
};

const defaultColors = {
  /** White */
  white: {
    full: '#FFFFFF',
    transparent: {
      72: 'rgba(255, 255, 255, 0.72)',
      48: 'rgba(255, 255, 255, 0.48)',
    },
  },
  /** Black, neutral */
  black: {
    900: '#141414',
    800: '#313233',
    700: '#4E5052',
    600: '#76777A',
    500: '#9D9FA3',
    400: '#C4C7CC',
    300: '#DCDEE0',
    200: '#E8E9EB',
    100: '#F0F1F2',
    50: '#F7F8FA',
    transparent: {
      90: 'rgba(19, 20, 20, 0.90)',
      80: 'rgba(19, 20, 20, 0.80)',
      40: 'rgba(19, 20, 20, 0.4)',
      20: 'rgba(19, 20, 20, 0.2)',
      8: 'rgba(19, 20, 20, 0.08)',
    },
  },
  /** Primary */
  primary: BrandColors,
  /** Info - right now the colors are the same as primary */
  blue: {
    900: '#0D47A1',
    800: '#1565C0',
    700: '#1976D2',
    600: '#1E88E5',
    500: '#2196F3',
    400: '#42A5F5',
    300: '#64B5F6',
    200: '#90CAF9',
    100: '#BBDEFB',
    50: '#BBDEFB',
  },
  /** Success, Approve */
  green: BrandColors,
  /** Warning, Alert */
  yellow: {
    900: '#5C5C0B',
    800: '#858510',
    700: '#ADAD23',
    600: '#CCCC18',
    500: '#E0E01B',
    400: '#EBEB2F',
    300: '#F5F576',
    200: '#FAFAAA',
    100: '#FFFFC2',
    50: '#FFFFEB',
  },
  /** Danger, Error */
  red: {
    900: '#dc414c',
    800: '#e3575b',
    700: '#e96b6b',
    600: '#ee7e7c',
    500: '#f3908c',
    400: '#f7a29e',
    300: '#fbb3af',
    200: '#fdc5c1',
    100: '#ffd6d3',
  },
  modes: {
    light: {
      bodyBackground: 'hsl(0, 0%, 100%)',
      topBackground: 'hsl(225, 100%, 98%)',
      cardBackground: 'hsl(227, 47%, 96%)',
      primaryText: 'hsl(230, 17%, 14%)',
      secondaryText: 'hsl(228, 12%, 44%)',
      hoverBackground: 'rgb(225, 227, 240)',
      switchBackground: '	#aeb3cb',
    },
    dark: {
      bodyBackground: 'hsl(230, 17%, 14%)',
      topBackground: 'hsl(232, 19%, 15%)',
      cardBackground: 'hsl(228, 28%, 20%)',
      primaryText: 'hsl(0, 0%, 100%)',
      secondaryText: 'hsl(228, 34%, 66%)',
      hoverBackground: 'rgb(51	58	86)',
      switchBackground: 'linear-gradient(90deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%)',
    },
  },
};

export default defaultColors;
