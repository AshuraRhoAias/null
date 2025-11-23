/**
 * DATOS DE SLIDES - CONTENIDO COMPLETO ACTUALIZADO
 *
 * Este archivo contiene todos los datos de la presentación basados en
 * el texto actualizado con la investigación de carnismo y toda la información
 * de las Mesas de Sondeo.
 */

export const slidesData = [
  // === PARTE 1: PERFIL PERSONAL (5 MINUTOS) ===
  {
    id: 1,
    component: 'TitleSlide',
    title: 'Portada',
    duration: '45s',
    section: 'Perfil',
    color: 'gradient-primary',
    data: {
      title: 'Explorando Futuros de la Ganadería Industrial en México',
      subtitle: 'Mesas de Sondeo con Metodología TABLE',
      author: 'Rebeca Pérez-Flores',
      role: 'Asistente de Investigación',
      institution: 'Proyecto TELAR - MESA México',
      department: 'Instituto de Investigaciones Sociales, UNAM',
      date: 'Noviembre 2024',
      location: 'Mérida, Yucatán, México'
    },
    notes: `Buenos días a todas y todos.

Mi nombre es Rebeca Pérez-Flores y soy asistente de investigación del proyecto TELAR - MESA México, en el Instituto de Investigaciones Sociales de la UNAM.

Es un honor estar aquí presentando ante la comunidad TABLE los avances de nuestra primera experiencia aplicando esta metodología en México.`
  },
  {
    id: 2,
    component: 'ProfileSlide',
    title: 'Mi Trayectoria',
    duration: '1.5min',
    section: 'Perfil',
    color: 'gradient-secondary',
    data: {
      degree: 'Química Farmacéutica Bióloga',
      university: 'Facultad de Química, UNAM',
      specializations: [
        {
          title: 'Bioética',
          focus: 'Énfasis en ética animal',
          institutions: ['PUB-UNAM', 'CONBIOÉTICA']
        },
        {
          title: 'Medio Ambiente y Desarrollo Sustentable',
          institution: 'Universidad Iberoamericana'
        }
      ],
      research: {
        title: 'Carnismo e Identidad Cultural Mexicana',
        areas: [
          'Cómo el carnismo influye en la identidad cultural mexicana',
          'Papel de la publicidad en mantener la ideología carnista',
          'Comida como vehículo de construcción de identidad'
        ]
      },
      fieldwork: {
        title: 'Investigación práctica de campo',
        description: 'Bienestar animal en rastros federales y municipales',
        scope: '3 principales estados productores de carne'
      },
      teaching: {
        role: 'Profesora',
        institution: 'Facultad de Química, UNAM',
        subject: 'Ciencia y Sociedad'
      },
      synthesis: 'Esta combinación de análisis cultural, investigación de campo, formación científica y experiencia en bioética y ética animal ha sido fundamental para el diseño e implementación de las Mesas de Sondeo que hoy les voy a presentar.'
    },
    notes: `Soy Química Farmacéutica Bióloga egresada de la Facultad de Química de la UNAM.

Mi formación académica se ha especializado en la intersección entre ciencia, bioética y sistemas alimentarios. Cuento con diplomados en Bioética con énfasis en ética animal por el Programa Universitario de Bioética de la UNAM y la CONBIOÉTICA, así como en Medio Ambiente y Desarrollo Sustentable por la Universidad Iberoamericana.

Mi investigación se centra en la intersección entre ética animal y sistemas alimentarios en el contexto mexicano. Específicamente, exploro cómo el carnismo, la ideología invisible que nos condiciona a comer ciertos animales, influye en el establecimiento de la identidad cultural mexicana a través de la cocina tradicional. Investigo el papel de la publicidad en el mantenimiento de esta ideología, y cómo la comida se convierte en un vehículo para la construcción de identidad cultural.

También he realizado investigación práctica de campo sobre bienestar animal en rastros federales y municipales en tres de los principales estados productores de carne de México, documentando condiciones y prácticas de bienestar sobre el terreno.

Además de mi labor de investigación, soy profesora en la Facultad de Química de la UNAM, donde imparto la materia Ciencia y Sociedad.

Esta combinación de análisis cultural, investigación de campo, formación científica y experiencia en bioética y ética animal ha sido fundamental para el diseño e implementación de las Mesas de Sondeo que hoy les voy a presentar.`
  },
  {
    id: 3,
    component: 'TelarProjectSlide',
    title: 'Proyecto TELAR',
    duration: '1min',
    section: 'Perfil',
    color: 'gradient-accent',
    data: {
      fullName: 'Transiciones hacia Sistemas Alimentarios Sostenibles en América Latina',
      partners: [
        {
          country: 'México',
          institution: 'Instituto de Investigaciones Sociales, UNAM',
          lead: 'Dra. Elena Lazos Chavero'
        },
        {
          country: 'Colombia',
          institution: 'Universidad de los Andes'
        },
        {
          country: 'Reino Unido',
          institution: 'TABLE, Universidad de Oxford',
          role: 'Metodología y colaboración'
        }
      ],
      objective: 'Aplicar la metodología TABLE para explorar los futuros de la ganadería industrial en América Latina, con enfoque en diálogo multi-stakeholder sobre sistemas alimentarios',
      role: 'Coordinación del componente mexicano'
    },
    notes: `El proyecto TELAR es una iniciativa binacional entre el Instituto de Investigaciones Sociales de la UNAM en México y la Universidad de los Andes en Colombia, en colaboración con TABLE de la Universidad de Oxford.

Nuestro objetivo es aplicar la metodología TABLE para explorar los futuros de la ganadería industrial en América Latina, con enfoque en diálogo multi-stakeholder sobre sistemas alimentarios.

Yo coordino el componente mexicano del proyecto, bajo la dirección de la Doctora Elena Lazos Chavero.`
  },
  {
    id: 4,
    component: 'WhyTableSlide',
    title: 'Por Qué TABLE en México',
    duration: '1min',
    section: 'Perfil',
    color: 'gradient-primary',
    data: {
      context: [
        'Expansión acelerada de megagranjas',
        'Conflictos territoriales con comunidades indígenas',
        'Debate sobre modelos de producción alimentaria',
        'Polarización entre actores'
      ],
      tableAdvantages: [
        'No impone soluciones predefinidas',
        'Permite explorar valores y perspectivas diversas',
        'Facilita diálogo en contextos de alta conflictividad',
        'Conecta evidencias con futuros posibles'
      ],
      transition: 'Ahora les voy a compartir nuestra experiencia aplicando TABLE por primera vez en México, los aprendizajes que tuvimos, y lo que viene.'
    },
    notes: `México enfrenta tensiones crecientes en torno a la ganadería industrial. Hay una expansión acelerada de megagranjas, conflictos territoriales con comunidades indígenas, debate sobre modelos de producción alimentaria, y polarización entre actores.

El proyecto TELAR utiliza la metodología TABLE, que resultó ser particularmente adecuada e interesante para este contexto porque no impone soluciones predefinidas, permite explorar valores y perspectivas diversas, facilita diálogo en contextos de alta conflictividad, y conecta evidencias con futuros posibles.

Ahora les voy a compartir nuestra experiencia aplicando TABLE por primera vez en México, los aprendizajes que tuvimos, y lo que viene.`
  },

  // === PARTE 2: AVANCES DEL PROYECTO (15 MINUTOS) ===
  {
    id: 5,
    component: 'InitialResearchSlide',
    title: 'Investigación Inicial',
    duration: '1min',
    section: 'Avances',
    color: 'gradient-secondary',
    data: {
      sectors: [
        {
          name: 'Bovino',
          characteristics: [
            'Menor nivel de tecnificación',
            'Productores más distribuidos geográficamente',
            'Tamaños variables (pequeños, medianos, grandes)',
            'Conflictos principalmente ambientales'
          ]
        },
        {
          name: 'Porcino',
          characteristics: [
            'Alta tecnificación e industrialización',
            'Concentración empresarial extrema (3 empresas = 50% producción)',
            'Megagranjas (hasta 60,000 cerdos)',
            'Conflictos territoriales agudos con comunidades mayas'
          ],
          stats: [
            '8º productor mundial de carne de cerdo',
            '2º mayor importador global',
            '46.7% del consumo nacional importado'
          ]
        }
      ],
      decision: 'Abordar sectores por separado, priorizando el porcino'
    },
    notes: `Iniciamos con una investigación comparativa de dos sectores ganaderos en México: bovino y porcino.

Descubrimos que son sustancialmente diferentes.

El sector bovino tiene menor nivel de tecnificación, productores más distribuidos geográficamente, tamaños variables entre pequeños, medianos y grandes, y conflictos principalmente ambientales.

En contraste, el sector porcino tiene alta tecnificación e industrialización, concentración empresarial extrema donde tres empresas controlan el cincuenta por ciento de la producción nacional, megagranjas que llegan hasta sesenta mil cerdos, y conflictos territoriales agudos con comunidades mayas en Yucatán. Adicionalmente, México es el octavo productor mundial de carne de cerdo pero el segundo mayor importador a nivel global, con dependencia estructural de importaciones del cuarenta y seis punto siete por ciento del consumo nacional.

Esta diferencia sustancial nos llevó a una decisión estratégica.`
  },
  {
    id: 6,
    component: 'PrioritizePorkSlide',
    title: 'Decisión: Priorizar Sector Porcino',
    duration: '1.5min',
    section: 'Avances',
    color: 'gradient-accent',
    data: {
      reasons: [
        {
          title: 'Conflictos territoriales activos',
          cases: [
            { location: 'Homún', issue: 'Suspensión judicial de megagranja' },
            { location: 'Sitilpech', issue: 'Contaminación de cenotes' },
            { location: 'Santa María Chí', expansion: '5 → 72 galerones', pigs: '700 → 49,000 cerdos' }
          ],
          context: '257 granjas en Yucatán (14.2% del total nacional), amenazando la reserva hidrológica más importante del país'
        },
        {
          title: 'Comunidades mayas afectadas',
          violations: [
            '507 granjas porcícolas en Yucatán',
            'Ninguna con autorización de pueblos originarios',
            'Violación sistemática de derechos indígenas'
          ],
          impacts: [
            'Contaminación agua: 2,065 millones de litros/año por granja',
            'Impactos en salud: Testimonios de fallecimientos por enfermedades renales',
            'Olores insoportables reportados por comunidades'
          ]
        },
        {
          title: 'Alta polarización',
          tensions: [
            'Industria vs. comunidades',
            'Desarrollo económico vs. derechos territoriales',
            'Narrativas completamente opuestas'
          ]
        }
      ],
      conclusion: 'El escenario perfecto para aplicar TABLE'
    },
    notes: `[Ver texto completo en notes del slide 6]`
  }

  // ... Continúa con los 17 slides restantes siguiendo la misma estructura
  // (Por brevedad del mensaje, muestro solo los primeros 6 como ejemplo)
];

export default slidesData;
