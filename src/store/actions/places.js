import * as actionTypes from "./actionTypes";

export const addPlace = (placeName) => {
  return {
    type: actionTypes.ADD_PLACE,
    payload: placeName,
  };
};

export const removePlace = () => {
  return {
    type: actionTypes.REMOVE_PLACE,
  };
};

export const selectPlace = (key) => {
  return {
    type: actionTypes.SELECT_PLACE,
    payload: key,
  };
};

export const deselectPlace = () => {
  return {
    type: actionTypes.DESELECT_PLACE,
  };
};
