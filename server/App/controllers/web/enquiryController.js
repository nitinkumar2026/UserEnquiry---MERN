const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;

  let enquiry = new enquiryModel({
    name,
    email,
    phone,
    message,
  });

  enquiry
    .save()
    .then(() => {
      res.send({ status: true, message: "Enquiry Inserted successfully" });
    })
    .catch((err) => {
      res.send({ status: false, message: "Enquiry not Inserted", error: err });
    });
};

let enquiryList = async (req, res) => {
  await enquiryModel
    .find()
    .then((enquiries) => {
      res.send({ status: true, enquiryList: enquiries });
    })
    .catch((err) => {
      res.send({
        status: false,
        message: "Error while fetching enquiry",
        error: err,
      });
    });
};

let enquiryDelete = async (req, res) => {
  let enId = req.params.id;
  let enquiry = await enquiryModel.deleteOne({ _id: enId });
  res.send({ status: true, message: "Enquiry Deleted Successfully", enquiry });
};

let enquirySingleRow = async (req, res) => {
  let enId = req.params.id;
  let enquiry = await enquiryModel.findOne({ _id: enId });
  res.send({ status: true, enquiry });
};

let enquiryUpdate = async (req, res) => {
  let enId = req.params.id;
  let { name, email, phone, message } = req.body;

  let updateObj = {
    name,
    email,
    phone,
    message,
  };

  let updateRes = await enquiryModel.updateOne({ _id: enId }, updateObj);
  res.send({
    status: true,
    message: "Enquiry Updated Successfully",
    updateRes,
  });
};

module.exports = {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquirySingleRow,
  enquiryUpdate,
};
