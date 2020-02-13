import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Select from "react-select";
import { BuyPixelContext } from "./Context/BuyPixelContext";
import BottomNavDrawer from "./BottomNavDrawer";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function BuyPixelForm() {
  const { options } = React.useContext(BuyPixelContext);
  const [state, setState] = React.useState({ right: false });
  const [col, setCol] = React.useState({});
  const classes = useStyles();

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  console.log("col", col);

  const sideList = side => (
    <>
      <div className={classes.list} role="presentation">
        <AppBar position="sticky">Total Pixels: {col.value}</AppBar>
        <Divider style={{ margin: "10px" }} />
        <div style={{ padding: "0.3em" }}>
          <Chip
            label="Select Column"
            icon={<ViewQuiltIcon />}
            color="primary"
          />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Chip label="From" />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Select
            placeholder="From Column"
            options={options}
            onChange={setCol}
            value={{}.hasOwnProperty.call(col, "value") ? col : null}
          />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Chip label="To" />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Select
            placeholder="To Column"
            options={options}
            onChange={setCol}
            value={{}.hasOwnProperty.call(col, "value") ? col : null}
          />
        </div>
        <Divider style={{ margin: "10px" }} />
        <div style={{ padding: "0.3em" }}>
          <Chip label="Select Row" icon={<ViewQuiltIcon />} color="primary" />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Chip label="From" />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Select
            placeholder="From Row"
            options={options}
            onChange={setCol}
            value={{}.hasOwnProperty.call(col, "value") ? col : null}
          />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Chip label="To" />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Select
            placeholder="To Row"
            options={options}
            onChange={setCol}
            value={{}.hasOwnProperty.call(col, "value") ? col : null}
          />
        </div>
        <Divider style={{ margin: "10px" }} />
        <List>
          {["Checkout", "Cancel"].map((text, index) => (
            <ListItem button key={text} onClick={() => setCol({})}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      <BottomNavDrawer />
    </>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleDrawer("right", true)}
      >
        Select Pixels
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {sideList("right")}
      </SwipeableDrawer>
    </div>
  );
}
