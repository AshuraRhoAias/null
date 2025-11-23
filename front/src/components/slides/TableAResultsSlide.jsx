/**
 * TABLE A RESULTS SLIDE - RESULTADOS MESA A
 *
 * Slide con datos reales de asistencia y composición de Mesa A
 * realizada el 13 de noviembre en Mérida
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, Wifi, Building2, FlaskConical, Sprout, Heart } from 'lucide-react';
import './TableAResultsSlide.css';

const TableAResultsSlide = () => {
  const presenciales = [
    { name: 'Eduardo Batllori', org: 'Cinvestav' },
    { name: 'Flor Árcega', org: 'Unidad de Química UNAM' },
    { name: 'Xavier Moya', org: 'PNUD', badge: 'Actor clave' },
    { name: 'Tere Vaught', org: 'Mundo y conciencia' },
    { name: 'Janitzin Gutiérrez', org: 'Comunis' },
    { name: 'Irina Yamas', org: 'Instituto de Ecología' },
    { name: 'Sandra Segovia', org: 'Todos somos animales' },
    { name: 'Paola Vázquez', org: 'Doctorado UNAM' },
    { name: 'Carlos', org: 'Greenpeace' },
    { name: 'Miguel Pinkus', org: 'CEPHCIS' },
    { name: 'Wilberth Nahuat', org: 'Santa María Chí', badge: 'CRÍTICO: Comunidad Maya' }
  ];

  const virtuales = [
    'Gustavo Olvera',
    'Susana Cruz',
    'Harlet Esquivel (CRIM)',
    'Emanuel Márquez',
    'Elizabeth Soto (Seres libres)',
    'Alejandra Reyes (CRIM)',
    'Sofía Ruiz (Alianza alimentaria)',
    'María (Mercy for Animals)',
    'María José Sosa'
  ];

  const composition = [
    { category: 'Academia', icon: FlaskConical, count: 7, color: '#3b82f6' },
    { category: 'OSC Ambientalistas', icon: Sprout, count: 4, color: '#10b981' },
    { category: 'OSC Animalistas', icon: Heart, count: 6, color: '#ec4899' },
    { category: 'PNUD', icon: Building2, count: 1, color: '#f59e0b' },
    { category: 'Comunidad Maya', icon: Users, count: 1, color: '#8b5cf6' },
    { category: 'Gobierno', icon: Building2, count: 0, color: '#64748b' }
  ];

  return (
    <div className="table-a-results-slide">
      {/* HEADER */}
      <motion.div
        className="results-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-badge">13 de Noviembre, 2024</div>
        <h1 className="results-title">
          Mesa A: <span className="text-gradient">Resultados</span>
        </h1>
        <p className="results-subtitle">
          "Perspectivas Alternativas y Transformadoras sobre el Sector Porcino"
        </p>
      </motion.div>

      {/* ASISTENCIA */}
      <div className="attendance-section">
        <motion.div
          className="attendance-card total"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Users size={48} />
          <div className="attendance-number">23</div>
          <div className="attendance-label">Participantes Totales</div>
        </motion.div>

        <motion.div
          className="attendance-card presencial"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <UserCheck size={48} />
          <div className="attendance-number">11</div>
          <div className="attendance-label">Presenciales</div>
        </motion.div>

        <motion.div
          className="attendance-card virtual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Wifi size={48} />
          <div className="attendance-number">12</div>
          <div className="attendance-label">Virtuales</div>
        </motion.div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="results-content">

        {/* PARTICIPANTES PRESENCIALES */}
        <motion.div
          className="participants-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="section-title">
            <UserCheck size={24} />
            Participantes Presenciales
          </h3>
          <div className="participants-list">
            {presenciales.map((p, idx) => (
              <motion.div
                key={idx}
                className={`participant-item ${p.badge ? 'highlight' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.05 }}
              >
                <div className="participant-info">
                  <div className="participant-name">{p.name}</div>
                  <div className="participant-org">{p.org}</div>
                </div>
                {p.badge && (
                  <div className="participant-badge">{p.badge}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* COMPOSICIÓN */}
        <motion.div
          className="composition-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="section-title">
            <Users size={24} />
            Composición por Sector
          </h3>

          <div className="composition-chart">
            {composition.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  className="composition-bar"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                >
                  <div className="bar-icon" style={{ backgroundColor: cat.color }}>
                    <Icon size={20} />
                  </div>
                  <div className="bar-fill" style={{
                    width: `${(cat.count / 23) * 100}%`,
                    backgroundColor: cat.color
                  }}>
                    <span className="bar-count">{cat.count}</span>
                  </div>
                  <div className="bar-label">{cat.category}</div>
                </motion.div>
              );
            })}
          </div>

          {/* OBSERVACIONES CRÍTICAS */}
          <motion.div
            className="critical-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h4>Observaciones Críticas:</h4>
            <ul>
              <li>
                <strong>Única comunidad maya:</strong> Santa María Chi (Wilberth Nahuat)
              </li>
              <li>
                <strong>Gobierno:</strong> Cero participación (pese a confirmaciones)
              </li>
              <li>
                <strong>Composición:</strong> Predominantemente OSC animalistas y ambientalistas
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* DECORACIÓN */}
      <div className="results-decoration">
        <div className="decoration-line"></div>
      </div>
    </div>
  );
};

export default TableAResultsSlide;
