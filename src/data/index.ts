export type Category = {
    id: string;
    title: string;
    description: string;
    image: string;
    products: Product[];
};

export type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
};

export default [
    {
        id: '1',
        title: 'Sıcak Kahveler',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '1-1',
                title: 'Espresso',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 95
            },
            {
                id: '1-2',
                title: 'Double Espresso',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 115
            },
            {
                id: '1-3',
                title: 'Americano',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 125
            },
            {
                id: '1-4',
                title: 'Espresso Macchiato',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 125
            },
            {
                id: '1-5',
                title: 'Türk Kahvesi',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 95
            },
            {
                id: '1-6',
                title: 'Coffee Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 130
            },
            {
                id: '1-7',
                title: 'Filter Coffee',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 120
            },
            {
                id: '1-8',
                title: 'Double Türk Kahvesi',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 115
            },
            {
                id: '1-9',
                title: 'Cappuccino',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 130
            },
            {
                id: '1-10',
                title: 'Damla Sakızlı Türk Kahvesi',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 110
            },
            {
                id: '1-11',
                title: 'Caramel Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 140
            },
            {
                id: '1-12',
                title: 'Vanilla Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 140
            },
            {
                id: '1-13',
                title: 'Pumpkin Spice Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 145
            },
            {
                id: '1-14',
                title: 'Mocha',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 140
            },
            {
                id: '1-15',
                title: 'White Chocolate Mocha',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 140
            },
            {
                id: '1-16',
                title: 'Chai Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 135
            },
            {
                id: '1-17',
                title: 'Flat White',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 145
            },
            {
                id: '1-18',
                title: 'Noir Blanc Mocha',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 145
            },
            {
                id: '1-19',
                title: 'Ballı Tarçınlı Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 145
            },
            {
                id: '1-20',
                title: 'Hazelnut Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 140
            },
            {
                id: '1-21',
                title: 'Snicker Mocha',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 145
            },
            {
                id: '1-22',
                title: 'Cortado',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 125
            }
        ]
    },
    {
        id: '2',
        title: 'Soğuk Kahveler',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '2-1',
                title: 'Iced Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 140
            },
            {
                id: '2-2',
                title: 'Iced Caramel Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '2-3',
                title: 'Iced Vanilla Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '2-4',
                title: 'Iced Mocha',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '2-5',
                title: 'Iced White Mocha',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '2-6',
                title: 'Iced Americano',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 135
            },
            {
                id: '2-7',
                title: 'Iced Filter Coffee',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 130
            },
            {
                id: '2-8',
                title: 'Iced Hazelnut Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '2-9',
                title: 'Iced Snickers Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 155
            },
            {
                id: '2-10',
                title: 'Cold Brew',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '2-11',
                title: 'Iced Noir Blanc Mocha',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 155
            },
            {
                id: '2-12',
                title: 'Iced Filter Coffee',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 130
            }
        ]
    },
    {
        id: '3',
        title: 'Sıcak Çaylar',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '3-1',
                title: 'Fincan Çay',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 65
            },
            {
                id: '3-2',
                title: 'Yeşil Çay',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '3-3',
                title: 'Bardak Çay',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 40
            },
            {
                id: '3-4',
                title: 'Ihlamur',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '3-5',
                title: 'Adaçayı',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '3-6',
                title: 'Kuşburnu',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '3-7',
                title: 'Kış Çayı',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            }
        ]
    },
    {
        id: '4',
        title: 'Soğuk İçecekler',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '4-1',
                title: 'Limonata',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '4-2',
                title: 'Berry Hibiscus',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '4-3',
                title: 'Karpuzlu Frozen',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '4-4',
                title: 'Mangolu Frozen',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '4-5',
                title: 'Çilekli Milkshake',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '4-6',
                title: 'Çikolata Milkshake',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '4-7',
                title: 'Çilekli Limonata',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 165
            },
            {
                id: '4-8',
                title: 'Naneli Limonata',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 165
            },
            {
                id: '4-9',
                title: 'Portakal Suyu',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '4-10',
                title: 'Cool Lime',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '4-11',
                title: 'Homemade Mango Iced Tea',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 165
            },
            {
                id: '4-12',
                title: 'Vanilya Milkshake',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '4-13',
                title: 'Homemade Yeşil Elmalı Iced Tea',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '4-14',
                title: 'Çilekli Frozen',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '4-15',
                title: 'Homemade Karpuz Iced Tea',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '4-16',
                title: 'Yeşil Elma Frozen',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            }
        ]
    },
    {
        id: '5',
        title: 'Soft İçecekler',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '5-1',
                title: 'Cappy Şeftali Suyu',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 80
            },
            {
                id: '5-2',
                title: 'Cappy Karışık Meyve Suyu',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 80
            },
            {
                id: '5-3',
                title: 'Cappy Vişneli Meyve Suyu',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 80
            },
            {
                id: '5-4',
                title: 'Soda',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 85
            },
            {
                id: '5-5',
                title: 'Su',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 40
            }
        ]
    },
    {
        id: '6',
        title: 'Fırından Tatlı Lezzetler',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '6-1',
                title: 'Beyaz Çikolatalı Brownie',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 210
            },
            {
                id: '6-2',
                title: 'Dondurmalı Beyaz Çikolatalı Brownie',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 235
            },
            {
                id: '6-3',
                title: 'Limonlu Cheesecake',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 190
            },
            {
                id: '6-4',
                title: 'Frambuazlı Cheesecake',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 190
            },
            {
                id: '6-5',
                title: 'Çikolatalı Cheesecake',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 195
            },
            {
                id: '6-6',
                title: 'Tiramisu',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 190
            },
            {
                id: '6-7',
                title: 'Cookie',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 95
            },
            {
                id: '6-8',
                title: 'Orman Meyveli Sebastian Cheesecake',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 210
            },
            {
                id: '6-9',
                title: 'Çilekli Magnolia',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 155
            }
        ]
    },
    {
        id: '7',
        title: 'Atıştırmalıklar',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '7-1',
                title: 'Ege Tost',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 185
            },
            {
                id: '7-2',
                title: 'Peynirli Börek',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 95
            },
            {
                id: '7-3',
                title: 'Ispanaklı Börek',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 95
            },
            {
                id: '7-4',
                title: 'Patatesli Börek',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 95
            }
        ]
    },
    {
        id: '8',
        title: 'Kruvasan Çeşitleri',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '8-1',
                title: 'Sade Kruvasan',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 95
            },
            {
                id: '8-2',
                title: 'Hindi Füme Kruvasan',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 185
            },
            {
                id: '8-3',
                title: 'Kaşarlı Kruvasan',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 115
            },
            {
                id: '8-4',
                title: 'Üç Peynirli Kruvasan',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            },
            {
                id: '8-5',
                title: 'Klasik Kruvasan',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 165
            },
            {
                id: '8-6',
                title: 'Tatlı Kruvasan',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 185
            }
        ]
    },
    {
        id: '9',
        title: 'Ekstralar',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '9-1',
                title: 'Ekstra Shot',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 40
            },
            {
                id: '9-2',
                title: 'Ekstra Şurup',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 25
            },
            {
                id: '9-3',
                title: 'İlave Süt',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 20
            }
        ]
    },
    {
        id: '10',
        title: 'Matchalar',
        description: '',
        image: 'https://placehold.co/80x80/png',
        products: [
            {
                id: '10-1',
                title: 'Matcha Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 150
            },
            {
                id: '10-2',
                title: 'Ice Matcha Latte',
                description: '',
                image: 'https://placehold.co/80x80/png',
                price: 160
            }
        ]
    }
] as Category[];
