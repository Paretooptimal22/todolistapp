// items for to-do list

import React, { useContext } from 'react'
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

    const { items } = useContext(FormContext)

    return (
        <>
        <h4>Things to do:</h4>
            {/* <ul className="list-group">
                {
                    items.map((item, i) => <li className="list-group-item" key={i}>{item}</li>)
                }
            </ul> */}
            <ul className="list-group">
                {
                    items.length ? items.map(item => <li className="list-group-item">{item}</li>) : null
                }
            </ul>
        </>
    )

}

export default ItemList

// without hooks
    // return (
    //     <FormContext.Consumer>
    //         {
    //             ({ item, items }) => (
    //                 <>
    //                 <h4>Things to do:</h4>
    //                     <ul className="list-group">
    //                         {
    //                             items.map((item, i) => <li className="list-group-item" key={i}>{item}</li>)
    //                         }
    //                     </ul>
    //                 </>
    //             )
    //         }
    //     </FormContext.Consumer>
    // )