// مثال لتفعيل المفضلة
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('تم إضافة المسلسل إلى المفضلة!');
    });
});

// مثال لتفعيل مشاهدة
document.querySelectorAll('.watch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com'; // رابط المشاهدة
    });
});
