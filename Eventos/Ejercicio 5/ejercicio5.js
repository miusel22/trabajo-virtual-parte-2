const isra = document.querySelector('.teacher--Juanito');
const carlos = document.querySelector('.teacher--Carlitos');
const nasi = document.querySelector('.teacher--Miguel');

function faveTeacher(event) {
    const chosenTeacher = event.currentTarget;
    if (chosenTeacher.classList.contains('teacher--selected')) {
        chosenTeacher.classList.remove('teacher--selected');
        chosenTeacher.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        chosenTeacher.classList.add('teacher--selected');
        chosenTeacher.querySelector('.favorite').innerHTML = 'Quitar';
    }

}

isra.addEventListener('click', faveTeacher);
carlos.addEventListener('click', faveTeacher);
nasi.addEventListener('click', faveTeacher);