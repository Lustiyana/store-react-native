/** @format */

import ElectronicsIcon from "@/assets/svgComponents/ElectronicsIcon";
import FashionIcon from "@/assets/svgComponents/FashionIcon";
import FurnituresIcon from "@/assets/svgComponents/FurnituresIcon";
import MakeUpIcon from "@/assets/svgComponents/MakeUpIcon";
import ToolsIcon from "@/assets/svgComponents/ToolsIcon";
import VectorHome from "@/assets/svgComponents/VectorHome";
import CardItem from "@/components/CardItem";
import { Colors } from "@/constants/Colors";
import styles from "@/styles/styles";
import React from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";

const categoryIcon = {
  TOOL: <ToolsIcon />,
  FURNITURE: <FurnituresIcon />,
  MAKE_UP: <MakeUpIcon />,
  FASHION: <FashionIcon />,
  ELECTRONIC: <ElectronicsIcon />,
};

const categories = [
  {
    category_id: 1,
    category_name: "Tools",
    icon: "TOOL",
  },
  {
    category_id: 2,
    category_name: "Furnitures",
    icon: "FURNITURE",
  },
  {
    category_id: 3,
    category_name: "Make Up",
    icon: "MAKE_UP",
  },
  {
    category_id: 4,
    category_name: "Fashions",
    icon: "FASHION",
  },
  {
    category_id: 5,
    category_name: "Electronics",
    icon: "ELECTRONIC",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.vectorHomeContainer}>
        <VectorHome />
      </View>
      <View style={styles.mainHomeContainer}>
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesContainer}>Categories</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {categories.map((category) => (
              <Pressable
                key={category.category_id}
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: Colors.secondary,
                  borderRadius: 9999,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {categoryIcon[category.icon as never]}
              </Pressable>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.listItemHome}>Most Popular</Text>
          <FlatList
            data={["test1", "test2"]}
            renderItem={({ item, index }) => (
              <CardItem item={item} index={index} />
            )}
            numColumns={2}
            columnWrapperStyle={styles.listColumnWrapperStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
