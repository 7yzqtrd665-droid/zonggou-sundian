document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const isActive = currentItem.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });
});