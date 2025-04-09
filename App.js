import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
