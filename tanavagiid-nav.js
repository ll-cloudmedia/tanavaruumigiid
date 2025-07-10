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

                  <a href="https://tanavagiid.ee" style="padding: 8px 12px; text-decoration: none; color: #374151; font-weight: 500; border-radius: 6px; transition: all 0.2s;">Avaleht</a>

          
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
                  <a href="/tanavatyybid/lihtne-yhendustanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #fefce8, #fde047)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #fefce8, #fde047); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(239, 68, 68, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Lihtne ühendustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Praktilised läbiva liikluse lahendused</div>
                  </a>
                  
                  <a href="/tanavatyybid/linlik-yhendustanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #fff7ed, #fed7aa)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #fff7ed, #fed7aa); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(249, 115, 22, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Linlik ühendustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Mitmekesine linnaline keskkond</div>
                  </a>
                  
                  <a href="/tanavatyybid/esinduslik-yhendustanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #fef2f2, #fecaca)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #fef2f2, #fecaca); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(234, 179, 8, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Esinduslik ühendustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Strateegiline ühendus kõrge kvaliteediga</div>
                  </a>
                  
                  <a href="/tanavatyybid/lihtne-jaotustanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #eff6ff, #bfdbfe)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #eff6ff, #bfdbfe); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(59, 130, 246, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Lihtne jaotustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Liikluse jaotamine asumis</div>
                  </a>
                  
                  <a href="/tanavatyybid/linlik-jaotustanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #faf5ff, #d8b4fe)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #faf5ff, #d8b4fe); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(99, 102, 241, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Linlik jaotustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Tasakaalus linnaruum</div>
                  </a>
                  
                  <a href="/tanavatyybid/esinduslik-jaotustanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #eef2ff, #c7d2fe)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #eef2ff, #c7d2fe); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(139, 92, 246, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Esinduslik jaotustänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Kvaliteetne avalik ruum</div>
                  </a>
                  
                  <a href="/tanavatyybid/lihtne-kodutanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #ecfdf5, #a7f3d0)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #ecfdf5, #a7f3d0); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(34, 197, 94, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Lihtne kodutänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Rahulik elukeskkond</div>
                  </a>
                  
                  <a href="/tanavatyybid/linlik-kodutanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #f0fdf4, #bbf7d0)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #f0fdf4, #bbf7d0); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(6, 182, 212, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Linlik kodutänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Tihe linnastruktuur</div>
                  </a>
                  
                  <a href="/tanavatyybid/esinduslik-kodutanav" class="street-type-card" data-original-bg="linear-gradient(135deg, #f0fdfa, #99f6e4)" style="padding: 12px 14px 8px 14px; background: linear-gradient(135deg, #f0fdfa, #99f6e4); border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; border: 1px solid rgba(16, 185, 129, 0.2);">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: #1f2937;">Esinduslik kodutänav</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">Prestiižne elukeskkond</div>
                  </a>
                </div>
                
                <div style="text-align: center; margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                  <a href="/tanavatyybid" style="color: #3b82f6; text-decoration: none; font-weight: 500; font-size: 14px;">Vaata kõiki tänavatüüpe →</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Põhimõtted Dropdown -->
          <div class="nav-dropdown" style="position: relative; display: inline-block;">
            <div class="nav-trigger" style="padding: 8px 12px; font-size: 16px; cursor: pointer; display: flex; align-items: center; gap: 6px; border-radius: 6px; transition: all 0.2s; color: #374151; font-weight: 500;">
              Juhised 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition: transform 0.3s ease;">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </div>
            
            <div class="nav-dropdown-content" style="position: absolute; top: 100%; right: 0; background: white; border: 1px solid #d1d5db; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); min-width: 450px; max-height: 400px; overflow-y: auto; z-index: 100000; margin-top: 4px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease;">
              <div style="padding: 20px;">
                <h3 style="margin: 0 0 16px 0; text-align: center; font-size: 18px; font-weight: 600; color: #1f2937;">Kavandamise põhimõtted</h3>
                
                <div style="display: grid; grid-template-columns: 1fr; gap: 6px;">
                  <a href="/juhised/ruumiline-tervikvisoon" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #ef4444;">1. Ruumiline tervikvisoon</a>
                  <a href="/juhised/olemasolevad-vaartused" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #f97316;">2. Olemasolevad väärtused</a>
                  <a href="/juhised/ruumisaastlikkus" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #eab308;">3. Ruumisäästlikkus</a>
                  <a href="/juhised/ohutu-kiirus-andestav-liikumisruum" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #22c55e;">4. Ohutu kiirus ja andestav liikumisruum</a>
                  <a href="/juhised/liikumisaktiivsuse-suhtlemise-toetamine" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #06b6d4;">5. Liikumisaktiivsuse ja suhtlemise toetamine</a>
                  <a href="/juhised/linnalooduse-eesoigus" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #3b82f6;">6. Linnaloodus kui ruum ja võimalus</a>
                  <a href="/juhised/disaini-norgima-kasutaja-jargi" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #6366f1;">7. Disain nõrgimast kasutajast lähtuvalt</a>
                  <a href="/juhised/muretu-jalakaijaruum" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #8b5cf6;">8. Muretu jalakäijaruum</a>
                  <a href="/juhised/voimalused-peatumiseks" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #a855f7;">9. Võimalused peatumiseks</a>
                  <a href="/juhised/tanavapinna-katted-intuitiivne-kasutus" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #d946ef;">10. Tänavapinna katted ja intuitiivne kasutus</a>
                  <a href="/juhised/looduspohised-sademeveelahendused" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #ec4899;">11. Looduspõhised sademeveelahendused</a>
                  <a href="/juhised/uhistransport-meeldivaks" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #f43f5e;">12. Ühistransport meeldivaks</a>
                  <a href="/juhised/rattad-mikroliikurid" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #10b981;">13. Rattad ja mikroliikurid</a>
                  <a href="/juhised/tehniline-taristu-tanavahooldus" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #059669;">14. Tehniline taristu ja tänavahooldus</a>
                  <a href="/juhised/taktikalised-paindlikud-lahendused" style="padding: 10px 12px; background: #f9fafb; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; transition: all 0.2s; display: block; border-left: 3px solid #0d9488;">15. Taktikalised ja paindlikud lahendused</a>
                </div>
                
                <div style="text-align: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                  <a href="/juhised" style="color: #3b82f6; text-decoration: none; font-weight: 500; font-size: 14px;">Vaata kõiki 15 juhist →</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Teised lingid -->
          <a href="/kiired-voidud" style="padding: 8px 12px; text-decoration: none; color: #374151; font-weight: 500; border-radius: 6px; transition: all 0.2s;">Kiired võidud</a>
                    <a href="/giid" style="padding: 8px 12px; text-decoration: none; color: #374151; font-weight: 500; border-radius: 6px; transition: all 0.2s;">Kogu giid</a>

          <a href="/ruumijuhtimine" style="padding: 8px 12px; text-decoration: none; color: #374151; font-weight: 500; border-radius: 6px; transition: all 0.2s;">Ruumijuhtimine</a>
          
          <!-- Otsing -->
          
        </div>
      </div>
      
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
    
    // Add hover effects - FIXED VERSION
    const navLinks = document.querySelectorAll('#tanavagiid-nav a:not(.street-type-card), .nav-trigger');
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
    
    // Special hover effects for street type cards - FIXED
    const streetTypeCards = document.querySelectorAll('.street-type-card');
    streetTypeCards.forEach(card => {
      const originalBg = card.getAttribute('data-original-bg');
      
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
        // Ensure background stays as original gradient
        this.style.background = originalBg;
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
