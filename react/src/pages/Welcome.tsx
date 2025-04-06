import React, { useEffect, useState, useRef } from 'react';
import Button from '../components/Button/Button';
import '../assets/styles/pages/Welcome.scss';

interface WelcomeProps {
  onStartSurvey: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStartSurvey }) => {
  const [loaded, setLoaded] = useState(false);
  const shapesRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!shapesRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = shapesRef.current.getBoundingClientRect();
    
    
    const xPos = ((clientX - left) / width - 0.5) * 2;
    const yPos = ((clientY - top) / height - 0.5) * 2;
    
   
    shapeRefs.current.forEach((shape, index) => {
      if (!shape) return;
      
     
      const factor = (index + 1) * 60; 
      const xMove = -xPos * factor; 
      const yMove = -yPos * factor;
      
     
      shape.style.transform = `translate(${xMove}px, ${yMove}px) scale(${1 + Math.abs(xPos * yPos) * 0.2}) rotate(${xPos * yPos * 20}deg)`;
    });
  };
  
  
  const handleMouseLeave = () => {
    shapeRefs.current.forEach((shape) => {
      if (shape) {
      
        shape.classList.add('returning');
        
       
        shape.style.transform = '';
        
        
        setTimeout(() => {
          if (shape) shape.classList.remove('returning');
        }, 800); 
      }
    });
  };

  
  const setShapeRef = (index: number) => (el: HTMLDivElement | null) => {
    shapeRefs.current[index] = el;
  };

  return (
    <div className={`welcome-page ${loaded ? 'loaded' : ''}`}>
      <div className="hero-section">
        <div className="content-container">
          <div className="welcome-header">
            <h1 className="welcome-title">Encuesta de <span className="accent">Satisfacción</span></h1>
            <p className="welcome-subtitle">
              Tu opinión nos ayuda a mejorar. Valoramos tus comentarios para ofrecerte un mejor servicio.
            </p>
            <div className="action-buttons">
              <Button variant="primary" size="lg" rounded onClick={onStartSurvey}>Comenzar encuesta</Button>
              <Button variant="outline" size="lg" rounded className="ml-4">Más información</Button>
            </div>
          </div>

          <div className="features-preview">
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Rápida y sencilla</h3>
              <p>Solo te tomará 5 minutos completar nuestra encuesta</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Opinión valiosa</h3>
              <p>Cada respuesta nos ayuda a identificar áreas de mejora</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>Incentivos</h3>
              <p>Participa y recibe beneficios exclusivos al finalizar</p>
            </div>
          </div>
        </div>

        <div 
          className="decorative-shapes" 
          ref={shapesRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="shape shape-1" ref={setShapeRef(0)}></div>
          <div className="shape shape-2" ref={setShapeRef(1)}></div>
          <div className="shape shape-3" ref={setShapeRef(2)}></div>
          <div className="shape shape-4" ref={setShapeRef(3)}></div>
        </div>
      </div>

      <div className="cta-section">
        <div className="content-container">
          <h2>Iniciar encuesta de satisfacción</h2>
          <p>Tu opinión es importante para nosotros. Ayúdanos a mejorar compartiendo tu experiencia</p>
          <Button variant="primary" size="lg" rounded onClick={onStartSurvey}>Comenzar encuesta</Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
