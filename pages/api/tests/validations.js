const assert = require("chai").assert;

const validations = require('../validations')

describe("Validations", () => {
    const row = {
        id: 1,
        indexFirstSeatRow: 1,
        indexFirstSeatWithinRow: 1,
        indexLastSeatRow: 1,
        indexLastSeatWithinRow: 2,
        numberSeatRequested: 2
    }

    describe("isSameRow validation", () => {

        it("show return valid row", () => {
            const valid = validations.isSameRow(row)
            assert.isTrue(valid.isValid)
        })

        it("show return invalid row", () => {
            const valid = validations.isSameRow({
                ...row,
                indexLastSeatRow: 15
            })
            assert.isFalse(valid.isValid)
        })
    })

    describe("checkSeatsLength validation", () => {

        it("show return valid row", () => {
            const valid = validations.checkSeatsLength(row)
            assert.isTrue(valid.isValid)
        })

        it("show return invalid row", () => {
            const valid = validations.checkSeatsLength({
                ...row,
                indexLastSeatWithinRow: 15,
                numberSeatRequested: (15 - row.indexFirstSeatWithinRow)
            })
            assert.isFalse(valid.isValid)
        })
    })

    describe("checkSeatsAlreadyBooked validation", () => {
        it("show return valid row", () => {

            const valid = validations.checkSeatsAlreadyBooked(row, {
                 validBookings: []
            })
            assert.isTrue(valid.isValid)
        })

        it("show return invalid row", () => {
            const valid = validations.checkSeatsAlreadyBooked(row, {
                validBookings: ["1,1"]
            })
            assert.isFalse(valid.isValid)
        })
    })
})
