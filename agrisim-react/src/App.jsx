import { useState } from 'react' // Ini "Ingatan" React

function App() {
  // 1. State (Ingatan): Nilai pH awal adalah 7
  const [ph, setPh] = useState(7)

  // 2. Tampilan (HTML di dalam JavaScript)
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '50px' }}>
      <h1>🧪 AgriSim React v2</h1>
      <p>Simulasi pH Tanah untuk Ketahanan Pangan</p>

      <div style={{ marginTop: '30px' }}>
        <input 
          type="range" 
          min="0" 
          max="14" 
          value={ph} 
          onChange={(e) => setPh(e.target.value)} // Saat slider digeser, update ingatan (state)
          style={{ width: '300px' }}
        />
        <h2>Nilai pH: {ph}</h2>
      </div>

      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #334155', borderRadius: '10px' }}>
        <h3>Saran Agronomis AI:</h3>
        {ph < 6 && <p style={{ color: '#fbbf24' }}>⚠️ Tanah ASAM: Perlu Kapur Dolomit.</p>}
        {ph >= 6 && ph <= 7.5 && <p style={{ color: '#4ade80' }}>✅ Tanah IDEAL: Siap Tanam Padi!</p>}
        {ph > 7.5 && <p style={{ color: '#60a5fa' }}>⚠️ Tanah BASA: Perlu Sulfur/Kompos.</p>}
      </div>
    </div>
  )
}

export default App