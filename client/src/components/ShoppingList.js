import React, { Component } from 'react'
import  {  ListGroup, ListGroupItem, Button, Container } from 'reactstrap'
import  { CSSTransition, TransitionGroup } from 'react-transition-group'
import {v1 as uuid} from "uuid";

 class ShoppingList extends Component {

    state = {
        items: [
            { id:uuid(), name:'sharad'},
            { id:uuid(), name:'swasti'},
            { id:uuid(), name:'puru'},
            { id:uuid(), name:'shristi'}
        ]
    }
    render() {
        const {items}= this.state;

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
                                   onClick={()=>
                                   {this.setState(state=>({items:state.items.filter(item =>item.id !==id)}))}}>
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

export default ShoppingList
