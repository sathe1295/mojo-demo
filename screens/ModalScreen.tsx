import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { CLOSE_DARK } from "../assets/images";

import EditScreenInfo from "../components/EditScreenInfo";
import { ORCA } from "../constants/Colors";
import { RootState } from "../reducers/rootReducer";
import { Poll } from "../types/index";

export default function ModalScreen() {
  const poll: Poll = useSelector((state: RootState) => state.polls.poll);
  const navigation = useNavigation();
  console.log("modal poll", poll);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.close}
      >
        <Image source={CLOSE_DARK} height={15} width={15} />
      </TouchableOpacity>
      <View style={styles.pollContainer}>
        <Text style={styles.question}>{poll.question}</Text>
        <FlatList
          data={poll.answerOptions}
          keyExtractor={(item, index) => `item${index}`}
          renderItem={({ item, index }) => {
            return (
              <View key={index}>
                <Text>{item.text}</Text>
              </View>
            );
          }}
        />
        <Text>{poll.responseCount} responses</Text>
        <Text>I don't want to answer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  question: {
    fontSize: 30,
    fontWeight: "bold",
    color: ORCA,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  close: {
    marginLeft: 24,
    marginTop: 15,
  },
  pollContainer: {
    marginLeft: 16,
    marginTop: 45,
  },
});
