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
          source={require("../assets/Jenis.png")}
        />
      </View>

      <View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 150 }}>
            Jenis - Jenis HAM
          </Text>
          <Text style={{ fontSize: 12, marginTop: 8 }}> Materi bab III</Text>
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
            color: "#888888",
          }}
        >
          Ada beberapa jenis hak asasi manusia,antara lain:
        </Text>
        <Text
          style={{
            marginHorizontal: 35,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 24,
            color: "#333333",
          }}
        >
          1. Hak Sipil dan Politik
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
          Hal ini untuk melindungi kehidupan dan kebebasan seseorang, disebut
          juga dengan hak sipil. Hak ini diperlukan untuk menjaga martabat
          seseorang, termasuk hak untuk hidup, hak privasi, hak untuk memiliki
          properti, kebebasan berpikir, dan lainnya. Nah, hak politik adalah hak
          yang memungkinkan seseorang untuk berpartisipasi dalam kegiatan
          pemerintahan. Ini termasuk hak untuk memilih dan hak untuk dipilih,
          keduanya saling terkait satu sama lain. Keduanya tercantum dalam
          International Covenant on Civil and Political Rights.
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
          2. Hak Fundamental
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
          Setiap manusia sebagai warga negara dijamin melalui ketentuan
          konstitusional dan tidak dapat dilanggar dengan apa pun, bahkan oleh
          otoritas negara. Hal ini dinyatakan dalam deklarasi dan ketentuan
          konstitusional banyak negara. Mengacu pada French Declaration of
          Rights of Man and Citizen, bahwa pria dilahirkan bebas dan memiliki
          hak yang sama.
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
          3. Hak Moral
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
          Hak asasi manusia yang menentukan perilaku spiritual dan moral,
          disebut juga hak moral. Hal ini menyoroti berbagai nilai moral yang
          tidak dapat dinilai oleh hak institusional mana pun. Beberapa
          contohnya, seperti menghormati semua orang, persaudaraan, sekularisme,
          kedamaian, dan lainnya. Hak asasi ini juga menempatkan kewajiban moral
          pada negara dan individu untuk tidak melanggar hak orang lain. Jika
          hal ini dilakukan, maka sanksi akan dikenakan sesuai dengan ketentuan
          undang-undang yang telah ditetapkan.
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
          4. Hak Ekonomi, Budaya, dan Sosial
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
          Hal ini disebut juga dengan kebebasan dan penjaminan kebutuhan hidup
          minimum seseorang. Negara diharuskan menyusun kebijakan dan ketentuan
          untuk melaksanakan hak-hak ini pada warga negaranya. Beberapa hal ini
          meliputi atas pekerjaan, jaminan sosial, kesehatan fisik dan mental,
          hingga pendidikan. Beberapa hak yang diakui oleh Universal Declaration
          of Human Rights, antara lain:
        </Text>
        <Text style={styles.item}>• Hak atas jaminan sosial.</Text>
        <Text style={styles.item}>• Hak atas pekerjaan dan pilihan pekerjaan.</Text>
        <Text style={styles.item}>• Hak untuk beristirahat.</Text>
        <Text style={styles.item}>• Hak atas standar hidup dan kesehatan.</Text>
        <Text style={styles.item}>• Hak atas pendidikan.</Text>
        <Text style={styles.item}>• Hak atas tatanan sosial dan internasional.</Text>
        <Text style={[styles.item, style={marginBottom:24}]}>• Kebebasan berpartisipasi dalam kehidupan budaya.</Text>
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
    marginHorizontal: 45,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 24,
    color: "#888888",
  },
});
