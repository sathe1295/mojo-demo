import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_DARK } from "../assets/images";
import RNPoll, { IChoice } from "react-native-poll";
import { ORCA, POLL_BG } from "../constants/Colors";
import { RootState } from "../reducers/rootReducer";
import { AnswerStat, Poll } from "../types/index";
import { vote } from "../apis/polls";

export default function ModalScreen() {
  const poll: Poll = useSelector((state: RootState) => state.polls.poll);
  const pollResult = useSelector((state: RootState) => state.polls.pollResults);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [choice, setChoice] = React.useState<Array<IChoice>>([]);

  React.useEffect(() => {
    createPollData();
  }, []);

  const updatePollData = () => {
    //This entire function needs to be optimized
    let newChoice = choice;
    newChoice.map((choiceData) => {
      poll.answerOptions.map((item) => {
        if (item.text === choiceData.choice) {
          console.log("pollasdasd", pollResult.answerStats);
          for (let key in pollResult.answerStats) {
            //had to do this as it due to error :"type string can't be used to index"
            if (item.slug === key) {
              choiceData.votes =
                pollResult.answerStats[key as keyof AnswerStat];
            }
          }
        }
      });
    });
    setChoice(newChoice);
  };
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

  const onVote = (slug: string | null) => {
    dispatch(vote(slug));
    updatePollData();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        accessibilityLabel="Close me"
        accessibilityHint="Closes the poll screen"
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
                onVote(item.slug);
              }
            })
          }
          //ignore the error please, it is library typing issue
          choiceTextStyle={styles.choiceText}
          fillBackgroundColor={POLL_BG}
        />
        <View style={styles.responseCountContainer}>
          <Text style={styles.responseCount}>
            {poll.responseCount} responses
          </Text>
          <TouchableOpacity
            accessibilityLabel="Skip question"
            accessibilityHint="Skips the question"
            onPress={() => onVote(null)}
          >
            <Text style={styles.skip}>I don't want to answer</Text>
          </TouchableOpacity>
        </View>
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
  responseCount: {
    fontSize: 16,
    color: ORCA,
  },
  responseCountContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  skip: {
    marginTop: 40,
    fontSize: 16,
    color: ORCA,
    textDecorationLine: "underline",
  },
});
