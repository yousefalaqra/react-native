import { createStore, combineReducers } from "redux";

import placesReducer from "./reducers/places";

const rootReducers = combineReducers({
  places: placesReducer,
});

const configureStore = () => {
    return createStore(rootReducers);
};

export default configureStore;
