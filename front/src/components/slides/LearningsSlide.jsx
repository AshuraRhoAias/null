/**
 * LEARNINGS SLIDE - SLIDE 17
 *
 * Aprendizajes Metodológicos Clave
 */

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, FileCheck, AlertCircle } from 'lucide-react';
import './SharedReflectionsSlide.css';

const LearningsSlide = () => {
  const learnings = [
    {
      icon: Users,
      title: 'Contacto Personal es Esencial',
      text: 'Necesario contactar en persona para establecer confianza y empatía, tanto para comunidades como para industria.',
      color: '#10b981'
    },
    {
      icon: FileCheck,
      title: 'Procesos Simples',
      text: 'Los procesos deben ser simples, con documentación completa desde el inicio y tiempo para que participantes decidan.',
      color: '#3b82f6'
    },
    {
      icon: AlertCircle,
      title: 'OSC y Academia: Más Habituados',
      text: 'Organizaciones de sociedad civil y academia están más acostumbradas a invitaciones similares, aunque el enfoque TABLE es único.',
      color: '#f97316'
    }
  ];

  return (
    <div className="learnings-slide">
      {/* HEADER */}
      <motion.div
        className="learnings-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="learnings-badge">
          <BookOpen size={20} />
          <span>Lección Clave</span>
        </div>
        <h1 className="learnings-title">
          Aprendizajes <span className="learnings-gradient">Metodológicos</span>
        </h1>
        <p className="learnings-subtitle">
          Lo que Funcionó y Lo que Necesita Mejorarse
        </p>
      </motion.div>

      {/* LEARNINGS GRID */}
      <div className="learnings-grid">
        {learnings.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="learning-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
            >
              <div className="learning-icon" style={{ backgroundColor: item.color }}>
                <Icon size={36} />
              </div>
              <h3 className="learning-title">{item.title}</h3>
              <p className="learning-text">{item.text}</p>
            </motion.div>
          );
        })}
      </div>

      {/* TRUST BUILDING BOX */}
      <motion.div
        className="key-insight-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="insight-quote-icon">
          <Users size={48} />
        </div>
        <blockquote className="insight-quote">
          "Aunque Mesa B fue un <strong>fracaso en términos de asistencia</strong>, obtuvimos <strong>contactos estratégicos</strong> que permitirán un nuevo enfoque usando la misma metodología."
        </blockquote>
        <p className="insight-attribution">
          — Transformando el Fracaso en Innovación
        </p>
      </motion.div>
    </div>
  );
};

export default LearningsSlide;
