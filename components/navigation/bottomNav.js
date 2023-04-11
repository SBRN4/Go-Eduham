import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { globalStyle } from "../../globalStyle";

import { useNavigation } from "@react-navigation/native";

export default function BotNav() {
  const navigation = useNavigation();
  return (
    <View style={globalStyle.bottomNav}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Image
            style={globalStyle.buttonNav}
            source={require("../assets/Vector.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("quiz");
          }}
          style={{ marginHorizontal: 100 }}
        >
          <Image
            style={globalStyle.buttonNav}
            source={require("../assets/note.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={globalStyle.buttonNav}
            source={require("../assets/book.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
