const fs = require('fs')

function read(file, path = '.') {
  return fs.readFileSync(path + '/' + file)
}

function write(file, path) {
  fs.writeFileSync(path + '/' + file)
}

module.exports = {
  read, write
}
