const products = [
    {
        id: '1',
        title: 'Camiseta Pulau',
        price: '35',
        category: 'indumentaria',
        description: 'Camiseta color gris Pulau con branding PULAU',
        image: '/img/camiseta.png',
    },
    {
        id: '2',
        title: 'Zapatillas Adidas',
        price: '95',
        category: 'calzado',
        description: 'Zapatillas Adidas casuales rojas con franjas blancas',
        image: '/img/zapatillas.png',
    },
    {
        id: '3',
        title: 'Gorra Stance',
        price: '25',
        category: 'accesorios',
        description: 'Gorra de visera marrón con dibujo en blanco',
        image: '/img/gorra.png',
    },
    {
        id: '4',
        title: 'Campera Volcom',
        price: '85',
        category: 'indumentaria',
        description: 'Campera rompeviento con capucha anaranjado con verde',
        image: '/img/campera.png',
    },
    {
        id: '5',
        title: 'Buzo Vans',
        price: '60',
        category: 'indumentaria',
        description: 'Buzo gris con logo VANS',
        image: '/img/buzo.png',
    },
    {
        id: '6',
        title: 'Ojotas Adidas',
        price: '50',
        category: 'calzado',
        description: 'Ojotas negras con branding pequeño blanco en la parte inferior',
        image: '/img/ojotas.png',
    },
    {
        id: '7',
        title: 'Riñonera Volcom',
        price: '30',
        category: 'accesorios',
        description: 'Riñonera beige con diseños en blanco',
        image: '/img/rinonera.png',
    },
    {
        id: '8',
        title: 'Sombrero Vans',
        price: '35',
        category: 'accesorios',
        description: 'Sombrero color negro con logo VANS',
        image: '/img/sombrero.png',
    },
    {
        id: '9',
        title: 'Botas UGG',
        price: '120',
        category: 'calzado',
        description: 'Botas chelsea de abrigo  en gamuza marrón',
        image: '/img/botas.png',
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});
};

export const getCategory = (category) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter((product) => product.category === category));
    }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find((product) => product.id === id));
    }, 2000);
    });
};
