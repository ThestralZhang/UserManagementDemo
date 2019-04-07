const initState = {nickname: '', realname: '', email: ''};

const fieldContents = (state = initState, action) => {
    switch (action.type){
        case 'START_EDIT':
            return {

            };
        case 'EDITING':
            return {

            };
        default:
            return state;
    }
};

export default fieldContents;