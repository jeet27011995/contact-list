import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contactDetails } from "../../data";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [data] = useState(contactDetails);
  console.log(data);
  const handleDelete = (id) => {
    var index = contactDetails
      .map((e) => {
        return e.id;
      })
      .indexOf(id);

    contactDetails.splice(index, 1);
    localStorage.setItem("allcontact", JSON.stringify(contactDetails));
    navigate("/");
  };
  const handleEdit = (id, name, phone, type, isWhatsApp, profilePicture) => {
    const info = { id, name, phone, type, isWhatsApp, profilePicture };
    localStorage.setItem("edit", JSON.stringify(info));
  };
  return (
    <div>
      {data.length > 0 ? <h1 className="title">Contact List</h1> : ""}
      <div>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="card">
              <div className="left">
                <img alt="" className="profile" src={item.profilePicture} />
              </div>
              <div className="middle">
                <h2>Contact Name: {item.name}</h2>
                <h2>Phone: {item.phone}</h2>
                <h3>Type: {item.type}</h3>
                <h3>IsWhatsApp: {item.isWhatsApp ? "true" : "false"}</h3>
              </div>
              <div className="right">
                <Link to={`/edit-contact/${item.id}`}>
                  <button
                    className="button"
                    onClick={() =>
                      handleEdit(
                        item.id,
                        item.name,
                        item.phone,
                        item.type,
                        item.isWhatsApp,
                        item.profilePicture
                      )
                    }
                  >
                    Edit contact
                  </button>
                </Link>

                <button
                  className="button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete Contact
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="title">List is Empty</h1>
        )}
        <div className="add">
          <Link className="link" to="/add-contact">
            Add Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
