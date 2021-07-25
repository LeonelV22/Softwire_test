
const isSameRow = (row) => {
    if (row.indexFirstSeatRow !== row.indexLastSeatRow) {
        return {
            isValid: false,
            error: `Different booked row: ID ${row.id}`
        }
    }

    return {
        isValid: true
    }
}
const checkSeatsLength = (row) => {
    if (row.numberSeatRequested > 5) {
        return {
            isValid: false,
            error: `Too many booked seats ${row.numberSeatRequested}: ID ${row.id}`
        }
    }

    return {
        isValid: true
    }
}

const checkSeatsAlreadyBooked = (row, options) => {
    let errorFound = false
    const tempBooking = []
    for (let i=0; i <= row.numberSeatRequested; i++) {
        const seat = (Number(row.indexFirstSeatWithinRow) + i)
        const hashBooking = `${row.indexFirstSeatRow},${seat}`
        const find = options.validBookings.find(vb => vb === hashBooking)
        if (find) {
            return {
                isValid: false,
                error: `Seat ${seat} in row ${row.indexFirstSeatRow} is already booked, ID ${row.id}`
            }
        }
        tempBooking.push(hashBooking)
    }

    if(!errorFound) {
        options.validBookings = [...options.validBookings, ...tempBooking]
    }

    return {
        isValid: true,
        validBookings: options.validBookings
    }
}

module.exports = {
    isSameRow,
    checkSeatsLength,
    checkSeatsAlreadyBooked
}
