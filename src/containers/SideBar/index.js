import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const _test = () => {
  alert("has dado click");
};

function _renderIcon(index) {
  switch (index) {
    case 0:
      return <i className="material-icons">person</i>;
    case 1:
      return <i className="material-icons">graphic_eq</i>;
    case 2:
      return <i class="material-icons">library_books</i>;
    default:
      return null;
  }
}

const SideBar = () => (
  <Divider>
    <List>
      {["Usuarios", "Interaciones", "Publicaciones"].map((text, index) => (
        <ListItem button key={text} onClick={_test}>
          <ListItemIcon>{_renderIcon(index)}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Divider>
);

export default SideBar;
