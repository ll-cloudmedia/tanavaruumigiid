(function() {
  // Find the current script tag
  const currentScript = document.currentScript;
  
  // Create the matrix HTML
  const matrixHTML = `
<div id="street-types-matrix" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  
  <div class="matrix-container" style="position: relative; margin-left: 60px;">
    
    <!-- Y-axis with arrow -->
    <div class="y-axis-label" style="position: absolute; left: -50px; top: 50%; transform: translateY(-50%) rotate(-90deg); font-size: 1.125rem; font-weight: 600; color: #374151; white-space: nowrap; display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 20px; transform: rotate(90deg);">↑</span>
      Liikuvus
    </div>
    
    <div class="y-axis-values" style="position: absolute; left: -90px; top: 0; height: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: center;">
      <span class="y-axis-value" style="font-size: 0.875rem; color: #64748b; transform: translateY(-50%);">Kõrge</span>
      <span class="y-axis-value" style="font-size: 0.875rem; color: #64748b; transform: translateY(-50%);">Keskmine</span>
      <span class="y-axis-value" style="font-size: 0.875rem; color: #64748b; transform: translateY(-50%);">Madal</span>
    </div>
    
    <div class="matrix-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
      
      <!-- Row 1: High Mobility (Ühendustänavad) -->
      <a href="/tanavatyyp/lihtne-yhendustanav" style="background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Kõrge</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Madal</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Lihtne ühendustänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Magistraal, linna või asula põhitänav või asula piirkondi ühendav, eelkõige läbiliikumiseks mõeldud tänav</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
      
      <a href="/tanavatyyp/linlik-yhendustanav" style="background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Kõrge</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Keskmine</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Linlik ühendustänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Suure liiklusväärtusega ja keskmise kohaväärtusega tänav, mis ühendab linna erinevaid piirkondi ning pakub mitmekesist linnaruumi kogemust.</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
      
      <a href="/tanavatyyp/esinduslik-yhendustanav" style="background: linear-gradient(135deg, #fefce8 0%, #fde047 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Kõrge</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Kõrge</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Esinduslik ühendustänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Suure liiklusväärtusega ja kõrge kohaväärtusega prestiižne tänav, mis on linna nägu ja avaliku ruumi kese.</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
      
      <!-- Row 2: Medium Mobility (Jaotustänavad) -->
      <a href="/tanavatyyp/lihtne-jaotustanav" style="background: linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Keskmine</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Madal</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Lihtne jaotustänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Keskmise liiklusväärtusega ja lihtsa kohaväärtusega peamiselt läbiliikumiseks ja juurdepääsuks kasutatav tänav, mille ääres ei asu suure kasutajate arvuga sihtkohti ja ühissõidukipeatuseid.</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
      
      <a href="/tanavatyyp/linlik-jaotustanav" style="background: linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Keskmine</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Keskmine</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Linlik jaotustänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Keskmise liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub tasakaalustatud linnaruumi kogemust ja toetab nii liikuvust kui ka kohalikku elu.</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
      
      <a href="/tanavatyyp/esinduslik-jaotustanav" style="background: linear-gradient(135deg, #faf5ff 0%, #d8b4fe 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Keskmine</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Kõrge</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Esinduslik jaotustänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Keskmise liiklusväärtusega ja kõrge kohaväärtusega kvaliteetne avalik ruum, mis on piirkonna uhkus ja identiteedi kandja.</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
      
      <!-- Row 3: Low Mobility (Kodutänavad) -->
      <a href="/tanavatyyp/lihtne-kodutanav" style="background: linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Madal</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Madal</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Lihtne kodutänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Kitsad, vähese liiklusega ja hõreda hoonestusega tänavad, eelkõige asumite elukeskkonna olulised osad, millele tuleb ehitamisel ja rekonstrueerimisel olulist tähelepanu pöörata.</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
      
      <a href="/tanavatyyp/linlik-kodutanav" style="background: linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Madal</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Keskmine</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Linlik kodutänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Madala liiklusväärtusega ja keskmise kohaväärtusega tänav, mis pakub kvaliteetset elukeskkonda tihedas linnastruktuuris.</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
      
      <a href="/tanavatyyp/esinduslik-kodutanav" style="background: linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; display: flex; overflow: hidden; flex-direction: column; justify-content: space-between; height: 100%;">
        <div class="mobile-info" style="display: none; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-bottom: 12px;">
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Liikuvus: Madal</span>
          <span style="background: #f8fafc; padding: 2px 6px; border-radius: 4px;">Kohaväärtus: Kõrge</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 8px; line-height: 1.4;">Esinduslik kodutänav</h3>
        <p style="color: #374151; font-size: 0.875rem; margin-bottom: 16px; line-height: 1.5;">Prestiižne elukeskkond, mis pakub erakordset elukvaliteeti ja on piirkonna uhkus.</p>
        <div style="margin-top: auto; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; font-weight: bold;">
          <span>Vaata juhiseid ➡️</span>
        </div>
      </a>
    </div>
    
    <!-- X-axis with arrow -->
    <div class="x-axis-container" style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px;">
      <span style="font-size: 0.875rem; color: #64748b;">Lihtne</span>
      <div style="font-size: 1.125rem; font-weight: 600; color: #374151; display: flex; align-items: center; gap: 8px;">
        Kohaväärtus
        <span style="font-size: 20px;">→</span>
      </div>
      <span style="font-size: 0.875rem; color: #64748b;">Esinduslik</span>
    </div>
  </div>
  
  <style>
    /* Hover effects */
    #street-types-matrix a:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      text-decoration: none;
      color: inherit;
    }
    
    /* Mobile responsive */
    @media (max-width: 768px) {
      #street-types-matrix .matrix-container {
        margin-left: 0;
      }
      
      #street-types-matrix .y-axis-label,
      #street-types-matrix .y-axis-values {
        display: none;
      }
      
      #street-types-matrix .matrix-grid {
        grid-template-columns: 1fr;
      }
      
      #street-types-matrix .mobile-info {
        display: flex !important;
      }
    }
  </style>
</div>
  `;
  
  // Insert the matrix HTML right after the current script
  if (currentScript && currentScript.parentNode) {
    const matrixDiv = document.createElement('div');
    matrixDiv.innerHTML = matrixHTML;
    currentScript.parentNode.insertBefore(matrixDiv.firstElementChild, currentScript.nextSibling);
  } else {
    // Fallback: append to body
    document.body.insertAdjacentHTML('beforeend', matrixHTML);
  }
})();
