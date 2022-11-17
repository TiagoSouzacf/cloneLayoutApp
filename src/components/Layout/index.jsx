import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SiGmail } from "react-icons/si";
import { BsBellSlashFill, BsPhoneLandscape } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { FaSignal } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <View style={styles.relogio}>
          <Text>
            19:00 <SiGmail />
          </Text>
        </View>
        <View style={styles.bateria}>
          <BsBellSlashFill />
          <FaSignal />
          <ImConnection />
          <BsPhoneLandscape />
        </View>
      </View>
      <View style={styles.interrogacao}>
        <BsQuestionCircle style={{ color: "#ff7a00", width: 30, height: 30 }} />
      </View>
      <View style={styles.inter}>
        <Text style={styles.interTexto}>inter</Text>
      </View>
      <View style={styles.conta}>
        <View style={styles.contaCorrente}>
          <View style={styles.ts}>
            <Text style={{ fontSize: 40, color: "#FFF" }}>TS</Text>
          </View>
          <View style={styles.nome}>
            <Text style={{ fontSize: 20, color: "#959595" }}>Tiago Souza</Text>
            <Text style={{ fontSize: 20, color: "#000", fontWeight: "600" }}>
              ***.626.527-**
            </Text>
          </View>
          <View style={styles.trocar}>
            <Text style={{ fontSize: 20, color: "#ff7a00", fontWeight: "700" }}>
              Trocar
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.senha}>Senha</Text>
      <View style={styles.botaoSenha}>
        <Text style={{ fontSize: 20, color: "#c0c0c0", marginLeft: 15 }}>
          Digite sua senha
        </Text>
        <RiEyeCloseLine
          style={{ color: "#ff7a00", width: 30, height: 30, marginRight: 15 }}
        />
      </View>
      <TouchableOpacity style={styles.entrar}>
        <Text
          style={{
            fontSize: 25,
            color: "#fff",
            marginLeft: 15,
            fontWeight: 600,
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>
      <View style={styles.esqueciSenha}>
        <Text style={{ fontSize: 20, color: "#ff7a00", fontWeight: 700 }}>
          Esqueci minha senha
        </Text>
      </View>
      <View style={styles.fundo}>
        <View style={styles.isafe}>
          <MdSecurity
            style={{ color: "#ff7a00", width: 30, height: 30, marginRight: 5 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "#ff7a00",
              fontWeight: 700,              
            }}
          >
            iSafe
          </Text>
        </View>
        <View style={styles.trocarConta}>
          <Text style={{
              fontSize: 20,
              color: "#ff7a00",
              fontWeight: 700,
              marginLeft: 5,
            }}>Trocar ou abrir conta</Text>
        </View>
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topo: {
    flexDirection: "row",
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
    alignItems:'flex-end',
    justifyContent:'flex-end'
    
  },
});
