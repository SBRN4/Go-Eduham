import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import BotNav from "../navigation/bottomNav";
import { globalStyle } from "../../globalStyle";

const Home = ({ navigation }) => {

  const hamHandler = () => {
    navigation.navigate("pengHAM");
  };

  const ciriHandler = () => {
    navigation.navigate("ciriHAM");
  };

  const jenisHandler = () => {
    navigation.navigate("jenisHAM");
  };

  const contohHandler = () => {
    navigation.navigate("contohHAM");
  };
  
  return (
    <View style={globalStyle.root2}>
      <View>
        <Text style={globalStyle.text1}>Selamat Datang!</Text>
        <Text style={globalStyle.text2}>
          Selamat datang di Go-eduham, disini kamu akan mengetuhui lebih lanjut
          tentang.
        </Text>
        <TextInput
          style={globalStyle.input}
          placeholder="Mau cari penjelasan HAM?"
        />
        <ScrollView
          style={globalStyle.kotak}
          horizontal={true}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={globalStyle.kotakDalem}>
            <Text> Undang-undang </Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyle.kotakDalem}>
            <Text> Jenis-jenis HAM </Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyle.kotakDalem}>
            <Text> Kasus HAM </Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyle.kotakDalem}>
            <Text> Pengertian </Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={globalStyle.text3}>Materi Populer</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={hamHandler}>
            <View style={globalStyle.view1}>
              <Image
                style={globalStyle.gambar}
                source={require("../assets/Ham.png")}
              />
              <View style={globalStyle.textSave}>
                <Text>Pengertian HAM</Text>
                <TouchableOpacity>
                  <Image
                    style={globalStyle.butSave}
                    source={require("../assets/Save.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={ciriHandler}>
            <View style={[globalStyle.view1, globalStyle.shadowProps]}>
              <Image
                style={globalStyle.gambar}
                source={require("../assets/Ciri.png")}
              />
              <View style={globalStyle.textSave}>
                <Text>Ciri - ciri HAM</Text>
                <TouchableOpacity>
                  <Image
                    style={globalStyle.butSave}
                    source={require("../assets/Save.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={jenisHandler}>
            <View style={[globalStyle.view1, globalStyle.shadowProps]}>
              <Image
                style={globalStyle.gambar}
                source={require("../assets/Jenis.png")}
              />
              <View style={globalStyle.textSave}>
                <Text>Jenis - jenis HAM</Text>
                <TouchableOpacity>
                  <Image
                    style={globalStyle.butSave}
                    source={require("../assets/Save.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={contohHandler}>
            <View style={[globalStyle.view1, globalStyle.shadowProps]}>
              <Image
                style={globalStyle.gambar}
                source={require("../assets/Contoh.png")}
              />
              <View style={globalStyle.textSave}>
                <Text>Contoh HAM</Text>
                <TouchableOpacity>
                  <Image
                    style={globalStyle.butSave}
                    source={require("../assets/Save.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <BotNav/>
    </View>
  );
};

export default Home;
