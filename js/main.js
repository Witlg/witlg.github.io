/**
 * Kitsune Estate — Main JavaScript
 * Автор: Kitsune Estate Team
 * Версия: 1.1
 */

// ========================================
// DATA
// ========================================

/** Данные домов */
const housesData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
        price: '12 500 000',
        location: 'г.Эдово',
        seller: 'Продевец: Екатерина Волкова',
        agent: 'Агент: @kate_estate',
        contacts: 'Discord: @kate_house',
        status: 'sale'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
        price: '9 200 000',
        location: 'г.Эдово',
        seller: 'Продевец: Дмитрий Петров',
        agent: 'Агент: @dima_pro',
        contacts: 'Discord: @dima_realtor',
        status: 'sale'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop',
        price: '18 700 000',
        location: 'г.Эдово',
        seller: 'Анна Морозова',
        agent: '@ann_moroz',
        contacts: '+7 999 333-44-55, @anna_home',
        status: 'sale'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
        price: '22 000 000',
        location: 'г.Эдово',
        seller: 'Мария Коваль',
        agent: '@maria_agency',
        contacts: '+7 999 555-66-77, @maria_estate',
        status: 'sale'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
        price: '7 800 000',
        location: 'г.Эдово',
        seller: 'Алексей Иванов',
        agent: '@alex_house',
        contacts: '@alex_realtor',
        status: 'sale'
    }
];

/** Данные гаражей */
const garagesData = [
    {
        id: 1,
        name: 'Гараж №1',
        price: '850 000',
        area: '18 м²',
        location: 'ул. Промышленная, 5',
        seller: 'Михаил Соколов',
        agent: '@misha_garage',
        image: 'https://images.unsplash.com/photo-1573380588172-a8f83ef2f2e1?w=600&h=400&fit=crop',
        status: 'sale'
    },
    {
        id: 2,
        name: 'Гараж №2',
        price: '920 000',
        area: '20 м²',
        location: 'ул. Заводская, 12',
        seller: 'Андрей Кузнецов',
        agent: '@andrey_garage',
        image: 'https://images.unsplash.com/photo-1534073737927-85f1eeb1db3b?w=600&h=400&fit=crop',
        status: 'sale'
    },
    {
        id: 3,
        name: 'Гараж №3',
        price: '780 000',
        area: '16 м²',
        location: 'пер. Гаражный, 3',
        seller: 'Ольга Смирнова',
        agent: '@olga_garage',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop',
        status: 'sold'
    },
    {
        id: 4,
        name: 'Гараж с мастерской',
        price: '1 200 000',
        area: '24 м²',
        location: 'ул. Ремонтная, 7',
        seller: 'Денис Зайцев',
        agent: '@denis_garage',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop',
        status: 'sale'
    },
    {
        id: 5,
        name: 'Паркинг',
        price: '2 500 000',
        area: '45 м²',
        location: 'ул. Центральная, 10',
        seller: 'Елена Власова',
        agent: '@elena_garage',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
        status: 'sold'
    }
];

/** Данные транспорта (обновлены с полной информацией) */
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

// ========================================
// STATE
// ========================================

/** Текущие фильтры */
const filters = {
    houses: 'all',
    garages: 'all'
};

// ========================================
// DOM REFS
// ========================================

const housesGrid = document.getElementById('housesGrid');
const garagesGrid = document.getElementById('garagesGrid');
const houseCount = document.getElementById('houseCount');
const garageCount = document.getElementById('garageCount');

// ========================================
// RENDER FUNCTIONS
// ========================================

/**
 * Создаёт HTML для статус-тега
 */
function createStatusTag(status) {
    const statusMap = {
        'sale': { class: 'sale', text: 'В продаже' },
        'sold': { class: 'sold', text: 'Продано' }
    };
    const s = statusMap[status] || statusMap.sale;
    return `<span class="house-status ${s.class}">${s.text}</span>`;
}

/**
 * Рендерит карточки домов
 */
