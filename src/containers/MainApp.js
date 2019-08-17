import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "styles/materials";

import CssBaseline from "@material-ui/core/CssBaseline";

import clsx from "clsx";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";


import SideBar from "./SideBar";

class MainAppClass extends PureComponent {
  state = {
    isOpenSideBar: false
  };
  toggleIsOpenSideBar = () =>
    this.setState(prevState => ({ isOpenSideBar: !prevState.isOpenSideBar }));

  render() {
    const { isOpenSideBar } = this.state;
    const { classes } = this.props;
    console.debug(this.props);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: isOpenSideBar
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleIsOpenSideBar}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: isOpenSideBar
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Dashboard - Blumer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpenSideBar,
          [classes.drawerClose]: !isOpenSideBar
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpenSideBar,
            [classes.drawerClose]: !isOpenSideBar
          })
        }}
        open={isOpenSideBar}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={this.toggleIsOpenSideBar}>
              <ChevronLeftIcon />
          </IconButton>
        </div>
            <SideBar {...this.props}/>
      </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(MainAppClass);
