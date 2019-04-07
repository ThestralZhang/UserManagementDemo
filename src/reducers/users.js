const initState = [
    {id: 1, nickname: 'AHam', realname: 'Alexander', email: 'd3@f9e.com'},
    {id: 2, nickname: 'ABurr', realname: 'Aaron', email: 'd32fd@f9e.com'},
    {id: 3, nickname: 'Thestral', realname: 'Keith', email: 'w32d@f9e.com'},
    {id: 4, nickname: 'BBilly', realname: 'Bill', email: 'd32dd@f9e.com'},
    {id: 5, nickname: 'Miley', realname: 'Mary', email: 'dvifd@f9e.com'},
    {id: 6, nickname: 'Syren', realname: 'Jim', email: 'd32d@od.com'},
    {id: 7, nickname: 'Doem', realname: 'Ohiio', email: 'dfiod@f9e.com'},
    {id: 8, nickname: 'Pwf', realname: 'Paul', email: 'd3d@voidv.com'},
    {id: 9, nickname: 'Prenv', realname: 'Elliot', email: 'vosnv@f9e.com'},
    {id: 10, nickname: 'Dannnn', realname: 'Shelly', email: 'vfdi@f9e.com'},
    {id: 11, nickname: 'Ts932', realname: 'Wendy', email: 'dvdf@fvree.com'},
    {id: 12, nickname: 'Idw2_3', realname: 'Bendit', email: 'd32oidd@fd9e.com'}
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