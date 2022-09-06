import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../component/productAction";
import axios from "axios";
// import {productSaga} from './component/productSaga'


const Header = () => {
  const result = useSelector((state) => state.cartData);
  let data = useSelector((state)=>state.productData);
  console.log("products" ,data.length)

  const dispatch = useDispatch();
  console.warn("data in header", result);
  // const [value,setValue]= useState('')
  const [users, setUsers] = useState([]);
  const [suggetion, setSuggetion] = useState([]);
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  
   
 
  const onChangeHandler = (text) => { 
    // let matches =[]
    // if(text.length >0){
    //     matches.users.filter(user=>{
    //         const regex = new RegExp(`${text}`,"gi")
    //         return user.title.match(regex)
           
    //     })
    // }
    // console.log('matches',matches)
    // suggetion(matches)
    // console.log(text)
    
    setTimeout(() => {
      dispatch(productSearch(text))
    }, 2000);
   
  
    
    setText(text)
  
   
  };



  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">HomePage</h1>
      </Link>
      <div className="search-box">
       
        <input
          type="text"
          onChange={e => onChangeHandler(e.target.value)} 
          value={text}
          placeholder="search product"
        />
         
          <div>
            
            {data && data.map((text) => {
                if(data.length===30){
                    return false;
                }
                // const {title, price, id, brand} = text;
                return( 
              <div className="box" key={text.id}>
                <Link to="/Desc" data={text.id}>
                <h5>{text.title}</h5> 
                </Link>
                {console.log(text.title)} 
              </div>);
})}
            
          </div>
          
      </div>
      
      <Link to="/Cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
        <div>
          {/* {data.products.map((item) =>( 
                   <div> {item.id}</div> */}
        </div>
      </Link>
    </div>
  );
};
export default Header;
