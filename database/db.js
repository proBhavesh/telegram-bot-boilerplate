const mongoose = require("mongoose");
DB = process.env.DATABASE;

mongoose
	.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log(err);
	});