import React from 'react'
import styles from './styles.module.css'

export default function HorizontalChart() {
    return (
        <article>
            {chart1Data.map((chart) => (
                <div className={styles.bar}>
                    <p>{chart.month}</p>
                    <div className={styles.overlay}>
                        <div
                            className={styles.fill}
                            style={{ width: `${chart.percentage}%` }}
                        ></div>
                    </div>
                </div>
            ))}

            <footer>
                <p></p>
                <div>
                    {column.map((col) => (
                        <span>{col}</span>
                    ))}
                </div>
            </footer>
        </article>
    )
}

// hardcode data

const column = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
const chart1Data = [
    {
        month: 'May',
        percentage: 67,
    },
    {
        month: 'Apr',
        percentage: 40,
    },
    {
        month: 'Mar',
        percentage: 80,
    },
    {
        month: 'Feb',
        percentage: 50,
    },
    {
        month: 'Jan',
        percentage: 70,
    },
]
