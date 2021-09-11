import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import BuildIcon from '@material-ui/icons/Build'
import EmailIcon from '@material-ui/icons/Email'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import useStyles from './styles'
import { HOME, ABOUT, PROJECTS, TECH, CONTACT } from '../../constants/pageNames'
import { homePageHeight, aboutPageHeight, projectsPageHeight, techPageHeight, contactPageHeight } from '../../constants/pageHeights'

const pageHeight = window.innerHeight
let scrollAmount = 0

export default function Navbar() {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const scroll = (pageName) => {
    switch (pageName) {
      case HOME:
        scrollAmount = 0
        console.log(scrollAmount)
        window.scroll({ top: scrollAmount, behavior: 'smooth' })
        break
      case ABOUT:
        scrollAmount = (pageHeight * Number(homePageHeight.slice(0, homePageHeight.length - 2))) / 100
        console.log(scrollAmount)
        window.scroll({ top: scrollAmount, behavior: 'smooth' })
        break
      case PROJECTS:
        scrollAmount =
          (pageHeight *
            (Number(homePageHeight.slice(0, homePageHeight.length - 2)) + Number(aboutPageHeight.slice(0, aboutPageHeight.length - 2)))) /
          100
        console.log(scrollAmount)
        window.scroll({ top: scrollAmount, behavior: 'smooth' })
        break
      case TECH:
        scrollAmount =
          (pageHeight *
            (Number(homePageHeight.slice(0, homePageHeight.length - 2)) +
              Number(aboutPageHeight.slice(0, aboutPageHeight.length - 2)) +
              Number(projectsPageHeight.slice(0, projectsPageHeight.length - 2)))) /
          100
        console.log(scrollAmount)
        window.scroll({ top: scrollAmount, behavior: 'smooth' })
        break
      case CONTACT:
        scrollAmount =
          (pageHeight *
            (Number(homePageHeight.slice(0, homePageHeight.length - 2)) +
              Number(aboutPageHeight.slice(0, aboutPageHeight.length - 2)) +
              Number(projectsPageHeight.slice(0, projectsPageHeight.length - 2)) +
              Number(techPageHeight.slice(0, techPageHeight.length - 2)))) /
          100
        console.log(scrollAmount)
        window.scroll({ top: scrollAmount, behavior: 'smooth' })
        break
      default:
        scrollAmount = 0
        window.scroll({ top: scrollAmount })
    }
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => scroll(HOME)}>
        <IconButton aria-label="home icon" color="inherit">
          <HomeIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">Home</Typography>
      </MenuItem>
      <MenuItem onClick={() => scroll(ABOUT)}>
        <IconButton aria-label="about icon" color="inherit">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">About</Typography>
      </MenuItem>
      <MenuItem onClick={() => scroll(PROJECTS)}>
        <IconButton aria-label="projects icon" color="inherit">
          <LibraryBooksIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">Projects</Typography>
      </MenuItem>
      <MenuItem onClick={() => scroll(TECH)}>
        <IconButton aria-label="tech icon" color="inherit">
          <BuildIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">Tech</Typography>
      </MenuItem>
      <MenuItem onClick={() => scroll(CONTACT)}>
        <IconButton aria-label="contact icon" color="inherit">
          <EmailIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">Contact</Typography>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <Typography className={classes.name} variant="h6" noWrap>
              @Andy_Lee
            </Typography>
          </div>
          <div className={classes.sectionMobile}>
            <Typography className={classes.name} variant="h6" noWrap>
              AL
            </Typography>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="home icon" color="inherit" onClick={() => scroll(HOME)}>
              <HomeOutlinedIcon />
            </IconButton>
            <IconButton aria-label="about icon" color="inherit" onClick={() => scroll(ABOUT)}>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton aria-label="projects icon" color="inherit" onClick={() => scroll(PROJECTS)}>
              <LibraryBooksOutlinedIcon />
            </IconButton>
            <IconButton aria-label="tech icon" color="inherit" onClick={() => scroll(TECH)}>
              <BuildOutlinedIcon />
            </IconButton>
            <IconButton aria-label="contact icon" color="inherit" onClick={() => scroll(CONTACT)}>
              <EmailOutlinedIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}
