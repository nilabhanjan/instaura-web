import React, { useState } from "react";

export default function Qeury() {
  const [values, setValues] = useState({
    name: "",
    orderNo: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    forErrorsCheck();
  };

  const validate = (values) => {
    const errors = {};

    const messageLength = values.message.length;
    const phoneLength = values.phone.length;
    const nameLength = values.name.length;

    //regex check alphabet
    const alphabetRegExp = /[a-zA-Z]/;
    const numRegExp = /^[0-9]*$/;

    const alphabetName= alphabetRegExp.test(values.name);
    const number =numRegExp.test(values.phone);
    const alphabetMsg = alphabetRegExp.test(values.message);

    //for message
    if (messageLength === 0) {
      errors.message = "Message must not be empty";
    } else if (messageLength > 500) {
      errors.message = "Message is too long";
    }else if (!alphabetMsg) {
      errors.name = "Must contain alphabets";
    }

    //for name
    if (nameLength === 0) {
      errors.name = "Name Must not be empty";
    } else if (nameLength > 100) {
      errors.name = "Name is Too long";
    } else if (!alphabetName) {
      errors.name = "Must contain alphabets";
    }

    //for phone
    if (phoneLength !== 10) {
      errors.phone = "Enter a valid phone number";
    }else if (!number){
      errors.phone = "Phone must be a number";
    }
    return errors;
  };

  // function for post
  async function post(data) {
    let result = await fetch(
      "https://api.positrarx.com/api/v2.2/customer/contactUs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let fResult = await result.json();
    console.log("The output [Post]" + JSON.stringify(fResult));
    return fResult;
  }

  // calling the post function onclick of submit
  async function query() {
    let name = values.name;
    let orderNo = values.orderNo;
    let phone = values.phone;
    let message = values.message;
    // console.log(name, orderNo, phone, message);

    let item = {
      name: name,
      orderNo: orderNo,
      phone: phone,
      message: message,
    };
    const result = await post(item);
    localStorage.setItem("user-info", JSON.stringify(result));
  }

  const forErrorsCheck = (e) =>{
    
    setErrors(validate(values));
    if (Object.keys(errors).length === 0 ) {
      setIsSubmit(true);
     
    } 
  }

  
  // submisson handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    
    if (Object.keys(errors).length === 0 && isSubmit ) {
      query();
      setSuccess("Query Submitted SuccesFully");
    } else {
      setSuccess("Check all the inputs and Click Again");
      
    }
  };

  return (
    <>
    <form>
      <h1 className="text-[#FF0000] font-bold text-xl">SEND QUERY</h1>
      <div className="grid grid-cols-1">
        
        <input
          name="name"
          value={values.name ?? ""}
          maxLength={50}
          onChange={handleChange}
          className="mt-2 p-3 h-10 md:w-96 rounded border border-black"
          placeholder="Name*"
          type="text"
        ></input>
        <p className="text-xs text-red-600">{errors.name}</p>
        <input
          name="orderNo"
          value={values.orderNo ?? ""}
          maxLength={10}
          onChange={handleChange}
          className="mt-2 p-3 h-10 md:w-96 rounded border border-black"
          placeholder="Order Number"
          type="text"
        ></input>

        <input
          name="phone"
          value={values.phone ?? ""}
          maxLength={10}
          onChange={handleChange}
          className="mt-2 p-3 h-10 md:w-96 rounded border border-black"
          placeholder="Contact*"
          type="number"
        ></input>
        <p className="text-xs text-red-600">{errors.phone}</p>
        <textarea
          name="message"
          maxLength={500}
          value={values.message ?? ""}
          onChange={handleChange}
          className="mt-2 p-3 h-20 md:w-96 rounded border border-black"
          placeholder="Query*"
          type="text"
        ></textarea>
        <p className="text-xs text-red-600">{errors.message}</p>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#FF0000] text-white py-3 px-3 mt-6 rounded"
      >
        Submit
      </button>
     
      
      <p className="text-xs font-semibold m-1 text-gray-600">{success}</p>
      </form>
    </>
  );
}
