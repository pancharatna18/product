import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

function* getProducts() {
  let data = yield fetch("https://dummyjson.com/products");
  data = yield data.json();
  // let data= "hello how are you"
  console.warn("action is called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  console.log(data);
  let result = yield fetch(
    `https://dummyjson.com/products/search?q=${data.query}`
  );
  result = yield result.json();
  // let data= "hello how are you"
  console.log("action is called", result);
  yield put({ type: "SEARCH_PRODUCT_NEW", data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}
export default productSaga;
