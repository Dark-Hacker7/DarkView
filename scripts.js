// بيانات المسلسلات
const seriesData = [
    {
        id: 1,
        name: "مسلسل 1",
        image: "https://link-to-your-image.com/image1.jpg",
        videoUrl: "videos/episode1.mp4",
        rating: 0,
        description: "وصف المسلسل هنا"
    },
    {
        id: 2,
        name: "مسلسل 2",
        image: "https://link-to-your-image.com/image2.jpg",
        videoUrl: "videos/episode2.mp4",
        rating: 0,
        description: "وصف المسلسل هنا"
    }
];

// إضافة المسلسلات إلى الصفحة
function displaySeries() {
    const container = document.getElementById('seriesContainer');
    container.innerHTML = '';
    seriesData.forEach(series => {
        const seriesElement = document.createElement('div');
        seriesElement.className = 'series';
        seriesElement.innerHTML = `
            <img src="${series.image}" alt="${series.name}">
            <div class="series-info">
                <h3>${series.name}</h3>
                <p>${series.description}</p>
            </div>
        `;
        seriesElement.onclick = () => viewSeries(series.id);
        container.appendChild(seriesElement);
    });
}

// فتح الفيديو عند النقر على المسلسل
function viewSeries(seriesId) {
    const series = seriesData.find(s => s.id === seriesId);
    document.getElementById('videoSource').src = series.videoUrl;
    document.getElementById('videoPlayer').load();
    document.getElementById('videoModal').style.display = "block"; // فتح نافذة الفيديو
}

// إغلاق نافذة الفيديو
function closeModal() {
    document.getElementById('videoModal').style.display = "none";
}

// إضافة تعليق
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentList = document.getElementById('commentsList');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = ''; // مسح حقل التعليق
    }
}

// حفظ المفضلة
function addToFavorites(seriesId) {
    const favoritesList = document.getElementById('favoritesList');
    const series = seriesData.find(s => s.id === seriesId);
    const favoriteItem = document.createElement('li');
    favoriteItem.textContent = series.name;
    favoritesList.appendChild(favoriteItem);
}

// التقييم
function rateSeries(stars) {
    alert(`تم تقييم المسلسل بـ ${stars} نجوم`);
}

window.onload = displaySeries;  // عرض المسلسلات عند تحميل الصفحة