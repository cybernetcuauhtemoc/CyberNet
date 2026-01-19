// 2. Manejo del Formulario de Contacto (WhatsApp)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Obtener valores de los inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // 2. Configurar tu número de WhatsApp (USA FORMATO INTERNACIONAL SIN EL +)
        // Ejemplo: 5216251234567 (52 para México, 1, luego el número a 10 dígitos)
        const MY_PHONE_NUMBER = "5216291012012"; 

        // 3. Estructurar el mensaje para que se vea profesional
        const text = `*¡Nueva Solicitud de Diagnóstico!* 🛡️%0A%0A` +
                     `*Nombre:* ${name}%0A` +
                     `*Correo:* ${email}%0A` +
                     `*Teléfono:* ${phone}%0A` +
                     `*Proyecto:* ${message}`;

        // 4. Crear la URL de WhatsApp
        const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${text}`;

        // 5. Animación visual en el botón antes de redirigir
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando WhatsApp...';
        submitBtn.style.background = 'linear-gradient(45deg, #25D366, #128C7E)'; // Color WhatsApp

        setTimeout(() => {
            // Abrir WhatsApp en una nueva pestaña
            window.open(whatsappUrl, '_blank');
            
            // Resetear formulario
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.removeAttribute('style');
        }, 1500);
    });
}
