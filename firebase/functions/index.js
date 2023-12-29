const functions = require("firebase-functions");
const getData = require("./getData");
const addData = require("./addData");

const cors = require('cors')({origin: true});

exports.getData = functions.https.onRequest(getData);
exports.addData = functions.https.onRequest(addData);
