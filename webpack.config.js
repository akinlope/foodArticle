const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    addArticle: "./src/addArticle/addArticle.js",
    authLanding: "./src/authorizedLandinPage/authLanding.js",
    login: "./src/login/login.js",
    signUp: "./src/signUp/signUp.js",
    userProfile: "./src/userProfile/userProfile.js",
},
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  watch: true,
};
