/**
 * TITLE SLIDE - PORTADA
 *
 * NOTA PARA PRINCIPIANTES:
 * Este es el primer slide de la presentación (la portada).
 * Usa Framer Motion para animaciones suaves.
 *
 * ¿Qué hace cada parte?
 * - motion.div: Crea un elemento con animación
 * - initial: Estado inicial (antes de aparecer)
 * - animate: Estado final (después de animar)
 * - transition: Cómo se mueve de inicial a final
 */

import React from 'react';
import { motion } from 'framer-motion';
import './TitleSlide.css';

const TitleSlide = () => {
  return (
    <div className="title-slide">
      {/* FONDO ANIMADO CON GRADIENTE */}
      <div className="title-background">
        <motion.div
          className="gradient-orb orb-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="gradient-orb orb-2"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="title-content">
        {/* LOGO TABLE */}
        <motion.div
          className="title-logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/Images/logos/table.png"
            alt="TABLE Debates"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Fallback si no hay imagen */}
          <div className="logo-fallback" style={{ display: 'none' }}>
            <span className="logo-text">TABLE</span>
          </div>
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        <motion.h1
          className="title-main"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
        >
          Explorando Futuros de la
          <span className="title-highlight"> Ganadería Industrial </span>
          en México
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.h2
          className="title-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Mesas de Sondeo con Metodología TABLE
        </motion.h2>

        {/* SEPARADOR DECORATIVO */}
        <motion.div
          className="title-divider"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* INFORMACIÓN DEL AUTOR */}
        <motion.div
          className="title-author"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="author-name">Rebeca Pérez-Flores</h3>
          <p className="author-title">Asistente de Investigación</p>
          <p className="author-institution">Proyecto TELAR - MESA México</p>
          <p className="author-institution">Instituto de Investigaciones Sociales, UNAM</p>
        </motion.div>

        {/* FECHA Y LUGAR */}
        <motion.div
          className="title-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="meta-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Noviembre 2024
          </span>
          <span className="meta-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Mérida, Yucatán, México
          </span>
        </motion.div>

        {/* LOGOS INSTITUCIONALES */}
        <motion.div
          className="title-logos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="institutional-logo">
            <img
              src="/Images/logos/unam.png"
              alt="UNAM"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          <div className="institutional-logo">
            <img
              src="/Images/logos/iis.png"
              alt="IIS-UNAM"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          <div className="institutional-logo">
            <img
              src="/Images/logos/mesa.png"
              alt="MESA"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </motion.div>

        {/* INDICADOR DE INICIO */}
        <motion.div
          className="title-start-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            delay: 2,
            repeat: Infinity
          }}
        >
          <p>Presiona → o Espacio para comenzar</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleSlide;
