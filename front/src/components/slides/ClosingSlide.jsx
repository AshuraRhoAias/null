/**
 * CLOSING SLIDE - SLIDE 23
 *
 * Contact information and Q&A
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Globe, Heart } from 'lucide-react';
import './ClosingSlide.css';

const ClosingSlide = () => {
  return (
    <div className="closing-slide">
      {/* BACKGROUND */}
      <div className="closing-bg">
        <div className="bg-gradient-orb orb-1"></div>
        <div className="bg-gradient-orb orb-2"></div>
        <div className="bg-gradient-orb orb-3"></div>
      </div>

      {/* CONTENT */}
      <motion.div
        className="closing-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="closing-icon-large"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Heart size={80} />
        </motion.div>

        <motion.h1
          className="closing-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          ¡Gracias!
        </motion.h1>

        <motion.p
          className="closing-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Thank you for your attention
        </motion.p>

        <motion.div
          className="contact-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="contact-heading">Contacto / Contact</h2>

          <div className="contact-card">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Email</div>
                <div className="contact-value">rebecaperezflores@tabledebates.org</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Globe size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Proyecto</div>
                <div className="contact-value">TELAR - MESA México</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="qa-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="qa-icon">
            <MessageCircle size={40} />
          </div>
          <h3 className="qa-title">Preguntas / Questions</h3>
          <p className="qa-subtitle">
            Happy to answer questions about methodology, challenges, or TABLE adaptations
          </p>
        </motion.div>

        <motion.div
          className="acknowledgment-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <p>Thank you to the TABLE community for this space</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClosingSlide;
