import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

 function CarDetails() {

    const [car,setCar] = useState({
        brand:"",
        model:"",
        year:""
    })

    const {id} = useParams();

    useEffect(()=>{
        loadCar();
    },[])

    const loadCar = async()=> {
        const result = await axios.get(`http://localhost:8080/api/v1/cars/${id}`)
        setCar(result.data)
    }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 ">Araba Detayları</h2>
          <div className="card">
            <div className="card-header">
                Araba id Detayı:
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Marka: </b>
                        {car.brand}
                    </li>
                    <li className="list-group-item">
                        <b>Model : </b>
                        {car.model}
                    </li>
                    <li className="list-group-item">
                        <b>Yıl: </b>
                        {car.year}
                    </li>
                </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>Anasayfaya Dön</Link>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;