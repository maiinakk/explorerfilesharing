const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");
const path = require("path");
const cors = require("cors");

dotenv.config({ path: "./config/.env" });

connectDatabase();
//cors
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(","),
};
app.use(cors(corsOptions));
//Template design
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

//routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
