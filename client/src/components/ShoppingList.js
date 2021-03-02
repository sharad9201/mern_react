import React, { Component } from 'react'
import  {  ListGroup, ListGroupItem, Button, Container } from 'reactstrap'
import  { CSSTransition, TransitionGroup } from 'react-transition-group'
import {v1 as uuid} from "uuid";
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
               <Button color="dark"
               style={{marginBottom: '2rem'}}
               onClick={()=>{
                   const name = prompt('enter item')
                   if(name){
                       this.setState(state=>({
                           items:[...state.items,{id: uuid(), name}]
                       }))
                   }
               }}>
                   Add Item
               </Button>
               <ListGroup>
                   <TransitionGroup className="shopping-list">
                       {items.map(({id, name})=>(
                           <CSSTransition key={id} timeout={500} classNames="fade">
                               <ListGroupItem>
                                   <Button className="remove-btn" color="danger" size="small" 
                                   onClick={this.onDeleteClick.bind(this, id)}>
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
