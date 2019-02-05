import initialState from './states';
import {SET_FALSE,SET_TRUE} from "./type";

function reducer(state = initialState,action) {
    switch (action.type) {
        case 'SET_TRUE':
            return{
                tasks:[],
                text:''
            }
    }
}
