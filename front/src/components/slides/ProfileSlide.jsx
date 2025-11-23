/**
 * PROFILE SLIDE - MI TRAYECTORIA
 *
 * Slide actualizado con toda la información sobre:
 * - Formación académica
 * - Investigación sobre carnismo e identidad mexicana
 * - Trabajo de campo en rastros
 * - Docencia
 */

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, FlaskConical, School, Microscope } from 'lucide-react';
import './ProfileSlide.css';

const ProfileSlide = () => {
  return (
    <div className="profile-slide">
      {/* TÍTULO */}
      <motion.div
        className="profile-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="profile-title">Mi Trayectoria</h1>
        <div className="profile-subtitle">Formación Interdisciplinaria</div>
      </motion.div>

      {/* CONTENIDO EN COLUMNAS */}
      <div className="profile-content">

        {/* COLUMNA IZQUIERDA - FORMACIÓN */}
        <div className="profile-left">

          {/* FORMACIÓN BASE */}
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-icon gradient-bg-primary">
              <GraduationCap size={28} />
            </div>
            <div className="card-content">
              <h3>Química Farmacéutica Bióloga</h3>
              <p className="card-institution">Facultad de Química, UNAM</p>
              <p className="card-description">
                Formación base en ciencias exactas
              </p>
            </div>
          </motion.div>

          {/* BIOÉTICA */}
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-icon gradient-bg-secondary">
              <BookOpen size={28} />
            </div>
            <div className="card-content">
              <h3>Bioética</h3>
              <p className="card-emphasis">Énfasis en ética animal</p>
              <ul className="card-list">
                <li>Programa Universitario de Bioética (PUB-UNAM)</li>
                <li>CONBIOÉTICA</li>
              </ul>
            </div>
          </motion.div>

          {/* SUSTENTABILIDAD */}
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="card-icon gradient-bg-accent">
              <FlaskConical size={28} />
            </div>
            <div className="card-content">
              <h3>Medio Ambiente y Desarrollo Sustentable</h3>
              <p className="card-institution">Universidad Iberoamericana</p>
            </div>
          </motion.div>

          {/* DOCENCIA */}
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="card-icon gradient-bg-purple">
              <School size={28} />
            </div>
            <div className="card-content">
              <h3>Docencia</h3>
              <p className="card-institution">Facultad de Química, UNAM</p>
              <p className="card-description">Materia: Ciencia y Sociedad</p>
            </div>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA - INVESTIGACIÓN */}
        <div className="profile-right">

          {/* INVESTIGACIÓN CARNISMO */}
          <motion.div
            className="research-highlight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="research-badge">Investigación Principal</div>
            <h2 className="research-title">
              <span className="text-gradient">Carnismo</span> e Identidad Cultural Mexicana
            </h2>

            <div className="research-focus">
              <h4>Ejes de investigación:</h4>
              <ul className="research-list">
                <li>
                  <span className="bullet">•</span>
                  Cómo el <strong>carnismo</strong> (ideología invisible que nos condiciona a comer ciertos animales)
                  influye en la identidad cultural mexicana
                </li>
                <li>
                  <span className="bullet">•</span>
                  Papel de la <strong>publicidad</strong> en mantener esta ideología
                </li>
                <li>
                  <span className="bullet">•</span>
                  La comida como vehículo de <strong>construcción de identidad</strong>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* TRABAJO DE CAMPO */}
          <motion.div
            className="fieldwork-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="fieldwork-icon">
              <Microscope size={32} />
            </div>
            <div className="fieldwork-content">
              <h3>Investigación de Campo</h3>
              <p className="fieldwork-description">
                <strong>Bienestar animal</strong> en rastros federales y municipales
              </p>
              <p className="fieldwork-scope">
                3 principales estados productores de carne en México
              </p>
              <p className="fieldwork-note">
                Documentación de condiciones y prácticas sobre el terreno
              </p>
            </div>
          </motion.div>

          {/* SÍNTESIS */}
          <motion.div
            className="synthesis-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="synthesis-text">
              Esta combinación de <strong>análisis cultural</strong>, <strong>investigación de campo</strong>,
              <strong> formación científica</strong> y experiencia en <strong>bioética y ética animal</strong> ha sido
              fundamental para el diseño e implementación de las <strong>Mesas de Sondeo</strong> que hoy les voy a presentar.
            </p>
          </motion.div>
        </div>
      </div>

      {/* DECORACIÓN DE FONDO */}
      <div className="profile-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </div>
  );
};

export default ProfileSlide;
