import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import { store } from "./redux/store";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
