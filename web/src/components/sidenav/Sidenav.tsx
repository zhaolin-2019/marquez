// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import SVG from 'react-inlinesvg'

import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { RouteComponentProps, Link as RouterLink, withRouter } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import { Drawer, Theme } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faDatabase } from '@fortawesome/free-solid-svg-icons'
import MqIconButton from '../core/icon-button/MqIconButton'

const styles = (theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none'
    },
    formControl: {
      maxWidth: '100px'
    },
    btnBox: {
      display:'flex',
      justifyContent:'space-between', 
      width: "200px",
      flexShrink: 0,
    }
})

type SidenavProps = WithStyles<typeof styles> & RouteComponentProps

class Sidenav extends React.Component<SidenavProps> {
  render() {
    const { classes } = this.props
    const i18next = require('i18next')
    const changeLanguage = (lng: string) => {
      i18next.changeLanguage(lng)
    }
    return (
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          className={classes.btnBox}
        >
            <RouterLink to={'/'} className={classes.link}>
              <MqIconButton
                id={'homeDrawerButton'}
                title={i18next.t('sidenav.jobs')}
                active={this.props.location.pathname === '/'}
              >
                <FontAwesomeIcon icon={faCogs} size={'2x'} />
              </MqIconButton>
            </RouterLink>
            <RouterLink to={'/datasets'} className={classes.link}>
              <MqIconButton
                id={'datasetsDrawerButton'}
                title={i18next.t('sidenav.datasets')}
                active={this.props.location.pathname === '/datasets'}
              >
                <FontAwesomeIcon icon={faDatabase} size={'2x'} />
              </MqIconButton>
            </RouterLink>
            <RouterLink to={'/events'} className={classes.link}>
              <MqIconButton
                id={'eventsButton'}
                title={i18next.t('sidenav.events')}
                active={this.props.location.pathname === '/events'}
              >
                <SVG
                  src='https://raw.githubusercontent.com/MarquezProject/marquez/main/web/src/img/iconSearchArrow.svg'
                  width={'30px'}
                />
              </MqIconButton>
            </RouterLink>

            {/* todo remove this link for now until direct linking available */}
            {/*<RouterLink to={'/lineage'} className={classes.link}>*/}
            {/*  <MqIconButton*/}
            {/*    id={'lineageDrawerButton'}*/}
            {/*    title={'Lineage'}*/}
            {/*    active={this.props.location.pathname.startsWith('/lineage')}*/}
            {/*  >*/}
            {/*    <FontAwesomeIcon icon={faArrowRight} size={'2x'} />*/}
            {/*  </MqIconButton>*/}
            {/*</RouterLink>*/}
        </Box>
    )
  }
}

export default withStyles(styles)(withRouter(Sidenav))
