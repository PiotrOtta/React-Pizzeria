
const pizzas = [
    {
        id: 1,
        name: 'Margherita',
        avaiableSizes: [
            {id: 1, name: 'small 24cm', price: 13},
            {id: 2, name: 'medium 32cm', price: 19},
            {id: 3, name: 'large 42cm', price: 22}
        ],
        photo: '/images/Margherita.png',
        addons: [1,2,3]
    },
    {
        id: 2,
        name: 'Capriciosa',
        avaiableSizes: [
            {id: 1, name: 'small 24cm', price: 17},
            {id: 2, name: 'medium 32cm', price: 25},
            {id: 3, name: 'large 42cm', price: 30}
        ],
        photo: '/images/Capriciosa.png',
        addons: [4,5,6]
    },
    {
        id: 3,
        name: 'Campione',
        avaiableSizes: [
            {id: 1, name: 'small 24cm', price: 21},
            {id: 2, name: 'medium 32cm', price: 31},
            {id: 3, name: 'large 42cm', price: 36}
        ],
        photo: '/images/Campione.png',
        addons: [7,8,9]
    },
    {
        id: 4,
        name: 'Decoro',
        avaiableSizes: [
            {id: 1, name: 'small 24cm', price: 20},
            {id: 2, name: 'medium 32cm', price: 29},
            {id: 3, name: 'large 42cm', price: 35}
        ],
        photo: '/images/Decoro.png',
        addons: [10,11]
    },
    {
        id: 5,
        name: 'Piacere',
        avaiableSizes: [
            {id: 1, name: 'small 24cm', price: 19},
            {id: 2, name: 'medium 32cm', price: 28},
            {id: 3, name: 'large 42cm', price: 33}
        ],
        photo: '/images/Piacere.png',
        addons: [1,2,3,5,6]
    },
    {
        id: 6,
        name: 'Inverno',
        avaiableSizes: [
            {id: 1, name: 'small 24cm', price: 18},
            {id: 2, name: 'medium 32cm', price: 26},
            {id: 3, name: 'large 42cm', price: 31}
        ],
        photo: '/images/Inverno.png',
        addons: [11,9,8,3]
    }
]

export default pizzas
