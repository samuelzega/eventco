import React from 'react'
import styles from './styles.module.css'

export default function VerticalBar({ data }) {
    return (
        <article className={styles['vertical-chart']}>
            <section>
                {chart2Data.map((chart) => (
                    <div className={styles.bar}>
                        <div
                            className={styles.fill}
                            style={{
                                height: `${chart.percentage}%`,
                                backgroundColor: chart.isActive
                                    ? '#4339F2'
                                    : '#DAD7FE',
                            }}
                        ></div>
                    </div>
                ))}
            </section>
            <footer className={styles.legend}>
                <div>
                    <span
                        className={styles.circle}
                        style={{ backgroundColor: '#DAD7FE' }}
                    />
                    <p>Text 1</p>
                </div>
                <div>
                    <span
                        className={styles.circle}
                        style={{ backgroundColor: '#4339F2' }}
                    />
                    <p>Text 2</p>
                </div>
            </footer>
        </article>
    )
}

const chart2Data = [
    {
        isActive: false,
        percentage: 70,
    },
    {
        isActive: false,
        percentage: 70,
    },
    {
        isActive: false,
        percentage: 60,
    },
    {
        isActive: false,
        percentage: 65,
    },
    {
        isActive: false,
        percentage: 87,
    },
    {
        isActive: false,
        percentage: 70,
    },
    {
        isActive: true,
        percentage: 100,
    },
    {
        isActive: false,
        percentage: 92,
    },
    {
        isActive: false,
        percentage: 70,
    },
    {
        isActive: false,
        percentage: 65,
    },
    {
        isActive: false,
        percentage: 65,
    },
    {
        isActive: true,
        percentage: 95,
    },
    {
        isActive: false,
        percentage: 65,
    },
    {
        isActive: false,
        percentage: 95,
    },
    {
        isActive: false,
        percentage: 95,
    },
    {
        isActive: false,
        percentage: 65,
    },
]
