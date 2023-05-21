const express = require('express');
const router = express.Router();
const sequalize = require('../configs/postgresqldb').sequalize;
const Movie = require('../models/movie');


router.get('/movies/:date', async(request, response) => {
	const Movies = Movie.findOne({
		where: {
			id: parseInt(request.params.date)
		}
	});
	await Movies.then(function(success){
		response.status(200).json(success);
	}).catch(function(error){
		response.json(error);
	});
});


module.exports = router;