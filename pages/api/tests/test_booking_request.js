const fs = require('fs')

const assert = require("chai").assert;
const validations = require('../validations')
const formatRow = require("../utils/formatRow");
const formatFile = require("../utils/formatFile");

describe("Test Booking Request", () => {

    it("show return the correct amount of invalid rows", () => {

        try {
            const request = fs.readFileSync('sample_booking_requests.txt', 'utf8')
            const bookingRequestRows = formatFile(request).map(formatRow);

            let validBookings = []
            const errors = [];

            bookingRequestRows.forEach(bookedRow => {
                Object.values(validations).forEach(validation => {
                    const valid = validation(bookedRow, { validBookings });
                    if (!valid.isValid) {
                        errors.push(valid.error)
                        return;
                    }
                    validBookings = valid.validBookings || validBookings
                })
            })

            assert.equal(errors.length, 10)
        } catch (err) {
            console.error(err)
        }
    })
})

