/**
 * INITIAL RESEARCH SLIDE - SLIDE 5
 *
 * Contexto: Investigación Inicial Sector Ganadero
 * Differences between cattle and pork sectors
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Search, AlertTriangle, TrendingUp, Users, MapPin, ArrowRight } from 'lucide-react';
import './InitialResearchSlide.css';

const InitialResearchSlide = () => {
  const sectorsComparison = [
    {
      aspect: 'Intensificación Tecnológica',
      icon: TrendingUp,
      color: '#3b82f6'
    },
    {
      aspect: 'Distribución de Productores',
      icon: Users,
      color: '#10b981'
    },
    {
      aspect: 'Huella Ambiental',
      icon: AlertTriangle,
      color: '#f97316'
    },
    {
      aspect: 'Impactos Sociales',
      icon: MapPin,
      color: '#ec4899'
    }
  ];

  const keyFindings = [
    'Dos sistemas sustancialmente diferentes',
    'Sector porcino altamente tecnificado',
    'Conflictos territoriales severos',
    'Mega-granjas vs. Comunidades Mayas'
  ];

  return (
    <div className="initial-research-slide">
      {/* BACKGROUND */}
      <div className="research-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
      </div>

      {/* HEADER */}
      <motion.div
        className="research-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="research-badge">
          <Search size={20} />
          <span>Investigación Inicial</span>
        </div>
        <h1 className="research-title">
          Contexto: <span className="title-gradient">Sector Ganadero</span> Mexicano
        </h1>
        <p className="research-subtitle">
          Diferencias Críticas entre Sistemas de Producción Bovina y Porcina
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="research-content">

        {/* LEFT: COMPARISON ASPECTS */}
        <motion.div
          className="comparison-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="content-heading">
            <Search size={24} />
            Dimensiones de Análisis
          </h2>

          <div className="comparison-grid">
            {sectorsComparison.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="comparison-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                >
                  <div className="comparison-icon" style={{ backgroundColor: item.color }}>
                    <Icon size={28} />
                  </div>
                  <h3>{item.aspect}</h3>
                  <div className="comparison-indicator">
                    <div className="indicator-bar cattle">Bovina</div>
                    <ArrowRight size={16} className="vs-arrow" />
                    <div className="indicator-bar pork">Porcina</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT: KEY DISCOVERY */}
        <motion.div
          className="discovery-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="content-heading">
            <AlertTriangle size={24} />
            Hallazgo Crítico
          </h2>

          <motion.div
            className="discovery-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="discovery-icon-large">
              <MapPin size={48} />
            </div>
            <h3>Conflictos Territoriales Severos</h3>
            <p className="discovery-location">Península de Yucatán</p>
            <div className="conflict-label">
              <span className="conflict-side industry">Mega-Granjas Industriales</span>
              <span className="vs">VS</span>
              <span className="conflict-side communities">Comunidades Mayas</span>
            </div>
          </motion.div>

          <motion.div
            className="findings-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3>Conclusiones Iniciales</h3>
            {keyFindings.map((finding, idx) => (
              <motion.div
                key={idx}
                className="finding-item"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
              >
                <div className="finding-bullet"></div>
                <span>{finding}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* DECISION BOX */}
      <motion.div
        className="decision-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="decision-icon">
          <AlertTriangle size={32} />
        </div>
        <div className="decision-content">
          <h3>Decisión Estratégica</h3>
          <p>
            Dada la urgencia y complejidad de los conflictos territoriales, decidimos
            abordar cada sector por separado, <strong>priorizando el sector porcino</strong> para
            las primeras mesas de sondeo.
          </p>
        </div>
      </motion.div>

      {/* DECORATION */}
      <div className="research-decoration"></div>
    </div>
  );
};

export default InitialResearchSlide;
