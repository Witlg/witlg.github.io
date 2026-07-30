(function() {
    const wrappers = document.querySelectorAll('.image-wrapper');
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('modalCloseBtn');

    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalDate = document.getElementById('modalDate');
    const modalTech = document.getElementById('modalTech');

    // данные для проектов (4 проекта)
    const projectData = {
        'проект 1': {
            title: 'Интернет-магазин',
            desc: 'Полноценный e-commerce сайт с корзиной, оплатой и личным кабинетом. Адаптивный дизайн, оптимизация скорости загрузки.',
            date: '2024',
            tech: 'React · Node.js · PostgreSQL'
        },
        'проект 2': {
            title: 'Дашборд аналитики',
            desc: 'Интерактивная панель управления с графиками, фильтрами и экспортом данных. Реальное время обновления.',
            date: '2023',
            tech: 'Vue.js · D3.js · WebSocket'
        },
        'проект 3': {
            title: 'Мобильное приложение',
            desc: 'Кроссплатформенное приложение для заказа еды с картами, push-уведомлениями и системой лояльности.',
            date: '2024',
            tech: 'Flutter · Firebase · Stripe'
        },
        'проект 4': {
            title: 'AI-помощник',
            desc: 'Чат-бот с искусственным интеллектом для поддержки клиентов. Интеграция с Telegram и сайтом.',
            date: '2023',
            tech: 'Python · GPT-4 · FastAPI'
        }
    };

    function openModal(projectKey) {
        const data = projectData[projectKey] || {
            title: projectKey,
            desc: 'Описание проекта отсутствует.',
            date: '2024',
            tech: 'HTML · CSS · JS'
        };

        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalDate.textContent = data.date;
        modalTech.textContent = data.tech;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    wrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function() {
            const project = this.dataset.project || 'проект';
            openModal(project);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    console.log('Галерея загружена. Наведи на изображение — увидишь белую бегущую рамку!');
})();
