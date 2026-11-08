document.addEventListener('DOMContentLoaded', () => {

    // --- ИНТЕРАКТИВНЫЙ АККОРДЕОН (Процесс заказа) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Закрываем все открытые вкладки
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // Если вкладка не была активной, открываем её
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });
});
