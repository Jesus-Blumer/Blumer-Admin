import React from 'react'

import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Drawer from "@material-ui/core/Drawer";


import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => (
  <>
<AppBar
position="fixed"
className={clsx(classes.appBar, {
  [classes.appBarShift]: open
})}
>
<Toolbar>
  <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    className={clsx(classes.menuButton, {
      [classes.hide]: open
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
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <SideBar />
  
        </Drawer>
        </>
)

export default Header;