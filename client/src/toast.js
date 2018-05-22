import {
  ToastContainer,
  toast
} from 'react-toastify';

export const getToast = (text) => {
  const new_toast = toast(text, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: true,
    type: toast.TYPE.INFO,
    closeButton: false
  });
  return new_toast;
};
