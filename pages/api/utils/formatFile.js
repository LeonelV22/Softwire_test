const formatFile = (stringRequest) => {

    return stringRequest
        .replace(/,\r?\n|\r/g,  '')
        .split(/[()]+/)
        .filter(e => e)
}

module.exports = formatFile
