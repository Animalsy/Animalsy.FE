import { combineReducers } from "@reduxjs/toolkit";
import { rtkapi } from "../apicomunication";
import appsetup from "./appsetup";

import { ProfileSlice } from "./Profile";
import reducer from "./Profile/Vendor";

const rootReducer = combineReducers({
  [rtkapi.reducerPath]: rtkapi.reducer,
  profile: ProfileSlice.reducer,
  appsetup: appsetup,
  vendors: reducer
});

export default rootReducer;
