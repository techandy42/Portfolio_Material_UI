import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import reactImageLarge from '../../images/reactImage/logo512.png'
import reactImageSmall from '../../images/reactImage/logo192.png'
import './animation.css'

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.home}>
      <Container className={classes.container}>
        <div className={classes.sectionDesktop}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item md={6} lg={7}>
              <Typography variant="h4" className={classes.lightFont} paragraph>
                Hi, my name is Andy.
              </Typography>
              <Typography variant="h1" className={classes.veryLightFont} paragraph>
                I'm a full-stack developer.
              </Typography>
              <Typography variant="h5" className={classes.lightFont} paragraph>
                My passion is to solve problems by developing software.
              </Typography>
            </Grid>
            <Grid item md={6} lg={5} className={classes.reactImage}>
              <img className="reactImage" src={reactImageLarge} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.sectionMobile}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item md={12}>
              <Typography variant="h5" className={classes.lightFont} paragraph>
                Hi, my name is Andy.
              </Typography>
              <Typography variant="h2" className={classes.veryLightFont} paragraph>
                I'm a full-stack developer.
              </Typography>
              <Typography variant="subtitle1" className={classes.lightFont} paragraph>
                My passion is to solve problems by developing software.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <img className="reactImage" src={reactImageSmall} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
