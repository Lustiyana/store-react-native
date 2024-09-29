/** @format */

import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import dummyImage from "@/assets/images/dummy-product.png";
import styles from "@/styles/styles";
import { Link, useRouter } from "expo-router";

interface ICardItemProps {
  item: string;
  index: number;
}

const CardItem: FC<ICardItemProps> = ({ item, index }) => {
  const router = useRouter();
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => router.push("/details/1")}
    >
      <Image source={dummyImage} alt="dummy" style={styles.imageCard} />
      <View>
        <Text style={styles.productName}>Apple Watch</Text>
        <Text style={styles.productPrice}>890.000</Text>
      </View>
    </Pressable>
  );
};
export default CardItem;
