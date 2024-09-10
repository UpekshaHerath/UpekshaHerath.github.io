import { clsx } from "clsx"
import toast from "react-hot-toast"
import { twMerge } from "tailwind-merge"
import emailjs from '@emailjs/browser';

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function sendToast(message, type) {
  if (type === 'error') {
    toast.error(message, {
      duration: 3000,
      position: 'top-right'
    });
    return;
  } 
  toast.success(message, {
    duration: 4000,
    position: 'top-right'
  });
}

export const sendEmail = (form) => {
  emailjs.sendForm('service_rh243gm', 'template_tznj8q5', form.current, {
    publicKey: 'R5bUziqMip7IBJDuk',
  })
  .then(
    () => {
      sendToast("Email sent successfully !", "success");
    }, 
    (error) => {
      console.log('Email sent failed...', error.text);
      sendToast("Unexpected error !", "error");
    },
  );
  return true;
}

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export const validateMobileNumber = (mobileNumber) => {
  const re = /^\d+$/;
  return re.test(String(mobileNumber));
};