import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
// TODO. move to router props
import sidebarConfig from "router/sidebar";

const SideBar = props => {
  const renderItemList = (item, idx) => {
    const icon = <i className="material-icons">{item.iconMaterials}</i>;
    return (
      <ListItem button key={`sidebar-${item.title}-${idx}`}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    );
  };
  return (
    <>
      <Divider />
      <List>{sidebarConfig.map(renderItemList)}</List>
      <Divider />
    </>
  );
};

export default SideBar;
