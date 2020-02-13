import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HooksProvider } from "./Context/HooksContext";
import { StateProvider } from "./Context/StateContext";
import { BuyPixelProvider } from "./Context/BuyPixelContext";
import { RedisProvider } from "./Context/RedisContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StateProvider>
    <RedisProvider>
      <HooksProvider>
        <BuyPixelProvider>
          <App />
        </BuyPixelProvider>
      </HooksProvider>
    </RedisProvider>
  </StateProvider>,
  rootElement
);
