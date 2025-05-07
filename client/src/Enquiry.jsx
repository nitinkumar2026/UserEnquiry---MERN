import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Enquiry() {
  return (
    <div>
      <h1 className="text-[40px] text-center py-6 font-bold">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto]">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>
          <form action="">
            <div className="py-3">
              <label htmlFor="name" value="Your Name"></label>
              <TextInput
                type="text"
                placeholder="Enter Your Name"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
