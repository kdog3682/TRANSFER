
const fs = require('fs')       // EXTREMELY useful.
const path = require('path')   // kind of useful.
const chalk = require('chalk') // log(chalk.yellow.bold('Hello World'))
const axios = require('axios')
const log = console.log
const n = '\n'
const nn = '\n\n'
const t = '\t'
const tt = '\t\t'


const directories = {
  root: '/',
  home: '/home.kdog3682',      //path.dirname(process.cwd())
  code: '/home/kdog3682/code', //process.cwd() ...just 'code' is path.basename()
  current: '.',
  parent: '..',
}





function toNumber(s) { // #minor
  return s.charCodeAt(0) - 96 + 32
}

function toLetter(n) { // #minor
  return String.fromCharCode(64 + n)
}

function shuffle(arr) { // #useful #questionable@VueObjectSorting
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


function genTextObject(text, tags, obj = {}) {
  
  for (let tag of tags) {
    obj['tags'].push(tags)
  }
  obj['text'] = text

  return obj
}

function tally(arr) {
  return arr.reduce((acc, item, index) =>  {
    
    item = item.toLowerCase()
    
    if (!acc[item]) {
      acc[item] = 1
    }
    else {
      acc[item]++
    }
    return acc
  }, {})
}

function matchTextLinesByInputQuery(...input) {
  const args = inputIsArrayOrRest(input)
  return new RegExp('\\b.*(' + args.join('|') + ').*\\b', 'gi')
}

function inputIsArrayOrRest(input) {
  return isArray(input[0]) ? input[0] : input
}

function isArray(arr) {
  return Array.isArray(arr)
}

function words(s) {
  return s.trim().split(/\s/)
}

function read(input, path = '.') { // reads a file or a folder
  try {
    return fs.readFileSync(path + '/' + input, 'utf8')
  }
  catch {
    return fs.readdirSync(input + '/') //maybe this shouldn't be here
  }
}

function write(file, contents, path = '.') {
  fs.writeFileSync(path + '/' + file, contents)
}

function append(file, contents, path = '.') {
  fs.appendFileSync(path + '/' + file, contents)
}

function remove(file, path = '.') {
  fs.unlinkSync(path + '/' + file)
}

function size(file, path = '.') {
  return fs.statSync(path + '/' + file).size
}

function createDate(file, path = '.') {
  return ('' + (fs.statSync(path + '/' + file).birthtime)).slice(4,15)
}

// Perhaps the asynchronous version should be used.
function isFile(file, path = '.') {
  return fs.lstatSync(path + '/' + file).isFile() // .isDirectory()
}

function tallyFunctions(str) {
  return str.match(/function\s(\w+).*?(:\/\/(.*))?/g)
}

function tallyJSBasic(str) {
  return str.match(/\n(function|const|let)\s.*/g)
}

function tallyJSAdvanced(str) { //Usage: log(tallyJSAdvanced(read('util.js')))
  const matches = str.matchAll(/\n(function|const|let)\s(\w+)(?:.*\/\/\s?(.*))?/g)
  const arr = []
  for (const match of matches) {
    let [_, type, name, description] = match
    arr.push({name, type, description})
  }
  
  return arr
}

// Taken from StackOverFlow / Shoppify
function ordinal(n) {
  const chars = ['th', 'st', 'nd', 'rd']
  const a = chars[(n % 100 - 20) % 10]
  const b = chars[n % 100]
  const c = chars[0]
  return n + (a || b || c)
}

function allUnique(arr) { // Requires Edit: Doesn't account for arr of objects.
  const set = [...new Set(arr)]
  return set.length === arr.length
}

function consolidate(str) { // Consolidates the text without \n
  return str.replace(/\n+/g, ' ')
}

function getFiles(folder, type = '.') {
  try {
    let files = read(folder)
    let filtered = files.filter(item => new RegExp(type + '$').test(item))
    log('Filtered files: ' + filtered)
    return filtered
  }
  catch (e) {
    log(chalk.red.bold('Unable to retrieve files from ' + folder))
  }
}

function writeBulk(folder = process.cwd(), type = '.') {
  let store = ''
  const files = getFiles(folder, type)
  for (const file of files) {
  
    if (size(file, folder) < 300) {
      log(file)
      const data = read(file, folder).trim()
      store += '<' + file + '>' + '\n\n' + data + '\n\n' + '</' + file + '>' + '\n\n\n'
    }
  }
  
  write('textdocs', store, folder)
  // Add: Write the file and then remove or delete it.
}
let text = read('util.js')
let obj = (tallyJSAdvanced(text))

let functionNames = []
for (item of obj) {
  if (item.type === 'function') {
    functionNames.push(item.name)
  }
}

let moduleExports = cme(functionNames)

text = text.replace(/\s*undefined^]/)

write('utilcopy.js', text + '\n\n')
// append('utilcopy.js', moduleExports) // it works and it is clean.






function cme(list) {
  
  let firstline = 'module.exports = {\n'
  let lastline = '}'
  
  let output = firstline
  for (item of list) {
    output += '\t' + item + ',' + '\n'
  }
  output += lastline
  return output
}










// writeBulk()
// for (const item of Object.entries(obj)) {
//   log(read(directories[item]))
// }

// function readObject(obj, type = 'keys')
//   if (type === 'keys') return Object.keys(obj)
//   if (type === 'values') return Object.values(obj)
// }


 


// const text = read('util.js')
// log(allUnique(tallyJSAdvanced(text)))



// function recursiveRead(folder) {
//   let filesInFolder =
// }






// module.exports = {
//   directories,
//   directoriess,
//   directoriesss,
// }

// const moduleExportsRegex = /module\.exports = \{\n\t[^]\}/

// function writeModuleExports() {
//   let output = ''
//   'module.exports = {'
// }

