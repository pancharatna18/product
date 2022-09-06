import {Link } from "react-router-dom";
import {useSelector} from 'react-redux'

function Cart() {
  const cartData = useSelector((state)=>state.cartData)
  console.log(cartData.length)
  if (cartData.length  === undefined || cartData.length===0) {
      return (
        <div>
          <h1> No Item found Please 
            Add A Item
          </h1>
        </div>
      )
  }
  return (
    <div>
        <Link to='/'>product list</Link>
      <h1>Cart page</h1>
      <div className="cart-page-container">
        <table>
          <td>id</td>
          <td>title</td>
          {/* <td>description</td> */}
          <td>price</td>
          <td>discountPercentage</td>
          <td>rating</td>
          <td>stock</td>
          <td>brand</td>
          <td>category</td>

         
        
        {

          cartData.map((item)=><tr key={item.key}>
            <td>{item.id}</td>
          <td>{item.title}</td>
          {/* <td>{item.description}</td> */}
          <td>{item.price}</td>
          <td>{item.discountPercentage}</td>
          <td>{item.rating}</td>
          <td>{item.stock}</td>
          <td>{item.brand}</td>
          <td>{item.category}</td>

          </tr>)
        }
        </table>

        </div>
    </div>
  );
}

export default Cart;
