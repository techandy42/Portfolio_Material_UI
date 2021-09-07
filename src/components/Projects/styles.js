import { makeStyles } from '@material-ui/core/styles'
import { projectsPageHeight } from '../../constants/pageHeights'

const useStyles = makeStyles((theme) => ({
  projects: {
    backgroundColor: theme.palette.background.paper,
    height: projectsPageHeight,
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
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default useStyles
