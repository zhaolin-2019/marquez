// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

import { Theme, createStyles, withStyles } from '@material-ui/core'
import { alpha } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import {THEME_EXTRA} from '../../../helpers/theme'

export const MqInputBase = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: theme.spacing(4),
      position: 'relative',
      // backgroundColor: 'transparent',
      backgroundColor:'rgba(0,0,0,0.3)',
      border: `2px solid ${THEME_EXTRA.blue_group.level1}`,
      fontSize: 16,
      padding: `${theme.spacing(1)}px ${theme.spacing(5)}px`,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: theme.palette.primary.main,
        color:'white',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 3px`,
        borderRadius: theme.spacing(4),
        backgroundColor:'rgba(0,0,0,0.3)',
      },
      '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 3px`,
        '& > label': {
          color: 'white',
          transition: theme.transitions.create(['color'])
        }
      }
    }
  })
)(InputBase)

export const MqInputNoIcon = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: theme.spacing(4),
      position: 'relative',
      // backgroundColor: 'transparent',
      backgroundColor:'rgba(0,0,0,0.3)',
      border: `2px solid ${THEME_EXTRA.blue_group.level1}`,
      fontSize: 16,
      padding: `${theme.spacing(1)}px ${theme.spacing(5)}px ${theme.spacing(1)}px ${theme.spacing(
        1
      )}px`,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: theme.palette.primary.main,
        color:'white',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 3px`,
        borderRadius: theme.spacing(4)
      },
      '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 3px`,
        '& > label': {
          color: 'white',
          transition: theme.transitions.create(['color'])
        }
      }
    }
  })
)(InputBase)
