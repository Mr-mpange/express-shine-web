
import React from "react";

const WhatsAppIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#25D366"/>
    <path d="M22.5 9.5C21.1 8.1 19.2 7.3 17.2 7.3C12.7 7.3 9 11 9 15.5C9 16.7 9.3 17.9 9.8 19L8.5 23.5L13.1 22.2C14.1 22.7 15.2 23 16.4 23C20.9 23 24.6 19.3 24.6 14.8C24.6 12.8 23.9 10.9 22.5 9.5ZM16.4 21.5C15.4 21.5 14.4 21.3 13.5 20.8L13.2 20.7L10.7 21.4L11.4 18.9L11.3 18.6C10.8 17.7 10.6 16.6 10.6 15.5C10.6 11.9 13.6 8.9 17.2 8.9C18.3 8.9 19.4 9.2 20.3 9.7C21.2 10.2 21.9 11 22.4 11.9C22.9 12.8 23.2 13.9 23.2 15C23.2 18.6 20.2 21.5 16.4 21.5Z" fill="white"/>
  </svg>
);

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/2683859574"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-btn whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default FloatingWhatsApp;
