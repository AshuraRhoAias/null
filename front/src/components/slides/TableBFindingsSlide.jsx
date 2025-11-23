/**
 * TABLE B FINDINGS SLIDE - SLIDE 16
 *
 * Mesa B: Hallazgos y Comentario de Batllori
 */

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, AlertTriangle, FileText } from 'lucide-react';
import './TableBChallengeSlide.css';

const TableBFindingsSlide = () => {
  const findings = [
    {
      title: 'Visión Productiva Manifestada',
      text: 'La perspectiva de desarrollo e industria se expresó claramente',
      icon: FileText,
      color: '#3b82f6'
    },
    {
      title: 'Legislación Insuficiente',
      text: 'Sin voluntad de las personas, la legislación no es suficiente',
      icon: AlertTriangle,
      color: '#f97316'
    },
    {
      title: 'Programas Ambientales',
      text: 'Deben mantenerse, no estar sujetos a la administración política en poder',
      icon: FileText,
      color: '#10b981'
    }
  ];

  return (
    <div className="tableb-findings-slide">
      {/* HEADER */}
      <motion.div
        className="tableb-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="tableb-badge">
          <MessageSquare size={20} />
          <span>Mesa B: Hallazgos</span>
        </div>
        <h1 className="tableb-title">
          Mesa B: <span className="tableb-gradient">Hallazgos Críticos</span>
        </h1>
      </motion.div>

      {/* CRITICAL MOMENT */}
      <motion.div
        className="critical-moment-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>
          <AlertTriangle size={28} />
          Momento de Tensión
        </h2>
        <div className="critical-quote">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            En un momento, se <strong>acusó a las comunidades de contaminar
            a propósito</strong> para presentar quejas, dañando ellos mismos
            el medio ambiente.
          </p>
          <p className="quote-attribution">— Dr. Eduardo Batllori</p>
        </div>
      </motion.div>

      {/* FINDINGS GRID */}
      <div className="findings-grid">
        {findings.map((finding, idx) => {
          const Icon = finding.icon;
          return (
            <motion.div
              key={idx}
              className="finding-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.15 }}
            >
              <div className="finding-icon" style={{ backgroundColor: finding.color }}>
                <Icon size={28} />
              </div>
              <h3 className="finding-title">{finding.title}</h3>
              <p className="finding-text">{finding.text}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CONCLUSION */}
      <motion.div
        className="conclusion-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h3>Conclusión</h3>
        <p>
          A pesar del bajo número de asistentes, Mesa B permitió capturar la <strong>perspectiva
          industrial/productiva</strong> de forma auténtica, revelando las profundas diferencias
          de visión que alimentan el conflicto territorial.
        </p>
      </motion.div>
    </div>
  );
};

export default TableBFindingsSlide;
