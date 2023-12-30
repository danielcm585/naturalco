const functions = require("firebase-functions");
const getData = require("./getData");
const addData = require("./addData");

const cors = require('cors')({origin: true});

exports.getData = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');  
  getData(req, res);
});
exports.addData = functions.https.onRequest(addData);
