/**
 * TABLE A FINDINGS SLIDE - SLIDE 13
 *
 * Mesa A - Resultados Mentimeter y Hallazgos
 * Word cloud, dilemmas results, perspectives
 */

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react';
import './TableAFindingsSlide.css';

const TableAFindingsSlide = () => {
  const wordCloudWords = [
    { word: 'Opresión', size: 'large' },
    { word: 'Crueldad', size: 'large' },
    { word: 'Violencia', size: 'large' },
    { word: 'Contaminación', size: 'medium' },
    { word: 'Injusticia', size: 'medium' },
    { word: 'Explotación', size: 'medium' }
  ];

  const dilemmaResults = [
    {
      question: 'Empleos vs. Agua/Medio Ambiente',
      result: '57% favorece cerrar operaciones con apoyo a empleo alternativo',
      percentage: 57,
      color: '#10b981'
    },
    {
      question: 'Escalas de producción y certificaciones',
      result: '92% favorece transición hacia sistemas sin explotación animal',
      percentage: 92,
      color: '#3b82f6'
    },
    {
      question: 'Derechos territoriales vs. Empleos',
      result: '100% prioriza derechos territoriales y salud comunitaria',
      percentage: 100,
      color: '#ec4899'
    }
  ];

  return (
    <div className="table-a-findings-slide">
      {/* HEADER */}
      <motion.div
        className="findings-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="findings-badge">
          <BarChart3 size={20} />
          <span>Resultados Mentimeter</span>
        </div>
        <h1 className="findings-title">
          Mesa A: <span className="findings-gradient">Hallazgos</span>
        </h1>
      </motion.div>

      {/* WORD CLOUD SECTION */}
      <motion.div
        className="wordcloud-section"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="section-heading">
          <MessageSquare size={24} />
          Nube de Palabras - Actividad de Apertura
        </h2>
        <div className="wordcloud-container">
          {wordCloudWords.map((item, idx) => (
            <motion.span
              key={idx}
              className={`cloud-word ${item.size}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            >
              {item.word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* DILEMMA RESULTS */}
      <div className="dilemma-results">
        <h2 className="section-heading">
          <TrendingUp size={24} />
          Resultados de Dilemas
        </h2>

        {dilemmaResults.map((item, idx) => (
          <motion.div
            key={idx}
            className="dilemma-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + idx * 0.15 }}
          >
            <div className="dilemma-question">{item.question}</div>
            <div className="dilemma-bar-container">
              <div
                className="dilemma-bar"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color
                }}
              >
                <span className="bar-percentage">{item.percentage}%</span>
              </div>
            </div>
            <div className="dilemma-result">{item.result}</div>
          </motion.div>
        ))}
      </div>

      {/* CONCLUSION */}
      <motion.div
        className="findings-conclusion"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="conclusion-icon">
          <CheckCircle size={32} />
        </div>
        <p className="conclusion-text">
          <strong>Confirmación:</strong> Mesa A capturó exitosamente perspectivas
          críticas y transformadoras del sector porcino en México.
        </p>
      </motion.div>
    </div>
  );
};

export default TableAFindingsSlide;
