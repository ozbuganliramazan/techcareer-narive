import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import axios from "axios";

const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={item?.country ? styles.cardWithCountry : styles.card}>
            <Card.Content>
              <Title style={styles.companyName}>{item?.companyName}</Title>
              <Paragraph style={styles.country}>{item?.country}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white", 
  },
  cardWithCountry: {
    backgroundColor: "red",
  },
  companyName: {
    color: "black",
  },
  country: {
    color: "red", 
  },
});

export default ProductScreen;
