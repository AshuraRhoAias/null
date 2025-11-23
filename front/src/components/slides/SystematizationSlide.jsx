/**
 * SYSTEMATIZATION SLIDE - SLIDE 19
 *
 * Estado Actual: Sistematización de Datos
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileCheck, Users, AlertCircle, TrendingUp } from 'lucide-react';
import './SystematizationSlide.css';

const SystematizationSlide = () => {
  const dataProcessed = [
    {
      icon: FileCheck,
      title: 'Resultados Mentimeter Completos',
      description: 'Mesa A: dilemas, nube de palabras, visiones',
      color: '#10b981'
    },
    {
      icon: Users,
      title: '5 Cuadernillos Virtuales',
      description: 'Participantes que completaron workbook online',
      color: '#3b82f6'
    },
    {
      icon: FileCheck,
      title: 'Notas de Discusiones',
      description: 'Mesa A y Mesa B presenciales',
      color: '#f97316'
    }
  ];

  return (
    <div className="systematization-slide">
      {/* HEADER */}
      <motion.div
        className="sys-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="sys-badge">
          <Database size={20} />
          <span>Estado Actual</span>
        </div>
        <h1 className="sys-title">
          <span className="sys-gradient">Sistematización</span> de Datos
        </h1>
        <p className="sys-subtitle">
          Procesando y Analizando los Hallazgos
        </p>
      </motion.div>

      {/* DATA PROCESSED */}
      <div className="data-grid">
        {dataProcessed.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="data-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
            >
              <div className="data-icon" style={{ backgroundColor: item.color }}>
                <Icon size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CRITICAL TESTIMONY */}
      <motion.div
        className="testimony-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="testimony-header">
          <AlertCircle size={32} />
          <h2>Testimonio Crítico: Wilberth Nahuat</h2>
        </div>
        <div className="testimony-content">
          <div className="testimony-item">
            <div className="testimony-label">Comunidad:</div>
            <div className="testimony-value">Santa María Chi</div>
          </div>
          <div className="testimony-item">
            <div className="testimony-label">Datos críticos:</div>
            <div className="testimony-value">
              <strong>5 muertes</strong> por enfermedad renal<br />
              Expansión de <strong>700 a 49,000 cerdos</strong>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ANALYSIS */}
      <motion.div
        className="analysis-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="analysis-icon">
          <TrendingUp size={36} />
        </div>
        <div className="analysis-content">
          <h3>Análisis Comparativo en Proceso</h3>
          <ul>
            <li>¿Dónde existen convergencias entre perspectivas?</li>
            <li>¿Dónde las tensiones son irreconciliables?</li>
            <li>¿Qué evidencia neutral se necesita?</li>
            <li>¿Qué temas deben abordarse en diálogo multi-stakeholder?</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SystematizationSlide;
