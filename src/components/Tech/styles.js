import { makeStyles } from '@material-ui/core/styles'
import { techPageHeight } from '../../constants/pageHeights'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  tech: {
    backgroundColor: grey[900],
    height: techPageHeight,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '6rem',
  },
  titleDesktop: {
    color: grey[400],
    paddingBottom: '4rem',
  },
  titleMobile: {
    color: grey[400],
    paddingBottom: '2rem',
    fontWeight: 100,
  },
}))

export default useStyles
