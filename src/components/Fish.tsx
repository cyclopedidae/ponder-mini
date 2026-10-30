import { StyleSheet, Text, View } from "react-native";
import { FishData } from "../types";

function sizeFromSeconds(totalSeconds: number): number {
  const hours = Math.max(0, totalSeconds) / 3600;
  return 32 + 24 * Math.log10(1 + hours);
}

type Props = {
  fish: FishData;
  onPress?: () => void;
};

export function Fish({ fish }: Props) {
  const size = sizeFromSeconds(fish.totalTime);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: size }}>🐟</Text>
      <Text style={styles.name}>{fish.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  name: {
    color: "#ffffff",
    fontSize: 12,
  },
});
