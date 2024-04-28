import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  createModal: "scale-0",
  showNft: "scale-0",
  updateModal: "scale-0",
  loader: { show: false, msg: "" },
  alert: { show: false, msg: "", color: "" },
});

const setAlert = (msg: any, color = "green") => {
  setGlobalState("loader", { show: false, msg: "" });
  setGlobalState("alert", { show: true, msg, color });
  setTimeout(() => {
    setGlobalState("alert", { show: false, msg, color });
  }, 6000);
};

const setLoadingMsg = (msg: string) => {
  setGlobalState("loader", { show: true, msg });
};

const slice = (
  text: string,
  startChars: number,
  endChars: number,
  maxLength: number,
) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  setLoadingMsg,
  setAlert,
  slice,
};
