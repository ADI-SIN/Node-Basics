// middleware
const logger = (req,res,next) => {
	console.log("Request logged")
	const method = req.method
	const url = req.url
	console.log(method, url)
	// always pass middleware to next thing to be executed
	next()
	// OR terminate the request 
	// res.send("Ended")
}

module.exports = logger