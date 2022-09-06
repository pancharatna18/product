// import { addToCart, emptyCart, removeToCart } from './redux/action';
import { useDispatch } from 'react-redux'
import { productList } from './redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }

  useEffect(()=>{
    dispatch(productList())
  })
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      
      <div>
      <button onClick={() => dispatch(removeToCart(product.name))}>Remove from Cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(productList())}>Call Product List</button>
      <div className='product-container'>
        {
          data.map((item)=><div className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

              </div>
          </div>)
        }
      </div>
    </div>
    </div>
  );
}
export default Main;