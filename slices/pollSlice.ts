import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Poll,
  PollResponse,
  PollResult,
  PollResultResponse,
} from "../types/index";

type InitialState = {
  showNotification: boolean;
  poll: Poll;
  pollResults: PollResult;
};
const initialState: InitialState = {
  showNotification: false,
  poll: {
    id: "",
    responseCount: 0,
    answerOptions: [],
    question: "",
  },
  pollResults: {
    responseCount: 0,
    answerStats: {
      always: 0,
      most: 0,
      half: 0,
      rarely: 0,
      never: 0,
    },
  },
};

const pollSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    setPoll(state, action: PayloadAction<PollResponse>) {
      state.poll.id = action.payload.id;
      state.poll.question = action.payload.question_text;
      state.poll.responseCount = action.payload.response_count;
      state.poll.answerOptions = action.payload.answers_options;
      console.log("action", state.poll);
      if (action.payload.id !== "") {
        state.showNotification = true;
      }
    },
    setShowNotification(state, action: PayloadAction<boolean>) {
      state.showNotification = action.payload;
    },
    setPollResult(state, action: PayloadAction<PollResultResponse>) {
      state.pollResults.responseCount = action.payload.response_count;
      state.pollResults.answerStats.always = action.payload.answer_stats.always;
      state.pollResults.answerStats.most = action.payload.answer_stats.most;
      state.pollResults.answerStats.half = action.payload.answer_stats.half;
      state.pollResults.answerStats.rarely = action.payload.answer_stats.rarely;
      state.pollResults.answerStats.never = action.payload.answer_stats.never;
    },
  },
});

export const { setPoll, setShowNotification, setPollResult } =
  pollSlice.actions;

export default pollSlice.reducer;
