import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCar() {

  let navigate = useNavigate()

  const {id} = useParams()

  const [car, setCar] = useState({
    brand:"",
    model:"",
    year:""
  });

  const { brand, model, year } = car;

  const onInputChange =(e)=>{
      setCar({...car,[e.target.brand]:e.target.value})
  }

  useEffect(()=>{
    loadCar()
  },[])

  const onSubmit =async(e)=>{
    e.preventDefault();
   await axios.put(`http://localhost:8082/api/v1/cars/${id}`,car) 
   navigate("/")
  }

  const loadCar = async ()=>{
    const result = await axios.get(`http://localhost:8082/api/v1/getByCarId${id}`)
    setUser(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 ">Arabayı Düzenle</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Brand" className="form-label">
              Marka
            </label>
            <input
              type={"text"}
              name="name"
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
              placeholder="Yıl Giriniz"
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

export default EditCar;