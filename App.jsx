import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";

export default function App() {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}
