(function() {
  // Leia praegune script tag
  const currentScript = document.currentScript;
  
  // Loo maatriksi HTML
  const matrixHTML = `
    <div id="street-types-matrix">
      <style>
        #street-types-matrix {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .matrix-container {
          position: relative;
          margin-left: 120px;
          margin-top: 60px;
        }
        
        .y-axis-label {
          position: absolute;
          left: -80px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 1.125rem;
          font-weight: 600;
          color: #475569;
          white-space: nowrap;
        }
        
        .y-axis-values {
          position: absolute;
          left: -50px;
          top: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        
        .y-axis-value {
          font-size: 0.875rem;
          color: #64748b;
          transform: translateY(-50%);
        }
        
        .matrix-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 40px;
          position: relative;
        }
        
        .street-type-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          position: relative;
          display: flex;
          overflow: hidden;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          min-height: 200px;
        }
        
        .street-type-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          text-decoration: none;
          color: inherit;
        }
        
        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        
        .card-description {
          color: #374151;
          font-size: 0.875rem;
          margin-bottom: 16px;
          line-height: 1.5;
          flex-grow: 1;
        }
        
        .card-link {
          margin-top: auto;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: #3b82f6;
        }
        
        .mobile-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #64748b;
          margin-bottom: 12px;
        }
        
        .mobile-info span {
          background: rgba(255,255,255,0.8);
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        .x-axis-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          position: relative;
        }
        
        .x-axis-value {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }
        
        .x-axis-label {
          font-size: 1.125rem;
          font-weight: 600;
          color: #475569;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -30px;
        }
        
        /* Nooled */
        .axis-arrows {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .axis-arrow {
          stroke: #475569;
          stroke-width: 2;
          fill: none;
          transition: all 0.3s ease;
        }
        
        .axis-arrow:hover {
          stroke: #334155;
          stroke-width: 2.5;
        }
        
        .arrow-marker {
          fill: #475569;
          transition: all 0.3s ease;
        }
        
        .axis-arrow:hover + .arrow-marker,
        .arrow-marker:hover {
          fill: #334155;
        }
        
        /* Värviklassid - PARANDATUD hover efektidega */
        .bg-red { 
          background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%) !important; 
        }
        .bg-red:hover { 
          background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%) !important; 
        }
        
        .bg-orange { 
          background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%) !important; 
        }
        .bg-orange:hover { 
          background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%) !important; 
        }
        
        .bg-yellow { 
          background: linear-gradient(135deg, #fefce8 0%, #fde047 100%) !important; 
        }
        .bg-yellow:hover { 
          background: linear-gradient(135deg, #fefce8 0%, #fde047 100%) !important; 
        }
        
        .bg-blue { 
          background: linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%) !important; 
        }
        .bg-blue:hover { 
          background: linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%) !important; 
        }
        
        .bg-indigo { 
          background: linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%) !important; 
        }
        .bg-indigo:hover { 
          background: linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%) !important; 
        }
        
        .bg-purple { 
          background: linear-gradient(135deg, #faf5ff 0%, #d8b4fe 100%) !important; 
        }
        .bg-purple:hover { 
          background: linear-gradient(135deg, #faf5ff 0%, #d8b4fe 100%) !important; 
        }
        
        .bg-green { 
          background: linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%) !important; 
        }
        .bg-green:hover { 
          background: linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%) !important; 
        }
        
        .bg-teal { 
          background: linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%) !important; 
        }
        .bg-teal:hover { 
          background: linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%) !important; 
        }
        
        .bg-emerald { 
          background: linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%) !important; 
        }
        .bg-emerald:hover { 
          background: linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%) !important; 
        }
        
        /* Mobiilne - TELJED PEIDETUD */
        @media (max-width: 768px) {
          .matrix-container {
            margin-left: 0;
            margin-top: 20px;
          }
          
          .y-axis-label,
          .y-axis-values,
          .axis-arrows {
            display: none !important;
          }
          
          .matrix-grid {
            grid-template-columns: 1fr;
          }
          
          .street-type-card {
            padding: 16px;
            min-height: 180px;
          }
          
          .x-axis-container {
            display: none !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-info {
            display: none;
          }
        }
      </style>
      
      <div class="matrix-container">
        <div class="y-axis-label">Liikuvus</div>
        <div class="y-axis-values">
          <span class="y-axis-value">Kõrge</span>
          <span class="y-axis-value">Keskmine</span>
          <span class="y-axis-value">Madal</span>
        </div>
        
        <!-- SVG nooled -->
        <svg class="axis-arrows" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <marker id="arrowhead-y" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" class="arrow-marker" />
            </marker>
            <marker id="arrowhead-x" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" class="arrow-marker" />
            </marker>
          </defs>
          <!-- Y-telg (vertikaalne nool) -->
          <line x1="2" y1="95" x2="2" y2="5" class="axis-arrow" marker-end="url(#arrowhead-y)" />
          <!-- X-telg (horisontaalne nool) -->
          <line x1="5" y1="92" x2="95" y2="92" class="axis-arrow" marker-end="url(#arrowhead-x)" />
        </svg>
        
        <div class="matrix-grid">
          <!-- Row 1: Kõrge liikuvus (Ühendustänavad) -->
          <a href="/tanavatyyp/lihtne-yhendustanav" class="street-type-card bg-red">
            <div class="mobile-info">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Lihtne</span>
            </div>
            <h3 class="card-title">Lihtne ühendustänav</h3>
            <p class="card-description">Magistraal, linna või asula põhitänav või asula piirkondi ühendav, eelkõige läbiliikumiseks mõeldud tänav</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-yhendustanav" class="street-type-card bg-orange">
            <div class="mobile-info">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Linlik</span>
            </div>
            <h3 class="card-title">Linlik ühendustänav</h3>
            <p class="card-description">Suure liiklusväärtusega ja keskmise kohaväärtusega tänav, mis ühendab linna erinevaid piirkondi ning pakub mitmekesist linnaruumi kogemust.</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-yhendustanav" class="street-type-card bg-yellow">
            <div class="mobile-info">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Esinduslik</span>
            </div>
            <h3 class="card-title">Esinduslik ühendustänav</h3>
            <p class="card-description">Suure liiklusväärtusega ja kõrge kohaväärtusega prestiižne tänav, mis on linna nägu ja avaliku ruumi kese.</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
          
          <!-- Row 2: Keskmine liikuvus (Jaotustänavad) -->
          <a href="/tanavatyyp/lihtne-jaotustanav" class="street-type-card bg-blue">
            <div class="mobile-info">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Lihtne</span>
            </div>
            <h3 class="card-title">Lihtne jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja lihtsa kohaväärtusega peamiselt läbiliikumiseks ja juurdepääsuks kasutatav tänav, mille ääres ei asu suure kasutajate arvuga sihtkohti ja ühissõidukipeatuseid.</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-jaotustanav" class="street-type-card bg-indigo">
            <div class="mobile-info">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Linlik</span>
            </div>
            <h3 class="card-title">Linlik jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub tasakaalustatud linnaruumi kogemust ja toetab nii liikuvust kui ka kohalikku elu.</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-jaotustanav" class="street-type-card bg-purple">
            <div class="mobile-info">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Esinduslik</span>
            </div>
            <h3 class="card-title">Esinduslik jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja kõrge kohaväärtusega kvaliteetne avalik ruum, mis on piirkonna uhkus ja identiteedi kandja.</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
          
          <!-- Row 3: Madal liikuvus (Kodutänavad) -->
          <a href="/tanavatyyp/lihtne-kodutanav" class="street-type-card bg-green">
            <div class="mobile-info">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Lihtne</span>
            </div>
            <h3 class="card-title">Lihtne kodutänav</h3>
            <p class="card-description">Kitsad, vähese liiklusega ja hõreda hoonestusega tänavad, eelkõige asumite elukeskkonna olulised osad, millele tuleb ehitamisel ja rekonstrueerimisel olulist tähelepanu pöörata.</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-kodutanav" class="street-type-card bg-teal">
            <div class="mobile-info">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Linlik</span>
            </div>
            <h3 class="card-title">Linlik kodutänav</h3>
            <p class="card-description">Madala liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub kvaliteetset elukeskkonda tihedas linnastruktuuris.</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-kodutanav" class="street-type-card bg-emerald">
            <div class="mobile-info">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Esinduslik</span>
            </div>
            <h3 class="card-title">Esinduslik kodutänav</h3>
            <p class="card-description">Prestiižne elukeskkond, mis pakub erakordset elukvaliteeti ja on piirkonna uhkus.</p>
            <div class="card-link">
              <span>Vaata juhiseid →</span>
            </div>
          </a>
        </div>
        
        <div class="x-axis-container">
          <span class="x-axis-value">Lihtne</span>
          <span class="x-axis-value">Linlik</span>
          <span class="x-axis-value">Esinduslik</span>
          <span class="x-axis-label">Kohaväärtus</span>
        </div>
      </div>
    </div>
  `;
  
  // Lisa maatriks script tagi asukohta
  if (currentScript && currentScript.parentNode) {
    const matrixDiv = document.createElement('div');
    matrixDiv.innerHTML = matrixHTML;
    currentScript.parentNode.insertBefore(matrixDiv.firstElementChild, currentScript.nextSibling);
  } else {
    // Fallback - lisa lehe lõppu
    document.addEventListener('DOMContentLoaded', function() {
      document.body.insertAdjacentHTML('beforeend', matrixHTML);
    });
  }
})();
