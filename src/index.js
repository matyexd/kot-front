import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { AppFonts } from "./utils/AppFonts";
import { appTheme } from "./constants/appTheme";
import KotCloudStore from "./store/RootStore";
import { Provider } from "mobx-react";

export const rootStore = new KotCloudStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...rootStore}>
    <BrowserRouter>
      <MantineProvider withNormalizeCSS withGlobalStyles theme={appTheme}>
        <App />
        <AppFonts />
      </MantineProvider>
    </BrowserRouter>
  </Provider>
);
