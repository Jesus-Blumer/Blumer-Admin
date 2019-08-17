import React, { PureComponent } from "react";
import { useTheme } from "@material-ui/core/styles";
import useStyles from 'styles/materials'


import CssBaseline from "@material-ui/core/CssBaseline";

// import SideBar from './SideBar'
// import Header from './Header'



class MainAppClass extends PureComponent {
  render() {
    return <h1>hola</h1>;
  }
}

function MainAppFunc() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  return <h1>hola</h1>;
}

export default MainAppFunc;
