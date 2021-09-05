import { makeStyles } from '@material-ui/core/styles'
import { aboutPageHeight } from '../../constants/pageHeights'
import orange from '@material-ui/core/colors/orange'

const useStyles = makeStyles((theme) => ({
  about: {
    backgroundColor: orange[400],
    height: aboutPageHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    paddingTop: '3rem',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  paragraph: {
    fontWeight: 'normal',
  },
  myPictureLarge: {
    height: '30rem',
  },
  myPictureSmall: {
    height: '15rem',
  },
}))

export default useStyles
