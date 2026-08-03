/** Данные транспорта */
const transportData = {
    cars: [
        { 
            name: 'Toyota Camry', 
            price: '3 200 000', 
            year: '2020', 
            engine: '2.5 л', 
            mileage: '45 000 км',
            seller: 'Алексей Смирнов',
            agent: '@alex_car',
            contacts: '+7 999 111-22-33, @alex_auto',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop' 
        },
        { 
            name: 'BMW X5', 
            price: '6 500 000', 
            year: '2021', 
            engine: '3.0 л', 
            mileage: '28 000 км',
            seller: 'Екатерина Вольская',
            agent: '@kate_bmw',
            contacts: '+7 999 222-33-44, @kate_bmw',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop' 
        },
        { 
            name: 'Mercedes-Benz E-Class', 
            price: '4 800 000', 
            year: '2019', 
            engine: '2.0 л', 
            mileage: '62 000 км',
            seller: 'Дмитрий Орлов',
            agent: '@dima_benz',
            contacts: '+7 999 333-44-55, @dima_benz',
            status: 'sold',
            image: 'https://images.unsplash.com/photo-1565022536102-f7645b12d9bf?w=600&h=400&fit=crop' 
        },
        { 
            name: 'Audi A6', 
            price: '3 900 000', 
            year: '2020', 
            engine: '2.0 л', 
            mileage: '38 000 км',
            seller: 'Мария Коваль',
            agent: '@maria_audi',
            contacts: '+7 999 444-55-66, @maria_audi',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop' 
        },
        { 
            name: 'Lexus RX 450h', 
            price: '5 200 000', 
            year: '2021', 
            engine: '3.5 л (гибрид)', 
            mileage: '15 000 км',
            seller: 'Игорь Ветров',
            agent: '@igor_lexus',
            contacts: '+7 999 555-66-77, @igor_lexus',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop' 
        }
    ],
    trucks: [
        { 
            name: 'Volvo FH', 
            price: '8 200 000', 
            year: '2020', 
            capacity: '20 т', 
            mileage: '120 000 км',
            seller: 'Сергей Груздев',
            agent: '@sergey_truck',
            contacts: '+7 999 666-77-88, @sergey_truck',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop' 
        },
        { 
            name: 'Scania R-Series', 
            price: '7 500 000', 
            year: '2019', 
            capacity: '25 т', 
            mileage: '98 000 км',
            seller: 'Андрей Дальнобой',
            agent: '@andrey_scania',
            contacts: '+7 999 777-88-99, @andrey_scania',
            status: 'sold',
            image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=400&fit=crop' 
        },
        { 
            name: 'MAN TGX', 
            price: '6 800 000', 
            year: '2020', 
            capacity: '22 т', 
            mileage: '85 000 км',
            seller: 'Павел Манов',
            agent: '@pavel_man',
            contacts: '+7 999 888-99-00, @pavel_man',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop' 
        }
    ],
    motorcycles: [
        { 
            name: 'Harley-Davidson Fat Boy', 
            price: '2 100 000', 
            year: '2021', 
            engine: '1.8 л', 
            mileage: '8 000 км',
            seller: 'Артём Мотоциклов',
            agent: '@artem_hd',
            contacts: '+7 999 000-11-22, @artem_hd',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1589684785780-a1f31046f8f0?w=600&h=400&fit=crop' 
        },
        { 
            name: 'Ducati Panigale V4', 
            price: '2 800 000', 
            year: '2020', 
            engine: '1.1 л', 
            mileage: '5 000 км',
            seller: 'Константин Спорт',
            agent: '@kostya_ducati',
            contacts: '+7 999 111-22-33, @kostya_ducati',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop' 
        },
        { 
            name: 'Yamaha MT-09', 
            price: '1 200 000', 
            year: '2021', 
            engine: '0.9 л', 
            mileage: '12 000 км',
            seller: 'Денис Ямаха',
            agent: '@denis_yamaha',
            contacts: '+7 999 222-33-44, @denis_yamaha',
            status: 'sold',
            image: 'https://images.unsplash.com/photo-1591637333184-19aa0843b235?w=600&h=400&fit=crop' 
        }
    ],
    water: [
        { 
            name: 'Bayliner 285', 
            price: '4 500 000', 
            year: '2020', 
            length: '8.5 м', 
            engine: 'Mercury 300 л.с.',
            seller: 'Михаил Речной',
            agent: '@misha_boat',
            contacts: '+7 999 333-44-55, @misha_boat',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop' 
        },
        { 
            name: 'Sea Ray 260', 
            price: '3 800 000', 
            year: '2019', 
            length: '7.9 м', 
            engine: 'MerCruiser 260 л.с.',
            seller: 'Анна Морская',
            agent: '@anna_sea',
            contacts: '+7 999 444-55-66, @anna_sea',
            status: 'sold',
            image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&h=400&fit=crop' 
        },
        { 
            name: 'Yamaha AR195', 
            price: '2 900 000', 
            year: '2021', 
            length: '6.0 м', 
            engine: 'Yamaha 180 л.с.',
            seller: 'Олег Яхтсмен',
            agent: '@oleg_yamaha',
            contacts: '+7 999 555-66-77, @oleg_yamaha',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&h=400&fit=crop' 
        }
    ]
};
