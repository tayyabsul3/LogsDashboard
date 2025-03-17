import React, { useState } from "react";

const NewTicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "Open",
    priority: "Low",
    date: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle form submission logic here
    console.log(formData);
    // Reset form or close modal here if needed
  };

  return (
    <div className="w-full p-6  bg-[rgba(11,20,55,1)] rounded-md">
      <div className="mb-4  flex gap-10 items-center ">
        <label
          htmlFor="name"
          className="block w-[50px] text-center  text-white mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-[350px] p-2 bg-[rgba(27,37,75,1)] text-white border border-[rgba(48,50,102,1)] rounded"
        />
      </div>

      <div className="mb-4 flex gap-10 items-center w-full ">
        <label
          htmlFor="status"
          className="blo ck text-white mb-1 w-[50px] text-center"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-[350px] p-2 bg-[rgba(27,37,75,1)] text-white border border-[rgba(48,50,102,1)] rounded"
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <div className="mb-4 flex gap-10  items-center ">
        <label
          htmlFor="priority"
          className="block w-[50px] text-center text-white mb-1 "
        >
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-[350px] p-2 bg-[rgba(27,37,75,1)] text-white border border-[rgba(48,50,102,1)] rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="mb-4 flex gap-10 items-center w-full justify-between ">
        <label
          htmlFor="date"
          className="block w-[50px] text-center  text-white mb-1"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-[350px] p-2  bg-[rgba(27,37,75,1)] text-white border border-[rgba(48,50,102,1)] rounded "
        />
      </div>

      <div className="mb-6 flex items-center gap-10 ">
        <label
          htmlFor="remarks"
          className="block w-[50px] text-center text-white mb-1"
        >
          Remarks
        </label>
        <textarea
          id="remarks"
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          className="w-[350px] p-2 bg-[rgba(27,37,75,1)] text-white border border-[rgba(48,50,102,1)] rounded"
          rows="4"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-5 py-2 bg-[rgba(48,50,102,1)] text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewTicketForm;
