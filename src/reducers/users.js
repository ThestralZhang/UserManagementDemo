const initState = [
    {id: 1, nickname: 'A.Ham', realname: 'Alexander', email: 'd32d@f9e.com'},
    {id: 2, nickname: 'A.Burr', realname: 'Aaron', email: 'd32d@f9e.com'},
    {id: 3, nickname: 'Thestral', realname: 'Keith', email: 'd32d@f9e.com'},
    {id: 4, nickname: 'BBilly', realname: 'Bill', email: 'd32d@f9e.com'},
    {id: 5, nickname: 'Smiley', realname: 'Mary', email: 'd32d@f9e.com'}

];

const users = (state = initState, action) => {
    switch (action.type){
        case 'ADD_ACCOUNT':
            return [
                ...state,
                {
                    id: action.id,
                    nickname: action.nickname,
                    realname: action.realname,
                    email: action.email
                }
            ];
        case 'DELETE_ACCOUNT':
            const index = state.findIndex(user => user.id === action.id);
            let newState = state.slice();
            newState.splice(index, 1);
            return newState;
        case 'CONFIRM_EDIT':
            return state.map(user => {
                if(user.id !== action.id)
                    return user;
                return {
                    id: action.id,
                    nickname: action.nickname,
                    realname: action.realname,
                    email: action.email
                }
            });
        default:
            return state;
    }
};

export default users;