import express from "express";
import bodyParser from "body-parser";
const app = express();

// Built-in middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

var jsonParser = bodyParser.json({ type: 'application/json' } );
app.post('/index', jsonParser, (req, res) => {
  const { id } = req.body;
  console.log(req.body)
  res.send(`ID: ${id}`);
});

app.listen(3003);