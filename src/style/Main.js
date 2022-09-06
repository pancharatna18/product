import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addToCart, EmptyCart, RemoveFormCart } from "../component/action";
import { useDispatch } from "react-redux";
// import { EmptyCart } from '../component/constant';
import { productList } from "../component/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Container, grid, height, padding } from "@mui/system";
import { Icon } from "@mui/material";
import { Delete } from "@material-ui/icons";
import { AddShoppingCartSharp } from "@material-ui/icons";
import { RemoveShoppingCartSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
// import {Redirect} from 'react-router-dom'
import Desc from "./Desc";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("data in main component", data);
  const product = {
    name: "i phone",
    categoery: "mobile",
    price: "56000",
    color: "black",
  };
  useEffect(() => {
    dispatch(productList());
  }, []);
  // return (
  //   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  //   {Array.from(Array(6)).map((_, index) => (
  //     <Grid item xs={2} sm={4} md={4} key={index}>
  //       <Container>xs=2</Item>
  //     </Grid>
  //   ))}
  // </Grid>
  // );
  <Desc />;

  if (!data) {
    return null;
  }

  return (
    // <div>

    // <button onClick={()=>dispatch(addToCart(product))}>addToCart</button>
    // <div>
    // <button onClick={()=>dispatch(RemoveFormCart(product.name))}>RemoveFormCart</button>
    // </div>
    // <div>
    // <button onClick={()=>dispatch(EmptyCart(product))}>EmptyCart</button>
    // </div>
    // <Grid>
    // <div className='product-container'>
    // <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}></Grid>

    //  {data.map((item)=>

    //     // <div key={item.id} className='product-item'>
    //     // <img src={item.thumbnail}alt=""/>
    //     // <div>id:{item.id}</div>
    //     // <div>title:{item.title}</div>
    //     // <div>description{item.description}</div>
    //     // <div>price{item.price}</div>
    //     // <div>discountPercentage{item.discountPercentage}</div>
    //     // <div>rating{item.rating}</div>
    //     // <div>stock{item.stock}</div>
    //     // <div>brand{item.brand}</div>
    //     // <div>category{item.category}</div>
    //     // <div>

    //     // </div>
    //     // </div>

    //     )}
    //      </Grid>
    // </div>
    // </Grid>
    // </div>
    // eslint-disable-next-line react/jsx-no-undef

    data.map((item) => (
      <Grid container lg={3} md={3} sx={{ display: "inline-flex" }}>
        <Card sx={{ height: 400, width: "100%", m: 1 }}>
          <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
            <img
              card_img
              src={item.thumbnail}
              height="200"
              width="100%"
              alt=""
            />

            <Typography variant="h5" sx={{ ml: 1.5 }} component="div">
              {item.title}
            </Typography>
            {/* <Typography variant="h7" component="div" noWrap="false" >
      {item.description}
      </Typography> */}
            <Typography sx={{ ml: 1.5 }} color="text.secondary">
              Rs. {item.price}
            </Typography>
            <Button
              variant="contained"
              sx={{ m: 1, width: "50" }}
              startIcon={<AddShoppingCartSharp />}
              onClick={() => dispatch(addToCart(item))}
            >
              add{" "}
            </Button>

            <Button
              variant="contained"
              sx={{ m: 1 }}
              startIcon={<RemoveShoppingCartSharp />}
              onClick={() => dispatch(RemoveFormCart(item.id))}
            >
              Remove
            </Button>
            {/* <button onClick={()=>dispatch(EmptyCart(product))}>EmptyCart</button> */}
          </CardContent>
          <CardActions>
            {/* <a href ="/Desc"> */}
            {/* <Button size="small" onClick={() => {(Desc); }} >Learn More</Button> */}
            {/* </a> */}

            <Link to="/Desc" data={item.id}>
              Learn More
            </Link>
          </CardActions>
        </Card>
      </Grid>
    ))
  );
}
export default Main;
