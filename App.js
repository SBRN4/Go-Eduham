import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./components/screens/splashScreen";
import Home from "./components/screens/home";
import PengHAM from "./components/screens/pengHAM";
import CiriHAM from "./components/screens/ciriHAM";
import JenisHAM from "./components/screens/jenisHAM";
import ContohHAM from "./components/screens/contohHAM";
import quiz from "./components/screens/quiz";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="quiz"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="splashScreen" component={SplashScreen} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="pengHAM" component={PengHAM} />
          <Stack.Screen name="ciriHAM" component={CiriHAM} />
          <Stack.Screen name="jenisHAM" component={JenisHAM} />
          <Stack.Screen name="contohHAM" component={ContohHAM} />
          <Stack.Screen name="quiz" component={quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
