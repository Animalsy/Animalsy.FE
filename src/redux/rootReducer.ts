import { combineReducers } from "@reduxjs/toolkit";
import { rtkapi } from "../apicomunication";

const rootReducer = combineReducers({
  [rtkapi.reducerPath]: rtkapi.reducer,
});

export default rootReducer;
