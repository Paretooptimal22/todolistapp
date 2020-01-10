// items for to-do list

import React from 'react'
import FormContext from '../../utils/FormContext'

// const ItemList = props => {
//     console.log(props.items)
//     return (
//         // map mutates values of elements in an array
//         <ul className="list-group">
//             {
//                 props.items.map((item, i) => <li className="list-group-item" key={i}>{item}</li>)
//             }
//         </ul>
//     )
// }

const ItemList = _ => {
    return (
        <FormContext.Consumer>
            {
                ({ item, items }) => (
                    <>
                    <h4>Things to do:</h4>
                        <ul className="list-group">
                            {
                                items.map((item, i) => <li className="list-group-item" key={i}>{item}</li>)
                            }
                        </ul>
                    </>
                )
            }
        </FormContext.Consumer>
    )
}

export default ItemList