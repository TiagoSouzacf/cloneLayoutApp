import styles from "./index";
import { View, Text, TouchableOpacity } from "react-native";
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
        <BsQuestionCircle style={styles.icone} />
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
        <RiEyeCloseLine style={styles.icone} />
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
          <MdSecurity style={styles.icone} />
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
          <Text
            style={{
              fontSize: 20,
              color: "#ff7a00",
              fontWeight: 700,
              marginLeft: 5,
            }}
          >
            Trocar ou abrir conta
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Layout;
