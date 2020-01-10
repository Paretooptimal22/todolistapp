import React, { createContext } from 'react'
const FormContext = createContext({
    item: '',
    items: [],
    itemFormSubmit: () => { },
    itemInputChange: () => { }
})

export default FormContext