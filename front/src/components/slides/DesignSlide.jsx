/**
 * DESIGN SLIDE - SLIDE 8
 *
 * Diseño: Dos Mesas Separadas
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowLeftRight, Calendar, MapPin } from 'lucide-react';
import './DesignSlide.css';

const DesignSlide = () => {
  const tables = [
    {
      name: 'Mesa A',
      title: 'Perspectivas Alternativas y Transformadoras',
      subtitle: 'sobre el Sector Porcino: Futuros Posibles',
      participants: ['OSC ambientalistas', 'OSC animalistas', 'Academia', 'Comunidades mayas', 'Gobierno (a petición de comunidades)'],
      color: '#10b981'
    },
    {
      name: 'Mesa B',
      title: 'Desarrollo y Competitividad',
      subtitle: 'del Sector Porcino de México: Futuros Posibles',
      participants: ['Actores de la industria', 'Representantes gubernamentales', 'Sector productivo'],
      color: '#f97316'
    }
  ];

  return (
    <div className="design-slide">
      {/* HEADER */}
      <motion.div
        className="design-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="design-title">
          Diseño: <span className="design-gradient">Dos Mesas Separadas</span>
        </h1>
        <div className="design-meta">
          <div className="meta-item">
            <Calendar size={20} />
            <span>13-14 de Noviembre, 2024</span>
          </div>
          <div className="meta-item">
            <MapPin size={20} />
            <span>CEPHCIS, Mérida, Yucatán</span>
          </div>
        </div>
      </motion.div>

      {/* TABLES GRID */}
      <div className="tables-grid">
        {tables.map((table, idx) => (
          <motion.div
            key={idx}
            className="table-card"
            initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 + idx * 0.2 }}
            style={{ '--table-color': table.color }}
          >
            <div className="table-header">
              <div className="table-name" style={{ backgroundColor: table.color }}>
                {table.name}
              </div>
              <h2 className="table-title">{table.title}</h2>
              <p className="table-subtitle">{table.subtitle}</p>
            </div>

            <div className="table-participants">
              <h3>
                <Users size={20} />
                Participantes Invitados:
              </h3>
              <ul>
                {table.participants.map((p, pIdx) => (
                  <li key={pIdx}>{p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* RATIONALE */}
      <motion.div
        className="rationale-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="rationale-icon">
          <ArrowLeftRight size={36} />
        </div>
        <div className="rationale-content">
          <h3>¿Por Qué Dos Mesas Separadas?</h3>
          <p>
            Crear <strong>espacios seguros</strong> para que cada perspectiva explorara
            valores, evidencia y visiones libremente — antes de reunir a todos en una
            futura mesa de diálogo multi-stakeholder.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DesignSlide;
