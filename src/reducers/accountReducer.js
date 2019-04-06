const initialState = [
    { id: 1, nickname: "ladkl", realname: "Slder", email: "dewf@fw.vre" },
    { id: 2, nickname: "2ladkl", realname: "Slder", email: "dewf@fw.vre" },
    { id: 3, nickname: "3ladkl", realname: "Slder", email: "dewf@fw.vre" }
];


const accountReducer = (state=initialState, action) => {
    switch (action.type){
        case 'EDIT_ACCOUNT':
            return state.map(user => {
                if(user.id !== action.id)
                    return user;
                return {
                    id: action.id,
                    ...action.info
                }
            });
        case 'DELETE_ACCOUNT':
            const index = state.findIndex(user => user.id === action.id);
            let newState = state.slice();
            newState.splice(index, 1);
            return newState;
        case 'ADD_ACCOUNT':
            return [
                ...state,
                {
                    id: action.id,
                    ...action.info,
                }
            ];
        default:
            return state;
    }
};

export default accountReducer;