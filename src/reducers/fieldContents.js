const initState = {nickname: '', realname: '', email: ''};

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
            return {

            };
        default:
            return state;
    }
};

export default fieldContents;