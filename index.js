import express from "express";
import routes from "./src/routes/index.js";
const {sequalize, connectToDB} = require('./src/configs/postgresqldb');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Here we define the api routes
app.use(routes);


app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, async () => {
    console.log('Server is running at http://localhost:${PORT}');
    await connectToDB();
  });

export default app;
