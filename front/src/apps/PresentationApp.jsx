/**
 * PRESENTACIÓN TABLE - REBECA PÉREZ-FLORES
 *
 * NOTA PARA PRINCIPIANTES:
 * Este archivo es la aplicación principal de la presentación.
 * Usa React (una librería de JavaScript para crear interfaces) y
 * Framer Motion (para animaciones suaves y profesionales).
 *
 * Si no sabes React:
 * - Los componentes son como bloques reutilizables de código
 * - Los "hooks" (useState, useEffect) son funciones especiales de React
 * - Las animaciones se controlan con Framer Motion
 *
 * INSTALACIÓN NECESARIA:
 * npm install react react-dom framer-motion lucide-react
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Play,
  Pause,
  Maximize,
  Minimize
} from 'lucide-react';
import '../styles/PresentationApp.css';

// Importar componentes de slides
import TitleSlide from '../components/slides/TitleSlide';
import ProfileSlide from '../components/slides/ProfileSlide';
import ResearchSlide from '../components/slides/ResearchSlide';
import TelarProjectSlide from '../components/slides/TelarProjectSlide';
import WhyTableSlide from '../components/slides/WhyTableSlide';
import InitialResearchSlide from '../components/slides/InitialResearchSlide';
import PrioritizePorkSlide from '../components/slides/PrioritizePorkSlide';
import TensionsMapSlide from '../components/slides/TensionsMapSlide';
import DesignSlide from '../components/slides/DesignSlide';
import InvitationChallengeSlide from '../components/slides/InvitationChallengeSlide';
import MethodologySlide from '../components/slides/MethodologySlide';
import ToolsSlide from '../components/slides/ToolsSlide';
import TableAResultsSlide from '../components/slides/TableAResultsSlide';
import TableAFindingsSlide from '../components/slides/TableAFindingsSlide';
import TableBChallengeSlide from '../components/slides/TableBChallengeSlide';
import TableBResultsSlide from '../components/slides/TableBResultsSlide';
import TableBFindingsSlide from '../components/slides/TableBFindingsSlide';
import LearningsSlide from '../components/slides/LearningsSlide';
import InnovationSlide from '../components/slides/InnovationSlide';
import SystematizationSlide from '../components/slides/SystematizationSlide';
import FinalReflectionsSlide from '../components/slides/FinalReflectionsSlide';
import NextStepsSlide from '../components/slides/NextStepsSlide';
import AcknowledgmentsSlide from '../components/slides/AcknowledgmentsSlide';
import ClosingSlide from '../components/slides/ClosingSlide';

/**
 * DATOS DE LOS SLIDES
 *
 * NOTA: Aquí se definen todos los datos de la presentación.
 * Cada slide tiene:
 * - id: identificador único
 * - component: componente React que lo renderiza
 * - title: título para la navegación
 * - duration: tiempo estimado en minutos
 * - notes: notas del speaker (texto a leer)
 */
const slidesData = [
  {
    id: 1,
    component: TitleSlide,
    title: 'Portada',
    duration: '45s',
    section: 'Perfil',
    notes: `Buenos días a todas y todos.

Mi nombre es Rebeca Pérez-Flores y soy asistente de investigación del proyecto TELAR - MESA México, en el Instituto de Investigaciones Sociales de la UNAM.

Es un honor estar aquí presentando ante la comunidad TABLE los avances de nuestra primera experiencia aplicando esta metodología en México.`
  },
  {
    id: 2,
    component: ProfileSlide,
    title: 'Mi Trayectoria',
    duration: '1.5min',
    section: 'Perfil',
    notes: `Soy Química Farmacéutica Bióloga egresada de la Facultad de Química de la UNAM.

Mi formación académica se ha especializado en la intersección entre ciencia, bioética y sistemas alimentarios. Cuento con diplomados en Bioética con énfasis en ética animal por el Programa Universitario de Bioética de la UNAM y la CONBIOÉTICA, así como en Medio Ambiente y Desarrollo Sustentable por la Universidad Iberoamericana.

Mi investigación se centra en la intersección entre ética animal y sistemas alimentarios en el contexto mexicano. Específicamente, exploro cómo el carnismo, la ideología invisible que nos condiciona a comer ciertos animales, influye en el establecimiento de la identidad cultural mexicana a través de la cocina tradicional. Investigo el papel de la publicidad en el mantenimiento de esta ideología, y cómo la comida se convierte en un vehículo para la construcción de identidad cultural.

También he realizado investigación práctica de campo sobre bienestar animal en rastros federales y municipales en tres de los principales estados productores de carne de México, documentando condiciones y prácticas de bienestar sobre el terreno.

Además de mi labor de investigación, soy profesora en la Facultad de Química de la UNAM, donde imparto la materia Ciencia y Sociedad.

Esta combinación de análisis cultural, investigación de campo, formación científica y experiencia en bioética y ética animal ha sido fundamental para el diseño e implementación de las Mesas de Sondeo que hoy les voy a presentar.`
  },
  {
    id: 3,
    component: TelarProjectSlide,
    title: 'Proyecto TELAR',
    duration: '1min',
    section: 'Perfil',
    notes: `El proyecto TELAR es una iniciativa binacional entre el Instituto de Investigaciones Sociales de la UNAM en México y la Universidad de los Andes en Colombia, en colaboración con TABLE de la Universidad de Oxford.

Nuestro objetivo es aplicar la metodología TABLE para explorar los futuros de la ganadería industrial en América Latina, con enfoque en diálogo multi-stakeholder sobre sistemas alimentarios.

Yo coordino el componente mexicano del proyecto, bajo la dirección de la Doctora Elena Lazos Chavero.`
  },
  {
    id: 4,
    component: WhyTableSlide,
    title: 'Por Qué TABLE',
    duration: '1min',
    section: 'Perfil',
    notes: `México enfrenta tensiones crecientes en torno a la ganadería industrial. Hay una expansión acelerada de megagranjas, conflictos territoriales con comunidades indígenas, debate sobre modelos de producción alimentaria, y polarización entre actores.

El proyecto TELAR utiliza la metodología TABLE, que resultó ser particularmente adecuada e interesante para este contexto porque no impone soluciones predefinidas, permite explorar valores y perspectivas diversas, facilita diálogo en contextos de alta conflictividad, y conecta evidencias con futuros posibles.

Ahora les voy a compartir nuestra experiencia aplicando TABLE por primera vez en México, los aprendizajes que tuvimos, y lo que viene.`
  },
  // Continúa con todos los slides... (por brevedad, muestro la estructura)
];

