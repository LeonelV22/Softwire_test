const fs = require('fs')

const formatFile = require("../utils/formatFile");
const assert = require("chai").assert;

describe("Format row", () => {

    it("show return a valid row object", () => {
        const request = fs.readFileSync('./tests/sample_booking_requests.txt', 'utf8')

        const row = formatFile(request)

        assert.deepEqual(row, [ '1,42:8,42:11', '2,42:10,42:13' ] )
    })
})
