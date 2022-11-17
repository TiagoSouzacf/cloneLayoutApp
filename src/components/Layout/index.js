import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topo: {
    flexDirection: "row",
  },
  icone: {
    color: "#ff7a00",
    width: 30,
    height: 30,
    marginRight: 5,
  },

  relogio: {
    marginTop: 15,
    width: "30%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  bateria: {
    marginLeft: 150,
    flexDirection: "row",
    marginTop: 15,
    width: "30%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  interrogacao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 25,
    marginTop: 15,
    width: "100%",
    height: 40,
  },
  inter: {
    marginTop: 5,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  interTexto: {
    fontSize: 60,
    fontWeight: 600,
    color: "#ff7a00",
  },
  conta: {
    marginTop: 150,
    marginLeft: 20,
    width: "90%",
    height: 100,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#e9e9e9",
  },

  contaCorrente: {
    flexDirection: "row",
    width: "20%",
    height: 100,
    marginLeft: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  ts: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 75,
    backgroundColor: "#4e4e4e",
    borderRadius: 50,
  },
  nome: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    marginLeft: 10,
    marginBottom: 20,
  },
  trocar: {
    marginLeft: 70,
    marginTop: 10,
    height: 80,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },

  senha: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    color: "#959595",
  },
  botaoSenha: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    marginTop: 5,
    marginLeft: 20,
    borderRadius: 10,
    width: "90%",
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
  },
  entrar: {
    width: "90%",
    height: 70,
    marginTop: 40,
    marginLeft: 20,
    backgroundColor: "#ff7a00",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  esqueciSenha: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  fundo: {
    flexDirection: "row",
  },

  isafe: {
    height: 130,
    width: "30%",
    marginLeft: 20,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  trocarConta: {
    height: 130,
    width: "60%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default styles
