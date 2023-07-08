import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'

const CarDetail = () => {

    const {id} = useParams()

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
            const data = await CarService.getAll()

            setCars(data)
        }

        fetchData()
    }, [id])
    return (
        <div>
            CarDetail {id}
        </div>
    );
};

export default CarDetail;