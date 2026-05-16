import { configureStore } from "@reduxjs/toolkit";
import stepperReducer from "./features/stepperSlice";
import personalInfoReducer from "./features/personalInfo";
import planSelection from "./features/planSelect";
import AdonSelection from "./features/Adons";

export const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    infoStore: personalInfoReducer,
    theUserPlans: planSelection,
    theSelectedAdon: AdonSelection,
  },
});
