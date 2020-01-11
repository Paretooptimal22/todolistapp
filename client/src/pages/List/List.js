import React, { useState } from 'react'
import FormContext from '../../utils/FormContext'
import ItemForm from '../../components/ItemForm'
import ItemList from '../../components/ItemList'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const List = () => {

  const [ todoState, setTodoState ] = useState({
    item: '',
    items: []
  })

  todoState.itemInputChange = event => {
      // setTodoState({...todoState, [event.target.name]: event.target.value })
      setTodoState({ ...todoState, item: event.target.value })
  }

  todoState.itemFormSubmit = event => {
      event.preventDefault()
      console.log('item added: ')
      console.log(todoState.item)
      let items = JSON.parse(JSON.stringify(todoState.items))
      items.push(todoState.item)
      setTodoState({ ...todoState, items, item: '' })    
    }

    return (
      <FormContext.Provider value={todoState}>
        <Nav />  
        <br/><br/>
        <div className="container">
            <ItemForm />
            <br />
            <ItemList />            
        </div>
        <Footer />

      </FormContext.Provider>
    )
}

export default List

// without hooks
// class List extends Component {

//   state = {
//     item: '',
//     items: [],
//     itemInputChange: event => {
//     // this.setState({ [event.target.name]: event.target.value })
    // this.setState({ item: event.target.value })    
    // },
//     itemFormSubmit: event => {
//       event.preventDefault()
//       console.log('item added: ')
//       console.log(this.state.item)
//       let items = JSON.parse(JSON.stringify(this.state.items))
//       items.push(this.state.item)
//       this.setState({ items, item: '' })
//     }
//   }

//   render() {
    // return (
    //   <FormContext.Provider value={this.state}>
    //     <Nav />  
    //     <br/><br/>
    //     <div className="container">
    //         <ItemForm />
    //         <br />
    //         <ItemList />            
    //     </div>
    //     <Footer />

    //   </FormContext.Provider>
    // )
//   }
// }