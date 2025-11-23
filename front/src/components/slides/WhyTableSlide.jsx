/**
 * WHY TABLE SLIDE - SLIDE 4
 *
 * Mi Rol en TELAR
 * Role in TELAR project and binational collaboration
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe2, Users, Lightbulb, MapPin, ArrowRight } from 'lucide-react';
import './WhyTableSlide.css';

const WhyTableSlide = () => {
  const projectHighlights = [
    {
      icon: Globe2,
      title: 'Colaboración Binacional',
      description: 'MESA México + MESA Colombia',
      color: '#3b82f6'
    },
    {
      icon: Target,
      title: 'Metodología TABLE',
      description: 'Prospectiva participativa aplicada a Latinoamérica',
      color: '#10b981'
    },
    {
      icon: Users,
      title: 'Contexto Territorial',
      description: 'Adaptación a conflictos y complejidades culturales',
      color: '#f97316'
    },
    {
      icon: Lightbulb,
      title: 'Desafíos Institucionales',
      description: 'Navegando realidades políticas mexicanas',
      color: '#a855f7'
    }
  ];

  const focusAreas = [
    'Futuro de la ganadería industrial',
    'Transición hacia sistemas sostenibles',
    'Sistemas alimentarios éticos',
    'Contexto mexicano específico'
  ];

  return (
    <div className="why-table-slide">
      {/* BACKGROUND */}
      <div className="slide-bg">
        <div className="bg-circle circle-blue"></div>
        <div className="bg-circle circle-green"></div>
        <div className="bg-circle circle-orange"></div>
      </div>

      {/* HEADER */}
      <motion.div
        className="header-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-badge">
          <MapPin size={20} />
          <span>TELAR Project</span>
        </div>
        <h1 className="main-title">
          Mi Rol en <span className="gradient-text">TELAR</span>
        </h1>
        <p className="main-subtitle">
          Explorando el Futuro de la Ganadería Industrial en México
        </p>
      </motion.div>

      {/* MAIN CONTENT GRID */}
      <div className="content-grid">

        {/* LEFT: PROJECT HIGHLIGHTS */}
        <motion.div
          className="highlights-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">
            <Target size={24} />
            Características del Proyecto
          </h2>

          <div className="highlights-grid">
            {projectHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                >
                  <div className="highlight-icon" style={{ backgroundColor: item.color }}>
                    <Icon size={24} />
                  </div>
                  <div className="highlight-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT: FOCUS AREAS */}
        <motion.div
          className="focus-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">
            <Lightbulb size={24} />
            Áreas de Enfoque
          </h2>

          <div className="focus-list">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                className="focus-item"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              >
                <div className="focus-bullet"></div>
                <span>{area}</span>
              </motion.div>
            ))}
          </div>

          {/* COLLABORATION BOX */}
          <motion.div
            className="collaboration-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="collab-header">
              <Globe2 size={32} />
              <h3>Colaboración Binacional</h3>
            </div>
            <div className="collab-countries">
              <div className="country-badge mexico">
                <span className="flag">🇲🇽</span>
                <span className="name">MESA México</span>
              </div>
              <ArrowRight size={24} className="arrow-icon" />
              <div className="country-badge colombia">
                <span className="flag">🇨🇴</span>
                <span className="name">MESA Colombia</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM CALLOUT */}
      <motion.div
        className="callout-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="callout-icon">
          <Target size={28} />
        </div>
        <p className="callout-text">
          <strong>Metodología TABLE en acción:</strong> Adaptando herramientas de
          prospectiva participativa a los conflictos territoriales, complejidades
          culturales y desafíos institucionales específicos de Latinoamérica.
        </p>
      </motion.div>

      {/* DECORATION */}
      <div className="slide-decoration"></div>
    </div>
  );
};

export default WhyTableSlide;
