import { useState } from 'react'

function App() {
  const [ph, setPh] = useState(7);
  const [moisture, setMoisture] = useState(50); // Kelembapan dalam %

  // Logika AI Agronomis untuk Ketahanan Pangan
  const getAiRecommendation = () => {
    if (ph < 6 && moisture > 70) {
      return {
        text: "⚠️ PERINGATAN: Tanah Terlalu Asam & Terlalu Basah. Risiko busuk akar dan jamur tinggi. Segera kurangi pengairan dan tambahkan Kapur Dolomit.",
        color: "#f87171"
      };
    } else if (ph >= 6 && ph <= 7 && moisture >= 60 && moisture <= 80) {
      return {
        text: "✅ KONDISI OPTIMAL: Tanah subur dan air cukup. Prediksi panen akan lebih cepat 15% dari rata-rata jika kondisi ini stabil.",
        color: "#4ade80"
      };
    } else if (moisture < 30) {
      return {
        text: "⚠️ PERINGATAN: Kekeringan Ekstrem. Tanaman padi terancam kerdil. Segera lakukan irigasi atau gunakan sistem sensor otomatis.",
        color: "#fbbf24"
      };
    } else {
      return {
        text: "ℹ️ STATUS: Kondisi sedang. Pastikan pemantauan pH berkala untuk menjaga nutrisi tanah.",
        color: "#60a5fa"
      };
    }
  };

  const advice = getAiRecommendation();

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#4ade80', fontSize: '2.5rem' }}>🧪 AgriSim AI</h1>
        <p>Virtual Lab: Simulasi Percepatan Panen Padi Nasional</p>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#1e293b', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
        
        {/* Slider pH */}
        <div style={{ marginBottom: '30px' }}>
          <label>Tingkat pH Tanah: <strong>{ph}</strong></label>
          <input 
            type="range" min="0" max="14" step="0.1" value={ph} 
            onChange={(e) => setPh(e.target.value)} 
            style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }}
          />
        </div>

        {/* Slider Kelembapan */}
        <div style={{ marginBottom: '30px' }}>
          <label>Kelembapan Tanah: <strong>{moisture}%</strong></label>
          <input 
            type="range" min="0" max="100" value={moisture} 
            onChange={(e) => setMoisture(e.target.value)} 
            style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }}
          />
        </div>

        {/* Panel AI */}
        <div style={{ padding: '20px', backgroundColor: '#0f172a', borderRadius: '15px', borderLeft: `6px solid ${advice.color}` }}>
          <h4 style={{ color: advice.color, marginTop: 0 }}>🤖 Rekomendasi Agronomis AI:</h4>
          <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{advice.text}</p>
        </div>

      </div>

      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.9rem', color: '#94a3b8' }}>
        Proyek Inovasi Digdaya Hackathon 2026 - Digitalisasi Ketahanan Pangan
      </footer>
    </div>
  )
}

export default App