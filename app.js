const express = require('express')
const path = require('path')
const logger = require('./logger')

// @TODO - check router
// similar to urls.py for each app in django
// const router = express.Router()

const app = express()

//use logger middleware
app.use(logger)
// or use logger for specific route
// app.use('/about',logger)

// for multiple middlewares, remember order matters
// app.use([m1,m2,m3]) 

// static files, scripts, images
app.use(express.static('./static'))


//using middleware
app.get('/',(req,res)=>{
	// res.status(200).send("Home Page")
	res.sendFile(path.resolve(__dirname,'./home.html'))
})

app.get('/about',(req,res)=>{
	res.status(200).json({"content":"About Page"})
})

// url params - /user/6
app.get('/user/:user_id/task/:task_id',(req,res)=>{
	const user = req.params
	// console.log(user)
	res.status(200).json({"user_id":Number(user.user_id),"task":user.task_id})
})

// url query string - /user/search?query=adi&age=25
app.get('/user/search',(req,res)=>{
	const q = req.query
	// console.log(q)
	res.status(200).json(q)
})


// parse form data
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())

app.post('/login',(req,res)=>{
	const q = req.body
	console.log(q)
	res.status(201).json(q)
})





// handle all requests on all paths if not found
app.all('*',(req,res)=>{
	res.status(404).send("<h1>404: Page not found</h1>")
})
// register app
const port = 9898
app.listen(port,()=>{
	console.log(`Server listening on port: ${port}`)
})