/**
 * INNOVATION SLIDE - SLIDE 18
 *
 * Innovación: Consultas Individuales Guiadas
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, User, FileCheck, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';
import './InnovationSlide.css';

const InnovationSlide = () => {
  const benefits = [
    {
      icon: User,
      title: 'Capturar perspectivas ausentes',
      description: 'Sin confrontación directa',
      color: '#10b981'
    },
    {
      icon: TrendingUp,
      title: 'Construir confianza gradualmente',
      description: 'Con actores de industria',
      color: '#3b82f6'
    },
    {
      icon: FileCheck,
      title: 'Generar datos comparables',
      description: 'A través de todos los grupos',
      color: '#f97316'
    },
    {
      icon: CheckCircle,
      title: 'Preparar diálogo multi-stakeholder',
      description: 'Con bases sólidas',
      color: '#a855f7'
    }
  ];

  return (
    <div className="innovation-slide">
      {/* HEADER */}
      <motion.div
        className="innovation-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="innovation-badge">
          <Lightbulb size={20} />
          <span>Innovación Metodológica</span>
        </div>
        <h1 className="innovation-title">
          Del Fracaso a la <span className="innovation-gradient">Innovación</span>
        </h1>
        <p className="innovation-subtitle">
          Consultas Individuales Guiadas
        </p>
      </motion.div>

      {/* TRANSFORMATION */}
      <motion.div
        className="transformation-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="transformation-row">
          <div className="transform-item failure">
            <AlertTriangle size={40} />
            <h3>Mesa B</h3>
            <p>Fracaso en asistencia</p>
            <div className="count">3 personas</div>
          </div>

          <div className="arrow-right">→</div>

          <div className="transform-item success">
            <Lightbulb size={40} />
            <h3>Nueva Estrategia</h3>
            <p>Entrevistas guiadas 1-on-1</p>
            <div className="count">Misma metodología</div>
          </div>
        </div>
      </motion.div>

      {/* BENEFITS GRID */}
      <div className="benefits-grid">
        <h2>Beneficios del Nuevo Enfoque</h2>
        <div className="benefits-cards">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
              >
                <div className="benefit-icon" style={{ backgroundColor: benefit.color }}>
                  <Icon size={24} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* KEY INSIGHT */}
      <motion.div
        className="innovation-insight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <Lightbulb size={32} />
        <p>
          <strong>Mismo cuadernillo, mismo método TABLE</strong> — Adaptado para
          entrevistas individuales con actores de industria y gobierno que no
          pudieron participar en las mesas.
        </p>
      </motion.div>
    </div>
  );
};

export default InnovationSlide;
