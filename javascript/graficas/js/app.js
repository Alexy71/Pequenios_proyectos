
function prueba(){
    Highchart.chart('#modal_graficasInside'),{
        chart:{
            type:'line'
        },{
            title:{
                text: "valores mensuales"
            }
        }
    };

}

/*MODAL */

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.querySelector('.main-modal');
    const closeButton = document.querySelectorAll('.modal-close');

    const modalClose = () => {
        modal.classList.remove('fadeIn');
        modal.classList.add('fadeOut');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }

    const openModal = () => {
        modal.classList.remove('fadeOut');
        modal.classList.add('fadeIn');
        modal.style.display = 'flex';
    }

    // Asigna los eventos de cierre a todos los botones de cerrar
    closeButton.forEach(button => {
        button.addEventListener('click', modalClose);
    });

    // Cierra el modal al hacer clic fuera de su contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modalClose();
        }
    });

    // Asegura que el modal esté oculto al inicio
    modal.style.display = 'none';

    // Maneja el evento del botón para abrir el modal
    $("#btn_Columnas").click(function(){
        alert("boton");
    })
    $("#btn_Lineas").click(function() {
        openModal();
        prueba();
    });

});
