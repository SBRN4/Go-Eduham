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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("home");
            }}
          >
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
          source={require("../assets/Ciri.png")}
        />
      </View>

      <View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 150 }}>
            Ciri - ciri HAM
          </Text>
          <Text style={{ fontSize: 12, marginTop: 8 }}> Materi bab II</Text>
        </View>
      </View>

      <ScrollView>
        <Text
          style={{
            marginHorizontal: 35,
            marginTop: 24,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            color: "#333333",
          }}
        >
          1. HAM bersifat Hakiki
        </Text>

        <Text
          style={{
            marginHorizontal: 35,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            color: "#888888",
          }}
        >
          Ciri pertama dari HAM adalah bersifat hakiki yang berarti Hak Asasi
          Manusia adalah hak yang diberikan kepada semua manusia sejak lahir.
          Maka dari itu, setiap manusia harus menjunjung tinggi hak-hak dasar
          yang sudah dimiliki oleh manusia lainnya. Apabila sesama manusia bisa
          saling menghormati dan menjunjung tinggi satu sama lain, maka
          kemungkinan besar keharmonisan antar manusia dapat terjalin dengan
          baik.
        </Text>
        <Text
          style={{
            marginHorizontal: 35,
            marginTop: 24,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            color: "#333333",
          }}
        >
          2. HAM bersifat Universal
        </Text>

        <Text
          style={{
            marginHorizontal: 35,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            color: "#888888",
          }}
        >
          Ciri kedua dari HAM adalah bersifat universal yang berarti Hak Asasi
          Manusia berlaku untuk setiap manusia yang ada di seluruh dunia tanpa
          melihat latar belakang dari manusia itu sendiri. Dalam hal ini, latar
          belakang yang dimaksud adalah jenis kelamin, agama, status sosial,
          ras, suku bangsa, dan sebagainya. Dengan kata lain, adanya HAM bisa
          mengurangi terjadinya konflik yang terjadi karena adanya perbedaan.
        </Text>
        <Text
          style={{
            marginHorizontal: 35,
            marginTop: 24,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            color: "#333333",
          }}
        >
          3. HAM bersifat tidak bisa dicabut
        </Text>

        <Text
          style={{
            marginHorizontal: 35,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            color: "#888888",
          }}
        >
          Ciri ketiga dari HAM adalah bersifat tidak bisa dicabut. Ciri Hak
          Asasi Manusia yang satu ini dapat diartikan bahwa hak-hak dasar yang
          sudah ada di dalam diri manusia sejak lahir tidak bisa diserahkan
          kepada orang lain atau tidak bisa dirampas oleh orang lain. Apabila
          hak-hak dasar manusia dirampas oleh orang lain, maka sesama manusia
          sangat mudah terjadi konflik yang bisa membahayakan individu itu
          sendiri dan lingkungannya.
        </Text>
        <Text
          style={{
            marginHorizontal: 35,
            marginTop: 24,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            color: "#333333",
          }}
        >
          4. HAM bersifat tidak bisa dibagi
        </Text>

        <Text
          style={{
            marginHorizontal: 35,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            marginBottom:24,
            color: "#888888"
          }}
        >
          Ciri keempat dari HAM adalah bersifat tidak bisa dibagi yang mana
          setiap manusia berhak untuk memperoleh semua hak yang sama, seperti
          hak sipil dan hak politik, hak ekonomi, serta hak sosial dan budaya.
          Jika HAM dibagi-bagi, maka akan ada manusia yang merasa dirinya
          diperlakukan tidak adil karena tidak mendapatkan hak yang sama dengan
          individu individu lainnya.
        </Text>
      </ScrollView>

      <TouchableOpacity
      onPress={() => navigation.navigate("quiz")}
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
