/**
 * TABLE B RESULTS SLIDE - SLIDE 15
 *
 * Mesa B: Resultados - Solo 3 asistentes
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Users, AlertCircle, MessageCircle } from 'lucide-react';
import './TableBChallengeSlide.css';

const TableBResultsSlide = () => {
  const attendees = [
    { name: 'Actor 1', note: 'Ya había asistido a Mesa A', color: '#3b82f6' },
    { name: 'Actor 2', note: 'Ya había asistido a Mesa A', color: '#3b82f6' },
    { name: 'SEMARNAT', note: 'Actor NUEVO - Secretaría de Medio Ambiente', color: '#10b981' }
  ];

  return (
    <div className="tableb-results-slide">
      {/* HEADER */}
      <motion.div
        className="tableb-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="tableb-badge">
          <AlertCircle size={20} />
          <span>Mesa B: 14 de Noviembre</span>
        </div>
        <h1 className="tableb-title">
          Mesa B: <span className="tableb-gradient">Resultados</span>
        </h1>
        <p className="tableb-subtitle">
          Fracaso en Asistencia, Innovación en Estrategia
        </p>
      </motion.div>

      {/* ATTENDANCE */}
      <motion.div
        className="attendance-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="attendance-number">3</div>
        <div className="attendance-label">Asistentes Presenciales</div>
      </motion.div>

      {/* ATTENDEES LIST */}
      <div className="attendees-section">
        <h2>
          <Users size={24} />
          Quiénes Asistieron
        </h2>
        <div className="attendees-list">
          {attendees.map((person, idx) => (
            <motion.div
              key={idx}
              className="attendee-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.15 }}
              style={{ borderLeftColor: person.color }}
            >
              <div className="attendee-name">{person.name}</div>
              <div className="attendee-note">{person.note}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ADAPTATION */}
      <motion.div
        className="adaptation-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="adaptation-icon">
          <MessageCircle size={36} />
        </div>
        <div className="adaptation-content">
          <h3>Adaptación de la Dinámica</h3>
          <p>
            Modificamos las dinámicas para convertirlas en un <strong>diálogo abierto</strong>,
            lo cual resultó muy enriquecedor. La visión productiva/industrial se manifestó
            claramente, permitiendo capturar perspectivas que no habían estado presentes en Mesa A.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TableBResultsSlide;
