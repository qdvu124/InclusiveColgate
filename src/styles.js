import * as Colors from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.blue300,
    primary2Color: Colors.indigo700,
    accent1Color: Colors.red299,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
  },
  appBar: {
    height: 30,
  },
});

export default muiTheme