const testCategoriesData = [
    {
        id: 1,
        name: 'Laptops',
        parent: null,
        subcategories: [
            {
                id: 8,
                name: '2-in-1 Laptops',
            },
            {
                id: 10,
                name: 'Business Laptops',
            },
            {
                id: 11,
                name: 'Gaming Laptops',
            },
            {
                id: 9,
                name: 'Chromebooks',
            },
        ],
        image: [
            {
                id: 29,
                imageUrl: 'https://i.onthe.io/smngoz2oiovgh218t.fdff1781.jpg',
                imageAlt: 'Laptops',
            },
        ],
    },
    {
        id: 2,
        name: 'Desktop PCs',
        parent: null,
        subcategories: [
            {
                id: 12,
                name: 'Gaming Desktops',
            },
            {
                id: 15,
                name: 'Chromebox & Mini PCs',
            },
            {
                id: 14,
                name: 'All-in-One Computers',
            },
            {
                id: 13,
                name: 'Business Desktops',
            },
        ],
        image: [
            {
                id: 30,
                imageUrl: 'https://i.onthe.io/smngoz7hqok3412ub.ebcbc4b6.jpg',
                imageAlt: 'Desktop PCs',
            },
        ],
    },
    {
        id: 3,
        name: 'Monitors',
        parent: null,
        subcategories: [
            {
                id: 18,
                name: 'Touch Screen Monitors',
            },
            {
                id: 17,
                name: 'Gaming Monitors',
            },
            {
                id: 16,
                name: 'LCD / LED Monitors',
            },
        ],
        image: [],
    },
    {
        id: 4,
        name: 'Printers & Scanners',
        parent: null,
        subcategories: [
            {
                id: 21,
                name: 'Inkjet Printers',
            },
            {
                id: 19,
                name: '3D Printers',
            },
            {
                id: 20,
                name: 'Laser Printers',
            },
            {
                id: 22,
                name: 'Document Scanners',
            },
        ],
        image: [],
    },
    {
        id: 5,
        name: 'PC Parts',
        parent: null,
        subcategories: [
            {
                id: 25,
                name: 'Motherboards',
            },
            {
                id: 23,
                name: 'CPUs / Processors',
            },
            {
                id: 26,
                name: ' Storage',
            },
            {
                id: 27,
                name: 'PC Cooling',
            },
            {
                id: 24,
                name: 'Memory',
            },
        ],
        image: [],
    },
    {
        id: 6,
        name: 'All Other Products',
        parent: null,
        subcategories: [
            {
                id: 30,
                name: 'Microphones',
            },
            {
                id: 29,
                name: 'Mice',
            },
            {
                id: 28,
                name: 'Keyboards',
            },
        ],
        image: [],
    },
    {
        id: 7,
        name: 'Repairs',
        parent: null,
        subcategories: [
            {
                id: 31,
                name: 'Repaired Laptops',
            },
            {
                id: 32,
                name: 'Repaired PC',
            },
            {
                id: 33,
                name: 'Repaired Monitors',
            },
        ],
        image: [],
    },
    {
        id: 8,
        name: '2-in-1 Laptops',
        parent: {
            id: 1,
            name: 'Laptops',
        },
        subcategories: [
            {
                id: 34,
                name: 'MSI 2-in-1 Laptops',
            },
            {
                id: 37,
                name: 'HP 2-in-1 Laptops',
            },
        ],
        image: [],
    },
    {
        id: 9,
        name: 'Chromebooks',
        parent: {
            id: 1,
            name: 'Laptops',
        },
        subcategories: [
            {
                id: 40,
                name: 'HP Chromebooks',
            },
        ],
        image: [],
    },
    {
        id: 10,
        name: 'Business Laptops',
        parent: {
            id: 1,
            name: 'Laptops',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 11,
        name: 'Gaming Laptops',
        parent: {
            id: 1,
            name: 'Laptops',
        },
        subcategories: [
            {
                id: 43,
                name: 'Gigabyte Gaming Laptops',
            },
            {
                id: 41,
                name: 'MSI Gaming Laptops',
            },
        ],
        image: [],
    },
    {
        id: 12,
        name: 'Gaming Desktops',
        parent: {
            id: 2,
            name: 'Desktop PCs',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 13,
        name: 'Business Desktops',
        parent: {
            id: 2,
            name: 'Desktop PCs',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 14,
        name: 'All-in-One Computers',
        parent: {
            id: 2,
            name: 'Desktop PCs',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 15,
        name: 'Chromebox & Mini PCs',
        parent: {
            id: 2,
            name: 'Desktop PCs',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 16,
        name: 'LCD / LED Monitors',
        parent: {
            id: 3,
            name: 'Monitors',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 17,
        name: 'Gaming Monitors',
        parent: {
            id: 3,
            name: 'Monitors',
        },
        subcategories: [],
        image: [
            {
                id: 31,
                imageUrl: 'https://i.onthe.io/smngoz35dihjn4i1fg.97979570.jpg',
                imageAlt: 'Gaming Monitors',
            },
        ],
    },
    {
        id: 18,
        name: 'Touch Screen Monitors',
        parent: {
            id: 3,
            name: 'Monitors',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 19,
        name: '3D Printers',
        parent: {
            id: 4,
            name: 'Printers & Scanners',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 20,
        name: 'Laser Printers',
        parent: {
            id: 4,
            name: 'Printers & Scanners',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 21,
        name: 'Inkjet Printers',
        parent: {
            id: 4,
            name: 'Printers & Scanners',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 22,
        name: 'Document Scanners',
        parent: {
            id: 4,
            name: 'Printers & Scanners',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 23,
        name: 'CPUs / Processors',
        parent: {
            id: 5,
            name: 'PC Parts',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 24,
        name: 'Memory',
        parent: {
            id: 5,
            name: 'PC Parts',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 25,
        name: 'Motherboards',
        parent: {
            id: 5,
            name: 'PC Parts',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 26,
        name: ' Storage',
        parent: {
            id: 5,
            name: 'PC Parts',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 27,
        name: 'PC Cooling',
        parent: {
            id: 5,
            name: 'PC Parts',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 28,
        name: 'Keyboards',
        parent: {
            id: 6,
            name: 'All Other Products',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 29,
        name: 'Mice',
        parent: {
            id: 6,
            name: 'All Other Products',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 30,
        name: 'Microphones',
        parent: {
            id: 6,
            name: 'All Other Products',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 31,
        name: 'Repaired Laptops',
        parent: {
            id: 7,
            name: 'Repairs',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 32,
        name: 'Repaired PC',
        parent: {
            id: 31,
            name: 'Repaired Laptops',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 33,
        name: 'Repaired Monitors',
        parent: {
            id: 7,
            name: 'Repairs',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 34,
        name: 'MSI 2-in-1 Laptops',
        parent: {
            id: 8,
            name: '2-in-1 Laptops',
        },
        subcategories: [
            {
                id: 36,
                name: 'MSI Gaming',
            },
            {
                id: 35,
                name: 'MSI Summit',
            },
        ],
        image: [],
    },
    {
        id: 35,
        name: 'MSI Summit',
        parent: {
            id: 34,
            name: 'MSI 2-in-1 Laptops',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 36,
        name: 'MSI Gaming',
        parent: {
            id: 34,
            name: 'MSI 2-in-1 Laptops',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 37,
        name: 'HP 2-in-1 Laptops',
        parent: {
            id: 8,
            name: '2-in-1 Laptops',
        },
        subcategories: [
            {
                id: 38,
                name: 'HP Spectre',
            },
            {
                id: 39,
                name: 'HP Pavilion',
            },
        ],
        image: [],
    },
    {
        id: 38,
        name: 'HP Spectre',
        parent: {
            id: 37,
            name: 'HP 2-in-1 Laptops',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 39,
        name: 'HP Pavilion',
        parent: {
            id: 37,
            name: 'HP 2-in-1 Laptops',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 40,
        name: 'HP Chromebooks',
        parent: {
            id: 9,
            name: 'Chromebooks',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 41,
        name: 'MSI Gaming Laptops',
        parent: {
            id: 11,
            name: 'Gaming Laptops',
        },
        subcategories: [
            {
                id: 42,
                name: 'MSI GE Series',
            },
        ],
        image: [],
    },
    {
        id: 42,
        name: 'MSI GE Series',
        parent: {
            id: 41,
            name: 'MSI Gaming Laptops',
        },
        subcategories: [],
        image: [],
    },
    {
        id: 43,
        name: 'Gigabyte Gaming Laptops',
        parent: {
            id: 11,
            name: 'Gaming Laptops',
        },
        subcategories: [
            {
                id: 44,
                name: 'Gigabyte AERO',
            },
        ],
        image: [],
    },
    {
        id: 44,
        name: 'Gigabyte AERO',
        parent: {
            id: 43,
            name: 'Gigabyte Gaming Laptops',
        },
        subcategories: [],
        image: [],
    },
]

export default testCategoriesData
