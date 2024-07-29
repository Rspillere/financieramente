import { useEffect } from 'react';

const useScrollAnimation = (animation) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const windowHeight = window.innerHeight;

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.75 && sectionTop != 0) {
          section.classList.add(animation, 'opacity-100');
          section.classList.remove('opacity-0');
        } 
      });
      
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useScrollAnimation;