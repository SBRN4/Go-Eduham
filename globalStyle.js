import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  root2: {
    backgroundColor: "white",
    flex: 1,
  },

  text1: {
    fontSize: 24,
    paddingTop: 50,
    paddingLeft: 20,
    fontWeight: 700,
  },

  text2: {
    fontSize: 14,
    paddingTop: 10,
    paddingLeft: 20,
    color: "#888888",
    fontWeight: "normal",
  },

  text3: {
    fontSize: 24,
    paddingTop: 32,
    paddingLeft: 20,
    fontWeight: "700",
  },

  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 6,
    paddingLeft: 54,
  },

  kotak: {
    marginTop: 20,
    marginLeft: 20,
  },

  kotakDalem: {
    padding: 10,
    backgroundColor: "#efead5d9",
    marginRight: 10,
    borderRadius: 4,
  },

  view1: {
    backgroundColor: "white",
    height: 210,
    width: 175,
    marginTop: 22,
    marginLeft: 20,
    borderRadius: 6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 4,
    shadowRadius: 9,

    elevation: 5,
  },

  gambar: {
    backgroundColor: "#F1F1F1F1",
    width: 139,
    height: 140,
    borderRadius: 6,
    marginTop: 20,
  },

  butSave: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },

  textSave: {
    flexDirection: "row",
    marginTop: 14,
    justifyContent: "space-between",
    width: 139,
  },

  bottomNav: {
    height: 70,
    marginTop:20,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: "white",
  },

  buttonNav: {
    width: 22,
    height: 22,
  },

  latihan: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  nomor: {
    flexDirection: "row",
    backgroundColor: "#3A1318",
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  latihan2: {
    marginTop: 40,
    justifyContent: "flex-start",
    width: "100%",
    marginLeft: 50,
  },

  latihan3: {
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center",
  },

  soal: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#F1F1F1",
    width: 360,
    height: 200,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },

  select: {
    flexDirection: "row",
    backgroundColor: "black",
    borderColor: "#F1F1F1",
    marginTop: 30,
    width: 360,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },

  unselect: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#F1F1F1",
    marginTop: 30,
    width: 360,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },

  mainQuiz: {
    backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between'
  },

  headMateri: {
    marginTop: 68,
    flexDirection: "row",
    justifyContent: "space-between",
    width: '80%',
    marginBottom: 94
},

quizReview: {
  quizReview:{
    width: '100%',
    height: 347,
    backgroundColor: "brown",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-between'
},

jawaban: {
  backgroundColor: '#27AE60',
  width: 155,
  height: 74,
  borderRadius: 16,
  flexDirection: 'column',
  paddingVertical: 12,
  paddingLeft:16
},

textJawaban: {
  color: 'white',
  fontSize: 13,
  fontWeight: 500,
  marginBottom: 8
},

jawabanSalah: {
  backgroundColor: '#EB5757',
  width: 155,
  height: 74,
  borderRadius: 16,
  flexDirection: 'column' ,
  paddingVertical: 12,
  paddingLeft:16
},

buttonCheck: {
  width: 326,
  backgroundColor: "brown",
  height: 48,
  marginBottom: 16,
  borderRadius: 6,
  alignItems: 'center',
  justifyContent: 'center'
},

}

});
