/**
 * INVITATION CHALLENGE SLIDE - SLIDE 9
 *
 * Desafío: Proceso de Invitaciones
 */

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users, Phone, FileText, MapPin } from 'lucide-react';
import './InvitationChallengeSlide.css';

const InvitationChallengeSlide = () => {
  const challenges = [
    {
      icon: MapPin,
      title: 'Comunidades Mayas',
      challenge: 'Profunda desconfianza - no conocíamos personalmente a estos actores',
      color: '#10b981'
    },
    {
      icon: Phone,
      title: 'Industria',
      challenge: 'Canales de comunicación completamente cerrados - sin respuesta a emails ni llamadas',
      color: '#f97316'
    },
    {
      icon: FileText,
      title: 'Consentimiento Informado',
      challenge: 'Sistema de verificación muy burocrático - afectó participación virtual',
      color: '#3b82f6'
    },
    {
      icon: Users,
      title: 'Participación Virtual',
      challenge: 'Muchos confirmados no pudieron completar el proceso',
      color: '#ec4899'
    }
  ];

  return (
    <div className="invitation-challenge-slide">
      {/* HEADER */}
      <motion.div
        className="invitation-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="invitation-badge">
          <AlertTriangle size={20} />
          <span>Desafío</span>
        </div>
        <h1 className="invitation-title">
          Proceso de <span className="invitation-gradient">Invitaciones</span>
        </h1>
        <p className="invitation-subtitle">
          Complejidades y Obstáculos Encontrados
        </p>
      </motion.div>

      {/* CHALLENGES GRID */}
      <div className="challenges-grid">
        {challenges.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="challenge-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
            >
              <div className="challenge-icon" style={{ backgroundColor: item.color }}>
                <Icon size={32} />
              </div>
              <h3 className="challenge-title">{item.title}</h3>
              <p className="challenge-text">{item.challenge}</p>
            </motion.div>
          );
        })}
      </div>

      {/* KEY LEARNING */}
      <motion.div
        className="learning-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="learning-icon">
          <AlertTriangle size={36} />
        </div>
        <div className="learning-content">
          <h3>Lección Crítica</h3>
          <p>
            El proceso de invitaciones fue <strong>extremadamente complejo</strong>.
            Dado que no conocíamos personalmente a estos actores, fue particularmente
            difícil lograr que las comunidades mayas aceptaran participar. Para la
            industria, sus canales de comunicación tradicionales estaban completamente
            cerrados.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default InvitationChallengeSlide;
