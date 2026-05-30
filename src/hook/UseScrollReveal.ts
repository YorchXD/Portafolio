import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      // El rootMargin negativo ayuda a que no desaparezca justo en el borde,
      // sino un poco después de que deje de verse.
      rootMargin: "-70px 0px -20px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Entra en pantalla: añadimos clase
          entry.target.classList.add('reveal-visible');
        } else {
          // Sale de pantalla: quitamos clase para que se desvanezca
          entry.target.classList.remove('reveal-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    if (elements.length === 0) return;

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // Se ejecuta una vez al montar el componente
};