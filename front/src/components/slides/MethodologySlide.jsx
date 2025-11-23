/**
 * METHODOLOGY SLIDE - SLIDE 10
 *
 * Dinámica Clave: Visiones de Futuro
 * Colored cards visualization and 4 future scenarios
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, Zap, TrendingUp, Square, CheckSquare } from 'lucide-react';
import './MethodologySlide.css';

const MethodologySlide = () => {
  const cardColors = [
    {
      color: '#10b981',
      name: 'Verde',
      meaning: 'Futuro Mejor',
      icon: TrendingUp
    },
    {
      color: '#fbbf24',
      name: 'Amarillo',
      meaning: 'Igual que Ahora',
      icon: Square
    },
    {
      color: '#ef4444',
      name: 'Rojo',
      meaning: 'Futuro Peor',
      icon: Zap
    }
  ];

  const scenarios = [
    'Escenario 1: Transición completa a sistemas plant-based',
    'Escenario 2: Granjas certificadas con bienestar animal',
    'Escenario 3: Reducción gradual con alternativas locales',
    'Escenario 4: Continuidad del modelo industrial actual'
  ];

  return (
    <div className="methodology-slide">
      {/* BACKGROUND */}
      <div className="methodology-bg">
        <div className="gradient-mesh"></div>
      </div>

      {/* HEADER */}
      <motion.div
        className="methodology-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="methodology-badge">
          <Eye size={20} />
          <span>Dinámica Clave</span>
        </div>
        <h1 className="methodology-title">
          Visiones de <span className="method-gradient">Futuro</span>
        </h1>
        <p className="methodology-subtitle">
          Explorando Futuros Posibles y Deseables
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="methodology-content">

        {/* LEFT: VISUALIZATION PROCESS */}
        <motion.div
          className="visualization-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="content-title">
            <Eye size={24} />
            Visualización Guiada
          </h2>

          <div className="process-box">
            <div className="process-icon">
              <Heart size={40} />
            </div>
            <p className="process-description">
              <strong>Conexión emocional</strong> — Los participantes se
              conectaron emocionalmente (no solo racionalmente) con
              escenarios futuros a través de una visualización guiada.
            </p>
          </div>

          <h3 className="section-subtitle">Tarjetas de Color</h3>

          <div className="cards-grid">
            {cardColors.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  className="color-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
                >
                  <div
                    className="card-square"
                    style={{ backgroundColor: card.color }}
                  >
                    <Icon size={32} color="white" />
                  </div>
                  <div className="card-info">
                    <div className="card-name">{card.name}</div>
                    <div className="card-meaning">{card.meaning}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT: SCENARIOS */}
        <motion.div
          className="scenarios-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="content-title">
            <CheckSquare size={24} />
            4 Escenarios Presentados
          </h2>

          <div className="scenarios-list">
            {scenarios.map((scenario, idx) => (
              <motion.div
                key={idx}
                className="scenario-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
              >
                <div className="scenario-number">{idx + 1}</div>
                <span>{scenario}</span>
              </motion.div>
            ))}
          </div>

          <div className="evaluation-boxes">
            <div className="eval-box viable">
              <h4>¿VIABLE?</h4>
              <p>¿Es posible que esto suceda?</p>
            </div>
            <div className="eval-box desirable">
              <h4>¿DESEABLE?</h4>
              <p>¿Quiero que esto suceda?</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM INSIGHT */}
      <motion.div
        className="method-insight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <div className="method-insight-icon">
          <Zap size={32} />
        </div>
        <div className="method-insight-content">
          <h3>Objetivo de la Dinámica</h3>
          <p>
            Explorar <strong>la brecha entre lo posible y lo deseable</strong> —
            identificando qué factores podrían cerrar esa brecha y permitir
            futuros más justos y sostenibles.
          </p>
        </div>
      </motion.div>

      {/* DECORATION */}
      <div className="methodology-decoration"></div>
    </div>
  );
};

export default MethodologySlide;
