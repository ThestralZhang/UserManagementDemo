const initState = '';

const message = (state = initState, action) => {
    switch (action.type){
        case 'VALIDATE':
            return '';
        default:
            return state;
    }
};

export default message;