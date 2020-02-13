import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { StateContext } from "./Context/StateContext";
import BuyPixelForm from "./BuyPixelForm";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  }
}));

export default function Header() {
  const { toggleTooltipFalse } = React.useContext(StateContext);
  const classes = useStyles();

  return (
    <div className={classes.root} onMouseMove={toggleTooltipFalse}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            <div className="container has-text-centered">
              <span class="tag is-light">
                1.000.000 pixel * 1$ per pixel * Own a piece of
                <strong style={{ padding: "0 5px" }}>NEW</strong>internet
                history!
              </span>
            </div>
          </Typography>
          <BuyPixelForm />
          <Button>Write</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
