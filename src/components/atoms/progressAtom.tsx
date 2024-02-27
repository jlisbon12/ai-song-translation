import { atom } from "recoil";

export const progressIntervalState = atom({
  key: "progressState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
