import styles from './Home.module.css'
import CarItem from "./car-item/CarItem.jsx";
import {cars as carsData} from './cars.data.js'
import {useEffect, useMemo, useState} from "react";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";

const Home = () => {

const [cars, setCars] = useState(carsData)

    useEffect(() => {
        console.log('hey')
    }, [cars])

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars}/>
            <div>
                {cars.length ? (
                    cars.map(car => <CarItem key={car.id} car={car}/>)
                ) : (
                    <p>There no cars</p>
                )}
            </div>
        </div>
    );
};

export default Home;