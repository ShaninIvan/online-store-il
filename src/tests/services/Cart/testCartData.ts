const product1 = {
    id: 14,
    name: '2021 Newest HP Pavilion x360 2-in-1 Laptop',
    price: 0,
    inStock: 1,
    code: 'SKU 1920803',
    description:
        '2021 Newest HP Pavilion x360 2-in-1 Laptop, 14" HD Touchscreen, Intel Core i3-1115G4 Dual-Core Processor, 16GB DDR4 Memory, 512GB PCIe NVMe SSD, Wi-Fi, Bluetooth, Windows 10 Home, Silver',
    color: 'silver',
    image: [
        {
            id: 19,
            imageUrl: 'https://i.onthe.io/smngoz6haq436hdb8.af9f42db.jpg',
            imageAlt: '2021 Newest HP Pavilion x360 2-in-1 Laptop',
        },
    ],
    specs: [
        {
            id: 39,
            name: 'CPU',
            value: 'N/A',
        },
        {
            id: 40,
            name: 'CPU',
            value: 'N/A',
        },
        {
            id: 41,
            name: 'CPU',
            value: 'N/A',
        },
    ],
    details: [
        {
            id: 76,
            detail: 'Memory is 16GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once.',
        },
        {
            id: 77,
            detail: 'Hard Drive is 512GB PCIe NVMe M.2 Solid State Drive which allows to fast bootup, data transfer',
        },
        {
            id: 78,
            detail: 'Intel Core i3-1115G4 2-Core Processor 3.0GHz Dual-Core Processor up to 4.1GHz',
        },
        {
            id: 79,
            detail: 'Intel UHD Graphics',
        },
        {
            id: 80,
            detail: '14" HD LCD Touchscreen (1366 x 768) Display',
        },
        {
            id: 81,
            detail: '1 x USB 3.0 Type-C, 2 x USB 3.0 Type-A, 1 x HDMI, 1 x Combination Audio Jack, 1 x Media Card Reader',
        },
        {
            id: 82,
            detail: 'Wireless-AC Wi-Fi 5 + Bluetooth 5 Combo',
        },
        {
            id: 83,
            detail: 'Windows 10 Home 64-bit',
        },
    ],
    rating: {
        id: 13,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        reviews: 0,
    },
    category: {
        id: 39,
        name: 'HP Pavilion',
    },
    brand: {
        id: 3,
        name: 'Hewlett-Packard',
    },
}

const product2 = {
    id: 15,
    name: 'HP - Spectre x360 2-in-1 13.5"',
    price: 2065,
    inStock: 6,
    code: 'SKU 48646879',
    description:
        'HP - Spectre x360 2-in-1 13.5" 3K2K OLED Touchscreen Laptop - Intel Evo Core i7 - 16GB Memory - 1TB SSD + 32GB Intel Optane - Nightfall Black Tablet Notebook 14-ea1023dx',
    color: 'black',
    image: [
        {
            id: 22,
            imageUrl: 'https://i.onthe.io/smngoz4hj4egou8ue.91d5f7a1.jpg',
            imageAlt: 'HP - Spectre x360 2-in-1 13.5"',
        },
    ],
    specs: [
        {
            id: 50,
            name: 'CPU',
            value: 'N/A',
        },
        {
            id: 49,
            name: 'CPU',
            value: 'N/A',
        },
        {
            id: 48,
            name: 'CPU',
            value: 'N/A',
        },
    ],
    details: [],
    rating: {
        id: 14,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        reviews: 0,
    },
    category: {
        id: 38,
        name: 'HP Spectre',
    },
    brand: {
        id: 3,
        name: 'Hewlett-Packard',
    },
}

const orders = [
    {
        product: {
            id: 14,
            name: '2021 Newest HP Pavilion x360 2-in-1 Laptop',
            image: [
                {
                    id: 19,
                    imageUrl: 'https://i.onthe.io/smngoz6haq436hdb8.af9f42db.jpg',
                    imageAlt: '2021 Newest HP Pavilion x360 2-in-1 Laptop',
                },
            ],
            price: 0,
        },
        count: 1,
    },
]

const testCartData = { product1, product2, orders }

export default testCartData
