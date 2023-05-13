const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const countryRoute = require("./routes/country");
const districtRoute = require("./routes/district");
const stateRoute = require("./routes/state");
const adminRoute = require("./routes/admin");
app.listen(port, () => {
  console.log(`${port} was connected`);
});
app.use(express.json());
app.use("/", countryRoute);
app.use("/", districtRoute);
app.use("/", stateRoute);
app.use("/", adminRoute);
