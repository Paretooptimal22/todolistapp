// form (input for item's text and submit item)

import React from 'react'
import FormContext from '../../utils/FormContext'

const ItemForm = _ => {

       return (

        <FormContext.Consumer>
            {
                ({ item, itemFormSubmit, itemInputChange }) => (
                    <form>
                    <div className="form-group">
                        <label htmlFor="item">Add an item:</label>
                        {/* using onChange and value */}
                        <input type="text" className="form-control" id="item" placeholder="Item" onChange={itemInputChange} value={item}/>
                    </div>
                    {/* using onClick */}
                    <button type="submit" className="btn btn-primary" onClick={itemFormSubmit}>Add</button>
                </form>  
                )
            }
        </FormContext.Consumer>          

    ) 
    
}

export default ItemForm