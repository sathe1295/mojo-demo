import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { PENCIL } from "../assets/images";
import ProgressBar from "../components/ProgressBar";
import { BELUGA, DOLPHIN, ORCA, PROGRESS_BAR_UNFILLED, SILVER } from "../constants/Colors";
import { RootTabScreenProps } from "../types";

export default function TodayTabScreen({
  navigation,
}: RootTabScreenProps<"TodayTab">) {
  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <Text style={styles.currentGoal}>Your current goal</Text>
        <View style={styles.row}>
        <Text style={styles.feelConfident}>Feel more confident</Text>
        <Image source={PENCIL} resizeMode="contain" style={styles.pencil}/>
        </View>
        <ProgressBar progress={0.15} width={216} style={styles.progressBar} color={DOLPHIN}  unfilledColor={PROGRESS_BAR_UNFILLED}/>
        <Text style={styles.daysCompleted}>1 / 7 days completed</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text>Tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BELUGA
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  goalContainer: {
    flex: 1,
    backgroundColor: ORCA,
  },
  taskContainer: {
    flex: 3.5,
  },
  currentGoal: {
    fontSize: 16,
    fontWeight: "400",
    color: BELUGA,
    marginTop: 4,
    marginLeft: 16,
  },
  feelConfident: {
    fontSize: 30,
    fontWeight: "700",
    color: BELUGA,
    marginTop: 8,
    marginLeft: 16,
  },
  row: {
    flexDirection: "row",
    alignItems:"baseline"
  },
  pencil: {
    marginLeft:16
  },
  progressBar: {
    marginLeft: 16,
    borderWidth:0.2,
    borderColor: SILVER,
    marginTop:24,
    borderRadius:5
  },
  daysCompleted: {
    marginTop: 16,
    color: BELUGA,
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 16
  }
});
