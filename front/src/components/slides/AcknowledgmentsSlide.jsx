/**
 * ACKNOWLEDGMENTS SLIDE - SLIDE 22
 *
 * Agradecimientos a participantes e instituciones
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Building2, Globe } from 'lucide-react';
import './AcknowledgmentsSlide.css';

const AcknowledgmentsSlide = () => {
  const acknowledgments = [
    {
      icon: Building2,
      title: 'CEPHCIS Mérida',
      subtitle: 'Centro Peninsular en Humanidades y Ciencias Sociales',
      description: 'Por facilitarnos sus instalaciones para las mesas de sondeo',
      color: '#3b82f6'
    },
    {
      icon: Users,
      title: 'Participantes Mesa A',
      subtitle: '23 personas comprometidas',
      description: 'OSCs, academia y comunidad Maya que compartieron sus visiones',
      color: '#10b981'
    },
    {
      icon: Users,
      title: 'Participantes Mesa B',
      subtitle: 'Voces críticas de desarrollo',
      description: 'Por su participación en el diálogo sobre productividad',
      color: '#f97316'
    },
    {
      icon: Globe,
      title: 'Comunidad TABLE',
      subtitle: 'Red Global',
      description: 'Por este espacio de intercambio y aprendizaje metodológico',
      color: '#a855f7'
    }
  ];

  return (
    <div className="acknowledgments-slide">
      {/* HEADER */}
      <motion.div
        className="ack-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="ack-icon-large">
          <Heart size={64} />
        </div>
        <h1 className="ack-title">
          <span className="ack-gradient">Agradecimientos</span>
        </h1>
      </motion.div>

      {/* ACKNOWLEDGMENTS GRID */}
      <div className="ack-grid">
        {acknowledgments.map((ack, idx) => {
          const Icon = ack.icon;
          return (
            <motion.div
              key={idx}
              className="ack-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
            >
              <div className="ack-icon" style={{ backgroundColor: ack.color }}>
                <Icon size={32} />
              </div>
              <h3 className="ack-card-title">{ack.title}</h3>
              <p className="ack-subtitle">{ack.subtitle}</p>
              <p className="ack-description">{ack.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* SPECIAL THANKS */}
      <motion.div
        className="special-thanks"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h2>Agradecimiento Especial</h2>
        <div className="thanks-list">
          <div className="thanks-item">
            <strong>Wilberth Nahuat</strong> - Representante de Santa María Chi
          </div>
          <div className="thanks-item">
            <strong>MESA México & Colombia</strong> - Colaboración binacional
          </div>
          <div className="thanks-item">
            <strong>IIS-UNAM</strong> - Instituto de Investigaciones Sociales
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AcknowledgmentsSlide;