function renderHouses() {
    const filtered = housesData.filter(h => filters.houses === 'all' || h.status === filters.houses);
    houseCount.textContent = filtered.length;

    if (filtered.length === 0) {
        housesGrid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px; background:rgba(26,15,46,0.6); border-radius:24px; border:1px solid rgba(180,80,200,0.15);">
                <i class="fas fa-search" style="font-size:48px; color:#4a3a5a;"></i>
                <p style="margin-top:16px; font-size:18px; color:#8a7a9a;">Нет домов с таким статусом</p>
            </div>
        `;
        return;
    }

    let html = '';
    filtered.forEach((house, index) => {
        const contacts = house.contacts.split(',').map(c => c.trim()).filter(c => c.length > 0);
        html += `
            <div class="house-card" style="animation-delay: ${index * 0.07}s;">
                <div class="house-image" style="background-image: url('${house.image}');">
                    ${createStatusTag(house.status)}
                </div>
                <div class="house-info">
                    <div class="house-price">${house.price} <small>₽</small></div>
                    <div class="house-location"><i class="fas fa-map-pin"></i> ${house.location}</div>
                    <div class="seller-row">
                        <span class="seller-name"><i class="fas fa-user"></i> ${house.seller}</span>
                        <span class="agent-nick"><i class="fas fa-id-badge"></i> ${house.agent}</span>
                    </div>
                    <div class="contacts">
                        <i class="fas fa-phone-alt"></i>
                        ${contacts.map(c => `<span class="contact-item"><i class="fas fa-circle"></i> ${c}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    housesGrid.innerHTML = html;
}

/**
 * Рендерит карточки гаражей
 */
function renderGarages() {
    const filtered = garagesData.filter(g => filters.garages === 'all' || g.status === filters.garages);
    garageCount.textContent = filtered.length;

    if (filtered.length === 0) {
        garagesGrid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px; background:rgba(26,15,46,0.6); border-radius:24px; border:1px solid rgba(180,80,200,0.15);">
                <i class="fas fa-search" style="font-size:48px; color:#4a3a5a;"></i>
                <p style="margin-top:16px; font-size:18px; color:#8a7a9a;">Нет гаражей с таким статусом</p>
            </div>
        `;
        return;
    }

    let html = '';
    filtered.forEach((garage, index) => {
        html += `
            <div class="house-card" style="animation-delay: ${index * 0.07}s;">
                <div class="house-image" style="background-image: url('${garage.image}');">
                    ${createStatusTag(garage.status)}
                </div>
                <div class="house-info">
                    <div class="house-price">${garage.price} <small>₽</small></div>
                    <div class="house-location"><i class="fas fa-ruler-combined"></i> ${garage.area} · <i class="fas fa-map-pin"></i> ${garage.location}</div>
                    <div class="seller-row">
                        <span class="seller-name"><i class="fas fa-warehouse"></i> ${garage.name}</span>
                        <span class="agent-nick"><i class="fas fa-id-badge"></i> ${garage.agent}</span>
                    </div>
                    <div class="contacts">
                        <i class="fas fa-user"></i>
                        <span class="contact-item"><i class="fas fa-circle"></i> ${garage.seller}</span>
                    </div>
                </div>
            </div>
        `;
    });

    garagesGrid.innerHTML = html;
}

// ========================================
// TRANSPORT FUNCTIONS
// ========================================

/**
 * Показывает подкаталог с выбранной категорией транспорта
 */
window.showTransportCategory = function(category) {
    const categories = document.getElementById('transportCategories');
    const subCatalog = document.getElementById('transportSubCatalog');
    const grid = document.getElementById('transportCardsGrid');

    categories.style.display = 'none';
    subCatalog.classList.add('active');

    const items = transportData[category] || [];
    let html = '';
    items.forEach((item, index) => {
        // Собираем характеристики
        let specs = [];
        if (item.year) specs.push(item.year);
        if (item.engine) specs.push(item.engine);
        if (item.capacity) specs.push(item.capacity);
        if (item.length) specs.push(item.length);
        if (item.mileage) specs.push(item.mileage);
        
        const statusText = item.status === 'sale' ? 'В продаже' : 'Продано';
        const statusClass = item.status === 'sale' ? 'sale' : 'sold';
        const contacts = item.contacts ? item.contacts.split(',').map(c => c.trim()).filter(c => c.length > 0) : [];

        html += `
            <div class="house-card" style="animation-delay: ${index * 0.07}s;">
                <div class="house-image" style="background-image: url('${item.image}');">
                    <span class="house-status ${statusClass}">${statusText}</span>
                </div>
                <div class="house-info">
                    <div class="house-price">${item.price} <small>₽</small></div>
                    <div class="house-location"><i class="fas fa-info-circle"></i> ${specs.join(' · ')}</div>
                    <div class="seller-row">
                        <span class="seller-name"><i class="fas fa-user"></i> ${item.seller || 'Продавец не указан'}</span>
                        <span class="agent-nick"><i class="fas fa-id-badge"></i> ${item.agent || '@agent'}</span>
                    </div>
                    ${contacts.length > 0 ? `
                        <div class="contacts">
                            <i class="fas fa-phone-alt"></i>
                            ${contacts.map(c => `<span class="contact-item"><i class="fas fa-circle"></i> ${c}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });

    grid.innerHTML = html || '<p style="color:#8a7a9a; text-align:center; padding:40px;">В этой категории пока нет предложений</p>';
};

/**
 * Скрывает подкаталог транспорта и показывает категории
 */
window.hideTransportSubCatalog = function() {
    document.getElementById('transportCategories').style.display = 'grid';
    document.getElementById('transportSubCatalog').classList.remove('active');
};

// ========================================
// PAGE NAVIGATION
// ========================================

/**
 * Переключает страницы
 */
window.showPage = function(page) {
    // Скрываем все страницы
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));

    // Показываем нужную
    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('active');
        // Перезапускаем анимацию
        target.style.animation = 'none';
        requestAnimationFrame(() => target.style.animation = 'fadeIn 0.5s ease');
    }

    // Обновляем активную ссылку в навигации
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        const text = link.textContent.trim().toLowerCase();
        const map = {
            'home': 'главная',
            'catalog': 'дома',
            'garages': 'гаражи',
            'transport': 'транспорт',
            'contacts': 'контакты'
        };
        if (text === page || (map[page] && text === map[page])) {
            link.classList.add('active');
        }
    });

    // Перерисовываем контент при необходимости
    if (page === 'catalog') renderHouses();
    if (page === 'garages') renderGarages();
};

// ========================================
// FILTER SETUP
// ========================================

/**
 * Настраивает фильтры для домов и гаражей
 */
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.dataset.target; // 'houses' или 'garages'
            const status = this.dataset.status;

            // Обновляем активный класс в группе
            const parent = this.closest('.filter-group');
            parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Обновляем состояние фильтра
            filters[target] = status;

            // Перерисовываем соответствующую сетку
            if (target === 'houses') renderHouses();
            if (target === 'garages') renderGarages();
        });
    });
}

// ========================================
// 3D TRIANGLES
// ========================================

/**
 * Создаёт 3D-треугольники на фоне
 */
function createTriangles() {
    const container = document.getElementById('trianglesContainer');
    const count = 25;

    for (let i = 0; i < count; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'triangle-3d';

        const size = 40 + Math.random() * 50;
        const xOffsets = Array.from({ length: 4 }, () => (Math.random() - 0.5) * 150);
        const yOffsets = Array.from({ length: 4 }, () => (Math.random() - 0.5) * 150);

        wrapper.style.width = size + 'px';
        wrapper.style.height = (size * 0.86) + 'px';
        wrapper.style.left = Math.random() * 100 + '%';
        wrapper.style.top = Math.random() * 100 + '%';
        
        // CSS-переменные для анимации
        xOffsets.forEach((x, idx) => wrapper.style.setProperty(`--x${idx + 1}`, x + 'px'));
        yOffsets.forEach((y, idx) => wrapper.style.setProperty(`--y${idx + 1}`, y + 'px'));

        // 3D грани
        wrapper.innerHTML = `
            <div class="face face-front"></div>
            <div class="face face-back"></div>
            <div class="face face-left"></div>
            <div class="face face-right"></div>
            <div class="vertex vertex-top"></div>
            <div class="vertex vertex-bottom-left"></div>
            <div class="vertex vertex-bottom-right"></div>
            <div class="edge edge-top-left"></div>
            <div class="edge edge-top-right"></div>
            <div class="edge edge-bottom"></div>
        `;

        // Случайный начальный поворот
        const rotX = (Math.random() - 0.5) * 30;
        const rotY = (Math.random() - 0.5) * 30;
        wrapper.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${Math.random() * 360}deg)`;
        wrapper.style.animationDuration = (4 + Math.random() * 4) + 's';

        // Обработка наведения мыши
        wrapper.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 300) {
                const angle = Math.atan2(dy, dx);
                const force = Math.min(300 / (dist + 10), 4);
                const moveX = -Math.cos(angle) * force * 120;
                const moveY = -Math.sin(angle) * force * 120;

                this.style.transition = 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.15s';
                this.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${30 + Math.random() * 30}deg) rotateY(${40 + Math.random() * 40}deg) rotateZ(${Math.random() * 60 - 30}deg) scale(2)`;
                this.style.opacity = '0.5';
                this.style.zIndex = '10';
            }
        });

        wrapper.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s';
            this.style.transform = '';
            this.style.opacity = '';
            this.style.zIndex = '';
        });

        container.appendChild(wrapper);
    }
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Главная функция инициализации
 */
function init() {
    createTriangles();
    setupFilters();
    showPage('home');
    renderHouses();
    renderGarages();
}

// Запускаем после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
