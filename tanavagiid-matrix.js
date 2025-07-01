(function() {
  // Leia praegune script tag
  const currentScript = document.currentScript || (function() {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

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
        
        .matrix-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .matrix-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #0f172a;
          margin-bottom: 16px;
        }
        
        .matrix-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .matrix-container {
          position: relative;
          margin-left: 60px;
        }
        
        .y-axis-label {
          position: absolute;
          left: -50px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
          white-space: nowrap;
        }
        
        .y-axis-values {
          position: absolute;
          left: -90px;
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
          margin-bottom: 24px;
        }
        
        .matrix-row {
          display: contents;
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
          padding: 1rem;
          text-decoration: none;
          color: inherit;
        }

        .card-link {
          margin-top: auto;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: bold;
        }
        
        .street-type-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          text-decoration: none;
          color: inherit;
        }
        
        .card-header {
          display: flex;
          justify-content: between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .card-icon {
          width: 24px;
          height: 24px;
          color: #374151;
        }
        
        .card-badge {
          background: #f1f5f9;
          color: #475569;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
          line-height: 1.4;
        }
        
        .card-description {
          color: #374151;
          font-size: 0.875rem;
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .arrow-icon {
          width: 16px;
          height: 16px;
          stroke-width: 2;
        }
        
        .x-axis-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
        }
        
        .x-axis-value {
          font-size: 0.875rem;
          color: #64748b;
        }
        
        .x-axis-label {
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
        }
        
        /* Color classes */
        .bg-red { background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%); }
        .bg-orange { background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%); }
        .bg-yellow { background: linear-gradient(135deg, #fefce8 0%, #fde047 100%); }
        .bg-blue { background: linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%); }
        .bg-indigo { background: linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%); }
        .bg-purple { background: linear-gradient(135deg, #faf5ff 0%, #d8b4fe 100%); }
        .bg-green { background: linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%); }
        .bg-teal { background: linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%); }
        .bg-emerald { background: linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%); }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .matrix-container {
            margin-left: 0;
          }
          
          .y-axis-label,
          .y-axis-values {
            display: none;
          }
          
          .matrix-grid {
            grid-template-columns: 1fr;
          }
          
          .matrix-title {
            font-size: 2rem;
          }
          
          .matrix-subtitle {
            font-size: 1.125rem;
          }
          
          .street-type-card {
            padding: 16px;
          }
          
          .mobile-info {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            color: #64748b;
            margin-bottom: 12px;
          }
          
          .mobile-info span {
            background: #f8fafc;
            padding: 2px 6px;
            border-radius: 4px;
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
        
        <div class="matrix-grid">
          <!-- Row 1: High Mobility (Ühendustänavad) -->
          <a href="/tanavatyyp/lihtne-yhendustanav" class="street-type-card bg-red">
            <div class="mobile-info">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Madal</span>
            </div>
            <h3 class="card-title">Lihtne ühendustänav</h3>
            <p class="card-description">Magistraal, linna või asula põhitänav või asula piirkondi ühendav, eelkõige läbiliikumiseks mõeldud tänav</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-yhendustanav" class="street-type-card bg-orange">
            <div class="mobile-info">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Keskmine</span>
            </div>
            <h3 class="card-title">Linlik ühendustänav</h3>
            <p class="card-description">Suure liiklusväärtusega ja keskmise kohaväärtusega tänav, mis ühendab linna erinevaid piirkondi ning pakub mitmekesist linnaruumi kogemust.</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-yhendustanav" class="street-type-card bg-yellow">
            <div class="mobile-info">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Kõrge</span>
            </div>
            <h3 class="card-title">Esinduslik ühendustänav</h3>
            <p class="card-description">Suure liiklusväärtusega ja kõrge kohaväärtusega prestiižne tänav, mis on linna nägu ja avaliku ruumi kese.</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <!-- Row 2: Medium Mobility (Jaotustänavad) -->
          <a href="/tanavatyyp/lihtne-jaotustanav" class="street-type-card bg-blue">
            <div class="mobile-info">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Madal</span>
            </div>
            <h3 class="card-title">Lihtne jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja lihtsa kohaväärtusega peamiselt läbiliikumiseks ja juurdepääsuks kasutatav tänav, mille ääres ei asu suure kasutajate arvuga sihtkohti ja ühissõidukipeatuseid.</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-jaotustanav" class="street-type-card bg-indigo">
            <div class="mobile-info">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Keskmine</span>
            </div>
            <h3 class="card-title">Linlik jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub tasakaalustatud linnaruumi kogemust ja toetab nii liikuvust kui ka kohalikku elu.</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-jaotustanav" class="street-type-card bg-purple">
            <div class="mobile-info">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Kõrge</span>
            </div>
            <h3 class="card-title">Esinduslik jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja kõrge kohaväärtusega kvaliteetne avalik ruum, mis on piirkonna uhkus ja identiteedi kandja.</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <!-- Row 3: Low Mobility (Kodutänavad) -->
          <a href="/tanavatyyp/lihtne-kodutanav" class="street-type-card bg-green">
            <div class="mobile-info">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Madal</span>
            </div>
            <h3 class="card-title">Lihtne kodutänav</h3>
            <p class="card-description">Kitsad, vähese liiklusega ja hõreda hoonestusega tänavad, eelkõige asumite elukeskkonna olulised osad, millele tuleb ehitamisel ja rekonstrueerimisel olulist tähelepanu pöörata.</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-kodutanav" class="street-type-card bg-teal">
            <div class="mobile-info">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Keskmine</span>
            </div>
            <h3 class="card-title">Linlik kodutänav</h3>
            <p class="card-description">Madala liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub kvaliteetset elukeskkonda tihedas linnastruktuuris.</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-kodutanav" class="street-type-card bg-emerald">
            <div class="mobile-info">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Kõrge</span>
            </div>
            <h3 class="card-title">Esinduslik kodutänav</h3>
            <p class="card-description">Prestiižne elukeskkond, mis pakub erakordset elukvaliteeti ja on piirkonna uhkus.</p>
            <div class="card-link">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
        </div>
        
        <div class="x-axis-container">
          <span class="x-axis-value">Lihtne</span>
          <span class="x-axis-label">Kohaväärtus</span>
          <span class="x-axis-value">Esinduslik</span>
        </div>
      </div>
    </div>
  `;

  // Lisa maatriks täpselt script tagi asukohta
  if (currentScript && currentScript.parentNode) {
    const matrixDiv = document.createElement('div');
    matrixDiv.innerHTML = matrixHTML;
    currentScript.parentNode.insertBefore(matrixDiv.firstElementChild, currentScript);
    // Eemalda script tag pärast sisestamist
    currentScript.remove();
  }
})();