let currentIndex = 0; // Indeks slide yang sedang ditampilkan

// Fungsi untuk berpindah ke slide berikutnya
function nextSlide() {
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    // Perbarui indeks slide
    currentIndex = (currentIndex + 1) % totalSlides; // Kembali ke slide pertama jika sudah di slide terakhir
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Fungsi untuk berpindah ke slide sebelumnya
function prevSlide() {
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    // Perbarui indeks slide
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Kembali ke slide terakhir jika di slide pertama
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Fungsi untuk otomatis mengganti slide setiap 3 detik
function autoSlide() {
    nextSlide();
}

// Jalankan autoSlide setiap 3 detik
setInterval(autoSlide, 3000);
