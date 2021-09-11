import { makeStyles } from '@material-ui/core/styles'
import { projectsPageHeight } from '../../constants/pageHeights'

const useStyles = makeStyles((theme) => ({
  projects: {
    backgroundColor: theme.palette.background.paper,
    height: projectsPageHeight,
  },
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '6rem',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  cardTitle: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
}))

export default useStyles
