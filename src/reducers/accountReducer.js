const accountReducer = (state=[], action) => {
    switch (action.type){
        case 'EDIT_ACCOUNT':
            return [

            ];
        case 'DELETE_ACCOUNT':
            return [

            ];
        case 'ADD_ACCOUNT':
            return [
                ...state,
                {
                    action.id,
                    ...action.info,
                }
            ];
        default:
            return state;
    }
};

export default accountReducer;