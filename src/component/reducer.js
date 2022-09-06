import {ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART} from './constant'
export const cartData=(data=[],action)=>{
    
    switch(action.type){
        case ADD_TO_CART:
        //add to cart logic
        console.warn('ADD_TO_CART condition ',action)
        return [action.data,...data]

        case REMOVE_FROM_CART:
        //add to cart logic
        console.warn('REMOVE_CART condition ',action)
       // data.length= data.length-1
        const reamingItem = data.filter((item)=>item.id!==action.data)
        console.warn('reamingItem',reamingItem)
        return [...reamingItem]

        case EMPTY_CART:
        //add to cart logic
        console.warn('EMPTY CART condition ',)
        data = []
        return [...data]
        
        default:
           return data
    }
}