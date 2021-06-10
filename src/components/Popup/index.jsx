import React, { useContext, useState } from 'react'
import { TableContext } from '../../context/table'
import styles from './styles.module.css'
import { Assign, Close, Delete } from '../../assets'

export default function Notification() {
    const [state, dispatch] = useContext(TableContext)

    return (
        <section
            className={styles.root}
            style={{
                visibility: state.tableData.find((data) => data.selected)
                    ? 'visible'
                    : 'hidden',
            }}
        >
            <img
                alt="close"
                src={Close}
                onClick={() => dispatch({ type: 'DESELECT_ALL' })}
                style={{ cursor: 'pointer' }}
            />
            <p>
                {state.tableData.filter((data) => data.selected).length} Table
                Selected
            </p>
            <ButtonWIcon
                text="Assign Category"
                icon={Assign}
                bgColor="#655CFB"
            />
            <ButtonWIcon
                action={() => dispatch({ type: 'DELETE_SELECTED' })}
                text="Delete Table"
                icon={Delete}
                bgColor="#EB5757"
            />
        </section>
    )
}

const ButtonWIcon = ({ text, icon, bgColor, action }) => (
    <button
        className={styles.button}
        style={{ backgroundColor: bgColor }}
        onClick={action}
    >
        <img alt={text} src={icon} />
        {text}
    </button>
)
