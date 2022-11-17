import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import {
  AiOutlineSearch,
  AiOutlineStock,
  AiOutlineGift,
  AiOutlineHome,
} from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { RiEyeCloseLine, RiLuggageDepositLine } from "react-icons/ri";
import { BsCreditCard, BsFlower2, BsPiggyBank, BsPhone } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBarcode, FaGifts } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbReportMoney } from "react-icons/tb";
import { IoIosKey } from "react-icons/io";

const Layout2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.interTexto}>inter</Text>
          <View style={styles.bandeira}>
            <View style={styles.banBrasil}>
              <Image
                source={{
                  uri: "https://vetores.org/wp-content/uploads/bandeira-do-brasil.png",
                }}
                style={{ width: 20, height: 20, marginLeft: 5 }}
              />
            </View>
            <Image
              source={{
                uri: "https://vetores.org/wp-content/uploads/bandeira-estados-unidos.png",
              }}
              style={{ width: 20, height: 20, marginLeft: 5 }}
            />
          </View>
          <View style={styles.pesquisa}>
            <AiOutlineSearch
              style={{ color: "#ff7a00", width: 20, height: 20 }}
            />
            <FiMoreVertical
              style={{
                color: "#ff7a00",
                width: 20,
                height: 20,
                marginLeft: 25,
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.saldo}></View>
          <RiEyeCloseLine
            style={{
              color: "#ff7a00",
              width: 30,
              height: 30,
              marginTop: 45,
              marginLeft: 15,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#ff7a00",
              fontSize: 20,
              fontWeight: 700,
              marginTop: 10,
              marginLeft: 35,
            }}
          >
            Ver extrato
          </Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.cards}>
            <BsCreditCard style={{ color: "#ff7a00", width: 25, height: 25 }} />
            <Text style={styles.text}>Cartões</Text>
          </View>
          <View style={styles.cards}>
            <BsFlower2 style={{ color: "#ff7a00", width: 25, height: 25 }} />
            <Text style={styles.text}>Pix</Text>
          </View>
          <View style={styles.cards}>
            <GiReceiveMoney
              style={{ color: "#ff7a00", width: 25, height: 25 }}
            />
            <Text style={styles.text}>Empréstimo</Text>
          </View>
          <View style={styles.cards}>
            <AiOutlineStock
              style={{ color: "#ff7a00", width: 25, height: 25 }}
            />
            <Text style={styles.text}>Investir</Text>
          </View>
          <View style={styles.cards}>
            <FaBarcode style={{ color: "#ff7a00", width: 25, height: 25 }} />
            <Text style={styles.text}>Pagamentos</Text>
          </View>
          <View style={styles.cards}>
            <BiTransfer style={{ color: "#ff7a00", width: 25, height: 25 }} />
            <Text style={styles.text}>Transferências</Text>
          </View>
          <View style={styles.cards}>
            <RiLuggageDepositLine
              style={{ color: "#ff7a00", width: 25, height: 25 }}
            />
            <Text style={styles.text}>Depósito por boleto</Text>
          </View>
          <View style={styles.cards}>
            <BsPiggyBank style={{ color: "#ff7a00", width: 25, height: 25 }} />
            <Text style={styles.text}>Antecipação de FGTS</Text>
          </View>
          <View style={styles.cards}>
            <AiOutlineGift
              style={{ color: "#ff7a00", width: 25, height: 25 }}
            />
            <Text style={styles.text}>Indique e Ganhe</Text>
          </View>
          <View style={styles.cards}>
            <CiMoneyCheck1
              style={{ color: "#ff7a00", width: 25, height: 25 }}
            />
            <Text style={styles.text}>Depósito por cheque</Text>
          </View>
          <View style={styles.cards}>
            <BsPhone style={{ color: "#ff7a00", width: 25, height: 25 }} />
            <Text style={styles.text}>Inter Cel</Text>
          </View>
          <View style={styles.cards}>
            <TbReportMoney
              style={{ color: "#ff7a00", width: 25, height: 25 }}
            />
            <Text style={styles.text}>Recarga</Text>
          </View>
          <View style={styles.cards}>
            <FaGifts style={{ color: "#ff7a00", width: 25, height: 25 }} />
            <Text style={styles.text}>Gift Card</Text>
          </View>
          <View style={styles.cards}>
            <AiOutlineHome
              style={{ color: "#ff7a00", width: 25, height: 25 }}
            />
            <Text style={styles.text}>Financiamento Imobiliário </Text>
          </View>
          <View style={styles.cards}>
            <IoIosKey style={{ color: "#ff7a00", width: 25, height: 25 }} />
            <Text style={styles.text}>Consórcio</Text>
          </View>
          
        </View>
      </View>
    </ScrollView>
  );
};

export default Layout2;

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    fontWeight: 700,
    justifyContent: "center",
    alignItems: "center",
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
