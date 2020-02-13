import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "sticky",
    bottom: 0,
    marginBottom: 0
  },
  checkout: {
    background: "green"
  },
  cancel: {
    background: "red"
  }
});

export default function BottomNavDrawer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const LabelCheckout = () => {
    return <p style={{ color: "white", fontSize: "16px" }}>Checkout</p>;
  };
  const LabelCancel = () => {
    return <p style={{ color: "white", fontSize: "16px" }}>Cancel</p>;
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.checkout}
        label={<LabelCheckout />}
        icon={<AttachMoneyIcon style={{ color: "white" }} />}
      />
      <BottomNavigationAction
        className={classes.cancel}
        label={<LabelCancel />}
        icon={<MoneyOffIcon style={{ color: "white" }} />}
      />
    </BottomNavigation>
  );
}
