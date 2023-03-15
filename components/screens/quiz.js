import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { globalStyle } from "../../globalStyle";

const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{fontWeight: 600, fontSize: 16, marginTop: 40}}>Daftar Quiz</Text>
      <View style={{marginTop: 40, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', backgroundColor:'white', borderColor: '#F1F1F1', width: 350,height: 110, borderWidth: 1, borderRadius: 10, alignItems: 'center', paddingHorizontal: 10}}>
          <Image style={{width: 80, height: 80}} source={require("../assets/quiz1.png")}/>
          <View style={{marginLeft: 10}}>
            <Text style={{marginBottom: 6, fontSize: 14, fontWeight: 600}}>Quiz BAB I - Pemahaman HAM</Text>
            <Text style={{fontSize: 12, fontWeight: 400, color: "#888888", marginBottom: 10}}>Soal-soal quiz pemahaman HAM</Text>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#3C2317', maxWidth: 75, alignItems: 'center', borderRadius: 5}}>
              <Text style={{color: 'white', fontSize: 10}}>
                Coba Quiz
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
