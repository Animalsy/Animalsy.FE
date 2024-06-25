import { combineReducers } from "@reduxjs/toolkit";
import { rtkapi } from "../apicomunication";
import appsetup from "./appsetup";

import { ProfileSlice } from "./Profile";

const rootReducer = combineReducers({
  [rtkapi.reducerPath]: rtkapi.reducer,
  profile: ProfileSlice.reducer,
  appsetup: appsetup,
});

export default rootReducer;
