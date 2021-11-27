import { FETCH_POLL } from "../constants/Urls";
import { setPoll, setPollResult } from "../slices/pollSlice";
import { AppThunk, AppDispatch } from "../store";
export const fetchpoll = (): AppThunk => async (dispatch: AppDispatch) => {
  console.log("call");
  try {
    let res = await fetch(FETCH_POLL, {
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

export const vote =
  (slug: string | null): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      let res = await fetch(
        `https://api.jsonbin.io/b/61927bef0ddbee6f8b0bd64c?answer=${slug}`,
        {
          method: "GET",
        }
      );
      if (res.status === 200) {
        let json = await res.json();
        let data = JSON.stringify(json);
        console.log("ressss", data);
        dispatch(setPollResult(JSON.parse(data)));
      } else {
        alert("Something went wrong");
      }
    } catch (e) {
      return console.error(e.message);
    }
  };
