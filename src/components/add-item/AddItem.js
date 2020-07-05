import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class AddItem extends Component {
  state = {
    placeName: "",
  };

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val,
    });
  };

  buttonClickHandler = () => {
    if (this.state.placeName.trim() === "") return;

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.placeName}
          placeholder={"Insert an amazing place"}
          onChangeText={this.placeNameChangeHandler}
          style={styles.inoutText}
        />
        <Button
          title={"Add"}
          style={styles.button}
          onPress={this.buttonClickHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    padding: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inoutText: { width: "70%" },
  button: { width: "30%" },
});

export default AddItem;
