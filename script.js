document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de Header al hacer Scroll
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Manejo del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtener valores
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Aquí iría la lógica real de envío (ej. fetch a un backend)
            
            // Simulación de éxito con un estilo más "tech"
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado con Éxito';
            submitBtn.style.background = 'linear-gradient(45deg, #00b09b, #96c93d)'; // Verde éxito

            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.removeAttribute('style'); // Regresar al estilo original
                alert(`Gracias ${name}. Nuestros ingenieros revisarán tu solicitud.`);
            }, 3000);
        });
    }

    // 3. Inicialización de Vanilla Tilt (Efecto 3D en tarjetas)
    // Verifica si la librería se cargó correctamente
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".service-card"), {
            max: 15,           // Inclinación máxima
            speed: 400,        // Velocidad del efecto
            glare: true,       // Añade un destello de luz
            "max-glare": 0.2   // Opacidad del destello
        });
    }
});
