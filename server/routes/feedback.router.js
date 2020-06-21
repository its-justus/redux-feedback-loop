const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const { combineReducers } = require("redux");

router.get("/", (req, res) => {
  console.log("GET /api/feedback");
  pool
    .query('SELECT * from "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/feedback", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
	console.log("POST /api/feedback");
	// deconstruct request body
	const { feeling, understanding, support, comments } = req.body;
	console.log("body", req.body);
	
	// define query text and values
	const queryText = `INSERT INTO "feedback" 
		("feeling", "understanding", "support", "comments")
		VALUES ($1,$2,$3,$4);`;
  const queryValues = [feeling, understanding, support, comments];
	
	console.log(queryText, queryValues);
	// send pg query
	pool
    .query(queryText, queryValues)
    .then((result) => {
			// send our response
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/feedback", error);
      res.sendStatus(500);
    });
});

module.exports = router;
