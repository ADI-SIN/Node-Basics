// JS is single threaded by default
// It executes line by line, but
// We can offload lines using async functions
console.log("First Task")

// setTimeout is async function
// async functions offload tasks and pass the call to next line
// if it were sync function (or a long running loop for example) then it will be executed before third
setTimeout(()=>{
	console.log("Second Task")
},0)

console.log("Third Task")


// there is a utility to promisify a function
// promisify makes async calls wait for results
// Example, readFile and writeFile as async (though there are sync read and write options available for fs)
const {readFile, writeFile} = require('fs')
const util = require('util')
// now readFilePromise and writeFilePromise will be promised
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// ----OR-----
// const {readFile, writeFile} = require('fs').promises