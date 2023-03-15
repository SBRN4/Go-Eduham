import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Text,
  View,
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
          source={require("../assets/Jenis.png")}
        />
      </View>

      <View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 150 }}>
            Contoh HAM
          </Text>
          <Text style={{ fontSize: 12, marginTop: 8 }}> Materi bab IV</Text>
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
          Contoh Hak Asasi Manusia Secara Umum
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
          Adanya contoh hak asasi m anusia secara umum ini sama dengan hak-hak
          manusia dalam konteks pribadi atau kehidupan pribadi.
        </Text>
        
        <Text style={styles.item}>1. Hak kebebasan untuk bergerak, bepergian, dan berpindah-pindah tempat.</Text>
        <Text style={styles.item}>2. Hak kebebasan mengeluarkan atau menyatakan pendapat.</Text>
        <Text style={styles.item}>3. Hak kebebasan memilih dan aktif dalam organisasi atau perkumpulan.</Text>
        <Text style={styles.item}>4. Hak kebebasan untuk memilih, memeluk, menjalankan agama dan kepercayaan yang diyakini masing-masing.</Text>
        <Text style={styles.item}>5. Hak untuk hidup, berperilaku, tumbuh dan berkembang.</Text>
        <Text style={styles.item}>6. Hak untuk tidak dipaksa dan disiksa.</Text>
        <Text style={styles.item}>7. Hak kebebasan dari rasa takut.</Text>
        <Text style={styles.item}>8. Hak untuk bebas dari situasi yang buruk.</Text>
        <Text style={styles.item}>9. Hak melakukan hal-hal yang diinginkan.</Text>
        <Text style={styles.item}>10. Hak untuk memiliki anak atau tidak memiliki anak.</Text>
        <Text style={styles.item}>11. Hak untuk berkeluarga.</Text>
        <Text style={styles.item}>12. Hak mendapatkan kasih sayang atau menjalin hubungan untuk kasih dan sayang.</Text>
        <Text style={styles.item}>13. Hak untuk berteman dan melakukan sosialisasi dengan siapa pun, di mana pun, dan kapan pun.</Text>

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
          Contoh Hak Asasi Manusia Secara Hukum
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
          Adanya contoh hak asasi manusia secara hukum ini sama dengan hak-hak manusia dalam konteks bahwa setiap manusia memiliki kedudukan yang sama di depan hukum dan pemerintahan.
        </Text>
        <Text style={styles.item}>14. Hak mendapatkan perlakuan yang sama dalam hukum dan pemerintahan.</Text>
        <Text style={styles.item}>15. Hak untuk menjadi pegawai negeri sipil (PNS).</Text>
        <Text style={styles.item}>16. Hak dalam mendapatkan dan memiliki pembelaan hukum pada peradilan.</Text>
        <Text style={styles.item}>17. Hak mendapat layanan dan perlindungan hukum.</Text>
        <Text style={styles.item}>17. Hak atas rasa aman.</Text>

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
          Contoh Hak Asasi Manusia Secara Sosial
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
          Adanya contoh hak asasi manusia secara sosial ini sama dengan hak-hak manusia dalam menjalani kehidupan bermasyarakat.
        </Text>
        <Text style={styles.item}>19. Hak menentukan, memilih, dan mendapatkan pendidikan.</Text>
        <Text style={styles.item}>20. Hak mendapatkan pengajaran.</Text>
        <Text style={styles.item}>21. Hak untuk mengembangkan budaya yang sesuai dengan bakat dan minat.</Text>
        <Text style={styles.item}>22. Hak untuk mengembangkan Hobi.</Text>
        <Text style={styles.item}>23. Hak untuk berkreasi.</Text>
        <Text style={styles.item}>24. Hak untuk memperoleh jaminan sosial.</Text>
        <Text style={styles.item}>25. Hak untuk berkomunikasi.</Text>
        <Text style={styles.item}>26. Hak memilih pendidikan.</Text>
        <Text style={styles.item}>27. Hak mendapat pelayanan kesehatan.</Text>
        <Text style={styles.item}>28. Hak mengembangkan kebudayaan.</Text>
        <Text style={styles.item}>29. Hak diakui keberadaannya dalam masyarakat.</Text>
        <Text style={styles.item}>30. Hak untuk hidup dalam sebuah kerukunan.</Text>
        <Text style={[styles.item, style={marginBottom:24}]}>31. Hak untuk memperoleh kesempatan yang sama.</Text>
      </ScrollView>

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

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 35,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 24,
    color: "#888888",
  },
});
