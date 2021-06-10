import React, { useState, useContext, useEffect } from 'react'
import Checkbox from '../Checkbox'
import styles from './styles.module.css'
import { TableContext } from '../../context/table'

export default function Table({ data }) {
    const [isSelectAll, setIsSelectAll] = useState(false)
    const [state, dispatch] = useContext(TableContext)
    useEffect(() => {
        if (!state.tableData.find((data) => !data.selected)) {
            setIsSelectAll(true)
        }
        if (isSelectAll && state.tableData.find((data) => !data.selected)) {
            setIsSelectAll(false)
        }
    }, [state.tableData])
    return (
        <table className={styles['table']} cellSpacing="0">
            <thead>
                <tr>
                    <th>
                        <Checkbox
                            action={() => {
                                isSelectAll
                                    ? dispatch({ type: 'DESELECT_ALL' })
                                    : dispatch({ type: 'SELECT_ALL' })
                                setIsSelectAll(!isSelectAll)
                            }}
                            isSelected={isSelectAll}
                        />
                    </th>
                    {column.map((col) => (
                        <th>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {state.tableData.map((rowData) => (
                    <TableRow
                        data={rowData}
                        action={() =>
                            dispatch({
                                type: 'SELECT_ACTION',
                                payload: { ...rowData },
                            })
                        }
                    />
                ))}
            </tbody>
        </table>
    )
}

const TableRow = ({ data, action }) => {
    return (
        <tr onClick={action} className={styles['table-row']}>
            <td>
                <Checkbox
                    isSelected={data.selected}
                    action={() => console.log('')}
                />
            </td>
            {column.map((col) => (
                <td>{data[col.toLocaleLowerCase()]}</td>
            ))}
        </tr>
    )
}

const column = ['Name', 'Category', 'Availability', 'Arrival']
