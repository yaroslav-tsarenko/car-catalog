import React, {useState} from 'react';

const CreateCarForm = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const createCar = e => {
        e.preventDefault()
        console.log({name, price, image})
    }

    return (
        <form>
            <input
                placeholder='Name'
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <input
                placeholder='Price'
                onChange={e => setPrice(e.target.value)}
                value={price}/>
            <input
                placeholder='Image'
                onChange={e => setImage(e.target.value)}
                value={image}/>
            <button className="btn" onClick={e => createCar(e)}>Create</button>
        </form>
    );
};

export default CreateCarForm;