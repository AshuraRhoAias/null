/**
 * PRIORITIZE PORK SLIDE - SLIDE 6
 *
 * Mapa de Actores Clave (MAC)
 * Key actors map with 35 actors across 4 levels
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Landmark, Heart, MapPin } from 'lucide-react';
import './PrioritizePorkSlide.css';

const PrioritizePorkSlide = () => {
  const actorLevels = [
    {
      level: 'Nivel 1',
      title: 'Productores Primarios e Industria',
      icon: Building2,
      color: '#64748b',
      examples: ['Mega-granjas', 'Productores medianos', 'Pequeños productores']
    },
    {
      level: 'Nivel 2',
      title: 'Gobierno y Organismos Reguladores',
      icon: Landmark,
      color: '#3b82f6',
      examples: ['SEMARNAT', 'SAGARPA', 'Gobiernos estatales']
    },
    {
      level: 'Nivel 3',
      title: 'OSC y Academia',
      icon: Heart,
      color: '#10b981',
      examples: ['Organizaciones ambientalistas', 'Organizaciones animalistas', 'Centros de investigación']
    },
    {
      level: 'Nivel 4',
      title: 'Comunidades Afectadas',
      icon: MapPin,
      color: '#ec4899',
      examples: ['Comunidades Mayas', 'Poblaciones locales', 'Grupos vulnerables']
    }
  ];

  return (
    <div className="prioritize-pork-slide">
      {/* BACKGROUND */}
      <div className="actors-bg">
        <div className="bg-dot-pattern"></div>
      </div>

      {/* HEADER */}
      <motion.div
        className="actors-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="actors-badge">
          <Users size={20} />
          <span>Mapeo de Actores</span>
        </div>
        <h1 className="actors-title">
          Mapa de <span className="actors-gradient">Actores Clave</span>
        </h1>
        <p className="actors-subtitle">
          35 Actores Identificados | 4 Niveles de Participación
        </p>
      </motion.div>

      {/* STATS ROW */}
      <motion.div
        className="stats-row"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="stat-box">
          <div className="stat-number">35</div>
          <div className="stat-label">Actores Totales</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">4</div>
          <div className="stat-label">Niveles</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">100%</div>
          <div className="stat-label">Cobertura Sectorial</div>
        </div>
      </motion.div>

      {/* ACTORS GRID */}
      <div className="actors-grid">
        {actorLevels.map((level, idx) => {
          const Icon = level.icon;
          return (
            <motion.div
              key={idx}
              className="actor-level-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
              style={{ '--level-color': level.color }}
            >
              <div className="level-header">
                <div className="level-icon" style={{ backgroundColor: level.color }}>
                  <Icon size={28} />
                </div>
                <div className="level-info">
                  <div className="level-number">{level.level}</div>
                  <h3 className="level-title">{level.title}</h3>
                </div>
              </div>

              <div className="level-examples">
                {level.examples.map((example, exIdx) => (
                  <div key={exIdx} className="example-item">
                    <div className="example-dot"></div>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* BOTTOM INSIGHT */}
      <motion.div
        className="mapping-insight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="insight-icon-box">
          <Users size={32} />
        </div>
        <p className="insight-text">
          <strong>Importancia del mapeo:</strong> Esta identificación sistemática de
          actores fue esencial para entender quiénes necesitaban estar en la sala
          para un diálogo significativo y representativo del sector porcino.
        </p>
      </motion.div>

      {/* DECORATION */}
      <div className="actors-decoration"></div>
    </div>
  );
};

export default PrioritizePorkSlide;
