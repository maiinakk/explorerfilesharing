const router = require("express").Router();
const File = require("../models/file");
const path = require("path");

router.get("/:uuid", async (req, res) => {
  // Extract link and get file from storage send download stream
  const file = await File.findOne({ uuid: req.params.uuid });
  // Link expired
  console.log(file);
  if (!file) {
    return res.render("download", { error: "Link has been expired." });
  }
  const response = await file.save();
  // uploads\1638172828519-214729520.jpg
  var filename = file.path.split("/").pop();
  // get local file path from file name /uploads/ + filename
  var filepath = path.join(__dirname, "../uploads", filename);
  res.download(filepath, filename);
});

module.exports = router;
