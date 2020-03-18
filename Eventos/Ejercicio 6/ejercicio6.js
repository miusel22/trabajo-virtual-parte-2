var body = document.querySelector('body');

function cambiarcolor(event) {
  if (event.keyCode === 82) {
    body.classList.add('rojo');
    body.classList.remove('morado');
  }

  if (event.keyCode === 77 ) {
    body.classList.add('morado');
    body.classList.remove('rojo');
  }
}

document.addEventListener('keydown', cambiarcolor);