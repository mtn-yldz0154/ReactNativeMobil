import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    textAlign: "center",
  },
  div1: {
    flexWrap: "wrap",
    flexDirection: "row",
    margin: 10,
    backgroundColor: "rgb(236,239,241)",
  },
  title: {
    marginVertical: 10,
    width: "90%",
    fontWeight: "bold",
    fontSize: 14,
  },
  div2: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  body: {
    flex: 1,
  },
  stok: {
    marginVertical: 5,
    color: "rgb(151,140,184)",
    fontSize: 18,
    fontWeight: "bold",
  },
});
