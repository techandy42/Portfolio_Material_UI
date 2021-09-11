import React from 'react'
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import './animation.css'

const technologies = [
  {
    name: 'Javascript',
    imageUrl: 'https://blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png',
  },
  {
    name: 'Python',
    imageUrl: 'https://journeyofthegeekcom.files.wordpress.com/2019/01/python_logo.png',
  },
  {
    name: 'Java',
    imageUrl: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg',
  },
  {
    name: 'HTML / CSS / SCSS',
    imageUrl: 'https://helpdeskdirect.net/wp-content/uploads/2016/12/sass.jpg',
  },
  {
    name: 'Material UI',
    imageUrl: 'https://material-ui.com/static/logo.png',
  },
  {
    name: 'React',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
  },
  {
    name: 'Redux',
    imageUrl: 'https://ik.imagekit.io/garbagevalue/garbage/tags/Redux_Evnlsib8lq.png',
  },
  {
    name: 'NodeJS / Express',
    imageUrl: 'https://www.mbejda.com/content/images/2015/12/node.png',
  },
  {
    name: 'MongoDB/Mongoose',
    imageUrl: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg',
  },
  {
    name: 'Redis',
    imageUrl:
      'https://www.zdnet.com/a/hub/i/r/2020/05/11/f9afed5d-33cd-438f-ba73-31b31abba8e1/resize/370xauto/51e7a7c321c6531276c81ec376c7622e/redis-logo-2.png',
  },
  {
    name: 'Git',
    imageUrl:
      'data:image/png;base64,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',
  },
]

export default function Tech() {
  const classes = useStyles()
  return (
    <div className={classes.tech}>
      <Container className={classes.container}>
        <div className={classes.sectionDesktop}>
          <Grid container>
            <Grid md={12}>
              <Typography variant="h1" align="center" className={classes.titleDesktop}>
                Technologies
              </Typography>
            </Grid>
            <Grid md={12}>
              <Grid container spacing={4}>
                {technologies.map((technology) => (
                  <>
                    <Grid item lg={3} md={4} xs={12}>
                      <Card className="cardTech">
                        <CardMedia image={technology.imageUrl} title="logo" style={{ height: '9rem' }} />
                        <CardContent>
                          <Typography variant="h6" align="center" style={{ fontWeight: 'normal' }}>
                            {technology.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.sectionMobile}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" className={classes.titleMobile}>
                Technologies
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {technologies.map((technology) => (
                  <>
                    <Grid item xs={12} alignItems="center" justifyContent="center">
                      <Card className="cardTech">
                        <CardContent>
                          <Typography variant="subtitle1" align="center">
                            {technology.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
