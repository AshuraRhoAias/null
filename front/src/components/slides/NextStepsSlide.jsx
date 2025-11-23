/**
 * NEXT STEPS SLIDE - SLIDE 21
 *
 * Próximos Pasos: Consultas Guiadas y Mesa Multi-stakeholder
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, FileText, Target, Calendar } from 'lucide-react';
import './NextStepsSlide.css';

const NextStepsSlide = () => {
  const consultationsTopics = [
    'Dilemas: Empleos vs. Medio Ambiente',
    'Certificaciones y escalas de producción',
    'Derechos territoriales',
    'Regulaciones ambientales',
    'Visiones futuras del sector porcino'
  ];

  const nextPhases = [
    {
      phase: 'Fase 1',
      title: 'Consultas Individuales Guiadas',
      status: 'En Curso',
      icon: FileText,
      color: '#10b981'
    },
    {
      phase: 'Fase 2',
      title: 'Mesa Multi-stakeholder Virtual',
      status: 'Próximamente',
      icon: Users,
      color: '#3b82f6'
    },
    {
      phase: 'Fase 3',
      title: 'Propuestas y Rutas de Acción',
      status: 'Planificado',
      icon: Target,
      color: '#a855f7'
    }
  ];

  return (
    <div className="nextsteps-slide">
      {/* HEADER */}
      <motion.div
        className="nextsteps-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nextsteps-badge">
          <Calendar size={20} />
          <span>Próximos Pasos</span>
        </div>
        <h1 className="nextsteps-title">
          El Camino <span className="nextsteps-gradient">Adelante</span>
        </h1>
        <p className="nextsteps-subtitle">
          Construyendo Puentes y Propuestas Conjuntas
        </p>
      </motion.div>

      {/* PHASES GRID */}
      <div className="phases-grid">
        {nextPhases.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="phase-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
            >
              <div className="phase-header">
                <div className="phase-icon" style={{ backgroundColor: item.color }}>
                  <Icon size={32} />
                </div>
                <div className="phase-badge" style={{ borderColor: item.color, color: item.color }}>
                  {item.status}
                </div>
              </div>
              <div className="phase-number">{item.phase}</div>
              <h3 className="phase-title">{item.title}</h3>
            </motion.div>
          );
        })}
      </div>

      {/* CONSULTATIONS DETAIL */}
      <motion.div
        className="consultations-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="section-heading">
          <FileText size={24} />
          Consultas Individuales: Temas a Explorar
        </h2>

        <div className="topics-grid">
          {consultationsTopics.map((topic, idx) => (
            <motion.div
              key={idx}
              className="topic-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
            >
              <ArrowRight size={20} className="topic-icon" />
              <span>{topic}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GOAL BOX */}
      <motion.div
        className="goal-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="goal-icon">
          <Target size={36} />
        </div>
        <div className="goal-content">
          <h3>Objetivo: No Consenso, sino Comprensión Informada</h3>
          <div className="goal-points">
            <div className="goal-point">✓ Entendimiento informado de perspectivas diferentes</div>
            <div className="goal-point">✓ Identificación de puentes posibles</div>
            <div className="goal-point">✓ Construcción de pasos concretos</div>
            <div className="goal-point">✓ Respeto por la complejidad del conflicto territorial</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NextStepsSlide;
