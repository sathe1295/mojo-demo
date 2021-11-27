import { combineReducers } from '@reduxjs/toolkit'
import polls from '../slices/pollSlice'
const rootReducer = combineReducers({
    polls
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer