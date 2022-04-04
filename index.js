'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


//***********************Database Connection SECTION EndS FROM HERE***********************
//***********************API'S SECTION STARTS FROM HERE***********************
import calculatorRouter from './app/components/calculator/calculatorRoutes.js';
//***********************API'S SECTION EndS FROM HERE***********************
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', [calculatorRouter]);
// app.use(
// 	cors({
// 		origin: process.env.origin,
// 		credentials: true
// 	})
// );


//for deployment
if (process.env.NODE_ENV === 'production') {
	app.use((req, res, next) => {
		if (req.header('x-forwarded-proto') !== 'https') res.redirect(`https://${req.header('host')}${req.url}`);
		else next();
	});
}

let port = process.env.PORT || 4000;

app
	.listen(port, function () {
		console.log(`🚀 Server on http://localhost:${port}/`);
	})
	.on('error', function (error) {
		console.log(error);
	});
