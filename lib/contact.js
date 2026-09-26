import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export function sendToast(message, type) {
  if (type === 'error') {
    toast.error(message, {
      duration: 5000,
      position: 'top-right'
    });
    return;
  } 
  toast.success(message, {
    duration: 4000,
    position: 'top-right'
  });
}

// resolves true only once EmailJS confirms the message was sent
export const sendEmail = async (form) => {
  try {
    await emailjs.sendForm('service_rh243gm', 'template_tznj8q5', form.current, {
      publicKey: 'R5bUziqMip7IBJDuk',
    });
    sendToast("Message sent successfully!", "success");
    return true;
  } catch (error) {
    console.error('Email send failed...', error?.status, error?.text || error);
    sendToast(
      "Couldn't send your message. Please email me directly at upekshah.official@gmail.com",
      "error"
    );
    return false;
  }
}

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// digits with an optional leading +, allowing spaces, dashes and brackets (e.g. +94 77 312 8452)
export const validateMobileNumber = (mobileNumber) => {
  const re = /^\+?[\d\s\-()]{7,20}$/;
  return re.test(String(mobileNumber).trim());
};