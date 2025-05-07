const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
  let { sName, sEmail, sPhone, sMessage } = req.body;

  let enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  });

  enquiry
    .save()
    .then(() => {
      res.send({ status: true, message: "Enquiry Inserted successfully" });
    })
    .catch((err) => {
      res.send({ status: false, message: "Enquiry not Inserted, error: err" });
    });
};

module.exports = {
  enquiryInsert,
};
