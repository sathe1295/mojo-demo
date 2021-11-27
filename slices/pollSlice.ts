import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Poll, PollResponse } from "../types/index";

type InitialState = {
  showNotification: boolean;
  poll: Poll;
};
const initialState: InitialState = {
  showNotification: false,
  poll: {
    id: "",
    responseCount: 0,
    answerOptions: [],
    question: "",
  },
};

const pollSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    setPoll(state, action: PayloadAction<PollResponse>) {
      state.poll.id = action.payload.id;
      state.poll.question= action.payload.question_text
      state.poll.responseCount= action.payload.response_count
      state.poll.answerOptions=action.payload.answers_options
    console.log("action", state.poll)
      if (action.payload.id !== "") {
        state.showNotification = true;
      }
    },
    setShowNotification(state, action: PayloadAction<boolean>) {
      state.showNotification = action.payload;
    },
    // toggleTodo(state, action: PayloadAction<Poll>) {
    //     let todo = state.find(todo => todo.id === action.payload.id);

    //     if (todo) {
    //         todo.completed = !todo.completed;
    //     }
    // },
  },
});

export const { setPoll, setShowNotification } = pollSlice.actions;

export default pollSlice.reducer;
