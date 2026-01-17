document.addEventListener('DOMContentLoaded', () => {
    
    // スクロール時に要素をフェードインさせる
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // .fade-inが付いた全要素を監視
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // メンバーリストの各行に時間差（ディレイ）をつける
    const rows = document.querySelectorAll('.member-row');
    rows.forEach((row, index) => {
        row.style.transitionDelay = `${index * 0.1}s`;
        // 既存のfade-inクラスも活用
        row.classList.add('fade-in');
        observer.observe(row);
    });

    // スムーズスクロール（ナビゲーション用）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observerの設定
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // セクションが表示されたらvisibleクラスをつける
                entry.target.classList.add('visible');
                
                // メンバーリストの場合、子要素を時間差で表示
                if (entry.target.classList.contains('member-list')) {
                    const rows = entry.target.querySelectorAll('.member-row');
                    rows.forEach((row, index) => {
                        setTimeout(() => {
                            row.classList.add('visible');
                        }, index * 150); // 150msずつズレて表示
                    });
                }
            }
        });
    }, { threshold: 0.2 });

    // 監視対象
    document.querySelectorAll('.fade-in, .member-list').forEach(el => {
        observer.observe(el);
    });
});
