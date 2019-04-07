const initState = { nicknameMsg: "", realnameMsg: "", emailMsg: "" };

const validateMsg = (state = initState, action) => {
  switch (action.type) {
    case "VALIDATE":
      return {
        ...state,
        [action.name + "Msg"]: action.msg
      };
    default:
      return state;
  }
};

export default validateMsg;
