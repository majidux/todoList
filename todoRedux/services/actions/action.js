import {ADD_TEXT} from '../type';

export const addText = text =>{
    return{
        type:ADD_TEXT,
        payload:text,
    }
};
