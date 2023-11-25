import React from 'react';
import "./Car.css";

const Car = () => {
  const cars = [
    { id: 1, brand: 'Toyota', model: 'Camry', year: 2022 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2021 },
    { id: 3, brand: 'Ford', model: 'Mustang', year: 2023 },
  ];

  return (
    <div className='container mt-5'>
      <table className="table table-dark table-borderless border border-1 rounded">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Yıl</th>
            <th className='colBtn'><button className='text-center btnAdd'></button></th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr className='' key={car.id}>
              <td className='col-md-2'>{car.id}</td>
              <td className='col-md-2'>{car.brand}</td>
              <td className='col-md-2'>{car.model}</td>
              <td className='col-md-2'>{car.year}</td>
              <td className='col-md-2 colBtn'>
                <button className='btnUpdate'></button>
                <button className='btnDel'></button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Car;
