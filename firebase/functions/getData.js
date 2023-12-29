const db = require("./db");

const getData = async (req, res) => {
  try {
    const page = req.query.page || 1;
    db.collection('users').get()
      .then((snapshot) => {
        const data = []
        snapshot.forEach((doc) => {
          data.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        res.status(200).json({
          message: "Success",
          data: data.filter((item, index) => (page-1)*50 <= index && index < page*50),
        });
      }).catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  }
  catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getData;
