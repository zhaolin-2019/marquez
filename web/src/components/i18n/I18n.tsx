// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

import React from 'react'

import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { RouteComponentProps, Link as RouterLink, withRouter } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import { Theme } from '@material-ui/core'

// for i18n 
import '../../i18n/config'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { MqInputNoIcon } from '../core/input-base/MqInputBase'

const styles = (theme: Theme) =>
  createStyles({
    formControl: {
      maxWidth: '100px'
    },
   
  })

type I18nProps = WithStyles<typeof styles> & RouteComponentProps

class I18n extends React.Component<I18nProps> {
  render() {
    const { classes } = this.props
    const i18next = require('i18next')
    const changeLanguage = (lng: string) => {
      i18next.changeLanguage(lng)
    }
    return (
        <FormControl variant='outlined' className={classes.formControl}>
            <Box px={1}>
            <Select
                fullWidth
                value={i18next.resolvedLanguage}
                onChange={event => {
                changeLanguage(event.target.value as string)
                window.location.reload()
                }}
                input={<MqInputNoIcon />}
            >
                <MenuItem key={'en'} value={'en'}>
                {'en'}
                </MenuItem>
                <MenuItem key={'zh'} value={'zh'}>
                {'zh'}
                </MenuItem>
                <MenuItem key={'es'} value={'es'}>
                {'es'}
                </MenuItem>
                <MenuItem key={'fr'} value={'fr'}>
                {'fr'}
                </MenuItem>
                <MenuItem key={'pl'} value={'pl'}>
                {'pl'}
                </MenuItem>
            </Select>
            </Box>
        </FormControl>
    )
  }
}

export default withStyles(styles)(withRouter(I18n))
