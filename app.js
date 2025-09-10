const express = require("express");

const app = express();
const coursesroutes = require('./routes/courses.routes')
app.use(express.json());
app.use ('/api/courses',coursesroutes)


app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});

/*
put : all objects
patch:one thing in objects

*/
