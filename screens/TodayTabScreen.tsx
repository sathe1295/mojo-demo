import * as React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { PENCIL } from "../assets/images";
import FooterPopup from "../components/FooterPopup";
import ProgressBar from "../components/ProgressBar";
import TaskBubble from "../components/TaskBubble";
import {
  BELUGA,
  BLUE,
  DOLPHIN,
  ORCA,
  PROGRESS_BAR_UNFILLED,
  SILVER,
} from "../constants/Colors";
import { RootState } from "../reducers/rootReducer";
import { fetchpoll } from "../slices/pollSlice";
import { RootTabScreenProps } from "../types";

type task = {
  taskCategory: string;
  taskDuration: string;
  taskText: string;
};

export default function TodayTabScreen({
  navigation,
}: RootTabScreenProps<"TodayTab">) {
  const poll = useSelector((state: RootState) => state.polls);

  const [showFooter, setShowFooter] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const tasks: Array<task> = [
    {
      taskCategory: "Read",
      taskDuration: "10 min",
      taskText: "How porn affects your confidence",
    },
    {
      taskCategory: "Listen",
      taskDuration: "9 min",
      taskText: "Create positive views of your erections",
    },
  ];

  React.useEffect(() => {
    dispatch(fetchpoll());
    if (poll.id !== "") {
      setShowFooter(true);
    }
  }, [poll, setShowFooter]);

  const renderGoalContainer = () => {
    return (
      <View style={styles.goalContainer}>
        <Text style={styles.currentGoal}>Your current goal</Text>
        <View style={styles.row}>
          <Text style={styles.feelConfident}>Feel more confident</Text>
          <Image source={PENCIL} style={styles.pencil} height={17} width={17} />
        </View>
        <ProgressBar
          progress={0.15}
          width={216}
          style={styles.progressBar}
          color={DOLPHIN}
          unfilledColor={PROGRESS_BAR_UNFILLED}
        />
        <Text style={styles.daysCompleted}>1 / 7 days completed</Text>
      </View>
    );
  };

  const renderTaskContainer = () => {
    return (
      <View style={styles.taskContainer}>
        <View style={styles.taskSubContainer}>
          <Text style={styles.day}>Day 1</Text>
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => `item${index}`}
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={styles.bubbleContainer}>
                  <TaskBubble
                    color={DOLPHIN}
                    taskCategory={item.taskCategory}
                    taskDuration={item.taskDuration}
                    task={item.taskText}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  };

  const onFooterClose = () => {
    console.log("close");
    setShowFooter(false);
  };

  const renderFooter = () => {
    return (
      <FooterPopup
        bg={BLUE}
        text={"Mojo’s daily poll 📅"}
        clickableText={"Open"}
        onTextClick={() => navigation.navigate("Modal")}
        onClose={onFooterClose}
      />
    );
  };
  return (
    <View style={styles.container}>
      {renderGoalContainer()}
      {renderTaskContainer()}
      {showFooter ? renderFooter() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BELUGA,
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
    flex: 3,
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
    alignItems: "baseline",
  },
  pencil: {
    marginLeft: 16,
  },
  progressBar: {
    marginLeft: 16,
    borderWidth: 0.2,
    borderColor: SILVER,
    marginTop: 24,
    borderRadius: 5,
  },
  daysCompleted: {
    marginTop: 16,
    color: BELUGA,
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 16,
  },
  taskSubContainer: {
    marginHorizontal: 16,
  },
  day: {
    fontSize: 24,
    fontWeight: "700",
    color: ORCA,
    marginTop: 32,
    marginBottom: 20,
  },
  bubbleContainer: {
    marginBottom: 12,
  },
});
