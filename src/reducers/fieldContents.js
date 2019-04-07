const initState = {id: -1, nickname: '', realname: '', email: ''};

const fieldContents = (state = initState, action) => {
    switch (action.type){
        case 'START_EDIT':
            return {
                id: action.id,
                nickname: action.nickname,
                realname: action.realname,
                email: action.email
            };
        case 'EDITING':
            console.log('ED');
            console.log(action);
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }
};

export default fieldContents;