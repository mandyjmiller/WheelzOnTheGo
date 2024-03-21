import React from 'react'
import carsData from "../../assets/car_data";
import CarSearch from '../../components/CarSearch';
import "./view-all.css";

const ViewAll = () => {
  return (
    <div className='Home'><CarSearch data={carsData} type="Hatchback" location="London" /></div>
  )
}

export default ViewAll