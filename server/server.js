const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
const Swap = require('./models/swapmeet')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const PORT = process.env.PORT || 3001;
const mongojs = require('mongojs')

const db = mongojs('thornbushrc')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// mongodb+srv://dannau:<Jesse2020!>@cluster0.dildz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thornbushrc", { useNewUrlParser: true });

app.post('/signup', async (req, res) => {
	const user = req.body

	const takenUsername = await User.findOne({username: user.username})
	const takenEmail = await User.findOne({email: user.email})

	if (takenUsername || takenEmail) {
		res.json({message: "username or email has already been taken"})
	} else {
		user.password = await bcrypt.hash(req.body.password, 10)

		const dbUser = new User({
			username: user.username.toLowerCase(),
			email: user.email.toLowerCase(),
			password: user.password
		})

		dbUser.save()
		res.json({message: "success"})
	}
})

app.get('/buyin', (req, res) => {
	db.userposts.find({}, (err, data) => {
		if (err) {
			res.send(err);
		  } else {
			res.json(data);
			console.log(data)
		  }
	})
})

app.post('/sellin', async (req, res) => {
	const post = req.body

	const swapPost = new Swap({
		postingTitle: post.postingTitle,
		price: post.price,
		category: post.category,
		description: post.description
	})

	swapPost.save()
	res.json({message: "success"})
})

app.post('/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				username: user.username,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });