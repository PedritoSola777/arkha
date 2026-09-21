/* ============================================
   Widget "Asistente Virtual" — lógica de apertura/cierre
   Requiere el markup:
   <div class="fab-wrap">
     <div class="fab-card" id="fabMenu" role="dialog" aria-label="Asistente virtual" aria-hidden="true">
       <button class="fab-card-close" type="button" id="fabClose" aria-label="Cerrar">✕</button>
       ...contenido...
     </div>
     <button class="fab" type="button" id="fabBtn" aria-expanded="false">...</button>
   </div>
============================================ */

(function(){
  const fabBtn = document.getElementById('fabBtn');
  const fabMenu = document.getElementById('fabMenu');
  const fabClose = document.getElementById('fabClose');

  if(!fabBtn || !fabMenu || !fabClose) return;

  function setFabOpen(isOpen){
    fabMenu.classList.toggle('open', isOpen);
    fabMenu.setAttribute('aria-hidden', String(!isOpen));
    fabBtn.setAttribute('aria-expanded', String(isOpen));
  }

  fabBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    setFabOpen(!fabMenu.classList.contains('open'));
  });

  fabClose.addEventListener('click', (e)=>{
    e.stopPropagation();
    setFabOpen(false);
  });

  document.addEventListener('click', (e)=>{
    if(!fabMenu.contains(e.target) && !fabBtn.contains(e.target)){
      setFabOpen(false);
    }
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') setFabOpen(false);
  });
})();