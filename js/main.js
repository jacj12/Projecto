// Esperamos a que todo el documento HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos con los que vamos a interactuar
    const button = document.getElementById('action-btn');
    const message = document.getElementById('message');

    // Verificamos que los elementos existan para evitar errores
    if (button && message) {
        button.addEventListener('click', () => {
            // Cambiamos el texto y el color al hacer clic
            message.textContent = '¡Excelente! JavaScript y CSS están conectados correctamente 🎉';
            message.style.color = '#10B981'; // Color verde de éxito
            message.style.fontWeight = 'bold';
            
            // Opcional: Desactivar el botón después de usarlo
            button.disabled = true;
            button.style.backgroundColor = '#9CA3AF';
            button.style.cursor = 'not-allowed';
            button.textContent = 'Comprobado';
        });
    }
});
