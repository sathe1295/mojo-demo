import * as React from "react";
import { StyleProp, View, Text, StyleSheet } from "react-native";
import { ORCA } from "../constants/Colors";
export default function TaskBubble({
  color,
  taskCategory,
  taskDuration,
  task,
}: {
  color: string;
  taskCategory: string;
  taskDuration: string;
  task: string;
}) {
  return (
    <View style={[styles.bubble, { backgroundColor: color }]}>
      <View style={styles.row}>
        <Text style={styles.taskDetails}>{taskCategory}</Text>
        <Text style={styles.taskDetails}>{taskDuration}</Text>
      </View>
      <Text style={styles.task}>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 20,
    height:81,
    //flex:1,
   // padding: 16,
  },
  row: {
    flexDirection: "row",
  },
  taskDetails: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 14,
    fontWeight: "400",
    color: ORCA,
  },
  task:{
    fontSize: 16,
    fontWeight: "400",
    color: ORCA,
    marginHorizontal: 16,
    marginTop:10,
    marginBottom:16
  }
});
