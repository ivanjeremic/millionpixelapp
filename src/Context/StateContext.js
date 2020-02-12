import React from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  const StateReducer = (state, action) => {
    switch (action.type) {
      case "TOOLTIP_TRUE":
        return {
          ...state,
          tooltipVisible: true
        };
      case "TOOLTIP_FALSE":
        return {
          ...state,
          tooltipVisible: false
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(StateReducer, {
    tooltipVisible: false
  });

  console.log("tooltipVisible", state.tooltipVisible);

  // Logut
  const toggleTooltipTrue = () => {
    dispatch({ type: "TOOLTIP_TRUE" });
  };

  const toggleTooltipFalse = () => {
    dispatch({ type: "TOOLTIP_FALSE" });
    console.log("FALSE");
  };

  return (
    <StateContext.Provider
      value={{
        tooltipVisible: state.tooltipVisible,
        toggleTooltipTrue,
        toggleTooltipFalse
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
