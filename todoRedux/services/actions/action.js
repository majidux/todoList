import {ADD_TEXT,DELETE_TEXT} from '../type';

const addTextRedux = text =>{
    return{
        type:ADD_TEXT,
        text,
    }
};

const deleteTextRedux = index =>{
    return{
        type:DELETE_TEXT,
        index
    }
};


export const  setText = text => {
    return addTextRedux(text);
};


export const  deleteText = index => {
    return deleteTextRedux(index);
};
