const menuIcono = document.querySelector('#icono-menu');
const menuList= document.querySelector('#menuList');
const menuCont = document.querySelector('.menu-cont');
const inicioList = document.querySelector('.inicioList');
const miList = document.querySelector('.miList');
const techList= document.querySelector('.techList');
const projectList = document.querySelector('.projectList')

menuIcono.addEventListener('click', (e) =>{
    menuList.classList.toggle('active')
    document.body.classList.toggle('opacity')
})


inicioList.addEventListener('click', (e)=>{
	menuList.classList.toggle('active')
	document.body.classList.toggle('opacity')
})

miList.addEventListener('click', (e)=>{
	menuList.classList.toggle('active')
	document.body.classList.toggle('opacity')
})

techList.addEventListener('click', (e)=>{
	menuList.classList.toggle('active')
	document.body.classList.toggle('opacity')
})
projectList.addEventListener('click', (e)=>{
	menuList.classList.toggle('active')
	document.body.classList.toggle('opacity')
})

const typed = new Typed('.typed', {
    strings: [
    '<i class="front">Frontend</i>', 
    '<i class="front">Creativo</i>', 
    '<i class="front">Apasionado</i>'],

    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
})