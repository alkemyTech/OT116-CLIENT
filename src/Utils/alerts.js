import Swal from "sweetalert2";

const showErrorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
};

const showSuccessAlert = (message) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
};

const showInformationAlert = (message) =>{
  Swal.fire({
    icon: "info",
    title: "Information",
    text: message,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
}
export { showErrorAlert, showSuccessAlert, showInformationAlert };
