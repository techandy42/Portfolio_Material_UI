import React from 'react'
import { Card, CardContent, CardMedia, Container, Grid, Typography, Link } from '@material-ui/core'
import useStyles from './styles'
import NotListedLocationOutlinedIcon from '@material-ui/icons/NotListedLocationOutlined'
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined'
import SortOutlinedIcon from '@material-ui/icons/SortOutlined'
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import './animation.css'

const projects = [
  {
    name: 'Questionzz',
    description: "A Q&A website that you can post questions, answer questions, and view you and other users' accounts.",
    link: 'https://questionzz.netlify.app/',
    logo: <NotListedLocationOutlinedIcon fontSize="large" />,
  },
  {
    name: 'Personal Website',
    description: 'My personal website with fancy designs and animations.',
    link: 'https://andyleeportfolio.netlify.app/',
    logo: <PersonPinOutlinedIcon fontSize="large" />,
  },
  {
    name: 'Sorting Algorithm Visualizer',
    description: 'Visulizes Bubblesort and Insertionsort using bars with random heights.',
    link: 'https://githubandylee2020.github.io/SortingVisualizer/',
    logo: <SortOutlinedIcon fontSize="large" />,
  },
  {
    name: 'Calculator App',
    description: "A caculator app that doesn't allow logical errors.",
    link: 'https://githubandylee2020.github.io/calculator/',
    logo: <FormatListNumberedOutlinedIcon fontSize="large" />,
  },
  {
    name: 'Planet Simulator',
    description: 'Simulates the planets orbiting the sun at the correct ratio.',
    link: 'https://githubandylee2020.github.io/Planets/',
    logo: <LanguageOutlinedIcon fontSize="large" />,
  },
]

export default function Projects() {
  const classes = useStyles()
  return (
    <div className={classes.projects}>
      <Container className={classes.container}>
        <div className={classes.sectionDesktop}>
          <Grid container spacing={2}>
            {projects.map((project) => (
              <>
                <Grid item xs={12}>
                  <Link href={project.link} target="_blank" style={{ textDecoration: 'none' }}>
                    <Card className="cardProject">
                      <CardContent>
                        <Typography variant="h5" align="center" className={classes.cardTitle}>
                          {project.name}
                        </Typography>
                        <Typography paragraph>{project.description}</Typography>
                        <Typography gutterBottom align="center">
                          {project.logo}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              </>
            ))}
          </Grid>
        </div>
        <div className={classes.sectionMobile}>
          <Grid container spacing={2}>
            {projects.map((project) => (
              <>
                <Grid item xs={12}>
                  <Link href={project.link} target="_blank" style={{ textDecoration: 'none' }}>
                    <Card className="cardProject">
                      <CardContent>
                        <Typography variant="h5" align="center" className={classes.cardTitle}>
                          {project.name}
                        </Typography>
                        <Typography gutterBottom align="center">
                          {project.logo}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              </>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  )
}
