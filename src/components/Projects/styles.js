import { makeStyles } from '@material-ui/core/styles'
import { projectsPageHeight } from '../../constants/pageHeights'

const useStyles = makeStyles((theme) => ({
  projects: {
    backgroundColor: 'yellow',
    height: projectsPageHeight,
  },
}))

export default useStyles
