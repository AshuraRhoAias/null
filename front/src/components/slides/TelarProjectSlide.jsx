/**
 * TELAR PROJECT SLIDE - SLIDE 3
 *
 * Mi Investigación: Carnismo e Identidad Mexicana
 * Research focus on carnism, cultural identity, and field work
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Users, TrendingUp, FileText, Heart, Globe } from 'lucide-react';
import './TelarProjectSlide.css';

const TelarProjectSlide = () => {
  const researchAreas = [
    {
      icon: Heart,
      title: 'Carnismo e Ideología',
      description: 'Cómo el carnismo condiciona el consumo de ciertos animales',
      color: '#ec4899'
    },
    {
      icon: Globe,
      title: 'Identidad Cultural Mexicana',
      description: 'Influencia en la identidad a través de la cocina tradicional',
      color: '#10b981'
    },
    {
      icon: TrendingUp,
      title: 'Rol de la Publicidad',
      description: 'Mantenimiento de la ideología carnista',
      color: '#f97316'
    },
    {
      icon: Users,
      title: 'Vehículo Cultural',
      description: 'La comida como construcción de identidad',
      color: '#3b82f6'
    }
  ];

  const fieldWork = [
    {
      title: 'Mataderos Federales',
      location: '3 estados productores principales',
      focus: 'Condiciones y bienestar animal'
    },
    {
      title: 'Mataderos Municipales',
      location: 'Diversas regiones de México',
      focus: 'Prácticas de bienestar en campo'
    }
  ];

  return (
    <div className="telar-project-slide">
      {/* BACKGROUND DECORATION */}
      <div className="slide-background">
        <div className="bg-orb orb-pink"></div>
        <div className="bg-orb orb-green"></div>
      </div>

      {/* HEADER */}
      <motion.div
        className="slide-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-icon">
          <Microscope size={40} />
        </div>
        <h1 className="slide-title">
          Mi Investigación: <span className="title-gradient">Carnismo</span> e Identidad Mexicana
        </h1>
        <p className="slide-subtitle">
          Ética Animal y Sistemas Alimentarios en Contexto Mexicano
        </p>
      </motion.div>

      {/* RESEARCH AREAS GRID */}
      <motion.div
        className="research-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="section-heading">
          <FileText size={24} />
          Áreas de Investigación
        </h2>

        <div className="research-cards">
          {researchAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={idx}
                className="research-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                style={{ '--card-color': area.color }}
              >
                <div className="card-icon" style={{ backgroundColor: area.color }}>
                  <Icon size={28} />
                </div>
                <h3 className="card-title">{area.title}</h3>
                <p className="card-description">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* FIELD WORK SECTION */}
      <motion.div
        className="fieldwork-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="section-heading">
          <Microscope size={24} />
          Trabajo de Campo
        </h2>

        <div className="fieldwork-grid">
          {fieldWork.map((work, idx) => (
            <motion.div
              key={idx}
              className="fieldwork-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + idx * 0.15 }}
            >
              <div className="fieldwork-header">
                <h3>{work.title}</h3>
                <span className="location-badge">{work.location}</span>
              </div>
              <p className="fieldwork-focus">
                <strong>Enfoque:</strong> {work.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* KEY INSIGHT BOX */}
      <motion.div
        className="insight-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <div className="insight-icon">
          <Globe size={32} />
        </div>
        <p className="insight-text">
          <strong>Perspectiva única:</strong> Combinación de análisis cultural y
          investigación de campo para comprender las complejidades de la transición
          hacia sistemas alimentarios más sostenibles y éticos en México.
        </p>
      </motion.div>

      {/* DECORATION LINE */}
      <div className="bottom-decoration"></div>
    </div>
  );
};

export default TelarProjectSlide;
