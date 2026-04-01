const slider = document.getElementById('phSlider');
const display = document.getElementById('phValue');
const aiText = document.getElementById('aiText');

// Daftar rekomendasi berdasarkan pH
const recommendations = {
    acid: "Tanah Terlalu Asam. Padi akan sulit menyerap nutrisi. Segera tambahkan kapur pertanian (Dolomit).",
    ideal: "pH Ideal! Sangat cocok untuk tanaman pangan. Pertahankan dengan pupuk organik.",
    alkaline: "Tanah Terlalu Basa. Pertumbuhan tanaman akan terhambat. Tambahkan sulfur atau kompos daun."
};

slider.oninput = function() {
    const v = parseFloat(this.value);
    display.innerHTML = v;

    // Perubahan warna teks agar interaktif
    if (v < 6) {
        aiText.innerHTML = recommendations.acid;
        aiText.style.color = "#fbbf24"; // Oranye/Kuning
    } else if (v >= 6 && v <= 7.5) {
        aiText.innerHTML = recommendations.ideal;
        aiText.style.color = "#4ade80"; // Hijau
    } else {
        aiText.innerHTML = recommendations.alkaline;
        aiText.style.color = "#60a5fa"; // Biru
    }
}