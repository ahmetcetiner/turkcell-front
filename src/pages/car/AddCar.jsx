import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddCar() {

  let navigate = useNavigate()

  const [car, setCar] = useState({
    brand:"",
    model:"",
    year:""
  });

  const { brand, model, year } = car;

  const onInputChange =(e)=>{
      setCar({...car,[e.target.brand]:e.target.value})
  }

  const onSubmit =async(e)=>{
    e.preventDefault();
   await axios.post("http://localhost:8080/api/v1/cars",car) 
   navigate("/")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 ">Araba Ekle</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Brand" className="form-label">
              Marka
            </label>
            <input
              type={"text"}
              name="brand"
              className="form-control"
              placeholder="Marka Giriniz"
              value={brand}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Model" className="form-label">
              Model 
            </label>
            <input
              type={"text"}
              name="model"
              className="form-control"
              placeholder="Model Giriniz"
              value={model}
              onChange={(e)=>onInputChange(e)}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Yıl{" "}
            </label>
            <input
              type={"text"}
              name="year"
              className="form-control"
              placeholder="Yılı Giriniz"
              value={year}
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