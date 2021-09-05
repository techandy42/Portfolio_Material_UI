import { makeStyles } from '@material-ui/core/styles'
import { homePageHeight } from '../../constants/pageHeights'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: grey[900],
    height: homePageHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  lightFont: {
    color: grey[500],
  },
  veryLightFont: {
    color: grey[300],
  },
}))

export default useStyles
