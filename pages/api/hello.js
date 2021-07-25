import formatFile from "./utils/formatFile";
import formatRow from "./utils/formatRow";
import validations from "./validations"

export default async function helloAPI(req, res) {

  const file = formatFile(req.body)
  // Remove boundaries
  file.shift()
  file.pop()

  const bookingRequestRows = file.map(formatRow);

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

  res.status(200).json({ data: errors })
}
