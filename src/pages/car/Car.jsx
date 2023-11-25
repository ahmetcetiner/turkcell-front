import React from 'react';

const Car = () => {
  const cars = [
    { id: 1, brand: 'Toyota', model: 'Camry', year: 2022 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2021 },
    { id: 3, brand: 'Ford', model: 'Mustang', year: 2023 },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Marka</th>
          <th>Model</th>
          <th>Yıl</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>
                <button className='btnEkle'>Ekle</button>
                <button className='btnSil'>Sil</button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Car;
