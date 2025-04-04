function filterProducts(category, event) {
    // Guardar la categoría seleccionada en localStorage
    localStorage.setItem('currentSection', category);

    // Ocultar todas las secciones
    document.querySelectorAll('.product-list').forEach(section => {
        section.classList.remove('active-section');
    });

    // Mostrar la sección seleccionada con animación
    setTimeout(() => {
        document.getElementById(category).classList.add('active-section');
        updateBreadcrumb(category);
    }, 300);

    // Remover la clase activa de todos los botones y asignarla al seleccionado
    document.querySelectorAll('.btn').forEach(button => {
        button.classList.remove('active');
    });

    if (event) {
        event.target.classList.add('active');
    }
}

function loadSection() {
    let savedSection = localStorage.getItem('currentSection');

    if (savedSection) {
        // Si hay una sección guardada, activarla
        document.getElementById(savedSection).classList.add('active-section');
        document.querySelector(`.btn[data-category="${savedSection}"]`)?.classList.add('active');
        updateBreadcrumb(savedSection);
    } else {
        // Si no hay una sección guardada, mostrar el historial sin una categoría activa
        updateBreadcrumb('');
    }
}

function updateBreadcrumb(category) {
    let breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
        <a href="#">Telecomunicaciones e IT ></a>
        <a href="#">Gabinetes ></a>
        ${category ? `<span class="active">${category.replace('-', ' ')}</span>` : ''}
    `;
}

// BORRAR EL HISTORIAL CUANDO SE CIERRA LA PÁGINA
window.addEventListener("beforeunload", function () {
    localStorage.removeItem("currentSection");
});
