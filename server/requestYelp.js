var Yelp = require('yelp');
var cred = require('../credentials');

const yelp = new Yelp({
	consumer_key: cred.consumer_key,
	consumer_secret: cred.consumer_secret,
	token: cred.token,
	token_secret: cred.token_secret,
});

// See http://www.yelp.com/developers/documentation/v2/search_api
module.exports = function(req, res) {
	yelp.search({ term: 'food', location: req.toString(), limit: 5 })
	.then(function (data) {
		console.log(req);
		res.status(200).json(data.businesses);
	})
	.catch(function (err) {
		console.error(err);
	});
};