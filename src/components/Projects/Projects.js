import React from 'react'
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import {} from '@material-ui/icons'
import useStyles from './styles'

export default function Projects() {
  const classes = useStyles()
  return (
    <div className={classes.projects}>
      <Container className={classes.container}>
        <div className={classes.sectionDesktop}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Card>
                <CardContent>
                  <Typography>Questionzz</Typography>
                  <Typography>
                    A Q&amp;A Website that you can post questions, answer questions, and view you and other users' accounts
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card>
                <CardContent>
                  <Typography>Questionzz</Typography>
                  <Typography>
                    A Q&amp;A Website that you can post questions, answer questions, and view you and other users' accounts
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={classes.sectionMobile}></div>
      </Container>
    </div>
  )
}
