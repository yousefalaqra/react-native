import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

const listItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPress}>
      <View style={styles.listItem}>
        <Image source={props.placeImage} style={styles.image} resizeMode={"cover"}/>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  image:{
    marginRight: 10,
    height: 30,
    width:30
  }
});

export default listItem;
