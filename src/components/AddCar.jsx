import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddCar = () => {

  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange =(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
  }

  const onSubmit =async(e)=>{
    e.preventDefault();
   await axios.post("http://localhost:8080/user",user) 
   navigate("/")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 ">Kullanıcı Ekle</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Adınız
            </label>
            <input
              type={"text"}
              name="name"
              className="form-control"
              placeholder="Adınızı Giriniz"
              value={name}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Kullanıc Adınız
            </label>
            <input
              type={"text"}
              name="username"
              className="form-control"
              placeholder="Kullanıcı Adınızı Giriniz"
              value={username}
              onChange={(e)=>onInputChange(e)}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email{" "}
            </label>
            <input
              type={"text"}
              name="email"
              className="form-control"
              placeholder="Email Adresinizi Giriniz"
              value={email}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Kaydet
          </button>
          <Link to="/" className="btn btn-outline-danger mx-2">
            İptal Et
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
}


export default AddCar;