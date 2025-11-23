/**
 * FINAL REFLECTIONS SLIDE - SLIDE 20
 *
 * Reflexión Metodológica Final
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Heart, TrendingUp } from 'lucide-react';
import './SharedReflectionsSlide.css';

const FinalReflectionsSlide = () => {
  const reflections = [
    {
      icon: Users,
      title: 'Relaciones Interpersonales',
      text: 'La exploración de valores, evidencia y visiones futuras depende de relaciones interpersonales que generen un ambiente seguro de confianza.',
      color: '#10b981'
    },
    {
      icon: Heart,
      title: 'Contextos de Conflicto Profundo',
      text: 'En contextos de conflicto territorial profundo, asimetrías de poder y desconfianza histórica, la metodología importa, pero las relaciones importan más.',
      color: '#ec4899'
    },
    {
      icon: TrendingUp,
      title: 'Construcción de Confianza',
      text: 'No se puede saltar el paso de construcción de confianza. Es esencial para generar un diálogo auténtico y transformador.',
      color: '#3b82f6'
    }
  ];

  return (
    <div className="reflections-slide">
      {/* HEADER */}
      <motion.div
        className="reflections-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="reflections-badge">
          <Lightbulb size={20} />
          <span>Reflexión Metodológica</span>
        </div>
        <h1 className="reflections-title">
          Reflexiones <span className="reflections-gradient">Finales</span>
        </h1>
        <p className="reflections-subtitle">
          Lo que Aprendimos sobre Diálogo en Conflictos Complejos
        </p>
      </motion.div>

      {/* REFLECTIONS GRID */}
      <div className="reflections-grid">
        {reflections.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="reflection-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
            >
              <div className="reflection-icon" style={{ backgroundColor: item.color }}>
                <Icon size={36} />
              </div>
              <h3 className="reflection-title">{item.title}</h3>
              <p className="reflection-text">{item.text}</p>
            </motion.div>
          );
        })}
      </div>

      {/* KEY INSIGHT */}
      <motion.div
        className="key-insight-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="insight-quote-icon">
          <Lightbulb size={48} />
        </div>
        <blockquote className="insight-quote">
          "Methodology matters, but <strong>relationship-building matters more.</strong>"
        </blockquote>
        <p className="insight-attribution">
          — Lección Crítica del Proyecto TELAR México
        </p>
      </motion.div>
    </div>
  );
};

export default FinalReflectionsSlide;
