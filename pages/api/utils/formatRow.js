const formatRow = (row) => {
    const rowValues = row.split(',')
    const rowFirstSeatValues = rowValues[1].split(':')
    const rowLastSeatValues = rowValues[2].split(':')
    const numberSeatRequested = (rowLastSeatValues[1] - rowFirstSeatValues[1])

    return {
        id: rowValues[0],
        indexFirstSeatRow: rowFirstSeatValues[0],
        indexFirstSeatWithinRow: rowFirstSeatValues[1],
        indexLastSeatRow: rowLastSeatValues[0],
        indexLastSeatWithinRow: rowLastSeatValues[1],
        numberSeatRequested,
    }
}

module.exports = formatRow
