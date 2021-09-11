import React, { useState } from 'react'
import { Button, Container, FormControl, Grid, Paper, TextField, Typography } from '@material-ui/core'
import useStyles from './styles'
import emailjs from 'emailjs-com'

const initialFormData = { myEmail: 'techandy42@gmail.com', personEmail: '', personName: '', message: '' }

export default function Contact() {
  const classes = useStyles()
  const [formData, setFormData] = useState(initialFormData)

  const sendForm = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_81j64ib', 'template_qq00fqp', e.target, 'user_BumGd7rSm2r6wVrkfZvVo').then(
      (result) => {
        console.log(result.text)
        alert('Email sent successfully')
      },
      (error) => {
        console.log(error.text)
      }
    )
    console.log(e.target)
    setFormData(initialFormData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className={classes.contact}>
      <Container className={classes.container}>
        <div className={classes.sectionDesktop}></div>
        <div className={classes.sectionMobile}></div>
        <Paper className={classes.paper}>
          <form onSubmit={sendForm}>
            <Typography align="center" variant="h4" className={classes.title}>
              Contact Me
            </Typography>
            <TextField
              name="myEmail"
              label="To My Email"
              variant="filled"
              InputLabelProps={{ shrink: true }}
              value={formData.myEmail}
              fullWidth
              className={classes.field}
            />
            <TextField
              name="personName"
              label="your name"
              variant="outlined"
              fullWidth
              value={formData.personName}
              onChange={handleChange}
              className={classes.field}
            />
            <TextField
              name="personEmail"
              label="your email"
              variant="outlined"
              fullWidth
              value={formData.personEmail}
              onChange={handleChange}
              className={classes.field}
            />
            <TextField
              name="message"
              label="message"
              variant="outlined"
              multiline
              maxRows={12}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              className={classes.field}
            />
            <Button type="submit" fullWidth className={classes.button}>
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  )
}
