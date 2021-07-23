import {gql} from "@apollo/client";

export const SIGN_UP = gql `
    mutation signUp(
        $input:SignUpInput!
        ){
        signUp(input:$input){
        status
        message
        }
}
`;

export const SIGN_IN = gql `
    mutation signIn($input:SignInInput!){
  signIn(input:$input){
  status,
  message,
  id
}
}
`;

export const USER_DETAILS = gql `
    query userDetails{
  userDetails{
  name
  email
}
}
`;

export const GET_ALL_PRODUCTS =  gql `
    query getAllProducts{
  getAllProducts{
  name
  price
  inStock
  remainingStock
}
}
`

export const PENDING_ORDERS = gql `
    query pendingOrders{
  pendingOrders{
  user{
  name
  email
  _id
}
    name
  price
  inStock
  remainingStock
}
}
`

export const GET_ALL_STOCKS = gql `
    query geAllStocksInfo{
geAllStocksInfo{
  price
  inStock
  remainingStock
  pendingOrders
}
}
`