/**
 * Kitsune Estate — Main JavaScript
 * Версия: 1.3
 */

// ========================================
// DATA
// ========================================

/** Данные домов */
const housesData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
        price: 'Тут мог бы быть ваш дом! Телл 3787 sms',
        location: '-',
        seller: '-',
        agent: '-',
        contacts: '-',
        status: 'sale'
    }
];

/** Данные гаражей */
const garagesData = [
    {
        id: 1,
        name: 'Тут мог бы быть ваш гараж! Телл 3787 sms',
        price: '-',
        location: '-',
        seller: '-',
        agent: '-',
        image: 'https://images.unsplash.com/photo-1573380588172-a8f83ef2f2e1?w=600&h=400&fit=crop',
        status: 'sale'
    }
];

/** Данные транспорта */
const transportData = {
    cars: [
        { 
            name: 'Тут могла бы быть ваша машина! Телл 3787', 
            price: 'Тут могла бы быть ваша машина! Телл 3787', 
            mileage: '-',
            seller: '-',
            agent: '-',
            contacts: '-',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop' 
        }
    ],
    trucks: [
        { 
            name: 'Тут могла бы быть ваша фура! Телл 3787', 
            price: 'Тут могла бы быть ваша фура! Телл 3787', 
            capacity: '-', 
            mileage: '-',
            seller: '-',
            agent: '-',
            contacts: '-',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop' 
        }
    ],
    motorcycles: [
        { 
            name: 'Тут мог бы быть ваш мотоцикл! Телл 3787', 
            price: 'Тут мог бы быть ваш мотоцикл! Телл 3787',
            mileage: '-',
            seller: '-',
            agent: '-',
            contacts: '-',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1589684785780-a1f31046f8f0?w=600&h=400&fit=crop' 
        }
    ],
    water: [
        { 
            name: 'Тут могла бы быть ваша лодка! Телл 3787', 
            price: 'Тут могла бы быть ваша лодка! Телл 3787',  
            seller: '-',
            agent: '-',
            contacts: '-',
            status: 'sale',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop' 
        }
    ]
};

// ========================================
// STATE
// ========================================

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

function createStatusTag(status) {
    const statusMap = {
        'sale': { class: 'sale', text: 'В продаже' },
        'sold': { class: 'sold', text: 'Продано' }
    };
    const s = statusMap[status] || statusMap.sale;
    return `<span class="house-status ${s.class}">${s.text}</span>`;
}

function renderHouses() {
    const filtered = housesData.filter(h => filters.houses === 'all' || h.status === filters.houses);
    houseCount.textContent = filtered.length;

    if (filtered.length === 0) {
        housesGrid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px; background:var(--card-bg); border-radius:20px; border:1px solid var(--border-color);">
                <i class="fas fa-search" style="font-size:48px; color:var(--text-dim);"></i>
                <p style="margin-top:16px; font-size:18px; color:var(--text-dim);">Нет домов с таким статусом</p>
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

function renderGarages() {
    const filtered = garagesData.filter(g => filters.garages === 'all' || g.status === filters.garages);
    garageCount.textContent = filtered.length;

    if (filtered.length === 0) {
        garagesGrid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px; background:var(--card-bg); border-radius:20px; border:1px solid var(--border-color);">
                <i class="fas fa-search" style="font-size:48px; color:var(--text-dim);"></i>
                <p style="margin-top:16px; font-size:18px; color:var(--text-dim);">Нет гаражей с таким статусом</p>
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

window.showTransportCategory = function(category) {
    const categories = document.getElementById('transportCategories');
    const subCatalog = document.getElementById('transportSubCatalog');
    const grid = document.getElementById('transportCardsGrid');

    categories.style.display = 'none';
    subCatalog.classList.add('active');

    const items = transportData[category] || [];
    let html = '';
    items.forEach((item, index) => {
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

    grid.innerHTML = html || '<p style="color:var(--text-dim); text-align:center; padding:40px;">В этой категории пока нет предложений</p>';
};

window.hideTransportSubCatalog = function() {
    document.getElementById('transportCategories').style.display = 'grid';
    document.getElementById('transportSubCatalog').classList.remove('active');
};

// ========================================
// PAGE NAVIGATION
// ========================================

window.showPage = function(page) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));

    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('active');
        target.style.animation = 'none';
        requestAnimationFrame(() => target.style.animation = 'fadeIn 0.6s ease');
    }

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

    if (page === 'catalog') renderHouses();
    if (page === 'garages') renderGarages();
};

// ========================================
// FILTER SETUP
// ========================================

function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.dataset.target;
            const status = this.dataset.status;

            const parent = this.closest('.filter-group');
            parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            filters[target] = status;

            if (target === 'houses') renderHouses();
            if (target === 'garages') renderGarages();
        });
    });
}

// ========================================
// GLOW ORBS
// ========================================

function createGlowOrbs() {
    const orbs = [
        { class: 'glow-orb-1' },
        { class: 'glow-orb-2' },
        { class: 'glow-orb-3' }
    ];
    
    orbs.forEach(orb => {
        const el = document.createElement('div');
        el.className = `glow-orb ${orb.class}`;
        document.body.prepend(el);
    });
}

// ========================================
// INITIALIZATION
// ========================================

function init() {
    createGlowOrbs();
    setupFilters();
    showPage('home');
    renderHouses();
    renderGarages();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
