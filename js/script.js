// MODALES
const intro = document.getElementById('intro');
const modal = document.getElementById('modal');
const btnSaber = document.getElementById('btnSaber');
const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const contenido = document.getElementById('contenido');

btnSaber.onclick = () => { intro.style.display='none'; modal.classList.add('activo'); };
btnSi.onclick = () => { modal.classList.remove('activo'); document.getElementById('mensajeSi').classList.add('activo'); };
btnNo.onclick = () => { modal.classList.remove('activo'); document.getElementById('mensajeNo').classList.add('activo'); };

function cerrarMensaje() { document.getElementById('mensajeSi').classList.remove('activo'); contenido.classList.remove('hidden'); contenido.style.display='block'; }

// LINTERNAS
function crearLinterna() {
  const l = document.createElement('div');
  l.className='linterna';
  l.style.left = Math.random()*100+'vw';
  l.style.animationDuration = 6+Math.random()*4+'s';
  document.body.appendChild(l);
  setTimeout(()=>l.remove(),10000);
}
setInterval(crearLinterna,900);




document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.intro');

  if (localStorage.getItem('introAceptada') === 'true') {
    intro.style.display = 'none';
  }
});





