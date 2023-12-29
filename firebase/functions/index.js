const functions = require("firebase-functions");
const getData = require("./getData");
const addData = require("./addData");

exports.getData = functions.https.onRequest(
  {cors: ["localhost:3000", "localhost"]},
  getData
  );
  exports.addData = functions.https.onRequest(
  {cors: ["localhost:3000", "localhost"]},
  addData
);
