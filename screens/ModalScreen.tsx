import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_DARK } from "../assets/images";
import RNPoll, { IChoice } from "react-native-poll";
import { ORCA, POLL_BG } from "../constants/Colors";
import { RootState } from "../reducers/rootReducer";
import { Poll } from "../types/index";
import { vote } from "../apis/polls";

export default function ModalScreen() {
  const poll: Poll = useSelector((state: RootState) => state.polls.poll);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [choice, setChoice] = React.useState<Array<IChoice>>([]);

  React.useEffect(() => {
    createPollData();
  }, []);

  console.log("modal poll", poll);
  const createPollData = () => {
    let choice: Array<IChoice> = [];
    poll.answerOptions.map((item, index) => {
      let temp = {
        id: index,
        choice: item.text,
        votes: 0,
      };
      choice.push(temp);
    });
    setChoice(choice);
  };
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
        <RNPoll
          totalVotes={poll.responseCount}
          choices={choice}
          onChoicePress={(selectedChoice: IChoice) =>
            poll.answerOptions.map((item) => {
              if (item.text === selectedChoice.choice) {
                dispatch(vote(item.slug));
              }
            })
          }
          //ignore the error please, it is library typing issue
          choiceTextStyle={styles.choiceText}
          fillBackgroundColor={POLL_BG}
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
    marginHorizontal: 16,
    marginTop: 45,
  },
  choiceText: {
    fontWeight: "400",
    fontSize: 18,
    color: ORCA,
  },
});
