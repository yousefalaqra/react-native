import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const itemDetails = (props) => {
  let modalConent = null;
  if (props.place) {
    modalConent = (
      <View>
        <Image source={props.place.image} style={styles.placeImage} />
        <Text style={styles.placeText}>{props.place.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      visible={props.place !==null}
      animationType={"slide"}
      onRequestClose={props.onModalClose}
    >
      <View style={styles.modalContainer}>
        {modalConent}

        <View>
          <Button
            style={styles.deleteButton}
            title={"Delete"}
            onPress={props.onPlaceDelete}
            color={"red"}
          />
          <Button
            style={styles.closeButton}
            title={"Close"}
            onPress={props.onModalClose}
            color={"#add"}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    height: 200,
    width: "100%",
  },
  placeText: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center"
  },
  deleteButton: { marginBottom: 15},
  closeButton: { color: "yellow" },
});

export default itemDetails;
