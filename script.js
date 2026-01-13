// Intersection Observer API を使ったスクロールアニメーション
const observerOptions = {
    threshold: 0.2 // 20%見えたら実行
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// すべての .fade-in クラスが付いた要素を監視
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});