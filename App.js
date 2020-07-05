import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import ItemList from "./src/components/item-list/ItemList";
import AddItem from "./src/components/add-item/AddItem";
import ItemDetails from "./src/components/itme-details/ItemDetails";

import * as PlacesActions from "./src/store/actions/index";

class App extends Component {
  buttonClickHandler = (place) => {
    this.props.addPlace(place);
  };

  removeItem = () => {
    this.props.removePlace();
  };

  selectItemHandler = (id) => {
    this.props.selectPlace(id);
  };

  closeModal = () => {
    this.props.deselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <ItemDetails
          onModalClose={this.closeModal}
          place={this.props.selectedPlace}
          onPlaceDelete={this.removeItem}
        />
        <AddItem onPlaceAdded={this.buttonClickHandler} />
        <ItemList
          places={this.props.places}
          onItemSelected={this.selectItemHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: (placeName) => dispatch(PlacesActions.addPlace(placeName)),
    removePlace: () => dispatch(PlacesActions.removePlace()),
    selectPlace: (key) => dispatch(PlacesActions.selectPlace(key)),
    deselectPlace: () => dispatch(PlacesActions.deselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
