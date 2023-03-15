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
    paddingTop: 20,
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
    marginTop: 15,
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
    marginTop: 45,
    justifyContent: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 10,
    shadowRadius: 18,
    elevation: 10,
    backgroundColor: 'white',
  },

  buttonNav: {
    width: 22,
    height: 22,
  },

});
