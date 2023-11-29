import "./Car.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const Car = () => {
//   const cars = [
//     { id: 1, brand: 'Toyota', model: 'Camry', year: 2022 },
//     { id: 2, brand: 'Honda', model: 'Civic', year: 2021 },
//     { id: 3, brand: 'Ford', model: 'Mustang', year: 2023 },
//   ];

//   return (
//     <div className='container mt-5'>
//       <table className="table table-dark table-borderless border border-1 rounded">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Marka</th>
//             <th>Model</th>
//             <th>Yıl</th>
//             <th className='colBtn'><button className='text-center btnAdd'></button></th>
//           </tr>
//         </thead>
//         <tbody>
//           {cars.map((car) => (
//             <tr className='' key={car.id}>
//               <td className='col-md-2'>{car.id}</td>
//               <td className='col-md-2'>{car.brand}</td>
//               <td className='col-md-2'>{car.model}</td>
//               <td className='col-md-2'>{car.year}</td>
//               <td className='col-md-2 colBtn'>
//                 <button className='btnUpdate'></button>
//                 <button className='btnDel'></button>
//               </td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


const [cars, setCars] = useState([]);
const {id} = useParams()


useEffect(() => {
  loadCars();
},[]);

const loadCars = async () => {
  const result = await axios.get("http://localhost:8082/api/v1/cars");
  setUsers(result.data);
};

const deleteCar = async (id)=>{
  await axios.delete(`http://localhost:8080/api/v1/cars/${id}`)
  loadCars()
}

return (
  <div className="container">
    <div className="py-4">
      <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marka</th>
            <th scope="col">Model</th>
            <th scope="col">Yıl</th>
            <th scope="col">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {
              cars.map((car,index)=>(
                  <tr>
                  <th scope="row" key={index}>{index +1}</th>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.date}</td>
                  <td>
                      <Link to={`/viewcar/${car.id}`} className="btn btn-primary mx-2">Görüntüle</Link>
                      <Link to={`/editcar/${car.id}`} className="btn btn-outline-primary mx-2">Güncelle</Link>
                      <button onClick={()=>deleteCar(car.id)} className="btn btn-danger mx-2">Sil</button>
                  </td>
                </tr>
               
              ))
          }
     
        </tbody>
      </table>
    </div>
  </div>
);
}

export default Car;
