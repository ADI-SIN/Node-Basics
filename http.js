const http = require('http')

// const server = http.createServer((request,response)=>{
// 	// console.log(request)
// 	if (request.url == '/')
// 		response.write("Server Started!")
// 	if (request.url == '/invalid')
// 		response.end("<h2>Invalid URL</h2>")
// 	response.end()
// })

// or using Event API
const server = http.createServer()
// request is an event, there are various events which can be listened
server.on('request', (req,res)=>{
	res.end("Listened on event")
})

// $ sudo kill -9 $(sudo lsof -t -i:9898)
server.listen(9898)