import { makeStyles } from '@material-ui/core/styles'
import { contactPageHeight } from '../../constants/pageHeights'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  contact: {
    backgroundColor: blue[400],
    height: contactPageHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  paper: {
    padding: '1.5rem',
  },
  title: {
    fontWeight: 100,
    marginBottom: '1rem',
  },
  button: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
  },
}))

export default useStyles
