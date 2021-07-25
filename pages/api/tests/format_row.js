const formatRow = require("../utils/formatRow");
const assert = require("chai").assert;

describe("Format row", () => {

    it("show return a valid row object", () => {
        const row = formatRow("1,42:8,42:11")

        assert.deepEqual(row, {
            "id": "1",
            "indexFirstSeatRow": "42",
            "indexFirstSeatWithinRow": "8",
            "indexLastSeatRow": "42",
            "indexLastSeatWithinRow": "11",
            "numberSeatRequested": 3
        })
    })
})
