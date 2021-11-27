import { FETCH_POLL } from "../constants/Urls";
import { setPoll } from "../slices/pollSlice";
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
