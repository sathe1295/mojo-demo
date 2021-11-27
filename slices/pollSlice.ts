import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "../store";
import { Poll } from "../types/index";

const initialState: Poll = {
  id: "",
  responseCount: 0,
  question: "",
  answerOptions: [],
};

const pollSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    setPoll(state, action: PayloadAction<Poll>) {
      console.log("action", action.payload);
      state.id = action.payload.id;
      state.responseCount = action.payload.responseCount;
      state.question = action.payload.question;
      state.answerOptions = action.payload.answerOptions;
    },
    // toggleTodo(state, action: PayloadAction<Poll>) {
    //     let todo = state.find(todo => todo.id === action.payload.id);

    //     if (todo) {
    //         todo.completed = !todo.completed;
    //     }
    // },
  },
});

export const { setPoll } = pollSlice.actions;

export const fetchpoll = (): AppThunk => async (dispatch: AppDispatch) => {
  const fetchPollUrl = "https://api.jsonbin.io/b/619254c40ddbee6f8b0bc2af";

  console.log("call");
  try {
    let res = await fetch(fetchPollUrl, {
      method: "GET",
    });
    if (res.status === 200) {
      let json = await res.json();
      let data = JSON.stringify(json);
      dispatch(setPoll(JSON.parse(data)));
    } else {
      alert("Something went wrong");
    }
  } catch (e) {
    return console.error(e.message);
  }
};

export default pollSlice.reducer;
