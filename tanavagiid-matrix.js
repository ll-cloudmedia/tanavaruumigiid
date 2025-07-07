(function() {
  // Leia script tag ja lisa maatriks selle asemele
  const scripts = document.getElementsByTagName('script');
  const currentScript = scripts[scripts.length - 1];
  
  // Loo maatriksi HTML
  const matrixHTML = `
    <div id="street-types-matrix" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      
      <div class="matrix-container" style="position: relative; margin-left: 80px; margin-top: 60px;">
        
        <!-- Y-telje täispikk nool -->
        <svg style="position: absolute; left: -60px; top: -40px; width: 40px; height: calc(100% + 80px); z-index: 1;">
          <defs>
            <marker id="arrowhead-y" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="0">
              <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
            </marker>
          </defs>
          <line x1="20" y1="100%" x2="20" y2="0" stroke="#374151" stroke-width="2" marker-end="url(#arrowhead-y)" />
        </svg>
        
        <!-- X-telje täispikk nool -->
        <svg style="position: absolute; left: -40px; bottom: -60px; width: calc(100% + 80px); height: 40px; z-index: 1;">
          <defs>
            <marker id="arrowhead-x" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="90">
              <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
            </marker>
          </defs>
          <line x1="0" y1="20" x2="100%" y2="20" stroke="#374151" stroke-width="2" marker-end="url(#arrowhead-x)" />
        </svg>
        
        <!-- Y-telje silt -->
        <div style="position: absolute; left: -50px; top: 50%; transform: translateY(-50%) rotate(-90deg); font-size: 1.125rem; font-weight: 600; color: #374151; white-space: nowrap;">
          Liikuvus
        </div>
        
        <!-- Y-telje väärtused -->
        <div style="position: absolute; left: -90px; top: 0; height: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: center;">
          <span style="font-size: 0.875rem; color: #64748b; transform: translateY(-50%);">Kõrge</span>
          <span style="font-size: 0.875rem; color: #64748b; transform: translateY(-50%);">Keskmine</span>
          <span style="font-size: 0.875rem; color: #64748b; transform: translateY(-50%);">Madal</span>
        </div>
        
        <!-- Maatriksi grid -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
          
          <!-- Row 1: Ühendustänavad -->
          <a href="/tanavatyyp/lihtne-yhendustanav" style="background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Madal</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Lihtne ühendustänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Magistraal, linna või asula põhitänav või asula piirkondi ühendav, eelkõige läbiliikumiseks mõeldud tänav</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-yhendustanav" style="background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Keskmine</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Linlik ühendustänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Suure liiklusväärtusega ja keskmise kohaväärtusega tänav, mis ühendab linna erinevaid piirkondi ning pakub mitmekesist linnaruumi kogemust.</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-yhendustanav" style="background: linear-gradient(135deg, #fefce8 0%, #fde047 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Kõrge</span>
              <span>Kohaväärtus: Kõrge</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Esinduslik ühendustänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Suure liiklusväärtusega ja kõrge kohaväärtusega prestiižne tänav, mis on linna nägu ja avaliku ruumi kese.</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <!-- Row 2: Jaotustänavad -->
          <a href="/tanavatyyp/lihtne-jaotustanav" style="background: linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Madal</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Lihtne jaotustänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Keskmise liiklusväärtusega ja lihtsa kohaväärtusega peamiselt läbiliikumiseks ja juurdepääsuks kasutatav tänav, mille ääres ei asu suure kasutajate arvuga sihtkohti ja ühissõidukipeatuseid.</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-jaotustanav" style="background: linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Keskmine</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Linlik jaotustänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Keskmise liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub tasakaalustatud linnaruumi kogemust ja toetab nii liikuvust kui ka kohalikku elu.</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-jaotustanav" style="background: linear-gradient(135deg, #faf5ff 0%, #d8b4fe 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Keskmine</span>
              <span>Kohaväärtus: Kõrge</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Esinduslik jaotustänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Keskmise liiklusväärtusega ja kõrge kohaväärtusega kvaliteetne avalik ruum, mis on piirkonna uhkus ja identiteedi kandja.</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <!-- Row 3: Kodutänavad -->
          <a href="/tanavatyyp/lihtne-kodutanav" style="background: linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Madal</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Lihtne kodutänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Kitsad, vähese liiklusega ja hõreda hoonestusega tänavad, eelkõige asumite elukeskkonna olulised osad, millele tuleb ehitamisel ja rekonstrueerimisel olulist tähelepanu pöörata.</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/linlik-kodutanav" style="background: linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Keskmine</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Linlik kodutänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Madala liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub kvaliteetset elukeskkonda tihedas linnastruktuuris.</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
          
          <a href="/tanavatyyp/esinduslik-kodutanav" style="background: linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 200px;">
            <div style="display: none;">
              <span>Liikuvus: Madal</span>
              <span>Kohaväärtus: Kõrge</span>
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Esinduslik kodutänav</h3>
            <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Prestiižne elukeskkond, mis pakub erakordset elukvaliteeti ja on piirkonna uhkus.</p>
            <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
              <span>Vaata juhiseid ➡️</span>
            </div>
          </a>
        </div>
        
        <!-- X-telje silt ja väärtused -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px;">
          <span style="font-size: 0.875rem; color: #64748b;">Lihtne</span>
          <span style="font-size: 1.125rem; font-weight: 600; color: #374151;">Kohaväärtus</span>
          <span style="font-size: 0.875rem; color: #64748b;">Esinduslik</span>
        </div>
      </div>
      
      <style>
        #street-types-matrix a:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          text-decoration: none;
          color: inherit;
        }
        
        @media (max-width: 768px) {
          #street-types-matrix .matrix-container {
            margin-left: 0 !important;
            margin-top: 20px !important;
          }
          
          #street-types-matrix svg {
            display: none !important;
          }
          
          #street-types-matrix div[style*="position: absolute"][style*="left: -50px"] {
            display: none !important;
          }
          
          #street-types-matrix div[style*="position: absolute"][style*="left: -90px"] {
            display: none !important;
          }
          
          #street-types-matrix div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          #street-types-matrix div[style*="display: none"] {
            display: flex !important;
            justify-content: space-between;
            font-size: 0.75rem;
            color: #64748b;
            margin-bottom: 12px;
          }
          
          #street-types-matrix div[style*="display: none"] span {
            background: #f8fafc;
            padding: 2px 6px;
            border-radius: 4px;
          }
        }
      </style>
    </div>
  `;
  
  // Asenda script tag maatriksiga
  const matrixDiv = document.createElement('div');
  matrixDiv.innerHTML = matrixHTML;
  currentScript.parentNode.replaceChild(matrixDiv.firstElementChild, currentScript);
})();
