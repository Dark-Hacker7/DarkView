// المسلسلات المخزنة
const seriesData = [
    {
        id: 1,
        title: "مسلسل 1",
        description: "وصف المسلسل 1",
        imageUrl: "https://via.placeholder.com/200x300",
        rating: 4.5
    },
    {
        id: 2,
        title: "مسلسل 2",
        description: "وصف المسلسل 2",
        imageUrl: "https://via.placeholder.com/200x300",
        rating: 4.8
    },
    {
        id: 3,
        title: "مسلسل 3",
        description: "وصف المسلسل 3",
        imageUrl: "https://via.placeholder.com/200x300",
        rating: 4.0
    }
];

// عرض المسلسلات في الصفحة الرئيسية
function displaySeries() {
    const seriesList = document.getElementById('series-list');
    seriesData.forEach(series => {
        const card = document.createElement('div');
        card.classList.add('series-card');
        card.innerHTML = `
            <img src="${series.imageUrl}" alt="${series.title}">
            <h3>${series.title}</h3>
            <p>${series.description}</p>
            <p>التقييم: ${series.rating}</p>
            <button onclick="viewSeries(${series.id})">عرض التفاصيل</button>
            <button onclick="addToFavorites(${series.id})">إضافة إلى المفضلة</button>
            <button onclick="rateSeries(${series.id}, 5)">تقييم 5 نجوم</button>
        `;
        seriesList.appendChild(card);
    });
}

// عرض تفاصيل المسلسل
function viewSeries(seriesId) {
    const series = seriesData.find(s => s.id === seriesId);
    alert(`العنوان: ${series.title}\nالتقييم: ${series.rating}\nالوصف: ${series.description}`);
}

// إضافة المسلسل إلى المفضلة
function addToFavorites(seriesId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(seriesId)) {
        favorites.push(seriesId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('تم إضافة المسلسل إلى المفضلة');
    } else {
        alert('المسلسل في المفضلة بالفعل');
    }
}

// إضافة التقييم عند الضغط على زر التقييم
function rateSeries(seriesId, rating) {
    const series = seriesData.find(s => s.id === seriesId);
    series.rating = rating;  // تحديث التقييم
    alert(`تم تحديث التقييم: ${series.title} إلى ${rating}`);
}

// تسجيل الدخول باستخدام Google
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    alert("أهلاً " + profile.getName());
}

// تفعيل العرض عند تحميل الصفحة
window.onload = displaySeries;
