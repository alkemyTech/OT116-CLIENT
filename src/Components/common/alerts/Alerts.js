import Swal from "sweetalert2"
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
export const AlertError = (status,message) => {
    return Toast.fire({
        icon:'error',
        text:`${message}- status: ${status}`
    })
};
