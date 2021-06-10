import React, { useReducer, createContext } from 'react'

export const TableContext = createContext()

const initialState = {
    tableData: [
        {
            name: 'Table 01',
            category: 'Category 01',
            availability: 'Avalaible',
            arrival: 'Arrived',
            selected: false,
        },
        {
            name: 'Table 02',
            category: 'Category 01',
            availability: 'FULL',
            arrival: "Hasn't Arrived",
            selected: false,
        },
        {
            name: 'Table 03',
            category: 'Category 01',
            availability: 'Avalaible',
            arrival: 'Arrived',
            selected: false,
        },
        {
            name: 'Table 04',
            category: 'Category 01',
            availability: 'FULL',
            arrival: 'Arrived',
            selected: false,
        },
    ],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_ALL':
            return {
                tableData: state.tableData.map((data) =>
                    !data.selected ? { ...data, selected: true } : { ...data }
                ),
            }
        case 'DESELECT_ALL':
            return {
                tableData: state.tableData.map((data) =>
                    data.selected ? { ...data, selected: false } : { ...data }
                ),
            }
        case 'SELECT_ACTION':
            return {
                tableData: state.tableData.map((data) =>
                    data.name === action.payload.name
                        ? { ...data, selected: !action.payload.selected }
                        : { ...data }
                ),
            }
        case 'DELETE_SELECTED':
            return {
                tableData: state.tableData.filter((data) => !data.selected),
            }
        default:
            return state
    }
}

export const TableContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <TableContext.Provider value={[state, dispatch]}>
            {props.children}
        </TableContext.Provider>
    )
}
