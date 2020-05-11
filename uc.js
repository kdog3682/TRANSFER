 
const fs = require('fs')       // EXTREMELY useful.
const path = require('path')   // kind of useful.
const chalk = require('chalk') // log(chalk.yellow.bold('Hello World'))
const axios = require('axios')
const log = console.log
const n = '\n'       // Don't do this.
const nn = '\n\n'    // Don't do this.
const t = '\t'       // Don't do this.
const tt = '\t\t'    // Don't do this.
const validSingletonSentenceRE = /^[A-Z'"].*['".?!]$/g
const isSentenceRE = /[A-Z'"].*['".?!]/g
const partitionsRE = /([A-Z'"].*\n)+/g
const validPartitionsRE = /([A-Z'"].*[?!.'"]\n)+/g
const linebreak = `\/\/ *********************************************** \/\/`
const ONEDAY = 1000 * 60 * 60 * 24
const TODAY = Date.now()
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getDate(days = 0, getMonth = false) { //Usage: log(getDate())
  
  let d = new Date(TODAY + days * ONEDAY)
  let M = d.getMonth() // Makes sense when the month names are stored in an array.
  let Y = d.getFullYear()
  let s = d.getSeconds()
  let m = d.getMinutes()
  let h = d.getHours()
  let day = d.getDay() //
  let D = d.getDate()
  let time = d.getTime()
 
  return getMonth ? MONTHS[M] : (M + 1) + '/' + D + '/' + Y
}


const directories = {
  root: '/',
  home: '/home.kdog3682',      //path.dirname(process.cwd())
  code: '/home/kdog3682/code', //process.cwd() ...just 'code' is path.basename()
  current: '.',
  parent: '..',
}

const prettierOptions = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true, //semicolons
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: false,
  arrowParens: 'always',
  parser: 'babel',
  rangeStart: 0, // Shit works.
  rangeEnd: Infinity,
}

// Start*********************************************************************** //

// generateUtilsDotJSApp('escapehtmlEX.js')


// A way to sort the functions.
// Build files from bottom to top.
// Build files from top to bottom.





























// Generate 3 versions
// V1: Plain
// V2: Has Comments
// V3: Has Comments and Linebreaks within function context

function generateUtilsDotJSApp(outputfile, input = 'uc.js', ) { // creates the utils.js
  
  // This can be refactored a bit to make it more clear what's going on.
  // generateBoilerplate
  // updateUtils
  
  const text = read(input)
  const obj = tallyJSAdvanced(text)
  const functionNames = []
  
  for (const item of obj) {
    if (item.type === 'function' || item.type === 'const') {
      functionNames.push(item.name)
    }
  }
  
  const moduleExports = constructModuleExports(functionNames) // for the parent.
  const replacedText = text.replace(/\nmodule.exports[^]*$/, '')// for the parent.
  const comments = `\/\/ New write to ${input} was created on ${getDate()}.` // for the p
  
  const call = `const { ${functionNames.join(', ')} } = require(\'./${utilityfile}\')\n`
  write(utilityfile, replacedText + '\n\n' + moduleExports + '\n\n' + comments + '\n\n')
  
  const appText = read(outputfile).replace(/^[^]*?require\(.*?\)\;/, call) //orchild
  write(outputfile, appText)
  // rwhandler('./app.js', './app.js', call)
  log(`Complete.\n Added ${count} new exports: ${exportlist}.`)
  log(`Updated ${utilityfile}.`)
  log(`Prepended to outputfile: ${outputfile}`)
}


// *********************************************************************** //

function cleanup(folderpath = '.') { //needs work
  const files = read(folderpath) //files.txt, files.js, files.other
  let store = ''
  store += '#' + getDate() + '\n\n'
  store += 'Files: ' + files.join(', ') + '.'
  
  for (const file of files) {
    
    const filesize = size(file, folderpath)
    
    if (filesize < 1000) { // might cause error if not a file.
      log('Removed file: ' + file + ' due to insufficient size: ' + filesize)
      const data = read(file, folderpath)
      store += '<' + file + '>' + ' \/\/Size:' + filesize + '\n' + data.toString().trim() + '\n' + '</' + file + '>' + filesize + '\n\n'
      remove(file, folderpath)
    }
  }
  append('store', store, folderpath) //similar to cleanup
}

function parseChunks(s) {
  return s.match(partitionsRE)
}

function parseSentences(s) {
  return s.match(validSingletonSentenceRE)
}

function toNumber(s) { // #minor type: general
  return s.charCodeAt(0) - 96 + 32
}

function toLetter(n) { // #minor
  return String.fromCharCode(64 + n)
}

function shuffle(arr) { // #useful #questionable@VueObjectSorting type: general
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function appendObj(text, tags, obj = {}) {
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

function append(file, contents, path = '.', flag = {flag: 'a'}) {
  
  fs.appendFileSync(path + '/' + file, '\n\n' + contents, flag)
}

function remove(file, path = '.') {
  try {
    fs.unlinkSync(path + '/' + file)
  }
  catch (e) {
    return;
  }
}

function size(file, path = '.') {
  return fs.statSync(path + '/' + file).size
}

function createDate(file, path = '.') {
  return ('' + (fs.statSync(path + '/' + file).birthtime)).slice(4,15)
}

function isFile(file, path = '.') { //perhaps should use asynchronous
  return fs.lstatSync(path + '/' + file).isFile() // .isDirectory()
}

//startq How might I rewrite this?
function readP(srcpath) {
  return new Promise((res, rej) => {
    fs.readFile(srcpath, 'utf8', (err, data) => {
      if (err) reject(err)
      else res(data)
    })
  })
}

function writeP(savepath, data) {
  return new Promise((res, rej) => {
    fs.writeFile(savepath, data, (err) => {
      if (err) rej(err)
      res()
      
    })
  })
}

function prependText(srcpath, savepath, prependedText) {
  readP(srcpath).then((res) => {
    let foo = ''
    foo += prependedText + '\n\n' + res
    return writeP(srcpath, foo)
  }).then(console.log('completed'))
}
//endq


function tallyFunctions(str) {
  return str.match(/function\s(\w+).*?(:\/\/(.*))?/g)
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


function ordinal(n) { // type: general Source: Taken from StackOverFlow / Shoppify
  const chars = ['th', 'st', 'nd', 'rd']
  const a = chars[(n % 100 - 20) % 10]
  const b = chars[n % 100]
  const c = chars[0]
  return n + (a || b || c)
}

function allUnique(arr) { // type: general
  const set = [...new Set(arr)]
  return set.length === arr.length
}

function consolidate(str) { // type: parse Consolidates the text without \n
  return str.replace(/\n+/g, ' ')
}

function getFilesWithUserInput(folder, searchInput = '.') { //User Input. Returns array.
  try {
    let files = read(folder)
    let filtered = files.filter(item => new RegExp(searchInput + '$').test(item))
    log('Filtered files: ' + filtered)
    return filtered
  }
  catch (e) {
    log(chalk.red.bold('Unable to retrieve files from ' + folder))
  }
}

function getFiles(folder = '.') { // Automated File Typing. Returns obj.
  
  try {
    const files = read(folder)
    const store = {js: [], txt: [], webdev: [], other: []}
    for (file of files) {
      if (/\.js$/.test(file))              store['js'].push(file)
      else if (/\.txt$/.test(file))        store['txt'].push(file)
      else if (/\.(html|css)$/.test(file)) store['webdev'].push(file)
      else                                 store['other'].push(file)
    }
    return store
  }
  
  catch (e) {
    log(chalk.red.bold('Unable to retrieve files from ' + folder))
  }
  
}


function constructModuleExports(list) { //constructModuleExports //Works
  
  let output = ''
  let firstline = 'module.exports = {\n'
  let lastline = '}'
  
  output += firstline
  for (item of list) {
    output += '\t' + item + ',' + '\n'
  }
  output += lastline
  
  return output
}

function removeComments(string) {
  return string.replace(/\/\/.*|\/\*.*?\*\//, '')
}

function prettyHTML(string) {
  const htmlEntites = {
    nbsp: ' ',
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    apos: '\'',

  }
  return string.replace(/\&([^;]+);/g, (entity, entityCode) => {
    let match;
    if (entityCode in htmlEntites) {
      return htmlEntities[entityCode]
    }
    else if ( (match = entityCode.match(/^#x[\da-fA-F]+)$/))) {
      return String.fromCharCode(parseInt(match[1], 16));
    }

    else if ( (match = entityCode.match(/^#(\d+)$/))) {
      return Srting.fromCharCode(--match[1]);
    }

    else {
      return entity
    }
  })
}

function aggregateSentences(s) {
  return s.match(isSentenceRE)
}

function wordCount(s) {
  return s.split(' ').length > 4
}
function gp(s) {
  return s.split(/\n\n/)
}

function finalConcat(arr, delimiter = '\n') {
  return arr.join(delimiter)
}



module.exports = {
	fs,
	path,
	chalk,
	axios,
	log,
	n,
	nn,
	t,
	tt,
	validSingletonSentenceRE,
	isSentenceRE,
	partitionsRE,
	validPartitionsRE,
	linebreak,
	ONEDAY,
	TODAY,
	MONTHS,
	getDate,
	directories,
	prettierOptions,
	generateUtilsDotJSApp,
	cleanup,
	parseChunks,
	parseSentences,
	toNumber,
	toLetter,
	shuffle,
	appendObj,
	tally,
	matchTextLinesByInputQuery,
	inputIsArrayOrRest,
	isArray,
	words,
	read,
	write,
	append,
	remove,
	size,
	createDate,
	isFile,
	readP,
	writeP,
	prependText,
	tallyFunctions,
	tallyJSAdvanced,
	ordinal,
	allUnique,
	consolidate,
	getFilesWithUserInput,
	getFiles,
	constructModuleExports,
	removeComments,
	prettyHTML,
	aggregateSentences,
	wordCount,
	gp,
	finalConcat,
}

// New write to util.js was created on 1/8/2020.
// The new functions added were ...

