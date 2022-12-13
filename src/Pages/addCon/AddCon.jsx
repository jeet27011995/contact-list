import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contactDetails } from "../../data";
import { v4 as uuid } from "uuid";
import "./add.css";

const AddCon = () => {
  const navigate = useNavigate();
  let newContact = contactDetails;
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  console.log(name, contact, type, value, url);
  const handleSumbit = (e) => {
    e.preventDefault();
    let valuetrue = "";
    if (value === "true") {
      valuetrue = true;
    } else {
      valuetrue = false;
    }
    const ids = uuid();
    let unique = ids.slice(0, 8);
    let addContact = {
      id: unique,
      name: name,
      phone: contact,
      type: type,
      isWhatsApp: valuetrue,
      profilePicture: url,
    };
    newContact.push(addContact);
    localStorage.setItem("allcontact", JSON.stringify(newContact));
    navigate("/");
  };
  return (
    <div>
      <h1 className="title">Add New Contact</h1>
      <form onSubmit={(e) => handleSumbit(e)}>
        <div>
          <input
            required
            type="text"
            placeholder="Enter contact Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter contact number"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label>Contact Type: </label>
          <select className="select" onChange={(e) => setType(e.target.value)}>
            <option></option>
            <option value="personal">personal</option>
            <option value="office">office</option>
          </select>
        </div>
        <div className="radio" onChange={(e) => setValue(e.target.value)}>
          <label>IsWhatsApp: </label>
          <input type="radio" name="gender" value="true" /> True
          <input type="radio" value="false" name="gender" /> false
        </div>

        <div>
          <label>Profile Picture: </label>
          <input
            type="url"
            placeholder="Profile url"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
      <Link className="link" to="/">
        <button>Home ?</button>
      </Link>
    </div>
  );
};

export default AddCon;
