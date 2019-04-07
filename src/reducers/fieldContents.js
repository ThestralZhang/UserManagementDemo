const initState = {
  id: -1,
  nickname: "",
  realname: "",
  email: "",
  mode: "none"
};

const fieldContents = (state = initState, action) => {
  switch (action.type) {
    case "START_ADD":
      return {
        ...initState,
        id: action.id,
        mode: "ADD"
      };
    case "START_EDIT":
      return {
        id: action.id,
        nickname: action.nickname,
        realname: action.realname,
        email: action.email,
        mode: "EDIT"
      };
    case "EDITING":
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state;
  }
};

export default fieldContents;
