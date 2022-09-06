import {PRODUCT_LIST,SEARCH_PRODUCT} from './constant'
export const productList =  () => {
    
    return {
        type:PRODUCT_LIST,
       
    }
}

export const productSearch =  (query) => {
    console.log(query)
    return {
        type: SEARCH_PRODUCT,
        query
       
    }
}