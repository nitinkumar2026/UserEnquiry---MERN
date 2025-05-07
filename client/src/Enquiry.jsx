import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import { EnquiryList } from "./enquiry/EnquiryList";

export default function Enquiry() {
  let [enquiryList, setEnquiryList] = useState([]); // Enquiry List State (Array of Objects)

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id: "",
  });

  let saveEnquiry = (e) => {
    //alert("Enquiry Saved Successfully!");
    e.preventDefault();

    /* let formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    }; */

    if (formData._id) {
      // Update enquiry
      axios
        .put(
          `http://localhost:8020/web/api/enquiry/update/${formData._id}`,
          formData
        )
        .then((res) => {
          console.log(res.data);

          toast.success("Enquiry Updated Successfully!");

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            _id: "",
          });

          getAllEnquiry();
        });
    } else {
      axios
        .post(`http://localhost:8020/web/api/enquiry/insert`, formData)
        .then((res) => {
          console.log(res.data);

          toast.success("Enquiry Saved Successfully!");

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          // Reset form data after saving
          // setFormData({ ...formData }); // sent to setState (React Hook)
          getAllEnquiry(); // Call the function to refresh the enquiry list after saving
        });
    }
  };

  let getValue = (e) => {
    let inputName = e.target.name; // name, email, phone, massage (HTML Input Name Attribute)
    let inputValue = e.target.value; // "John Doe", " john@gmail.com", "1234567890", "Hello World" (HTML Input Value Attribute)
    let oldData = { ...formData }; // shallow copy of formData object (Spread Operator) {name: "", email: "", phone: "", message: ""}

    oldData[inputName] = inputValue; // {name: "John Doe", email: "", phone: "", message: ""} (Dynamic Object Property)
    setFormData(oldData); // setFormData({ ...oldData }); // sent to setState (React Hook)
  };

  let getAllEnquiry = () => {
    axios
      .get(`http://localhost:8020/web/api/enquiry/view`)
      .then((res) => {
        return res.data;
      })
      .then((finalData) => {
        if (finalData.status) {
          setEnquiryList(finalData.enquiryList);
        }
      });
  };

  //console.log(enquiryList);

  useEffect(() => {
    getAllEnquiry(); // Fetch all enquiry data when component mounts (React Hook) (useEffect) (ComponentDidMount) (ComponentDidUpdate)
  }, []); // empty dependency array means this effect runs only once when the component mounts
  return (
    <div>
      <ToastContainer />
      <h1 className="text-[40px] text-center py-6 font-bold">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>

          <form action="" onSubmit={saveEnquiry}>
            <div className="py-3">
              <label htmlFor="name" value="Your Name"></label>
              <TextInput
                type="text"
                onChange={getValue}
                value={formData.name}
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="py-3">
              <label htmlFor="email" value="Your Email"></label>
              <TextInput
                type="email"
                onChange={getValue}
                value={formData.email}
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="py-3">
              <label htmlFor="phone" value="Your Phone"></label>
              <TextInput
                type="phone"
                onChange={getValue}
                value={formData.phone}
                name="phone"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>

            <div className="py-3">
              <label htmlFor="message" value="Your Message"></label>
              <Textarea
                type="text"
                onChange={getValue}
                value={formData.message}
                name="message"
                placeholder="Enter Your Message..."
                required
                rows={4}
              />
            </div>

            <div className="py-3">
              <Button type="submit" className="w-[100%]">
                {formData._id ? "Update Enquiry" : "Save Enquiry"}
              </Button>
            </div>
          </form>
        </div>

        <EnquiryList
          data={enquiryList}
          getAllenquiry={getAllEnquiry}
          Swal={Swal}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}
