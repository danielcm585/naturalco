const axios = require("axios");
const db = require("./db");

const addData = async (req, res) => {
  try {
    const resp = await axios.get("https://random-data-api.com/api/v2/users");
    const userData = {
      id: resp.data.id,
      email: resp.data.email,
      gender: resp.data.gender,
      phone_number: resp.data.phone_number,
      date_of_birth: resp.data.date_of_birth,
    }
    await db.collection('users').doc().set(userData)
      .then(() => {
        res.status(201).json({
          message: "Success",
          data: userData,
        });
      }).catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  }
  catch (err) {
    res.status(500).json({
      message: "Success",
      data: err.message,
    });

  }
};

module.exports = addData;