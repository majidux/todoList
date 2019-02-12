import {ADD_TEXT} from '../type';
import initialStates from '../initialStates';


const reducer = (state = initialStates , action) => {
    switch (action.type) {
        case ADD_TEXT :
            return{
                ...state,
                textItems:[
                    ...state.textItems, action.payload
                ]
            };
        default:
            return state;
    }
};
export default reducer;
