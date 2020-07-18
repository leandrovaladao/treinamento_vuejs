const path = require("path");

if (process.env.NODE_ENV === 'production'){
  module.exports = {
    outputDir: path.resolve(__dirname, "../templates/frontend/"),
    assetsDir: "../../static/"
  }
}