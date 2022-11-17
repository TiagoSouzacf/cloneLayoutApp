import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
      fontSize: 11,
      fontWeight: 700,
      justifyContent: "center",
      alignItems: "center",
    },
  
    icone: {
      color: "#ff7a00",
      width: 25,
      height: 25,
    },
    container: {
      flex: 1,
    },
    container1: {
      flexDirection: "row",
    },
    container2: {
      flex: 1,
      marginLeft: 12,
      justifyContent: "space-evenly",
      alignContent: "space-around",
      flexWrap: "wrap",
      flexDirection: "row",
  
      marginRight: 15,
    },
  
    interTexto: {
      marginTop: 60,
      marginLeft: 35,
      fontSize: 30,
      fontWeight: 600,
      color: "#ff7a00",
    },
    bandeira: {
      marginTop: 70,
      width: "20%",
      height: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 20,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#e9e9e9",
    },
    banBrasil: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "40%",
      height: 25,
      backgroundColor: "#DCDCDC",
      borderRadius: 20,
    },
  
    pesquisa: {
      flexDirection: "row",
      marginTop: 70,
      marginLeft: 100,
      height: 25,
    },
    saldo: {
      marginTop: 40,
      marginLeft: 35,
      width: "40%",
      height: 40,
      borderRadius: 8,
      backgroundColor: "#F5f5f7",
    },
    cards: {
      width: "30%",
      height: 120,
      alignItems: "center",
      justifyContent: "space-evenly",
      marginTop: 20,
  
      borderWidth: 3,
      borderRadius: 10,
      borderColor: "#e9e9e9",
    },
  });
  
  export default styles