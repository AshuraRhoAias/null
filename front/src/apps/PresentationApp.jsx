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

// Importar componentes de slides (23 slides totales)
import TitleSlide from '../components/slides/TitleSlide';
import ProfileSlide from '../components/slides/ProfileSlide';
import TelarProjectSlide from '../components/slides/TelarProjectSlide';
import WhyTableSlide from '../components/slides/WhyTableSlide';
import InitialResearchSlide from '../components/slides/InitialResearchSlide';
import PrioritizePorkSlide from '../components/slides/PrioritizePorkSlide';
import TensionsMapSlide from '../components/slides/TensionsMapSlide';
import DesignSlide from '../components/slides/DesignSlide';
import InvitationChallengeSlide from '../components/slides/InvitationChallengeSlide';
import MethodologySlide from '../components/slides/MethodologySlide';
// import ToolsSlide from '../components/slides/ToolsSlide'; // Slide 11 - Opcional
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
    notes: 'Good afternoon, everyone. My name is Rebeca Pérez-Flores, and I\'m a Research Assistant on the TELAR project at MESA México, based at the Institute for Social Research at UNAM in Mexico City. Thank you for this opportunity to share our work with the TABLE community today.'
  },
  {
    id: 2,
    component: ProfileSlide,
    title: 'Mi Trayectoria',
    duration: '1.5min',
    section: 'Perfil',
    notes: 'My academic background is quite interdisciplinary. I hold a degree in Pharmaceutical Biological Chemistry from UNAM\'s Faculty of Chemistry. However, my interests led me to explore the intersection of science, ethics, and society. I pursued specialized diplomas in Bioethics with an emphasis on animal ethics, and diplomas in Environment and Sustainable Development. This interdisciplinary training shapes how I approach complex food systems challenges.'
  },
  {
    id: 3,
    component: TelarProjectSlide,
    title: 'Mi Investigación',
    duration: '1min',
    section: 'Perfil',
    notes: 'My research centers on the intersection of animal ethics and food systems in the Mexican context. Specifically, I explore how carnism influences the establishment of Mexican cultural identity through traditional cuisine. I\'ve also conducted practical field research on animal welfare in federal and municipal slaughterhouses across three of Mexico\'s main meat-producing states. This combination gives me a unique perspective on the complexities of transitioning to more sustainable and ethical food systems in Mexico.'
  },
  {
    id: 4,
    component: WhyTableSlide,
    title: 'Mi Rol en TELAR',
    duration: '1min',
    section: 'Perfil',
    notes: 'In the TELAR project, I work on exploring the future of industrial livestock farming and the potential for transition towards more sustainable and ethical food systems in Mexico. This is a binational collaboration between MESA México and MESA Colombia, and we\'re applying TABLE\'s innovative methodology to the Latin American context—adapting participatory foresight tools to our specific territorial conflicts, cultural complexities, and institutional challenges.'
  },
  {
    id: 5,
    component: InitialResearchSlide,
    title: 'Investigación Inicial',
    duration: '1min',
    section: 'Avances TELAR',
    notes: 'Our initial research focused on Mexico\'s livestock sector broadly. We quickly discovered something critical: cattle and pork systems are substantially different. They differ in technological intensification, distribution of producers, environmental footprints, and social impacts. Most importantly, we identified severe territorial conflicts in the pork sector—specifically between industrial mega-farms and Maya communities in the Yucatán Peninsula. Given the urgency and complexity, we decided to prioritize the pork sector for our initial sounding tables.'
  },
  {
    id: 6,
    component: PrioritizePorkSlide,
    title: 'Mapa de Actores',
    duration: '1min',
    section: 'Avances TELAR',
    notes: 'This research allowed us to develop a Key Actors Map identifying 35 actors across 4 levels: Primary producers and industry, Government and regulatory bodies, Civil society organizations and academia, and Affected communities. This mapping was essential to understand who needed to be in the room for meaningful dialogue.'
  },
  {
    id: 7,
    component: TensionsMapSlide,
    title: 'Mapa de Tensiones',
    duration: '1.5min',
    section: 'Avances TELAR',
    notes: 'But we went further. MESA México developed an innovative methodological contribution: the Tensions Map. This tool allowed us to identify 69 specific tensions between actors. These weren\'t abstract conflicts—they were concrete tensions around water contamination, land use rights, animal welfare standards, export policies, and community health impacts. The Tensions Map became fundamental for understanding why simple multi-stakeholder dialogue wasn\'t going to work. The conflicts were too deep, the power asymmetries too significant. This led us to design two separate Sounding Tables.'
  },
  {
    id: 8,
    component: DesignSlide,
    title: 'Diseño: Dos Mesas',
    duration: '1.5min',
    section: 'Avances TELAR',
    notes: 'We designed two separate Sounding Tables to be held in Mérida, Yucatán on November 13-14, 2024, at CEPHCIS facilities. Table A: "Alternative and Transformative Perspectives" invited environmental and animal rights CSOs, academics, Maya communities, and government actors. Table B: "Development and Competitiveness" invited industry actors and government representatives. The idea was to create safe spaces for each perspective to explore values, evidence, and visions freely—before bringing everyone together in a future multi-stakeholder dialogue.'
  },
  {
    id: 9,
    component: InvitationChallengeSlide,
    title: 'Desafío: Invitaciones',
    duration: '1.5min',
    section: 'Avances TELAR',
    notes: 'The invitation process was extremely complex. Since we didn\'t know these actors personally, it was particularly difficult to get Maya communities to accept participation. There was deep distrust. For industry actors, their traditional communication channels were completely closed. We couldn\'t even get responses to emails or phone calls. Additionally, we realized our informed consent verification system for virtual participants was too bureaucratic, which affected participation. This was an important methodological lesson.'
  },
  {
    id: 10,
    component: MethodologySlide,
    title: 'Dinámica: Visiones de Futuro',
    duration: '1.5min',
    section: 'Avances TELAR',
    notes: 'Let me highlight one particularly powerful dynamic. To explore future visions, we conducted a guided visualization so participants could connect emotionally with future scenarios. After the visualization, we asked them to write what they envisioned on colored cards: Green if they saw a better future, Yellow if things stay the same, Red if they saw a worse future. We then presented 4 specific scenarios and asked which they considered viable and which desirable. This allowed us to explore the gap between what people think is possible and what they actually want.'
  },
  {
    id: 11,
    component: TableAResultsSlide,
    title: 'Mesa A: Resultados',
    duration: '1min',
    section: 'Mesa A',
    notes: 'On November 13th, Table A had strong participation: 11 in-person attendees and 12 virtual participants. The composition was predominantly animal rights CSOs and environmental organizations. Critically, we had only one Maya community represented—Santa María Chi—through community representative Wilberth Nahuat. No government actors attended, despite invitations and confirmations.'
  },
  {
    id: 12,
    component: TableAFindingsSlide,
    title: 'Mesa A: Hallazgos',
    duration: '1.5min',
    section: 'Mesa A',
    notes: 'Our Mentimeter results from Table A revealed clear patterns. In the word cloud, the dominant words were: Oppression, Cruelty, Violence, Contamination. On the dilemma of Jobs vs. Water: 57% favored closing operations with support for alternative employment. On production scales: 92% favored transition toward systems without animal exploitation. On territorial rights: 100% prioritized territorial rights and community health. This confirmed that Table A captured critical transformative perspectives successfully.'
  },
  {
    id: 13,
    component: TableBChallengeSlide,
    title: 'Mesa B: Desafío',
    duration: '1.5min',
    section: 'Mesa B',
    notes: 'For Table B, we had very few confirmed participants. As a last resort, I went in person to the corporate offices of Kekén—Mexico\'s largest pork production group—where I was received by the Head of Communications. He explained the project and showed interest in having it applied personally via videoconference with the Head of Sustainability. He confessed that all their communication channels are closed due to attacks they\'ve been subjected to. If I hadn\'t gone in person, we would never have made contact.'
  },
  {
    id: 14,
    component: TableBResultsSlide,
    title: 'Mesa B: Resultados',
    duration: '1min',
    section: 'Mesa B',
    notes: 'Table B was held on November 14th with only 3 in-person attendees, two of whom had already attended Table A. The new actor was from SEMARNAT—Mexico\'s Ministry of Environment. We modified the dynamics to become an open dialogue, which was actually very enriching. The productive/industry vision and perspectives were clearly manifested.'
  },
  {
    id: 15,
    component: TableBFindingsSlide,
    title: 'Mesa B: Hallazgos',
    duration: '1min',
    section: 'Mesa B',
    notes: 'At one point, communities were even accused of contaminating on purpose to file complaints, damaging the environment themselves. We concluded that legislation is insufficient without people\'s will, and that environmental programs should be maintained rather than being subject to the political administration in power.'
  },
  {
    id: 16,
    component: LearningsSlide,
    title: 'Aprendizajes',
    duration: '1.5min',
    section: 'Reflexiones',
    notes: 'Although Table B was a failure in terms of turnout, we obtained strategic contacts that will allow a new approach. This experience taught us critical lessons: It\'s essential to contact people in person to establish trust and empathy—both for communities and for industry. CSOs and academia are more accustomed to invitations to similar events, though TABLE\'s methodology is unique. We also learned that processes must be simple, with complete documentation from the start.'
  },
  {
    id: 17,
    component: InnovationSlide,
    title: 'Innovación: Consultas',
    duration: '1min',
    section: 'Reflexiones',
    notes: 'We\'re now conducting guided individual consultations with industry and government actors who couldn\'t participate in the tables. These interviews use an adapted version of the virtual participant workbook. This approach allows us to capture absent perspectives without confrontation, build trust gradually, generate comparable data across groups, and prepare the ground for future multi-stakeholder dialogue.'
  },
  {
    id: 18,
    component: SystematizationSlide,
    title: 'Sistematización',
    duration: '1min',
    section: 'Reflexiones',
    notes: 'We are currently systematizing the information obtained from both tables. We\'ve processed complete Mentimeter results from Table A, 5 completed workbooks from virtual participants, and notes from in-person discussions. We have the testimony from Wilberth Nahuat from Santa María Chi community—including critical data like 5 deaths from kidney disease in his community, and the expansion from 700 to 49,000 pigs. We\'re conducting comparative analysis to understand where convergences exist and where tensions are irreconcilable.'
  },
  {
    id: 19,
    component: FinalReflectionsSlide,
    title: 'Reflexiones Finales',
    duration: '1min',
    section: 'Reflexiones',
    notes: 'The exploration of values, evidence, perspectives, and future visions depends on interpersonal relationships established to generate a safe environment of trust. This is particularly true in contexts of deep conflict, power asymmetries, and historical distrust like we\'re facing in Yucatán. Methodology matters, but relationship-building matters more.'
  },
  {
    id: 20,
    component: NextStepsSlide,
    title: 'Próximos Pasos',
    duration: '1min',
    section: 'Futuro',
    notes: 'Soon, we plan to organize a virtual Multi-stakeholder Dialogue Table convening actors from both tables. We\'ll share the main findings with all participants beforehand. We\'ll continue building proposals and pathways for action together. The goal is not consensus—but rather informed understanding of different perspectives, identification of possible bridges, and construction of concrete next steps that respect the complexity of this territorial conflict.'
  },
  {
    id: 21,
    component: AcknowledgmentsSlide,
    title: 'Agradecimientos',
    duration: '45s',
    section: 'Cierre',
    notes: 'Thank you to CEPHCIS Mérida for facilitating our facilities, to all participants from Table A and B, to Wilberth Nahuat from Santa María Chi, to MESA México and Colombia, and to the TABLE community for this space.'
  },
  {
    id: 22,
    component: ClosingSlide,
    title: 'Contacto y Preguntas',
    duration: '1min',
    section: 'Cierre',
    notes: 'Thank you for your attention. I\'m happy to answer any questions about our methodology, the challenges we faced, or the adaptations we made to TABLE\'s approach for the Mexican context. Contact: rebecaperezflores@tabledebates.org'
  }
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
