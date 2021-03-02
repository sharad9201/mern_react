import {GET_ITEMS,ADD_ITEM,DELETE_ITEM} from './types'

export const getItems = ()=>{
    return {
        
        type: GET_ITEMS
    }
}
export const deleteItem = id =>{
    return {
        type: DELETE_ITEM,
        //send the id using payload
        payload: id
    }
}
export const addItem = item =>{
    return {
        type: ADD_ITEM,
        //send the item (which is whole item) using payload
        payload: item
    }
}