/**
 * COMPONENTE PRINCIPAL - PresentationApp
 *
 * NOTA PARA PRINCIPIANTES:
 * Este es el componente principal que controla toda la presentación.
 *
 * Estados (useState):
 * - currentSlide: slide actual que se muestra (número)
 * - showNotes: mostrar/ocultar notas del speaker (booleano)
 * - isPlaying: auto-avance activado o no (booleano)
 * - isFullscreen: pantalla completa o no (booleano)
 *
 * Funciones:
 * - nextSlide(): avanza al siguiente slide
 * - prevSlide(): retrocede al slide anterior
 * - goToSlide(index): va a un slide específico
 * - toggleNotes(): muestra/oculta las notas
 * - togglePlay(): activa/desactiva auto-avance
 * - toggleFullscreen(): entra/sale de pantalla completa
 */
const PresentationApp = () => {
  // Estados
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Datos del slide actual
  const slide = slidesData[currentSlide];
  const SlideComponent = slide.component;

  // Navegación
  const nextSlide = () => {
    if (currentSlide < slidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Controles
  const toggleNotes = () => setShowNotes(!showNotes);
  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Auto-avance (si está activado)
  useEffect(() => {
    if (isPlaying && currentSlide < slidesData.length - 1) {
      const timer = setTimeout(() => {
        nextSlide();
      }, 5000); // 5 segundos por slide
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentSlide]);

  // Atajos de teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'n' || e.key === 'N') {
        toggleNotes();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setShowNotes(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="presentation-app">
      {/* ÁREA DE SLIDES */}
      <div className="slide-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="slide-wrapper"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* INDICADOR DE SLIDE */}
        <div className="slide-indicator">
          <span className="slide-section">{slide.section}</span>
          <span className="slide-number">
            {currentSlide + 1} / {slidesData.length}
          </span>
          <span className="slide-duration">{slide.duration}</span>
        </div>
      </div>

      {/* CONTROLES DE NAVEGACIÓN */}
      <div className="navigation-controls">
        <motion.button
          className="nav-button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentSlide + 1) / slidesData.length) * 100}%` }}
          />
        </div>

        <motion.button
          className="nav-button"
          onClick={nextSlide}
          disabled={currentSlide === slidesData.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* CONTROLES ADICIONALES */}
      <div className="utility-controls">
        <motion.button
          className={`utility-button ${showNotes ? 'active' : ''}`}
          onClick={toggleNotes}
          whileHover={{ scale: 1.05 }}
          title="Ver notas (N)"
        >
          <FileText size={20} />
        </motion.button>

        <motion.button
          className={`utility-button ${isPlaying ? 'active' : ''}`}
          onClick={togglePlay}
          whileHover={{ scale: 1.05 }}
          title="Auto-avance"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </motion.button>

        <motion.button
          className="utility-button"
          onClick={toggleFullscreen}
          whileHover={{ scale: 1.05 }}
          title="Pantalla completa (F)"
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </motion.button>
      </div>

      {/* PANEL DE NOTAS */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            className="notes-panel"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="notes-header">
              <h3>Notas del Speaker - Slide {currentSlide + 1}</h3>
              <button className="close-notes" onClick={toggleNotes}>×</button>
            </div>
            <div className="notes-content">
              <p>{slide.notes}</p>
              <div className="notes-meta">
                <span>Duración estimada: {slide.duration}</span>
                <span>Sección: {slide.section}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVEGACIÓN POR THUMBNAILS */}
      <div className="thumbnail-navigation">
        {slidesData.map((s, index) => (
          <motion.button
            key={s.id}
            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={s.title}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>

      {/* ATAJOS DE TECLADO */}
      <div className="keyboard-shortcuts">
        <p><kbd>→</kbd> o <kbd>Espacio</kbd>: Siguiente</p>
        <p><kbd>←</kbd>: Anterior</p>
        <p><kbd>N</kbd>: Notas</p>
        <p><kbd>F</kbd>: Pantalla completa</p>
      </div>
    </div>
  );
};

export default PresentationApp;
