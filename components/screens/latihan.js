import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import axios from "axios";
import { globalStyle } from "../../globalStyle";

const App = ({navigation }) => {
  const [page, setPage] = useState(1);
  const [jawaban, setJawaban] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [nilai, setNilai] = useState(0);
  // console.log("ini category", JSON.stringfy(categoryId));

  const getMateri = () => {
    axios
      .get("https://9247-114-142-168-43.ap.ngrok.io/api/quizzes/category/1")
      .then((response) => {
        setQuiz(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getMateri();
  }, []);

  const value = quiz.data?.find((v) => v.levelId === Number(page));

  //button handler
  const handleNext = () => {
    setPage(page == 6 ? 1 : page + 1);
    setJawaban("");
    if (jawaban == value?.key) {
      setNilai(nilai + 1);
    } else {
    }
  };

  if (page == 6) {
    return (
      <View style={globalStyle.mainQuiz}>
        <View style={globalStyle.headMateri}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("home");
            }}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: 500, marginRight:20 }}>
            {page == 4 ? "Hasil Quiz" : "Quiz"}
          </Text>
          <View></View>
        </View>
        <View
          style={{
            backgroundColor: "#A6A69C",
            width: 326,
            height: 150,
            borderRadius: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Image
            style={{ width: 110, height: 110 }}
            source={require("../assets/circle.png")}
          />
          <View
            style={{ position: "absolute", left: 45, alignItems: "center" }}
          >
            <Text style={{ color: "white", fontSize: 14, fontWeight: 400 }}>
              <Text style={{ fontWeight: 600, fontSize: 20 }}>{nilai}</Text> / 5
            </Text>
            <Text style={{ color: "white", fontSize: 12, fontWeight: 400 }}>
              skor kamu
            </Text>
          </View>
          <Text
            style={{
              maxWidth: 153,
              fontWeight: 600,
              fontSize: 17,
              color: "white",
            }}
          >
            Selamat kamu telah menyelesaikan Quiz dengan score{" "}
            {nilai == 1
              ? "20"
              : nilai == 2
              ? "40"
              : nilai == 3
              ? "60"
              : nilai == 4
              ? "80"
              : nilai
              ? "100"
              : 0}
            %
          </Text>
        </View>
        <TouchableOpacity
        onPress={handleNext}
        style={{
          marginTop:30,
          flexDirection: "row",
          paddingVertical: 12,
          backgroundColor: "#6D6969",
          borderRadius: 8,
          paddingHorizontal: 24,
        }}
      >
        <Text style={{ fontWeight: 500, color: "white", fontSize: 16,}}>
          {page == 5 ? "Selesai" : page == 0 ? "Mulai Quiz" : "Berikutnya"}
        </Text>
      </TouchableOpacity>
        <View style={globalStyle.quizReview}>
          <View style={{ width: 326, flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingTop: 24,
                marginBottom: 28,
              }}
            >
              <View style={globalStyle.jawaban}>
                <Text style={globalStyle.textJawaban}>{nilai}</Text>
                <Text style={globalStyle.textJawaban}>Jawaban Benar</Text>
              </View>
              <View style={globalStyle.jawabanSalah}>
                <Text style={globalStyle.textJawaban}>{5 - nilai}</Text>
                <Text style={globalStyle.textJawaban}>Jawaban Salah</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={globalStyle.latihan}>
      <Text style={{ fontWeight: 600, fontSize: 16, marginTop: 40 }}>
        Latihan Soal
      </Text>
      <View style={globalStyle.latihan2}>
        <View style={globalStyle.nomor}>
          <Text style={{ color: "white" }}>{page}</Text>
        </View>
        <View style={globalStyle.latihan3}></View>
      </View>
      <View style={globalStyle.soal}>
        <Text>{value?.quiz}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setJawaban("a");
        }}
      >
        <View
          style={jawaban === "a" ? globalStyle.select : globalStyle.unselect}
        >
          <Text
            style={
              jawaban === "a"
                ? {
                    color: "#F1F1F1",
                  }
                : {}
            }
          >
            A.{value?.a}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setJawaban("b");
        }}
      >
        <View
          style={jawaban === "b" ? globalStyle.select : globalStyle.unselect}
        >
          <Text
            style={
              jawaban === "b"
                ? {
                    color: "#F1F1F1",
                  }
                : {}
            }
          >
            B.{value?.b}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setJawaban("c");
        }}
      >
        <View
          style={jawaban === "c" ? globalStyle.select : globalStyle.unselect}
        >
          <Text
            style={
              jawaban === "c"
                ? {
                    color: "#F1F1F1",
                  }
                : {}
            }
          >
            C.{value?.c}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setJawaban("d");
        }}
      >
        <View
          style={jawaban === "d" ? globalStyle.select : globalStyle.unselect}
        >
          <Text
            style={
              jawaban === "d"
                ? {
                    color: "#F1F1F1",
                  }
                : {}
            }
          >
            D.{value?.d}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleNext}
        style={{
          marginTop:20,
          flexDirection: "row",
          paddingVertical: 12,
          backgroundColor: "#6D6969",
          borderRadius: 8,
          paddingHorizontal: 24,
        }}
      >
        <Text style={{ fontWeight: 500, color: "white", fontSize: 16,}}>
          {page == 5 ? "Selesai" : page == 0 ? "Mulai Quiz" : "Berikutnya"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
