import { registerRootComponent } from "expo";

import App from "./App";
import React from "react";
import configureStore from "./src/store/configureStore";
import { Provider } from "react-redux";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

const store = configureStore();

const ReactNativeRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(ReactNativeRedux);
