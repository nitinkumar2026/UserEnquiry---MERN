import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export function EnquiryList({ data, getAllenquiry, Swal, setFormData }) {
  let deleteRow = (delid) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8020/web/api/enquiry/delete/${delid}`)
          .then(() => {
            toast.success("Enquiry Deleted Successfully!");
            getAllenquiry(); // Call the function to refresh the enquiry list after deletion
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

    //alert("Enquiry Deleted Successfully!");
    //alert(delid);
  };

  let editRow = (editid) => {
    axios
      .get(`http://localhost:8020/web/api/enquiry/single/${editid}`)
      .then((res) => {
        let data = res.data;
        setFormData(data.enquiry); // Set the form data with the enquiry details for editing. You need to implement setFormData function in the parent component.
        //
        //console.log(data);
        //console.log(data.enquiry);
      });
    //alert(editid);
  };

  return (
    <div className="bg-gray-200 p-4">
      <ToastContainer />
      <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell>Sr. No.</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>Edit</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
          </TableHead>

          <TableBody className="divide-y">
            {data.length >= 1 ? (
              data.map((item, index) => {
                return (
                  <TableRow
                    key={index}
                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {index + 1}
                    </TableCell>

                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </TableCell>

                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.email}
                    </TableCell>

                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.phone}
                    </TableCell>

                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.message}
                    </TableCell>

                    <TableCell>
                      <button
                        onClick={() => deleteRow(item._id)}
                        className="font-medium bg-red-600 text-white px-4 py-1 rounded-md hover:underline "
                      >
                        Delete
                      </button>
                    </TableCell>

                    <TableCell>
                      <button
                        onClick={() => editRow(item._id)}
                        className="font-medium bg-cyan-600 text-white px-4 py-1 rounded-md hover:underline"
                      >
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <TableCell colSpan={7} className="text-center">
                  No Enquiry Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
