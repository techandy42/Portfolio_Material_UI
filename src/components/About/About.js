import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import {} from '@material-ui/icons'
import useStyles from './styles'
import myPicture from '../../images/myPicture/My_Picture.jpg'

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.about}>
      <Container className={classes.container}>
        <div className={classes.sectionDesktop}>
          <Grid container spacing={10} alignItems="center" justifyContent="center">
            <Grid item md={6}>
              <Typography variant="h1" paragraph>
                About Me
              </Typography>
              <Typography variant="h6" className={classes.paragraph} paragraph>
                My name is Andy (Hokyung) Lee, a CS student at the University of Waterloo. I have more than 1500 hours of experience in
                programming.
              </Typography>
              <Typography variant="h6" className={classes.paragraph} paragraph>
                I crave programming like a slice of pizza at midnight, especially full-stack web development.
              </Typography>
              <Typography variant="h6" className={classes.paragraph} paragraph>
                To me, web development is like a subway. The UI, front-end, back-end, and database stack together to make an awesome
                application, and you also get to taste the pain of debugging like Jalapeño in your sandwich :)
              </Typography>
            </Grid>
            <Grid item md={6}>
              <img src={myPicture} className={classes.myPictureLarge} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.sectionMobile}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={12}>
              <Typography variant="h2" paragraph>
                About Me
              </Typography>
              <Typography variant="h6" className={classes.paragraph} paragraph>
                My name is Andy (Hokyung) Lee, a CS student at the University of Waterloo. I have more than 1500 hours of experience in
                programming.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <img src={myPicture} className={classes.myPictureSmall} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
