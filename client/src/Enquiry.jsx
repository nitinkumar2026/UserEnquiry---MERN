import React from "react";
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

import { EnquiryList } from "./enquiry/EnquiryList";

let saveEnquiry = (e) => {
  //alert("Enquiry Saved Successfully!");
  e.preventDefault();
};

export default function Enquiry() {
  return (
    <div>
      <h1 className="text-[40px] text-center py-6 font-bold">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry}>
            <div className="py-3">
              <label htmlFor="name" value="Your Name"></label>
              <TextInput
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="py-3">
              <label htmlFor="email" value="Your Email"></label>
              <TextInput
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="py-3">
              <label htmlFor="phone" value="Your Phone"></label>
              <TextInput
                type="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>

            <div className="py-3">
              <label htmlFor="message" value="Your Message"></label>
              <Textarea
                type="text"
                name="message"
                placeholder="Enter Your Message..."
                required
                rows={4}
              />
            </div>

            <div className="py-3">
              <Button type="submit" className="w-[100%]">
                Save Enquiry
              </Button>
            </div>
          </form>
        </div>

        <EnquiryList />
      </div>
    </div>
  );
}
