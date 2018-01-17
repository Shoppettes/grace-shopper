import axios from 'axios';

// action types
const EDIT_ADMIN_ITEM = 'EDIT_ADMIN_ITEM'
const ADD_ADMIN_ITEM = 'ADD_ADMIN_ITEM'
const DELETE_ADMIN_ITEM = 'DELETE_ADMIN_ITEM'
// initial state
const defaultItem = {item: {}, redirect: false};

// action creators
export const updateAdminItem = (item, redirect) => ({type: EDIT_ADMIN_ITEM, item, redirect})
export const addAdminItem = (item, redirect) => ({type: ADD_ADMIN_ITEM, item, redirect})
export const deleteAdminItem = (item, redirect) => ({type: DELETE_ADMIN_ITEM, item, redirect})

// thunk creators
//fetchadminorders: gets all orders from the database axios.get(/orders). then()getAdminData(orders). then(axios.get)
// get all orders, once res comes nack from backend, assign var let orders = res.data
// get all users, once res comes ack, assign var let users = res.data
// dispatch getAdminData thunk (orders, users)

export  function editAdminData(componentName, editedData){
  console.log('edit', editedData, `/${componentName}/${editedData.id}`)
  return function (dispatch) {
    axios.put(`/api/${componentName}/${editedData.id}`, editedData)
      .then(res => res.data)
      .then(updatedComponent => {
        console.log(updatedComponent)
        dispatch(updateAdminItem(updatedComponent, true))})
}
}

export  function addAdminData(componentName, newComponent){
  console.log('add', newComponent, `/${componentName}/${newComponent.id}`)
  return function (dispatch) {
    axios.post(`/api/${componentName}/jh`, newComponent)
      .then(res => res.data)
      .then(createdComponent => {
        console.log(createdComponent)
        dispatch(addAdminItem(createdComponent, true))})
}
}
export  function deleteAdminData(componentName, component){
  console.log('delet', component, `/${componentName}/${component.id}`)
  return function (dispatch) {
    axios.delete(`/api/${componentName}/${component.id}`)
      .then(res => res.data)
      .then(() => {
        dispatch(deleteAdminItem([], true))})
}
}

// export function editAdminData(){
//   return function (dispatch) {
//     let pro1 = axios.get('/api/orders');
//     let pro2 = axios.get('/api/users');
//     Promise.all([pro1, pro2])
//       .spread((orders, users) => {
//         dispatch(getAdminData(orders.data, users.data))
//       })
//     }
// }


// reducer
export default function( state = defaultItem, action) {
  switch (action.type) {
    case EDIT_ADMIN_ITEM:
      return {redirect: action.redirect,  item: action.item}
  case ADD_ADMIN_ITEM:
      return {redirect: action.redirect,  item: action.item}
  case DELETE_ADMIN_ITEM:
      return {redirect: action.redirect,  item: action.item}
    default:
      return state
  }
}
