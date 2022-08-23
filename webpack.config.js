const path = require("path");
module.exports = {
  mode: "development",
  entry: [
    "./src/addArticle/addArticle.js",
    "./src/authorizedLandinPage/authLanding.js",
    "./src/login/login.js",
    "./src/signUp/signUp.js",
    "./src/userProfile/userProfile.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true,
};
