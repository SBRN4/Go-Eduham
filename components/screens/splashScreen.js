import { View, Image } from "react-native";
import { globalStyle } from "../../globalStyle";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("home");
  }, 2000);

  return (
    <View style={globalStyle.root}>
      <Image
        style={globalStyle.splash}
        source={require("../assets/splash.png")}
      />
    </View>
  );
};

export default SplashScreen;
