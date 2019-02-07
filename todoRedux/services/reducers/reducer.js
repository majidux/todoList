import {ADD_TEXT} from '../type';
import initialStates from '../initialStates';


const reducer = (state = initialStates , action) => {
      switch (action.type) {
          case ADD_TEXT :
              return{
                  ...state,
                  items:[
                      ...state.items,
                      {
                          text:action.text,
                          payload:action.text
                      }
                  ]
              }
      }
};
export default reducer;
