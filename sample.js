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
        selected: true,
    },
    {
        name: 'Table 03',
        category: 'Category 01',
        availability: 'Avalaible',
        arrival: 'Arrived',
        selected: true,
    },
    {
        name: 'Table 04',
        category: 'Category 01',
        availability: 'FULL',
        arrival: 'Arrived',
        selected: false,
    },
]

// const newData = tableData.map((data) =>
//     data.selected ? { ...data, selected: false } : { ...data }
// )

// const payload = {
//     name: 'Table 04',
//     category: 'Category 01',
//     availability: 'FULL',
//     arrival: 'Arrived',
//     selected: true,
// }
console.log(tableData.filter((data) => !data.selected))
