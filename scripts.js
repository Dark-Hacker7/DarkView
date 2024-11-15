// حفظ المسلسل في المفضلة
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('تم إضافة المسلسل إلى المفضلة!');
    });
});

// مشاهدة المسلسل
document.querySelectorAll('.watch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com'; // رابط المشاهدة
    });
});

// البحث عن المسلسل
document.getElementById('search').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const cards = document.querySelectorAll('.series-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
