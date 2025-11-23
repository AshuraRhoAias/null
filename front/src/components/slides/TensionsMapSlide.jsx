/**
 * TENSIONS MAP SLIDE - SLIDE 7
 *
 * Innovación: Mapa de Tensiones
 * 69 specific tensions identified - methodological contribution
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplet, Home, Heart, TrendingUp, Users, AlertCircle } from 'lucide-react';
import './TensionsMapSlide.css';

const TensionsMapSlide = () => {
  const tensionCategories = [
    {
      icon: Droplet,
      title: 'Contaminación del Agua',
      color: '#3b82f6',
      count: 15
    },
    {
      icon: Home,
      title: 'Derechos de Uso de Tierra',
      color: '#10b981',
      count: 12
    },
    {
      icon: Heart,
      title: 'Estándares de Bienestar Animal',
      color: '#ec4899',
      count: 11
    },
    {
      icon: TrendingUp,
      title: 'Políticas de Exportación',
      color: '#f97316',
      count: 10
    },
    {
      icon: Users,
      title: 'Impactos en Salud Comunitaria',
      color: '#a855f7',
      count: 13
    },
    {
      icon: AlertCircle,
      title: 'Otros Conflictos',
      color: '#64748b',
      count: 8
    }
  ];

  return (
    <div className="tensions-map-slide">
      {/* BACKGROUND */}
      <div className="tensions-bg">
        <div className="lightning-orb orb-left"></div>
        <div className="lightning-orb orb-right"></div>
      </div>

      {/* HEADER */}
      <motion.div
        className="tensions-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="innovation-badge">
          <Zap size={20} />
          <span>Innovación Metodológica</span>
        </div>
        <h1 className="tensions-title">
          Mapa de <span className="tensions-gradient">Tensiones</span>
        </h1>
        <p className="tensions-subtitle">
          Contribución de MESA México al Método TABLE
        </p>
      </motion.div>

      {/* MAIN STAT */}
      <motion.div
        className="main-stat-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="stat-icon">
          <Zap size={64} />
        </div>
        <div className="stat-content">
          <div className="stat-number">69</div>
          <div className="stat-label">Tensiones Específicas Identificadas</div>
        </div>
      </motion.div>

      {/* TENSIONS CATEGORIES */}
      <div className="tensions-grid">
        {tensionCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={idx}
              className="tension-category-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
            >
              <div className="category-icon" style={{ backgroundColor: category.color }}>
                <Icon size={28} />
              </div>
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <div className="category-count" style={{ color: category.color }}>
                  {category.count} tensiones
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* KEY INSIGHT BOX */}
      <motion.div
        className="tensions-insight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <div className="insight-header">
          <div className="insight-icon">
            <AlertCircle size={32} />
          </div>
          <h3>¿Por Qué el Mapa de Tensiones?</h3>
        </div>
        <div className="insight-points">
          <div className="insight-point">
            <div className="point-bullet"></div>
            <p>
              <strong>No eran conflictos abstractos</strong> — Tensiones concretas
              sobre agua, tierra, bienestar animal, exportaciones y salud comunitaria
            </p>
          </div>
          <div className="insight-point">
            <div className="point-bullet"></div>
            <p>
              <strong>Asimetrías de poder significativas</strong> — El diálogo simple
              multi-stakeholder no iba a funcionar
            </p>
          </div>
          <div className="insight-point">
            <div className="point-bullet"></div>
            <p>
              <strong>Llevó al diseño de dos mesas separadas</strong> — Espacios
              seguros para cada perspectiva antes del diálogo conjunto
            </p>
          </div>
        </div>
      </motion.div>

      {/* DECORATION */}
      <div className="tensions-decoration"></div>
    </div>
  );
};

export default TensionsMapSlide;
