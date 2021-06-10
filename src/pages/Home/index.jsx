import React from 'react'
import styles from './styles.module.css'
import { HorizontalChart, VerticalChart, Table, Popup } from '../../components'
import { TableContextProvider } from '../../context/table'

export default function Home() {
    return (
        <TableContextProvider>
            <div className={styles['layout']}>
                <h1>Charts and Table Visualization</h1>
                <section className={styles['chart-container']}>
                    <section className={styles['chart-box']}>
                        <header>
                            <h3>Chart 1</h3>
                        </header>
                        <div>
                            <HorizontalChart />
                        </div>
                    </section>
                    <section className={styles['chart-box']}>
                        <header>
                            <h3>Chart 2</h3>
                        </header>
                        <div>
                            <VerticalChart />
                        </div>
                    </section>
                </section>
                <section className={styles['table-container']}>
                    <Table data={tableData} />
                </section>
                <Popup />
            </div>
        </TableContextProvider>
    )
}

const tableData = [
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
]
