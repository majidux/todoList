import {ADD_TEXT} from '../type';

const addTextRedux = text =>{
    return{
        type:ADD_TEXT,
        payload:text,
    }
};
export const  setText = text => {
    return addTextRedux(text);
} ;
