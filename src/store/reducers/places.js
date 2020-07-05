import * as actionTypes from "../actions/actionTypes";
import PlaceImage from "../../assets/images/test.jpg";

const intialState = {
  places: [],
  selectedPlace: null,
};

id = 0;

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: `place${++this.id}`,
          name: action.payload,
          image: PlaceImage,
        }),
      };

    case actionTypes.REMOVE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null,
      };

    case actionTypes.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find((x) => x.key === action.payload),
      };

    case actionTypes.DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };

    default:
      return state;
  }
};

export default reducer;
