const initState = [
  { id: 1, nickname: "AHam", realname: "Alexander", email: "d3@f9e.com" },
  { id: 2, nickname: "ABurr", realname: "Aaron", email: "d32fd@f9e.com" },
  { id: 3, nickname: "Thestral", realname: "Keith", email: "w32d@f9e.com" },
  { id: 4, nickname: "BBilly", realname: "Bill", email: "d32dd@f9e.com" },
  { id: 5, nickname: "Miley", realname: "Mary", email: "dvifd@f9e.com" },
  { id: 6, nickname: "Syren", realname: "Jim", email: "d32d@od.com" },
  { id: 7, nickname: "Doem", realname: "Ohiio", email: "dfiod@f9e.com" },
  { id: 8, nickname: "Pwf", realname: "Paul", email: "d3d@voidv.com" },
  { id: 9, nickname: "Prenv", realname: "Elliot", email: "vosnv@f9e.com" },
  { id: 10, nickname: "Dannnn", realname: "Shelly", email: "vfdi@f9e.com" },
  { id: 11, nickname: "Ts932", realname: "Wendy", email: "dvdf@fvree.com" },
  { id: 12, nickname: "Idw2_3", realname: "Bendit", email: "d32oidd@fd9e.com" },
  { id: 13, nickname: "NOxs", realname: "John", email: "jcc@e.com" },
  { id: 14, nickname: "IODw", realname: "Susan", email: "mmfd@f9e.cn" },
  { id: 15, nickname: "Osw32n", realname: "Zeo", email: "w3cd2d@h.com" },
  { id: 16, nickname: "sjw_32", realname: "Fred", email: "ddddd@f9e.com" },
  { id: 17, nickname: "nidND", realname: "Mary", email: "uuuuifd@f9e.com" },
  { id: 18, nickname: "dnwfw_32d2", realname: "Jim", email: "veveve@od.org" },
  { id: 19, nickname: "NxID", realname: "Odom", email: "osiosidd@ee.com" },
  { id: 20, nickname: "Wf43a", realname: "Peter", email: "d33333d@voidv.com" },
  { id: 21, nickname: "TYO", realname: "Reo", email: "pppvdf@fvree.com" },
  { id: 22, nickname: "ERRuu", realname: "Chan", email: "dccccoidd@fd9e.com" },
  { id: 23, nickname: "AG_E_P", realname: "Alex", email: "plp@f9e.com" },
  { id: 24, nickname: "fneDH9", realname: "Mariah", email: "uisnix@f343e.com" },
  { id: 25, nickname: "GXYSss", realname: "Cathy", email: "osj2d@cfrr.com" },
  { id: 26, nickname: "QQWW", realname: "Bill", email: "d3_deief@f9e.com" },
  { id: 27, nickname: "Uniew", realname: "Dong", email: "dfeoi_ef2d@f9e.com" },
  { id: 28, nickname: "Siven", realname: "Jimmy", email: "fosf392d@od.com" },
  { id: 29, nickname: "D00000", realname: "Ohio", email: "we_iod@f9e.com" },
  { id: 30, nickname: "Jdeda", realname: "Pauler", email: "xnidwd@voidv.com" }
];

const users = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return [
        ...state,
        {
          id: action.id,
          nickname: action.nickname,
          realname: action.realname,
          email: action.email
        }
      ];
    case "DELETE_ACCOUNT":
      const index = state.findIndex(user => user.id === action.id);
      let newState = state.slice();
      newState.splice(index, 1);
      return newState;
    case "CONFIRM_EDIT":
      return state.map(user => {
        if (user.id !== action.id) return user;
        return {
          id: action.id,
          nickname: action.nickname,
          realname: action.realname,
          email: action.email
        };
      });
    default:
      return state;
  }
};

export default users;
