import React, { Component, createContext } from 'react'
import FormContext from '../../utils/FormContext'
import ItemForm from '../../components/ItemForm'
import ItemList from '../../components/ItemList'
import Nav from '../../components/Nav'

class List extends Component {

  state = {
    item: '',
    items: [],
    itemInputChange: event => {
    // this.setState({ [event.target.name]: event.target.value })
    this.setState({ item: event.target.value })    
    },
    itemFormSubmit: event => {
      event.preventDefault()
      console.log('item added: ')
      console.log(this.state.item)
      let items = JSON.parse(JSON.stringify(this.state.items))
      items.push(this.state.item)
      this.setState({ items, item: '' })
    }
  }

  render() {
    return (
      <FormContext.Provider value={this.state}>
        <Nav />  
        <br/><br/>
        <div className="container">
            <ItemForm />
            <br />
            <ItemList />            
        </div>

      </FormContext.Provider>
    )
  }
}

export default List
