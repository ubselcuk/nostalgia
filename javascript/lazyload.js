document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(function (img) {
        img.onload = function () {
            img.removeAttribute('data-src');
            img.style.opacity = 1; // Resmi görünür yap
            var loader = img.nextElementSibling; // Yükleme göstergesi elementini al
            if (loader && loader.classList.contains('loader')) {
                loader.style.display = 'none'; // Yükleme göstergesini gizle
            }
        };
        img.src = img.dataset.src; // Gerçek resmi yükle
    });
});