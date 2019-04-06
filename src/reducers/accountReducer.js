const accountReducer = (state=[], action) => {
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