import React from "react";
import { View, Text } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View
      style={{
        marginTop: 60,
      }}
    >
      <View>
        <Text>Nome: João Silva</Text>
        <Text>Telefone: (27) 99999-9884</Text>
        <Text
          onPress={() =>
            navigation.navigate("Information", {
              nome: "João Silva",
              telefone: "(27) 99999-9884",
              endereco: "Rua Tabajará",
              numero: "453",
              profissao: "Carpinteiro",
              email: "joaosilva@carpintaria.com.br",
            })
          }
        >
          Information...
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text>Nome: Amanda Silva</Text>
        <Text>Telefone: (27) 99999-7784</Text>
        <Text
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Amanda Silva",
              telefone: "(27) 99999-9774",
              endereco: "Rua Afonso Cláudio",
              numero: "16",
              profissao: "Vendedora",
              email: "amandasilva@vendas.com.br",
            })
          }
        >
          Information...
        </Text>
      </View>
    </View>
  );
}
