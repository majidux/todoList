import {ADD_TEXT, DELETE_TEXT} from '../type';
import initialStates from '../initialStates';


const reducer = (state = initialStates , action) => {
    switch (action.type) {
        case ADD_TEXT :
            return{
                ...state,
                textItems:[
                    ...state.textItems, action.text
                ]
            };
        case DELETE_TEXT:
            return{
                textItems : [
                    ...state.textItems.splice(0 ,action.index),
                    ...state.textItems.splice(action.index + 1),
                ] ,
            };
        default:
            return state;
    }
};
export default reducer;
