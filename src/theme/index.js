/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import _ from 'lodash'
import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import typography from './typography'
import { softShadows, strongShadows } from './shadows'
import { THEMES } from '../constants'

import Montserrat from '../fonts/Montserrat-Regular.ttf'

const montserrat = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Montserrat'),
    url(${Montserrat}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const baseConfig = {
  direction: 'ltr',
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [montserrat],
      },
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)',
      },
    },
  },
}

const themeConfig = {
  name: THEMES.LIGHT,
  overrides: {
    MuiInputBase: {
      input: {
        '&::placeholder': {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
  },
  palette: {
    type: 'light',
    action: {
      active: colors.blueGrey[600], //small icons
    },
    background: {
      default: colors.common.white,
      dark: '#f4f6f8',
      paper: colors.common.white, // background
    },
    primary: {
      main: colors.indigo[600], // for header and loader
    },
    secondary: {
      main: '#5850EC', // for button and selected
    },
    text: {
      // for text classes
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows: softShadows,
}

export function createTheme(settings = {}) {
  let theme = createMuiTheme(
    _.merge({}, baseConfig, themeConfig, { direction: 'ltr' })
  )

  theme = responsiveFontSizes(theme)

  return theme
}
