/**
 * Implement the colors from https://www.figma.com/file/1jyGC3MjtqI7uUsGf1447P/DS-03-%2F-Colors?node-id=1146%3A643
 */

const BrandColors = {
  900: '#1B5E20',
  800: '#2E7D32',
  700: '#388E3C',
  600: '#43A047',
  500: '#4CAF50',
  400: '#66BB6A',
  300: '#81C784',
  200: '#A5D6A7',
  100: '#C8E6C9',
  50: '#C8E6C9',
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
    900: '#521022',
    800: '#7A0F2B',
    700: '#A32143',
    600: '#CC2955',
    500: '#E03F6A',
    400: '#F55882',
    300: '#FA82A2',
    200: '#FFC2D2',
    100: '#FFEBF0',
    50: '#FFF7F9',
  },
  modes: {
    light: {
      bodyBackground: 'hsl(0, 0%, 100%)',
      topBackground: 'hsl(225, 100%, 98%)',
      cardBackground: 'hsl(227, 47%, 96%)',
      primaryText: 'hsl(230, 17%, 14%)',
      secondaryText: 'hsl(228, 12%, 44%)',
      hoverBackground: 'rgb(225, 227, 240)',
    },
    dark: {
      bodyBackground: 'hsl(230, 17%, 14%)',
      topBackground: 'hsl(232, 19%, 15%)',
      cardBackground: 'hsl(228, 28%, 20%)',
      primaryText: 'hsl(0, 0%, 100%)',
      secondaryText: 'hsl(228, 34%, 66%)',
      hoverBackground: 'rgb(51	58	86)',
    },
  },
};

export default defaultColors;
