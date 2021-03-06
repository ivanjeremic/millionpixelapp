import React from "react";

export const BuyPixelContext = React.createContext();

export const BuyPixelProvider = ({ children }) => {
  const [colFrom, setColFrom] = React.useState({});
  const [colTo, setColTo] = React.useState({});
  const [rowFrom, setRowFrom] = React.useState({});
  const [rowTo, setRowTo] = React.useState({});
  const [total, setTotal] = React.useState(0);

  const BuyPixelReducer = (state, action) => {
    switch (action.type) {
      case "TOOLTIP_TRUE":
        return {
          ...state,
          tooltipVisible: true
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(BuyPixelReducer, {
    coordinates: "0/0"
  });

  // Logut
  const toggleTooltipTrue = () => {
    dispatch({ type: "TOOLTIP_TRUE" });
  };

  const [buyPixeldata, setBuyPixeldata] = React.useState([
    {
      title: "facebook",
      gridColumn: "1/1000",
      gridRow: "1/80",
      image: `repeat #333333`,
      link: "https://facebook.com"
    }
  ]);

  const options = [];

  for (var i = 1; i <= 1000; i++) {
    options.push({ value: JSON.stringify(i), label: JSON.stringify(i) });
  }

  return (
    <BuyPixelContext.Provider
      value={{
        coordinates: state.coordinates,
        options,
        setColFrom,
        setColTo,
        setRowFrom,
        setRowTo,
        setTotal,
        colFrom,
        colTo,
        rowFrom,
        rowTo,
        total
      }}
    >
      {children}
    </BuyPixelContext.Provider>
  );
};
