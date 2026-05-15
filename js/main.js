// 1. Activamos el plugin de scroll
gsap.registerPlugin(ScrollTrigger);

// 2. Creamos la animación
gsap.to(".js-fill span", {
  backgroundSize: "200% 200%", // Esto hace que el color se desplace
  ease: "none",                // Movimiento fluido sin aceleración
  scrollTrigger: {
    trigger: ".philosophy-statement", // El elemento que manda
    start: "top 80%",                // Empieza cuando el texto asoma por abajo
    end: "bottom 40%",               // Termina antes de que se vaya por arriba
    scrub: true                      // Sincroniza el color con tu dedo en el scroll
  }
});












/*HEADER*/


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Detectar scroll
    window.addEventListener('scroll', handleScroll);
    
    // Ejecutar una vez al cargar por si la página ya está abajo
    handleScroll();
});





























/*PRODUCT*/



document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.gallery-item').forEach(img => observer.observe(img));
});


















// Reloj Madrid

function updateClock() {
    const time = new Intl.DateTimeFormat('es-ES', { 
        timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', hour12: false 
    }).format(new Date());
    document.getElementById('madrid-time').innerText = time;
}
setInterval(updateClock, 1000);
updateClock();

// Ocultar Header al llegar al Footer
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header'); // Asegúrate que tu header tenga esta clase
    const footer = document.querySelector('#tysta-footer');
    if (footer.getBoundingClientRect().top < window.innerHeight) {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.4s ease';
    } else {
        header.style.transform = 'translateY(0)';
    }
});










/*FOOTER*/


window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    const footer = document.querySelector('#tysta-footer');

    if (header && footer) {
        // Calculamos la posición del footer respecto a la ventana
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si la parte superior del footer entra en la pantalla
        if (footerTop < windowHeight) {
            header.style.transform = 'translateY(-100%)';
            header.style.opacity = '0';
            header.style.pointerEvents = 'none';
        } else {
            // Cuando volvemos a subir y el footer sale de la vista
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
            header.style.pointerEvents = 'all';
        }
    }
});


























// Seleccionamos los elementos

const menuBtn = document.querySelector('.icon-menu');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Función para abrir
menuBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el enlace haga scroll
    mobileMenu.style.width = "100%";
});

// Función para cerrar
closeBtn.addEventListener('click', () => {
    mobileMenu.style.width = "0%";
});