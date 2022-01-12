import swal from 'sweetalert2';

export function alertConfirm(title, text) {
  swal.fire({
    title,
    text,
    icon: 'info',
    showDenyButton: true,
    confirmButtonText: 'Continuar',
    denyButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      swal.fire('Realizado con éxito!', '', 'success');
    } else if (result.isDenied) {
      swal.fire('Cancelado', '', 'info');
    }
  });
}

export function alertInfo(title, text, icon) {
  swal.fire({
    title,
    text,
    icon,
  });
}
