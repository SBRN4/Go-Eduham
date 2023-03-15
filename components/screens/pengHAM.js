import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const PengHAM = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          width: "100%",
          paddingTop: 50,
          backgroundColor: "#EFEAD5",
          paddingHorizontal: 23,
          height: 200,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 36,
          }}
        >
          <TouchableOpacity onPress={()=> {navigation.navigate('home')}}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ marginRight: 25, fontSize: 16, fontWeight: 700 }}>
            Detail Materi
          </Text>
          <View></View>
        </View>
        <Image
          style={{
            width: 200,
            height: 210,
            borderRadius: 6,
            borderWidth: 5,
            borderColor: "white",
          }}
          source={require("../assets/Ham.png")}
        />
      </View>

      <View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Pengertian HAM</Text>
          <Text style={{ fontSize: 12, marginTop: 8 }}> Materi bab I</Text>
        </View>
        <Text
          style={{
            marginHorizontal: 35,
            marginTop: 24,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 24,
            color: "#888888",
          }}
        >
          Hak Asasi Manusia merupakan perlindungan secara moral dan hukum,
          sehingga manusia dapat terlindungi dari berbagai macam tindakan
          kekerasan, perampasan, penganiayaan, dan sebagainya. Selain itu, HAM
          berfungsi untuk memberikan kebebasan hak manusia yang asasi kepada
          seluruh masyarakat dunia yang mana bertujuan untuk menyadarkan
          masyarakat di dunia agar selalu menghormati dan menegakkan HAM.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 306,
          height: 50,
          backgroundColor: "#3C2317",
          borderRadius: 6,
          marginBottom: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
          Latihan Soal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PengHAM;