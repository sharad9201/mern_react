import {v1 as uuid} from "uuid";
import {ADD_ITEM,DELETE_ITEM, GET_ITEMS} from '../actions/types'

const initialState ={
    items: [
        { id:uuid(), name:'sharad'},
        { id:uuid(), name:'swasti'},
        { id:uuid(), name:'puru'},
        { id:uuid(), name:'momo'}
    ]
}
export default function(state = initialState, action){
    switch (action.type){
       case GET_ITEMS:
       return {
           ...state
       }
       case DELETE_ITEM:
           return{
               ...state,
               items:state.items.filter(item=>item.id !== action.payload)//payload is equal to id in next page
           }
       default:
           return state;
    }
}