// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      //全局css
      '@global': {
        body: {
          // color: '#fff'
          color:'#191f26'
        },
      }
    },
  },
  typography: {
    fontFamily: 'Karla',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 600
    },
    fontSize: 14
  },
  palette: {
    type: 'dark',
    primary: {
      // main: '#71ddbf'
      main:'#409eff'
    },
    error: {
      main: '#ee7b7b'
    },
    warning: {
      main: '#7D7D7D'
    },
    info: {
      main: '#FECC00'
    },
    background: {
      // default: '#191f26'
      default:'#fff'
    },
    secondary: {
      main: '#454f5b'
    },
    common:{
     black:'#191f26',
    },
    action:{
      disabled:'#abb1bd',
    }
  }
})

export const THEME_EXTRA = {
  typography: {
    subdued: '#abb1bd',
    disabled: '#8d9499'
  },
  blue_group:{
    level1:'#ecf5ff',
    level2:'#d9ecff',
    level3:'#c6e2ff',
    level4:'#a0cfff',
    level5:'#409eff',
  }
}

// 1px for bottom border
export const HEADER_HEIGHT = 96 + 1
export const DRAWER_WIDTH = 96
