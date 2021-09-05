import { makeStyles } from '@material-ui/core/styles'
import { techPageHeight } from '../../constants/pageHeights'

const useStyles = makeStyles((theme) => ({
  tech: {
    backgroundColor: 'green',
    height: techPageHeight,
  },
}))

export default useStyles
