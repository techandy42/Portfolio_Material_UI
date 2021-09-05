import { makeStyles } from '@material-ui/core/styles'
import { contactPageHeight } from '../../constants/pageHeights'

const useStyles = makeStyles((theme) => ({
  contact: {
    backgroundColor: 'blue',
    height: contactPageHeight,
  },
}))

export default useStyles
