import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Poll } from "../types/index";

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
    setPoll(state, action: PayloadAction<Poll>) {
      console.log("action", action.payload);
      state.poll = action.payload;
      if (action.payload.id !== "") {
        state.showNotification = true;
      }
      //   state.id = action.payload.id;
      //   state.responseCount = action.payload.responseCount;
      //   state.question = action.payload.question;
      //   state.answerOptions = action.payload.answerOptions;
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
