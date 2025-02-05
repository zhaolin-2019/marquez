// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

import { API_DOCS_URL } from '../../globals'
import { AppBar, Toolbar } from '@material-ui/core'
import { DRAWER_WIDTH } from '../../helpers/theme'
import { Link } from 'react-router-dom'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import MqText from '../core/text/MqText'
import NamespaceSelect from '../namespace-select/NamespaceSelect'
import React, { ReactElement } from 'react'
import Search from '../search/Search'
import marquez_logo from './marquez_logo.svg'
import Sidenav from '../sidenav/Sidenav'
import I18n from '../i18n/I18n'


const styles = (theme: Theme) => {
  return createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: theme.palette.background.default,
      borderBottom: `2px dashed ${theme.palette.secondary.main}`,
      padding: `${theme.spacing(2)}px 0`,
      // left: DRAWER_WIDTH + 1,
      // width: `calc(100% - ${DRAWER_WIDTH}px)`
      left:0,
      width:'100%',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    innerToolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: theme.breakpoints.values.lg,
      width: theme.breakpoints.values.lg,
      margin: '0 auto'
    }
  })
}

type HeaderProps = WithStyles<typeof styles>

const Header = (props: HeaderProps): ReactElement => {
  const { classes } = props
  const i18next = require('i18next')
  return (
    <AppBar position='relative' elevation={0} className={classes.appBar}>
      <Toolbar>
        <Box className={classes.innerToolbar}>
          {/* 将左侧导航放在顶部了 */}
          <Sidenav />
          {/* <Link to='/'>
            <img src={marquez_logo} height={48} alt='Marquez Logo' />
          </Link> */}
          <Box display={'flex'} alignItems={'center'}>
            <Search />
            <NamespaceSelect />
            {/* <I18n /> */}
            {/* <Box ml={2}>
              <MqText link href={API_DOCS_URL}>
                {i18next.t('header.docs_link')}
              </MqText>
            </Box> */}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
