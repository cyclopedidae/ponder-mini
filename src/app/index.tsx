import { Fish } from "@/components/Fish";
import { FishData } from "@/types";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const myFish: FishData = {
    id: 1,
    name: "bass",
    totalTime: 36000000,
    position: [0, 0],
    status: "alive",
    createdAt: Date.now(),
    evolutionStage: 1,
  };

  return (
    <View style={styles.container}>
      <Text>Testing!</Text>
      <Fish fish={myFish} />
      <Text>{myFish.createdAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d6fa5",
  },
});
