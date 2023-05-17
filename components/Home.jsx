import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

import { useTailwind, TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import Login from "./Login";

const Home = () => {
  // const tailwind = useTailwind()
  <TailwindProvider>
    <Login />
  </TailwindProvider>;
};

export default Home;
