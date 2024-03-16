import React from 'react'
import carsData from "../../assets/car_data";
import CarSearch from '../../components/CarSearch';

const ViewAll = () => {
  return (
    <div><CarSearch data={carsData} type="Hatchback" location="London" /></div>
  )
}

export default ViewAll