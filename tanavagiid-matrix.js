(function() {
  // Leia praegune script tag ja asenda see maatriksiga
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
          margin-bottom: 80px;
        }
        
        .y-axis-label {
          position: absolute;
          left: -60px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
          white-space: nowrap;
        }
        
        .y-axis-values {
          position: absolute;
          left: -100px;
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
          margin-bottom: 8px;
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
          font-weight: bold;
          color: #374151;
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
        
        .x-axis-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
          position: relative;
        }
        
        .x-axis-value {
          font-size: 0.875rem;
          color: #64748b;
        }
        
        .x-axis-label {
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        /* Nooled */
        .y-axis-arrow {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: #6b7280;
          transition: all 0.3s ease;
        }
        
        .y-axis-arrow:hover {
          background: #4b5563;
          width: 2.5px;
        }
        
        .y-axis-arrow::after {
          content: '';
          position: absolute;
          top: -8px;
          left: -4px;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 10px solid #6b7280;
          transition: all 0.3s ease;
        }
        
        .y-axis-arrow:hover::after {
          border-bottom-color: #4b5563;
        }
        
        .x-axis-arrow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #6b7280;
          transition: all 0.3s ease;
        }
        
        .x-axis-arrow:hover {
          background: #4b5563;
          height: 2.5px;
        }
        
        .x-axis-arrow::after {
          content: '';
          position: absolute;
          right: -8px;
          top: -4px;
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 10px solid #6b7280;
          transition: all 0.3s ease;
        }
        
        .x-axis-arrow:hover::after {
          border-left-color: #4b5563;
        }
        
        /* Värviklassid */
        .bg-red { 
          background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%) !important; 
        }
        .bg-orange { 
          background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%) !important; 
        }
        .bg-yellow { 
          background: linear-gradient(135deg, #fefce8 0%, #fde047 100%) !important; 
        }
        .bg-blue { 
          background: linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%) !important; 
        }
        .bg-indigo { 
          background: linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%) !important; 
        }
        .bg-purple { 
          background: linear-gradient(135deg, #faf5ff 0%, #d8b4fe 100%) !important; 
        }
        .bg-green { 
          background: linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%) !important; 
        }
        .bg-teal { 
          background: linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%) !important; 
        }
        .bg-emerald { 
          background: linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%) !important; 
        }
        
        /* Mobiilne */
        @media (max-width: 768px) {
          .matrix-container {
            margin-left: 0;
            margin-bottom: 20px;
          }
          
          .y-axis-label,
          .y-axis-values,
          .y-axis-arrow,
          .x-axis-arrow {
            display: none;
          }
          
          .matrix-grid {
            grid-template-columns: 1fr;
          }
          
          .street-type-card {
            padding: 16px;
            min-height: 180px;
          }
          
          .x-axis-container {
            display: none;
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
        
        <div class="y-axis-arrow"></div>
        <div class="x-axis-arrow"></div>
        
        <div class="matrix-grid">
          <!-- Row 1: Kõrge liikuvus (Ühendustänavad) -->
          <a href="/tanavatyyp/lihtne-yhendustanav" class="street-type-card bg-red">
            
            <h3 class="card-title">Lihtne ühendustänav</h3>
            <p class="card-description">Magistraal, linna või asula põhitänav või asula piirkondi ühendav, eelkõige läbiliikumiseks mõeldud tänav</p>
           
          </a>
          
          <a href="/tanavatyyp/linlik-yhendustanav" class="street-type-card bg-orange">
            
            <h3 class="card-title">Linlik ühendustänav</h3>
            <p class="card-description">Suure liiklusväärtusega ja keskmise kohaväärtusega tänav, mis ühendab linna erinevaid piirkondi ning pakub mitmekesist linnaruumi kogemust.</p>
           
          </a>
          
          <a href="/tanavatyyp/esinduslik-yhendustanav" class="street-type-card bg-yellow">
           
            <h3 class="card-title">Esinduslik ühendustänav</h3>
            <p class="card-description">Suure liiklusväärtusega ja kõrge kohaväärtusega prestiižne tänav, mis on linna nägu ja avaliku ruumi kese.</p>
            
          </a>
          
          <!-- Row 2: Keskmine liikuvus (Jaotustänavad) -->
          <a href="/tanavatyyp/lihtne-jaotustanav" class="street-type-card bg-blue">
           
            <h3 class="card-title">Lihtne jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja lihtsa kohaväärtusega peamiselt läbiliikumiseks ja juurdepääsuks kasutatav tänav, mille ääres ei asu suure kasutajate arvuga sihtkohti ja ühissõidukipeatuseid.</p>
            
          </a>
          
          <a href="/tanavatyyp/linlik-jaotustanav" class="street-type-card bg-indigo">
            
            <h3 class="card-title">Linlik jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub tasakaalustatud linnaruumi kogemust ja toetab nii liikuvust kui ka kohalikku elu.</p>
           
          </a>
          
          <a href="/tanavatyyp/esinduslik-jaotustanav" class="street-type-card bg-purple">
            
            <h3 class="card-title">Esinduslik jaotustänav</h3>
            <p class="card-description">Keskmise liiklusväärtusega ja kõrge kohaväärtusega kvaliteetne avalik ruum, mis on piirkonna uhkus ja identiteedi kandja.</p>
            
          </a>
          
          <!-- Row 3: Madal liikuvus (Kodutänavad) -->
          <a href="/tanavatyyp/lihtne-kodutanav" class="street-type-card bg-green">
            
            <h3 class="card-title">Lihtne kodutänav</h3>
            <p class="card-description">Kitsad, vähese liiklusega ja hõreda hoonestusega tänavad, eelkõige asumite elukeskkonna olulised osad, millele tuleb ehitamisel ja rekonstrueerimisel olulist tähelepanu pöörata.</p>
           
          </a>
          
          <a href="/tanavatyyp/linlik-kodutanav" class="street-type-card bg-teal">
           
            <h3 class="card-title">Linlik kodutänav</h3>
            <p class="card-description">Madala liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub kvaliteetset elukeskkonda tihedas linnastruktuuris.</p>
           
          </a>
          
          <a href="/tanavatyyp/esinduslik-kodutanav" class="street-type-card bg-emerald">
           
            <h3 class="card-title">Esinduslik kodutänav</h3>
            <p class="card-description">Prestiižne elukeskkond, mis pakub erakordset elukvaliteeti ja on piirkonna uhkus.</p>
           
          </a>
        </div>
        
        <div class="x-axis-container">
          <span class="x-axis-value">Lihtne</span>
          <span class="x-axis-value">Linlik</span>
          <span class="x-axis-value">Esinduslik</span>
          <div class="x-axis-label">Kohaväärtus</div>
        </div>
      </div>
    </div>
  `;
  
  // Asenda script tag maatriksiga
  if (currentScript && currentScript.parentNode) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = matrixHTML;
    currentScript.parentNode.replaceChild(tempDiv.firstElementChild, currentScript);
  } else {
    // Fallback - lisa lehe lõppu
    document.addEventListener('DOMContentLoaded', function() {
      document.body.insertAdjacentHTML('beforeend', matrixHTML);
    });
  }
})();