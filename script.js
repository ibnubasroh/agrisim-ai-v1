// 1. Data/State (Apa yang diingat aplikasi)
const state = {
    ph: 7,
    status: "Ideal",
    color: "#4ade80"
};

// 2. Logika Perubahan (Update State)
function updateTampilan() {
    const display = document.getElementById('phValue');
    const aiText = document.getElementById('aiText');
    
    display.innerHTML = state.ph;
    aiText.innerHTML = getSaran(state.ph);
    aiText.style.color = state.color;
}

function getSaran(v) {
    if (v < 6) {
        state.color = "#fbbf24";
        return "⚠️ Tanah ASAM: Perlu Kapur Dolomit.";
    } else if (v > 8) {
        state.color = "#60a5fa";
        return "⚠️ Tanah BASA: Perlu Sulfur/Kompos.";
    } else {
        state.color = "#4ade80";
        return "✅ Tanah IDEAL: Siap Tanam Padi!";
    }
}

// 3. Event Listener (Aksi User)
document.getElementById('phSlider').oninput = function() {
    state.ph = this.value; // Simpan ke state
    updateTampilan();      // Gambar ulang layar
};