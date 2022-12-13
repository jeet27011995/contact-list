import React, { useState, useEffect, useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { contactDetails } from "../../data";

const EditCon = () => {
  const parms = useParams();
  const navigate = useNavigate();
  let editInfo = JSON.parse(localStorage.getItem("edit"));

  let newContact = contactDetails;

  const [name, setName] = useState(editInfo.name);
  const [contact, setContact] = useState(editInfo.phone);
  console.log(contact);
  console.log("edit", editInfo);
  const [type, setType] = useState(editInfo.type);
  const [value, setValue] = useState(editInfo.isWhatsApp);
  const [url, setUrl] = useState(editInfo.profilePicture);
  const [id, setId] = useState(parms.id);

  var index = newContact
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  console.log(index, id);
  //-----------------------------------

  const handleSumbit = (e) => {
    e.preventDefault();
    let valuetrue = "";
    if (value === "true") {
      valuetrue = true;
    } else {
      valuetrue = false;
    }
    let a = contactDetails[index];

    a.name = name;
    a.phone = contact;
    a.type = type;
    a.isWhatsApp = valuetrue;
    a.profilePicture = url;

    localStorage.setItem("allcontact", JSON.stringify(newContact));
    localStorage.removeItem("edit");

    navigate("/");
  };
  //=========================================================================
  useEffect(() => {
    localStorage.setItem("allcontact", JSON.stringify(newContact));
  }, [newContact]);
  //=========================================================================
  return (
    <div>
      <h1 className="title">Edit Contact</h1>
      <form key={parms.id} onSubmit={(e) => handleSumbit(e)}>
        <div>
          <input
            type="text"
            value={name}
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            value={contact}
            type="text"
            placeholder={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label>Contact Type: </label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option></option>
            <option value="personal">personal</option>
            <option value="office">office</option>
          </select>
        </div>
        <div onChange={(e) => setValue(e.target.value)}>
          <label>IsWhatsApp: </label>
          <input type="radio" name="gender" value="true" /> True
          <input type="radio" value="false" name="gender" /> false
        </div>

        <div>
          <label>Profile Picture: </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit">update</button>
        <Link className="link" to="/">
          <button>Home</button>
        </Link>
      </form>
    </div>
  );
};

export default EditCon;
