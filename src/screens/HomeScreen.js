import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

const { width, height } = Dimensions.get("screen");

const HomeScreen = () => {
  const [number, setNumber] = useState(60);
  const [action, setAction] = useState(false);

  useEffect(() => {
    let interval;
    if (action && number > 0) {
      interval = setInterval(() => setNumber((prevTime) => prevTime - 1), 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [number, action]);
  const handleToggle = () => {
    setAction(!action);
  };
  const handleRefresh = () => {
    setNumber(60);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBG}
        src={
          "https://images.unsplash.com/photo-1685029736462-5c091106a37c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        }
      />
      <View style={styles.viewBody}>
        <View style={styles.time}>
          <Text style={styles.textTime}>{number}</Text>
        </View>
        <View style={styles.action}>
          <TouchableOpacity onPress={handleToggle}>
            <AntDesign
              name={`${action ? "pausecircleo" : "playcircleo"}`}
              size={100}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRefresh}>
            <Ionicons name="refresh" size={100} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    width: width,
    height: height,
    position: "absolute",
  },
  viewBody: {
    flex: 1,
    justifyContent: "space-around",
    zIndex: 1,
  },
  time: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 50,
  },
  textTime: {
    width: 300,
    height: 300,
    padding: 50,

    borderWidth: 8,
    borderColor: "#fff",
    borderRadius: 150,

    textAlign: "center",
    color: "#555",
    fontWeight: 700,
    fontSize: 140,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-evenly",

    marginBottom: 40,
  },
});
