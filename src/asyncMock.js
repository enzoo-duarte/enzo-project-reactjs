const products = [
    {
        id: '1',
        title: 'Camiseta Pulau',
        price: '35 USD',
        category: 'indumentaria',
        description: 'Camiseta Pulau gris con estampado amarillo',
        image: '/img/camiseta.png',
    },
    {
        id: '2',
        title: 'Zapatillas Adidas',
        price: '95 USD',
        category: 'calzado',
        description: 'Zapatillas Adidas casuales rojas con franjas blancas',
        image: '/img/zapatillas.png',
    },
    {
        id: '3',
        title: 'Gorra Stance',
        price: '25 USD',
        category: 'accesorios',
        description: 'Gorra Stance marrón de visera con bordado en blanco',
        image: '/img/gorra.png',
    },
    {
        id: '4',
        title: 'Campera Volcom',
        price: '85 USD',
        category: 'indumentaria',
        description: 'Campera rompeviento Volcom anaranjada y verde con capucha',
        image: '/img/campera.png',
    },
    {
        id: '5',
        title: 'Buzo Vans',
        price: '60 USD',
        category: 'indumentaria',
        description: 'Buzo Vans gris con branding',
        image: '/img/buzo.png',
    },
    {
        id: '6',
        title: 'Ojotas Adidas',
        price: '50 USD',
        category: 'calzado',
        description: 'Ojotas Adidas grises con branding en su parte inferior',
        image: '/img/ojotas.png',
    },
    {
        id: '7',
        title: 'Riñonera Volcom',
        price: '30 USD',
        category: 'accesorios',
        description: 'Riñonera Volcom beige con diseños en blanco',
        image: '/img/rinonera.png',
    },
    {
        id: '8',
        title: 'Sombrero Vans',
        price: '35 USD',
        category: 'accesorios',
        description: 'Sombrero bucket Vans negro con branding',
        image: '/img/sombrero.png',
    },
    {
        id: '9',
        title: 'Botas UGG',
        price: '120 USD',
        category: 'calzado',
        description: 'Botas chelsea UGG de abrigo en gamuza marrón',
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
