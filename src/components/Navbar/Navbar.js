import React from 'react'
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

export default function Navbar() {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
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
      <MenuItem>
        <IconButton aria-label="home icon" color="inherit">
          <HomeIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">Home</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="about icon" color="inherit">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">About</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="projects icon" color="inherit">
          <LibraryBooksIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">Projects</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="tech icon" color="inherit">
          <BuildIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1">Tech</Typography>
      </MenuItem>
      <MenuItem>
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
            <IconButton aria-label="home icon" color="inherit">
              <HomeOutlinedIcon />
            </IconButton>
            <IconButton aria-label="about icon" color="inherit">
              <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton aria-label="projects icon" color="inherit">
              <LibraryBooksOutlinedIcon />
            </IconButton>
            <IconButton aria-label="tech icon" color="inherit">
              <BuildOutlinedIcon />
            </IconButton>
            <IconButton aria-label="contact icon" color="inherit">
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
