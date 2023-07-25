import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Card.style";

const Card = ({ props }) => {
  return (
    <View style={styles.body}>
      <View style={styles.div1}>
        <Image style={styles.image} source={{ uri: props.imgURL }}></Image>
        <View style={styles.div2}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={{ color: "purple", fontSize: 16, fontWeight: "bold" }}>
            {props.price}
          </Text>
          {!props.inStock ? (
            <Text style={styles.stok}>Stokta Yok</Text>
          ) : (
            <View
              style={{
                justifyContent: "flex-end",
                textAlign: "right",
              }}
            ></View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;
