const slider = document.getElementById('phSlider');
const display = document.getElementById('phValue');
const aiText = document.getElementById('aiText');

slider.oninput = function() {
    const value = this.value;
    display.innerHTML = value;

    // Logika sederhana AI
    if (value < 6) {
        aiText.innerHTML = "Tanah Terlalu Asam! Tambahkan kapur dolomit agar tanaman padi tumbuh maksimal.";
    } else if (value > 8) {
        aiText.innerHTML = "Tanah Terlalu Basa! Gunakan sulfur atau pupuk organik untuk menetralkan.";
    } else {
        aiText.innerHTML = "Kondisi Ideal! Tanah sangat cocok untuk pertumbuhan tanaman pangan.";
    }
}