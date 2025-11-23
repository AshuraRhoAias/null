/**
 * TABLE B CHALLENGE SLIDE - SLIDE 14
 *
 * Mesa B: Crisis de Convocatoria y Visita a Kekén
 */

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Building2, Phone, User } from 'lucide-react';
import './TableBChallengeSlide.css';

const TableBChallengeSlide = () => {
  return (
    <div className="tableb-challenge-slide">
      {/* HEADER */}
      <motion.div
        className="tableb-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="tableb-badge">
          <AlertTriangle size={20} />
          <span>Mesa B: Desafío</span>
        </div>
        <h1 className="tableb-title">
          Crisis de <span className="tableb-gradient">Convocatoria</span>
        </h1>
        <p className="tableb-subtitle">
          Enfrentando la Realidad de Canales Cerrados
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="tableb-content">
        {/* LEFT: THE CHALLENGE */}
        <motion.div
          className="challenge-box"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="challenge-icon">
            <Phone size={48} />
          </div>
          <h2>El Problema</h2>
          <div className="challenge-points">
            <div className="challenge-point">
              <AlertTriangle size={20} className="point-icon" />
              <span>Muy pocos participantes confirmados para Mesa B</span>
            </div>
            <div className="challenge-point">
              <AlertTriangle size={20} className="point-icon" />
              <span>Canales de comunicación de la industria completamente cerrados</span>
            </div>
            <div className="challenge-point">
              <AlertTriangle size={20} className="point-icon" />
              <span>Sin respuestas a emails ni llamadas telefónicas</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: KEKEN VISIT */}
        <motion.div
          className="keken-visit-box"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="visit-header">
            <Building2 size={40} />
            <h2>Último Recurso: Visita a Kekén</h2>
          </div>

          <div className="visit-details">
            <div className="visit-item">
              <User size={24} className="visit-icon" />
              <div className="visit-text">
                <strong>Jefe de Comunicaciones</strong>
                <p>Recibió en oficinas corporativas</p>
              </div>
            </div>

            <div className="visit-item">
              <Building2 size={24} className="visit-icon" />
              <div className="visit-text">
                <strong>Kekén</strong>
                <p>Grupo porcino más grande de México</p>
              </div>
            </div>
          </div>

          <div className="critical-quote">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              "Todos sus canales de comunicación están <strong>cerrados debido a
              ataques</strong> que han sido objeto. Si no hubiera ido en persona,
              nunca hubiéramos hecho contacto."
            </p>
          </div>
        </motion.div>
      </div>

      {/* OUTCOME BOX */}
      <motion.div
        className="outcome-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h3>Resultado de la Visita</h3>
        <div className="outcome-points">
          <div className="outcome-point positive">
            ✓ Mostró interés en entrevista personal con Jefe de Sustentabilidad
          </div>
          <div className="outcome-point positive">
            ✓ Imposible asistir ese día, pero esperando mensaje para agendar
          </div>
          <div className="outcome-point positive">
            ✓ Contacto estratégico establecido para futuras consultas guiadas
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TableBChallengeSlide;
