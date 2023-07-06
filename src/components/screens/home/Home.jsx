import styles from './Home.module.css'
import CarItem from "./car-item/CarItem.jsx";
import {cars} from './cars.data.js'
import {useMemo, useState} from "react";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";

const Home = () => {

    /*const [filter, setFilter] = useState('');

    const filteredCars = useMemo(
        () => cars.filter(car => car.price > 20000), []
    )
*/

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm/>
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