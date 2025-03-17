import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App2 from "./App2.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/Store.js";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
      <Toaster  />
    </Provider>
  </React.StrictMode>
);
