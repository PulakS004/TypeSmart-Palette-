document.addEventListener('DOMContentLoaded', function() {
    const themeItems = document.querySelectorAll('.theme-item');

    themeItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove the 'selected' class from all items
            themeItems.forEach(item => item.classList.remove('selected'));
            
            // Add the 'selected' class to the clicked item
            this.classList.add('selected');
            
            // Change the background color of the body
            const colorButton = this.querySelector('.color-button');
            if (colorButton) {
                const color = colorButton.style.backgroundColor;
                document.body.style.backgroundColor = color;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const themeItems = document.querySelectorAll('.theme-item');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        themeItems.forEach(item => {
            const themeName = item.querySelector('.theme-name').textContent.toLowerCase();
            if (themeName.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});