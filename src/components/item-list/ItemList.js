import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../list-item/ListItem";

const itemList = (props) => {
  return (
    <FlatList
      style={styles.ListItems}
      data={props.places}
      renderItem={({ item }) => (
        <ListItem
          placeName={item.name}
          placeImage={item.image}
          onItemPress={() => props.onItemSelected(item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  ListItems: { width: "100%" },
});

export default itemList;
