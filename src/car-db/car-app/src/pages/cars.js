const cars = [
    {
        id: 1,
        name: 'Car 1',
        price: 10000,
        description: 'This is car 1.',
    },
    {
        id: 2,
        name: 'Car 2',
        price: 20000,
        description: 'This is car 2.',
    },
    {
        id: 3,
        name: 'Car 3',
        price: 30000,
        description: 'This is car 3.',
    },
];

export default function handler(req, res) {
    res.status(200).json(cars);
}
