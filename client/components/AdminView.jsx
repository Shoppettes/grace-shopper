import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateAdminItem, setAdminKeys, deleteAdminItem} from '../store'

class AdminView extends Component {
  constructor () {
    super ()
  }

  render () {

    const {items, type, item} = this.props;
    let  keysToRender = [];
      switch (type) {
      case 'products':
        keysToRender = ["id", "name", "description", "price", "quantity", "availability"];
        break;
      case 'orders':
        keysToRender =  ["id", "orderStatus"];
        break;
      case 'categories':
        keysToRender =  ["id", "name"];
        break;
      case 'users':
        keysToRender =  ["id", "email", "fullname"];
        break;
      default:
        return keysToRender
    }
 console.log('aaaaaaa', items)


// products:name, description, price, quantity,availibility, productId
// category: name, categoryId
// order: orderid, status, userid
// user: email, fullname, userId
    return (
      <div>
        <h1> {type}</h1>
        {type !='orders' && <Link className="btn btn-primary" to={`/addComponent/${item.id}`} onClick={() => this.props.clickHandlerAdd(event,keysToRender)} >
               <span className="glyphicon glyphicon-plus"></span> add
             </Link>}
         {items && items.map(item => {
            return  (<div>
               ------------------------
              {keysToRender.map(key => (
              <div>
                <span> {key}: {item[key]} </span>
              </div>
            )
            )}
            <h4>
             <Link className="btn btn-primary" to={`/editComponent/${item.id}`} onClick={() => this.props.clickHandler(event,keysToRender,item)} >
               <span className="glyphicon glyphicon-plus"></span> edıt
             </Link>
             <Link className="btn btn-primary" to={`/deleteComponent/${item.id}`} onClick={() => this.props.clickHandlerDelete(event,keysToRender, item)} >
               <span className="glyphicon glyphicon-plus"></span> delete
             </Link>
          </h4>
            </div>
           )
         } )}
     </div>
    )}
}

const mapState = (state) => {
  return {
    items: state.adminItems.items,
    type: state.adminItems.name,
    item: state.adminItem.item
  }
}

const mapDispatch = dispatch => {
  return {
    clickHandler (event, keystoRender, item) {
      event.preventDefault();
      dispatch(setAdminKeys(keystoRender))
      dispatch(updateAdminItem(item));
    },
    clickHandlerAdd(event, keys){
      event.preventDefault();
      dispatch(setAdminKeys(keys))
    },
    clickHandlerDelete(event, keys, item){
      event.preventDefault();
      dispatch(setAdminKeys(keys));
      dispatch(deleteAdminItem(item, false));
    }
  }
}
export default connect(mapState, mapDispatch)(AdminView)
