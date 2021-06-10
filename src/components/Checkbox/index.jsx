import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export default function Checkbox({ className, action, isSelected }) {
    const classes = [styles.group, className].filter(Boolean).join(' ')

    return (
        <div className={classes} onClick={action}>
            <input
                className={styles.root}
                checked={isSelected}
                onChange={action}
                type="checkbox"
            />
            <span className={styles.check} />
        </div>
    )
}
