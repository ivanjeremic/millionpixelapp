import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HooksProvider } from "./Context/HooksContext";
import { StateProvider } from "./Context/StateContext";
import { BuyPixelProvider } from "./Context/BuyPixelContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StateProvider>
    <HooksProvider>
      <BuyPixelProvider>
        <App />
      </BuyPixelProvider>
    </HooksProvider>
  </StateProvider>,
  rootElement
);
