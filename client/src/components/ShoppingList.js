import React, { Component } from 'react'
import  {  ListGroup, ListGroupItem, Button, Container } from 'reactstrap'
import  { CSSTransition, TransitionGroup } from 'react-transition-group'
// import {v1 as uuid} from "uuid";
import {connect} from 'react-redux'
import {getItems, deleteItem} from '../actions/itemActions'
import  PropTypes from 'prop-types'

 class ShoppingList extends Component {
     
    componentDidMount(){
        this.props.getItems()
    }

    onDeleteClick=(id)=>{
        this.props.deleteItem(id)
    }
   
    render() {
        // this.props.item.items
        const {items}= this.props.item;

        return (
           <Container>
               <ListGroup>
                   <TransitionGroup className="shopping-list">
                       {items.map(({_id, name})=>(
                           <CSSTransition key={_id} timeout={500} classNames="fade">
                               <ListGroupItem>
                                   <Button className="remove-btn" color="danger" size="small" 
                                   onClick={this.onDeleteClick.bind(this, _id)}>
                                    &times; 
                                   </Button>
                                   { name}
                               </ListGroupItem>
                           </CSSTransition>
                       ))}
                   </TransitionGroup>
               </ListGroup>
           </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
    item: state.item
})

export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList)
