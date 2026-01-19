// 2. Manejo del Formulario de Contacto (WhatsApp - Compatible con iOS)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Obtener valores
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const MY_PHONE_NUMBER = "5216291012012"; // Tu número aquí

        // 2. Estructurar el mensaje
        const text = `*¡Nueva Solicitud de Diagnóstico!* 🛡️%0A%0A` +
                     `*Nombre:* ${name}%0A` +
                     `*Correo:* ${email}%0A` +
                     `*Teléfono:* ${phone}%0A` +
                     `*Proyecto:* ${message}`;

        const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${text}`;

        // 3. CAMBIO CLAVE PARA iOS: 
        // En lugar de window.open con un timer, usamos window.location para redirigir 
        // en la misma pestaña o abrimos inmediatamente.
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.innerHTML = '<i class="fas fa-whatsapp"></i> Abriendo WhatsApp...';
        submitBtn.style.background = '#25D366';

        // Redirigir directamente. Esto Safari NO lo bloquea porque es 
        // consecuencia directa del click en el botón "Submit".
        window.location.href = whatsappUrl;

        // Opcional: Limpiar el formulario después de un momento
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = 'ENVIAR SOLICITUD <i class="fas fa-paper-plane"></i>';
            submitBtn.removeAttribute('style');
        }, 500);
    });
}
