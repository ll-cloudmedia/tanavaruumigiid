// Tänavagiid Navigation - Super.so optimized
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  // Create navigation HTML
  function createNavigation() {
    const navHTML = `
      <div id="tanavagiid-nav" style="position: fixed; top: 0; left: 0; right: 0; z-index: 99999; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #e5e7eb; box-shadow: 0 2px 10px rgba(0,0,0,0.1); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; transition: all 0.3s ease;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 12px 20px; display: flex; align-items: center; justify-content: flex-end; gap: 32px; flex-wrap: wrap;">
          
          <!-- Tänavatüübid Dropdown -->
          <div class="nav-dropdown" style="position: relative; display: inline-block;">
            <div class="nav-trigger" style="padding: 8px 12px; font-size: 16px; cursor: pointer; display: flex; align-items: center; gap: 6px; border-radius: 6px; transition: all 0.2s; color: #374151; font-weight: 500; background: none; border: none;">
              Tänavatüübid 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition: transform 0.3s ease;">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </div>
            
            <div class="nav-dropdown-content" style="position: absolute; top: 100%; right: 0; background: white; border: 1px solid #d1d5db; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); min-width: 600px; z-index: 100000; margin-top: 4px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease;">
              <div style="padding: 20px;">
                <h3 style="margin: 0 0 16px 0; text-align: center; font-size: 18px; font-weight: 600; color: #1f2937;">Vali sobiv tänavatüüp</h3>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                  <a href="/lihtne-uhendustanav" style="padding: 14px; background: linear-gradient(135deg, #fef2f2, #fecaca); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(239, 68, 68, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Lihtne ühendustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Praktilised läbiliikluse lahendused</div>
                  </a>
                  
                  <a href="/linlik-uhendustanav" style="padding: 14px; background: linear-gradient(135deg, #fff7ed, #fed7aa); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(249, 115, 22, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Linlik ühendustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Mitmekesine linnaline keskkond</div>
                  </a>
                  
                  <a href="/esinduslik-uhendustanav" style="padding: 14px; background: linear-gradient(135deg, #fefce8, #fde047); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(234, 179, 8, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Esinduslik ühendustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Strateegiline ühendus kõrge kvaliteediga</div>
                  </a>
                  
                  <a href="/lihtne-jaotustanav" style="padding: 14px; background: linear-gradient(135deg, #eff6ff, #bfdbfe); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(59, 130, 246, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Lihtne jaotustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Liikluse jaotamine asumi kontekstis</div>
                  </a>
                  
                  <a href="/linlik-jaotustanav" style="padding: 14px; background: linear-gradient(135deg, #eef2ff, #c7d2fe); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(99, 102, 241, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Linlik jaotustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Tasakaalus linnaruum</div>
                  </a>
                  
                  <a href="/esinduslik-jaotustanav" style="padding: 14px; background: linear-gradient(135deg, #faf5ff, #d8b4fe); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(139, 92, 246, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Esinduslik jaotustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Kvaliteetne avalik ruum</div>
                  </a>
                  
                  <a href="/lihtne-kodutanav" style="padding: 14px; background: linear-gradient(135deg, #f0fdf4, #bbf7d0); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(34, 197, 94, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Lihtne kodutänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Rahulik elukeskkond</div>
                  </a>
                  
                  <a href="/linlik-kodutanav" style="padding: 14px; background: linear-gradient(135deg, #f0fdfa, #99f6e4); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(6, 182, 212, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Linlik kodutänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Tihe linnastruktuur</div>
                  </a>
                  
                  <a href="/esinduslik-kodutanav" style="padding: 14px; background: linear-gradient(135deg, #ecfdf5, #a7f3d0); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(16, 185, 129, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Esinduslik kodutänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Prestiižne elukeskkond</div>
                  </a>
                </div>
                
                <div style="text-align: center; margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                  <a href="/tanatyyp" style="color: #3b82f6; text-decoration: none; font-weight: 500; font-size: 14px;">Vaata kõiki tänavatüüpe →</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Põhimõtted Dropdown -->
          <div class="nav-dropdown" style="position: relative; display: inline-block;">
            <div class="nav-trigger" style="padding: 8px 12px; font-size: 16px; cursor: pointer; display: flex; align-items: center; gap: 6px; border-radius: 6px; transition: all 0.2s; color: #374151; font-weight: 500;">
              Põhimõtted 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition: transform 0.3s ease;">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </div>
            
            <div class="nav-dropdown-content" style="position: absolute; top: 100%; right: 0; background: white; border: 1px solid #d1d5db; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); min-width: 450px; max-height: 400px; overflow-y: auto; z-index: 100000; margin-top: 4px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease;">
              <div style="padding: 20px;">
                <h3 style="margin: 0 0 16px 0; text-align: center; font-size: 18px; font-weight: 600; color: #1f2937;">Kavandamise põhimõtted</h3>
                
                <div style="display: grid; grid-template-columns: 1fr; gap: 6px;">
                  <a href="/ruumiline-tervikvisoon" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #ef4444;">1. Ruumiline tervikvisoon</a>
                  <a href="/olemasolevad-vaartused" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #f97316;">2. Olemasolevad väärtused</a>
                  <a href="/ruumisaastlikkus" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #eab308;">3. Ruumisäästlikkus</a>
                  <a href="/ohutu-kiirus-andestav-liikumisruum" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #22c55e;">4. Ohutu kiirus ja andestav liikumisruum</a>
                  <a href="/liikumisaktiivsuse-suhtlemise-toetamine" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #06b6d4;">5. Liikumisaktiivsuse ja suhtlemise toetamine</a>
                  <a href="/linnaloodus-ruum-voimalus" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #3b82f6;">6. Linnaloodus kui ruum ja võimalus</a>
                  <a href="/disain-norgimast-kasutajast-lahtuvalt" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #6366f1;">7. Disain nõrgimast kasutajast lähtuvalt</a>
                  <a href="/muretu-jalakaijaruum" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #8b5cf6;">8. Muretu jalakäijaruum</a>
                  <a href="/voimalused-peatumiseks" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #a855f7;">9. Võimalused peatumiseks</a>
                  <a href="/tanavapinna-katted-intuitiivne-kasutus" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #d946ef;">10. Tänavapinna katted ja intuitiivne kasutus</a>
                  <a href="/loodus-pohised-sademeveelahendused" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #ec4899;">11. Looduspõhised sademeveelahendused</a>
                  <a href="/uhistransport-meeldivaks" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #f43f5e;">12. Ühistransport meeldivaks</a>
                  <a href="/rattad-mikroliikurid" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #10b981;">13. Rattad ja mikroliikurid</a>
                  <a href="/tehniline-taristu-tanavahooldus" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #059669;">14. Tehniline taristu ja tänavahooldus</a>
                  <a href="/taktikalised-paindlikud-lahendused" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #0d9488;">15. Taktikalised ja paindlikud lahendused</a>
                </div>
                
                <div style="text-align: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                  <a href="/pohimotted" style="color: #3b82f6; text-decoration: none; font-weight: 500; font-size: 14px;">Vaata kõiki põhimõtteid →</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Teised lingid -->
          <a href="/edulood" style="padding: 8px 12px; text-decoration: none; color: #374151; font-weight: 500; border-radius: 6px; transition: all 0.2s;">Edulood</a>
          <a href="/kiired-voidud" style="padding: 8px 12px; text-decoration: none; color: #374151; font-weight: 500; border-radius: 6px; transition: all 0.2s;">Kiired Võidud</a>
          <a href="/tooristale" style="padding: 8px 12px; text-decoration: none; color: #374151; font-weight: 500; border-radius: 6px; transition: all 0.2s;">Tööristale</a>
          
          <!-- Otsing -->
          <div style="padding: 8px 12px; cursor: pointer; border-radius: 6px; transition: all 0.2s; color: #374151;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: all 0.2s;">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Spacer et sisu ei jääks navigatsiooni alla -->
      <div style="height: 70px;"></div>
    `;
    
    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Add body padding to prevent content overlap
    document.body.style.paddingTop = '70px';
  }
  
  // Add event listeners for dropdowns
  function addEventListeners() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.nav-trigger');
      const content = dropdown.querySelector('.nav-dropdown-content');
      const arrow = trigger.querySelector('svg');
      
      let isOpen = false;
      
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other dropdowns
        dropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            const otherContent = otherDropdown.querySelector('.nav-dropdown-content');
            const otherArrow = otherDropdown.querySelector('.nav-trigger svg');
            otherContent.style.opacity = '0';
            otherContent.style.visibility = 'hidden';
            otherContent.style.transform = 'translateY(-10px)';
            otherArrow.style.transform = 'rotate(0deg)';
          }
        });
        
        // Toggle current dropdown
        if (!isOpen) {
          content.style.opacity = '1';
          content.style.visibility = 'visible';
          content.style.transform = 'translateY(0)';
          arrow.style.transform = 'rotate(180deg)';
          isOpen = true;
        } else {
          content.style.opacity = '0';
          content.style.visibility = 'hidden';
          content.style.transform = 'translateY(-10px)';
          arrow.style.transform = 'rotate(0deg)';
          isOpen = false;
        }
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
          content.style.opacity = '0';
          content.style.visibility = 'hidden';
          content.style.transform = 'translateY(-10px)';
          arrow.style.transform = 'rotate(0deg)';
          isOpen = false;
        }
      });
    });
    
    // Add hover effects
    const navLinks = document.querySelectorAll('#tanavagiid-nav a, .nav-trigger');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.background = '#f9fafb';
      });
      
      link.addEventListener('mouseleave', function() {
        if (!this.classList.contains('nav-trigger')) {
          this.style.background = '';
        } else {
          this.style.background = 'none';
        }
      });
    });
    
    // Search hover effect
    const searchIcon = document.querySelector('#tanavagiid-nav svg');
    if (searchIcon) {
      const searchContainer = searchIcon.parentElement;
      searchContainer.addEventListener('mouseenter', function() {
        this.style.background = '#f9fafb';
        searchIcon.style.transform = 'scale(1.1)';
        searchIcon.style.color = '#3b82f6';
      });
      
      searchContainer.addEventListener('mouseleave', function() {
        this.style.background = '';
        searchIcon.style.transform = 'scale(1)';
        searchIcon.style.color = '#374151';
      });
    }
  }
  
  // Add scroll effect
  function addScrollEffect() {
    const nav = document.getElementById('tanavagiid-nav');
    if (!nav) return;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.backdropFilter = 'blur(15px)';
      } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
      }
    });
  }
  
  // Add mobile responsiveness
  function addMobileStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        #tanavagiid-nav > div {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 16px !important;
          padding: 12px 16px !important;
        }
        
        .nav-dropdown-content {
          min-width: 320px !important;
          max-width: 90vw !important;
          left: 50% !important;
          transform: translateX(-50%) translateY(-10px) !important;
        }
        
        .nav-dropdown:hover .nav-dropdown-content {
          transform: translateX(-50%) translateY(0) !important;
        }
        
        .nav-dropdown-content > div > div[style*="grid-template-columns: repeat(3, 1fr)"] {
          grid-template-columns: 1fr !important;
        }
        
        body {
          padding-top: 120px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Initialize everything
  ready(function() {
    createNavigation();
    addEventListeners();
    addScrollEffect();
    addMobileStyles();
  });
  
})();