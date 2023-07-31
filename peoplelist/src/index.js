import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/People";
import { NavigationProvider } from "./context/navegation";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <Provider>
      <App />
    </Provider>
  </NavigationProvider>
);