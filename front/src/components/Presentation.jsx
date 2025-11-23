import React, { useState } from 'react';
import './Presentation.css';

// Componente principal de presentación
const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const slides = [
    // PARTE 1: PERFIL PROFESIONAL
    {
      id: 1,
      type: 'title',
      title: 'TABLE Presentation',
      subtitle: 'TELAR Project - Mexico Sounding Tables Progress',
      author: 'Rebeca Pérez-Flores',
      affiliation: 'MESA México - Institute for Social Research, UNAM',
      email: 'rebecaperezflores@tabledebates.org',
      notes: 'Good afternoon, everyone. My name is Rebeca Pérez-Flores, and I\'m a Research Assistant on the TELAR project at MESA México, based at the Institute for Social Research at UNAM in Mexico City. Thank you for this opportunity to share our work with the TABLE community today.',
      duration: '30s'
    },
    {
      id: 2,
      type: 'profile',
      title: 'Who Am I?',
      content: [
        {
          heading: 'Academic Background',
          items: [
            'Pharmaceutical Biological Chemistry (UNAM)',
            'Diplomas in Bioethics (emphasis: animal ethics)',
            'Environment and Sustainable Development',
            'Environmental Education'
          ]
        },
        {
          heading: 'Interdisciplinary Approach',
          items: [
            'Chemistry + Ethics + Environmental Sciences',
            'Science-society intersection'
          ]
        }
      ],
      notes: 'My academic background is quite interdisciplinary. I hold a degree in Pharmaceutical Biological Chemistry from UNAM\'s Faculty of Chemistry, which gave me a strong foundation in the exact sciences. However, my interests led me to explore the intersection of science, ethics, and society. I pursued specialized diplomas in Bioethics with an emphasis on animal ethics from UNAM\'s Bioethics Program and Mexico\'s National Bioethics Commission. I also completed diplomas in Environment and Sustainable Development, and Environmental Education from Universidad Iberoamericana. This interdisciplinary training—combining chemistry, bioethics, and environmental sciences—shapes how I approach complex food systems challenges.',
      duration: '1min'
    },
    {
      id: 3,
      type: 'research',
      title: 'My Research: Carnism and Mexican Identity',
      content: [
        {
          heading: 'Research Focus',
          items: [
            'Animal ethics ∩ Food systems',
            'Carnism\'s influence on Mexican cultural identity',
            'Role of advertising in maintaining ideology',
            'Traditional cuisine as identity vehicle'
          ]
        },
        {
          heading: 'Field Research',
          items: [
            'Animal welfare in slaughterhouses',
            'Federal and municipal facilities',
            '3 main meat-producing states'
          ]
        }
      ],
      image: 'carnism_research.png',
      notes: 'My research centers on the intersection of animal ethics and food systems in the Mexican context. Specifically, I explore how carnism—the invisible ideology that conditions us to eat certain animals—influences the establishment of Mexican cultural identity through traditional cuisine. I investigate the role of advertising in maintaining this ideology, and how food becomes a vehicle for cultural identity construction. I\'ve also conducted practical field research on animal welfare in federal and municipal slaughterhouses across three of Mexico\'s main meat-producing states, documenting conditions and welfare practices on the ground. This combination of cultural analysis and field research gives me a unique perspective on the complexities of transitioning to more sustainable and ethical food systems in Mexico.',
      duration: '1.5min'
    },
    {
      id: 4,
      type: 'role',
      title: 'My Role in TELAR',
      content: [
        'Exploring futures of industrial livestock in Mexico',
        'Transition toward sustainable & ethical food systems',
        'Binational collaboration: MESA México ↔ MESA Colombia',
        'Adapting TABLE methodology to Latin American context'
      ],
      highlight: 'Territorial conflicts, cultural complexities, institutional challenges',
      notes: 'In the TELAR project, I work on exploring the future of industrial livestock farming and the potential for transition towards more sustainable and ethical food systems in Mexico. This is a binational collaboration between MESA México and MESA Colombia, and we\'re applying TABLE\'s innovative methodology to the Latin American context—adapting participatory foresight tools to our specific territorial conflicts, cultural complexities, and institutional challenges. Now, let me share what we\'ve been doing on the ground in Mexico.',
      duration: '1min'
    },

    // PARTE 2: AVANCES PROYECTO
    {
      id: 5,
      type: 'context',
      title: 'Context: Initial Livestock Research',
      content: [
        {
          heading: 'Scope',
          text: 'Cattle & Pork production systems in Mexico'
        },
        {
          heading: 'Key Discovery',
          text: 'Substantially different systems:'
        }
      ],
      comparison: [
        'Technological intensification',
        'Producer distribution & size',
        'Environmental footprints',
        'Social impacts'
      ],
      critical: 'Severe territorial conflicts: Industrial mega-farms vs. Maya communities (Yucatán)',
      decision: '→ Address sectors separately, prioritize pork',
      notes: 'Our initial research focused on Mexico\'s livestock sector broadly, examining both cattle and pork production systems. We quickly discovered something critical: these two systems are substantially different. They differ in levels of technological intensification, in the distribution and size of producers, in their environmental footprints, and in their social impacts. Most importantly, we identified severe territorial conflicts in the pork sector—specifically between industrial mega-farms and Maya communities in the Yucatán Peninsula. Given the urgency and complexity of these conflicts, we decided to address each sector separately, prioritizing the pork sector for our initial sounding tables.',
      duration: '1min'
    },
    {
      id: 6,
      type: 'map',
      title: 'Key Actors Map (MAC)',
      stats: {
        total: 35,
        levels: 4
      },
      levels: [
        '1. Primary producers & industry',
        '2. Government & regulatory bodies',
        '3. CSOs & academia',
        '4. Affected communities'
      ],
      image: 'mapa_actores.png',
      notes: 'This research allowed us to develop a Key Actors Map identifying 35 actors across 4 levels: Primary producers and industry, Government and regulatory bodies, Civil society organizations and academia, and Affected communities. This mapping was essential to understand who needed to be in the room for meaningful dialogue.',
      duration: '45s'
    },
    {
      id: 7,
      type: 'innovation',
      title: 'Innovation: Tensions Map',
      badge: 'MESA México Contribution',
      stats: {
        tensions: 69,
        categories: [
          'Water contamination',
          'Land use rights',
          'Animal welfare standards',
          'Export policies',
          'Community health impacts'
        ]
      },
      insight: 'Simple multi-stakeholder dialogue won\'t work',
      reason: 'Conflicts too deep + Power asymmetries too significant',
      conclusion: '→ Design two separate Sounding Tables',
      image: 'mapa_tensiones.png',
      notes: 'But we went further. MESA México developed an innovative methodological contribution: the Tensions Map. This tool allowed us to identify 69 specific tensions between actors in the pork production system. These weren\'t abstract conflicts—they were concrete tensions around water contamination, land use rights, animal welfare standards, export policies, and community health impacts. The Tensions Map became fundamental for understanding why simple multi-stakeholder dialogue wasn\'t going to work. The conflicts were too deep, the power asymmetries too significant. This led us to design two separate Sounding Tables.',
      duration: '1.5min'
    },
    {
      id: 8,
      type: 'design',
      title: 'Design: Two Separate Tables',
      location: 'Mérida, Yucatán · November 13-14, 2024',
      venue: 'CEPHCIS (Peninsula Center for Humanities and Social Sciences)',
      tables: [
        {
          name: 'Table A',
          subtitle: 'Alternative and Transformative Perspectives on the Pork Sector: Possible Futures',
          invited: [
            'Environmental CSOs',
            'Animal rights CSOs',
            'Academics',
            'Maya communities',
            'Government (at communities\' request)'
          ]
        },
        {
          name: 'Table B',
          subtitle: 'Development and Competitiveness of Mexico\'s Pork Sector: Possible Futures',
          invited: [
            'Industry actors',
            'Government representatives'
          ]
        }
      ],
      rationale: 'Safe spaces for each perspective → Explore values, evidence, visions freely → Future multi-stakeholder dialogue',
      notes: 'We designed two separate Sounding Tables to be held in Mérida, Yucatán on November 13-14, 2024, at the facilities of CEPHCIS—the Peninsula Center for Humanities and Social Sciences. Table A: "Alternative and Transformative Perspectives on the Pork Sector: Possible Futures" - We invited environmental and animal rights CSOs, academics, Maya communities, and government actors at the communities\' request. Table B: "Development and Competitiveness of Mexico\'s Pork Sector: Possible Futures" - We invited industry actors and government representatives. The idea was to create safe spaces for each perspective to explore values, evidence, and visions freely—before bringing everyone together in a future multi-stakeholder dialogue table.',
      duration: '1.5min'
    },
    {
      id: 9,
      type: 'challenge',
      title: 'Challenge: Invitation Process',
      problems: [
        {
          issue: 'Communities: Deep distrust',
          reason: 'We didn\'t know each other personally'
        },
        {
          issue: 'Industry: Communication channels closed',
          reason: 'No response to emails or calls'
        },
        {
          issue: 'Geography: Many couldn\'t travel',
          solution: 'Enabled virtual participation'
        }
      ],
      methodology: [
        '5 dynamics (TABLE methodology)',
        'Informed consent process',
        'Virtual workbook designed'
      ],
      lesson: 'Informed consent verification = too bureaucratic → Affected participation',
      notes: 'The invitation process was extremely complex. Since we didn\'t know these actors personally—a conclusion we reached after the event—it was particularly difficult to get Maya communities to accept participation. There was deep distrust. For industry actors, their traditional communication channels were completely closed. We couldn\'t even get responses to emails or phone calls. Additionally, we realized many actors couldn\'t travel to Mérida for in-person participation, so we enabled virtual participation. We designed a series of 5 dynamics to explore values, perspectives, and future visions according to TABLE methodology. We also developed an informed consent process to ensure security and confidentiality for participants. However, we discovered that our informed consent verification system for virtual participants was too bureaucratic, which affected participation from many confirmed attendees. This was an important methodological lesson.',
      duration: '1.5min'
    },
    {
      id: 10,
      type: 'dynamic',
      title: 'Key Dynamic: Future Visions',
      method: 'Guided Visualization',
      goal: 'Emotional + Rational connection to future scenarios',
      steps: [
        {
          step: 1,
          action: 'Guided visualization',
          description: 'Participants close eyes, imagine future'
        },
        {
          step: 2,
          action: 'Write on colored cards',
          colors: [
            { color: 'green', meaning: 'Better future' },
            { color: 'yellow', meaning: 'Same future' },
            { color: 'red', meaning: 'Worse future' }
          ]
        },
        {
          step: 3,
          action: 'Present 4 future scenarios',
          vote: ['Viable (possible)', 'Desirable (wanted)']
        }
      ],
      purpose: 'Explore gap between possible & desired → Identify bridging factors',
      image: 'tarjetas_colores.png',
      notes: 'Let me highlight one particularly powerful dynamic we designed. To explore future visions, we conducted a guided visualization so participants could connect emotionally—not just rationally—with future scenarios. After the visualization, we asked them to write what they had envisioned on colored cards: Green if they saw a better future, Yellow if they saw things staying the same, Red if they saw a worse future. We then presented them with 4 specific future scenarios and asked them to select which they considered viable (possible), and which they considered desirable (what they wanted). This allowed us to explore the gap between what people think is possible and what they actually want—and to identify what factors might bridge that gap.',
      duration: '1.5min'
    },
    {
      id: 11,
      type: 'results',
      title: 'Table A: Attendance & Composition',
      date: 'November 13, 2024',
      attendance: {
        inPerson: 11,
        virtual: 12,
        total: 23
      },
      composition: 'Predominantly animal rights & environmental CSOs',
      critical: [
        'Only 1 Maya community: Santa María Chi',
        'Representative: Wilberth Nahuat',
        'Zero government actors (despite confirmations)'
      ],
      notes: 'On November 13th, Table A had strong participation: 11 in-person attendees and 12 virtual participants. The composition was predominantly animal rights CSOs and environmental organizations. Critically, we had only one Maya community represented—Santa María Chi—through community representative Wilberth Nahuat. No government actors attended, despite invitations and confirmations.',
      duration: '45s'
    },
    {
      id: 12,
      type: 'tension',
      title: 'Table A: Revealing Tension Moment',
      incident: 'Academic (pro-industry) ↔ Activist debate',
      topic: 'Industry permanence via novel wastewater treatment',
      discovery: 'Indirect industry representation at Table A',
      reaction: 'Other actors applauded',
      why: 'Positive that pro-industry voice heard alternative narratives',
      majority: 'Complete transition to plant-based systems',
      notes: 'The event was very engaging, though at one point during the dynamics there was a moment of tension. An academic who favors the industry debated with an activist about the industry\'s permanence, arguing that a novel wastewater treatment methodology could resolve environmental conflicts. This revealed something important: there was indirect representation of industry perspectives at Table A, even without formal industry presence. Interestingly, other actors applauded this tension. They considered it positive and powerful that this academic was there to hear the narratives of other actors—the majority of whom supported a complete transition from animal-based production systems to plant-based systems.',
      duration: '1min'
    },
    {
      id: 13,
      type: 'diversity',
      title: 'Table A: Dissenting Voices',
      mainVoice: 'Not all abolitionist',
      critique: 'Questioned industrialization itself (animal OR plant)',
      proposal: 'Small-scale, local systems',
      example: 'Traditional Milpa',
      value: 'Showed complexity even within "alternative perspectives"',
      notes: 'However, not all voices were abolitionist. One participant questioned industrialization itself—whether animal or plant-based—proposing small-scale, local systems like the traditional Milpa instead. This complexity was valuable. It showed that even within the "alternative perspectives" group, there were significant differences in vision.',
      duration: '45s'
    },
    {
      id: 14,
      type: 'data',
      title: 'Table A: Mentimeter Results',
      wordCloud: {
        top: ['Oppression', 'Cruelty', 'Violence', 'Contamination']
      },
      dilemmas: [
        {
          question: 'Jobs vs. Water/Environment',
          results: [
            { option: 'Close operations + support alternative jobs', percent: 57 },
            { option: 'Prioritize jobs over water', percent: 0 }
          ]
        },
        {
          question: 'Production scales & certifications',
          results: [
            { option: 'Transition without animal exploitation', percent: 92 }
          ]
        },
        {
          question: 'Territorial rights vs. Jobs',
          results: [
            { option: 'Territorial rights + community health', percent: 100 }
          ]
        }
      ],
      conclusion: 'Table A successfully captured critical/transformative perspectives',
      image: 'mentimeter_mesa_a.png',
      notes: 'Our Mentimeter results from Table A revealed clear patterns: In the word cloud opening activity, the dominant words were: Oppression, Cruelty, Violence, Contamination. On the dilemma of "Jobs vs. Water/Environment": 57% favored closing operations with support for alternative employment, 0% prioritized jobs over water. On the question of production scales and certifications: 92% favored transition toward systems without animal exploitation. On territorial rights vs. jobs: 100% prioritized territorial rights and community health. This confirmed that Table A captured critical/transformative perspectives successfully.',
      duration: '1.5min'
    },
    {
      id: 15,
      type: 'hope',
      title: 'Table A: Green Cards',
      finding: 'Majority = Green cards (positive futures)',
      despite: [
        'Territorial conflicts',
        'Contamination',
        'Animal exploitation',
        'Government approving new mega-farms'
      ],
      meaning: 'Participants envision better futures as possible',
      feedback: 'Positive comments centered on value of incorporating animal ethics dimension',
      interest: 'Vast majority want to participate in third Dialogue Table (A + B together)',
      notes: 'It was hopeful to see that in the colored cards dynamic, there was a majority of green cards—meaning positive future visions despite current conflicts. Despite ongoing territorial conflicts, contamination, animal exploitation, and government approval of new mega-farms even while others are being shut down, participants still envisioned better futures as possible. Final comments from Table A participants were mostly positive and centered on the value of incorporating the dimension of animal ethics into the complexity of pork production systems. In the final dynamic, we asked them to note priority themes they wanted to continue addressing and which actors were necessary. The vast majority expressed interest in participating in a third Dialogue Table where actors from both Table A and Table B would come together.',
      duration: '1min'
    },
    {
      id: 16,
      type: 'crisis',
      title: 'Table B: Convening Crisis',
      problem: 'Very few confirmed participants',
      action: 'Last resort: I went to Kekén offices in person',
      company: 'Kekén = Mexico\'s largest pork production group',
      meeting: 'Head of Communications received me',
      showed: 'Virtual participation workbook',
      interest: 'Personal videoconference with Head of Sustainability',
      confession: 'All communication channels closed due to attacks',
      critical: 'If I hadn\'t gone in person → No contact',
      outcome: 'Waiting to schedule guided interview with Sustainability Head',
      image: 'keken_visit.png',
      notes: 'For Table B, we had very few confirmed participants. As a last resort, I went in person to the corporate offices of Kekén—Mexico\'s largest pork production group—where I was received by the Head of Communications. I explained my background, the project\'s objectives, and the exploratory focus. I showed him the workbook designed for virtual participation. He showed interest in having it applied personally via videoconference with the Head of Sustainability—who was the actor we had considered key for the table. He confessed that all their communication channels are closed due to attacks they\'ve been subjected to. If I hadn\'t gone in person, we would never have made contact. He said it was impossible for them to attend that day, but they were waiting for my message to schedule a guided interview using the virtual workbook with Kekén\'s Head of Sustainability.',
      duration: '1.5min'
    },
    {
      id: 17,
      type: 'failure',
      title: 'Table B: Failure & Learning',
      date: 'November 14, 2024',
      attendance: {
        inPerson: 3,
        virtual: 0
      },
      composition: [
        '2 repeated from Table A',
        '1 new: SEMARNAT (Environment Ministry)'
      ],
      format: 'Modified to open dialogue',
      quality: 'Very enriching',
      perspectives: 'Productive/industry vision clearly manifested',
      shocking: 'Communities accused of contaminating on purpose to file complaints',
      conclusions: [
        'Legislation insufficient without people\'s will',
        'Environmental programs should be maintained (not subject to political admin)'
      ],
      notes: 'Table B was held on November 14th with only 3 in-person attendees, two of whom had already attended Table A. The new actor was from SEMARNAT—Mexico\'s Ministry of Environment and Natural Resources. We modified the dynamics to become an open dialogue, which was actually very enriching. The productive/industry vision and perspectives were clearly manifested. At one point, communities were even accused of contaminating on purpose to file complaints, damaging the environment themselves. We concluded that legislation is insufficient without people\'s will, and that environmental programs should be maintained rather than being subject to the political administration in power.',
      duration: '1min'
    },
    {
      id: 18,
      type: 'lesson',
      title: 'Key Lesson: Trust Building',
      failure: 'Table B turnout',
      gain: 'Strategic contacts for new approach',
      method: 'Guided virtual interviews using workbook',
      critical: 'Contact people IN PERSON',
      why: 'Establish trust & empathy',
      applies: 'Communities AND industry',
      note: 'CSOs & academia accustomed to event invitations (but TABLE methodology is unique)',
      notes: 'Although Table B was a failure in terms of turnout, we obtained strategic contacts that will allow a new approach using the same methodology: guided virtual interviews using the workbook. This experience taught us critical lessons: It\'s essential to contact people in person to establish trust and empathy for them to accept participation—both for communities and for industry. CSOs and academia are more accustomed to invitations to similar events, though TABLE\'s methodology focus is unique. We also learned that processes must be simple, with complete documentation from the start and time for participants to decide whether to attend based on the dynamics.',
      duration: '1min'
    },
    {
      id: 19,
      type: 'reflection',
      title: 'Methodological Reflection',
      insight: 'Values, evidence, perspectives, future visions involve PEOPLE (not just data)',
      depends: 'Interpersonal relationships',
      requirement: 'Safe environment of trust',
      enables: 'People to express themselves',
      context: [
        'Deep conflict',
        'Power asymmetries',
        'Historical distrust'
      ],
      conclusion: 'Methodology matters, but relationship-building matters MORE',
      notes: 'The exploration of values, evidence, perspectives, and future visions—which involve people, not just hard data—depends on interpersonal relationships established to generate a safe environment of trust that allows people to express themselves. This is particularly true in contexts of deep conflict, power asymmetries, and historical distrust like we\'re facing in Yucatán. Methodology matters, but relationship-building matters more.',
      duration: '1min'
    },
    {
      id: 20,
      type: 'current',
      title: 'Current Status: Systematization',
      processing: [
        'Complete Mentimeter results (Table A)',
        '5 completed workbooks (virtual participants)',
        'Notes from in-person discussions',
        'Testimony from Wilberth Nahuat (Santa María Chi)'
      ],
      criticalData: [
        '5 deaths from kidney disease in his community',
        'Expansion: 700 → 49,000 pigs'
      ],
      analysis: [
        'Where convergences exist',
        'Where tensions are irreconcilable',
        'What neutral evidence is needed',
        'What themes for multi-stakeholder dialogue'
      ],
      notes: 'We are currently systematizing the information obtained from both tables. We\'ve processed: Complete Mentimeter results from Table A, 5 completed workbooks from virtual participants, Notes from in-person discussions, The testimony from Wilberth Nahuat from Santa María Chi community—including critical data like 5 deaths from kidney disease in his community, and the expansion from 700 to 49,000 pigs. We\'re conducting comparative analysis of the perspectives to understand: Where convergences exist, Where tensions are irreconcilable, What neutral evidence is needed, What themes must be addressed in multi-stakeholder dialogue.',
      duration: '1min'
    },
    {
      id: 21,
      type: 'next',
      title: 'Next Steps: Guided Consultations',
      method: 'Guided individual consultations',
      target: 'Industry & government actors (couldn\'t participate)',
      tool: 'Adapted virtual participant workbook',
      explores: [
        'Jobs vs. environment dilemmas',
        'Certifications & production scales',
        'Territorial rights',
        'Environmental regulations',
        'Future visions for pork sector'
      ],
      allows: [
        'Capture absent perspectives without confrontation',
        'Build trust gradually with industry',
        'Generate comparable data across groups',
        'Prepare ground for multi-stakeholder dialogue'
      ],
      notes: 'We\'re now conducting guided individual consultations with industry and government actors who couldn\'t participate in the tables. These interviews use an adapted version of the virtual participant workbook, exploring: Dilemmas on jobs vs. environment, Certifications and production scales, Territorial rights, Environmental regulations, Future visions for the pork sector. This approach allows us to: Capture absent perspectives without confrontation, Build trust gradually with industry actors, Generate comparable data across all actor groups, Prepare the ground for future multi-stakeholder dialogue.',
      duration: '1min'
    },
    {
      id: 22,
      type: 'future',
      title: 'Future: Multi-stakeholder Dialogue Table',
      timeline: 'Soon',
      format: 'Virtual',
      convenes: 'Actors from both tables',
      beforehand: 'Share main findings with all participants',
      continue: 'Building proposals & pathways together',
      goal: 'NOT consensus',
      instead: [
        'Informed understanding of different perspectives',
        'Identification of possible bridges',
        'Construction of concrete next steps',
        'Respect complexity of territorial conflict'
      ],
      notes: 'Soon, we plan to organize a virtual Multi-stakeholder Dialogue Table convening actors from both tables. We\'ll share the main findings with all participants beforehand. We\'ll continue building proposals and pathways for action together. The goal is not consensus—but rather informed understanding of different perspectives, identification of possible bridges, and construction of concrete next steps that respect the complexity of this territorial conflict.',
      duration: '1min'
    },
    {
      id: 23,
      type: 'closing',
      title: 'Thank You',
      message: 'Questions welcome',
      topics: [
        'Methodology',
        'Challenges faced',
        'Adaptations to TABLE approach for Mexican context'
      ],
      contact: {
        name: 'Rebeca Pérez-Flores',
        email: 'rebecaperezflores@tabledebates.org'
      },
      thanks: 'Thank you to the TABLE community for this space',
      notes: 'Thank you for your attention. I\'m happy to answer any questions about our methodology, the challenges we faced, or the adaptations we made to TABLE\'s approach for the Mexican context. Contact: Rebeca Pérez-Flores, rebecaperezflores@tabledebates.org. Thank you to the TABLE community for this space.',
      duration: '30s'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  const slide = slides[currentSlide];

  return (
    <div className="presentation-container">
      <div className="presentation-main">
        <SlideRenderer slide={slide} />
      </div>

      <div className="presentation-controls">
        <button onClick={prevSlide} disabled={currentSlide === 0}>
          ← Previous
        </button>

        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>

        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          Next →
        </button>

        <button onClick={toggleNotes} className="notes-toggle">
          {showNotes ? 'Hide Notes' : 'Show Notes'}
        </button>
      </div>

      {showNotes && (
        <div className="presentation-notes">
          <h4>Speaker Notes:</h4>
          <p>{slide.notes}</p>
          <p className="duration">Duration: {slide.duration}</p>
        </div>
      )}

      <div className="presentation-navigation">
        {slides.map((s, index) => (
          <button
            key={s.id}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            title={s.title}
          />
        ))}
      </div>
    </div>
  );
};

// Componente para renderizar cada tipo de slide
const SlideRenderer = ({ slide }) => {
  switch (slide.type) {
    case 'title':
      return <TitleSlide {...slide} />;
    case 'profile':
      return <ProfileSlide {...slide} />;
    case 'research':
      return <ResearchSlide {...slide} />;
    case 'role':
      return <RoleSlide {...slide} />;
    case 'context':
      return <ContextSlide {...slide} />;
    case 'map':
      return <MapSlide {...slide} />;
    case 'innovation':
      return <InnovationSlide {...slide} />;
    case 'design':
      return <DesignSlide {...slide} />;
    case 'challenge':
      return <ChallengeSlide {...slide} />;
    case 'dynamic':
      return <DynamicSlide {...slide} />;
    case 'results':
      return <ResultsSlide {...slide} />;
    case 'tension':
      return <TensionSlide {...slide} />;
    case 'diversity':
      return <DiversitySlide {...slide} />;
    case 'data':
      return <DataSlide {...slide} />;
    case 'hope':
      return <HopeSlide {...slide} />;
    case 'crisis':
      return <CrisisSlide {...slide} />;
    case 'failure':
      return <FailureSlide {...slide} />;
    case 'lesson':
      return <LessonSlide {...slide} />;
    case 'reflection':
      return <ReflectionSlide {...slide} />;
    case 'current':
      return <CurrentSlide {...slide} />;
    case 'next':
      return <NextSlide {...slide} />;
    case 'future':
      return <FutureSlide {...slide} />;
    case 'closing':
      return <ClosingSlide {...slide} />;
    default:
      return <div>Unknown slide type</div>;
  }
};

// Componentes individuales para cada tipo de slide
const TitleSlide = ({ title, subtitle, author, affiliation, email }) => (
  <div className="slide slide-title">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <div className="author-info">
      <h3>{author}</h3>
      <p>{affiliation}</p>
      <p className="email">{email}</p>
    </div>
  </div>
);

const ProfileSlide = ({ title, content }) => (
  <div className="slide slide-profile">
    <h2>{title}</h2>
    {content.map((section, idx) => (
      <div key={idx} className="profile-section">
        <h3>{section.heading}</h3>
        <ul>
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ResearchSlide = ({ title, content, image }) => (
  <div className="slide slide-research">
    <h2>{title}</h2>
    <div className="research-content">
      {content.map((section, idx) => (
        <div key={idx} className="research-section">
          <h3>{section.heading}</h3>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    {image && <div className="image-placeholder">[Image: {image}]</div>}
  </div>
);

const RoleSlide = ({ title, content, highlight }) => (
  <div className="slide slide-role">
    <h2>{title}</h2>
    <ul>
      {content.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <div className="highlight">{highlight}</div>
  </div>
);

const ContextSlide = ({ title, content, comparison, critical, decision }) => (
  <div className="slide slide-context">
    <h2>{title}</h2>
    {content.map((section, idx) => (
      <div key={idx}>
        <h3>{section.heading}</h3>
        <p>{section.text}</p>
      </div>
    ))}
    <ul className="comparison">
      {comparison.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <div className="critical-box">{critical}</div>
    <div className="decision">{decision}</div>
  </div>
);

const MapSlide = ({ title, stats, levels, image }) => (
  <div className="slide slide-map">
    <h2>{title}</h2>
    <div className="stats">
      <div className="stat">{stats.total} actors</div>
      <div className="stat">{stats.levels} levels</div>
    </div>
    <ol>
      {levels.map((level, idx) => (
        <li key={idx}>{level}</li>
      ))}
    </ol>
    {image && <div className="image-placeholder">[Image: {image}]</div>}
  </div>
);

const InnovationSlide = ({ title, badge, stats, insight, reason, conclusion, image }) => (
  <div className="slide slide-innovation">
    <span className="badge">{badge}</span>
    <h2>{title}</h2>
    <div className="stats-box">
      <div className="big-stat">{stats.tensions} tensions identified</div>
      <h4>Categories:</h4>
      <ul>
        {stats.categories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
    </div>
    <div className="insight-box">
      <h4>{insight}</h4>
      <p>{reason}</p>
    </div>
    <div className="conclusion">{conclusion}</div>
    {image && <div className="image-placeholder">[Image: {image}]</div>}
  </div>
);

const DesignSlide = ({ title, location, venue, tables, rationale }) => (
  <div className="slide slide-design">
    <h2>{title}</h2>
    <p className="location">{location}</p>
    <p className="venue">{venue}</p>
    <div className="tables-container">
      {tables.map((table, idx) => (
        <div key={idx} className="table-box">
          <h3>{table.name}</h3>
          <p className="subtitle">{table.subtitle}</p>
          <h4>Invited:</h4>
          <ul>
            {table.invited.map((inv, i) => (
              <li key={i}>{inv}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="rationale">{rationale}</div>
  </div>
);

const ChallengeSlide = ({ title, problems, methodology, lesson }) => (
  <div className="slide slide-challenge">
    <h2>{title}</h2>
    <div className="problems">
      {problems.map((prob, idx) => (
        <div key={idx} className="problem-box">
          <h4>{prob.issue}</h4>
          <p>{prob.reason}</p>
          {prob.solution && <p className="solution">→ {prob.solution}</p>}
        </div>
      ))}
    </div>
    <div className="methodology">
      <h4>Methodology:</h4>
      <ul>
        {methodology.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="lesson-box">⚠️ {lesson}</div>
  </div>
);

const DynamicSlide = ({ title, method, goal, steps, purpose, image }) => (
  <div className="slide slide-dynamic">
    <h2>{title}</h2>
    <h3>{method}</h3>
    <p className="goal">{goal}</p>
    <div className="steps">
      {steps.map((step, idx) => (
        <div key={idx} className="step">
          <div className="step-number">Step {step.step}</div>
          <h4>{step.action}</h4>
          <p>{step.description}</p>
          {step.colors && (
            <div className="colors">
              {step.colors.map((c, i) => (
                <div key={i} className={`color-box ${c.color}`}>
                  {c.color}: {c.meaning}
                </div>
              ))}
            </div>
          )}
          {step.vote && (
            <ul>
              {step.vote.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    <div className="purpose">{purpose}</div>
    {image && <div className="image-placeholder">[Image: {image}]</div>}
  </div>
);

const ResultsSlide = ({ title, date, attendance, composition, critical }) => (
  <div className="slide slide-results">
    <h2>{title}</h2>
    <p className="date">{date}</p>
    <div className="attendance-box">
      <div className="stat">
        <span className="number">{attendance.inPerson}</span>
        <span className="label">In-person</span>
      </div>
      <div className="stat">
        <span className="number">{attendance.virtual}</span>
        <span className="label">Virtual</span>
      </div>
      <div className="stat total">
        <span className="number">{attendance.total}</span>
        <span className="label">Total</span>
      </div>
    </div>
    <p className="composition">{composition}</p>
    <div className="critical-points">
      <h4>Critical points:</h4>
      <ul>
        {critical.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const TensionSlide = ({ title, incident, topic, discovery, reaction, why, majority }) => (
  <div className="slide slide-tension">
    <h2>{title}</h2>
    <div className="incident-box">
      <h3>{incident}</h3>
      <p className="topic">Topic: {topic}</p>
    </div>
    <div className="discovery">💡 Discovery: {discovery}</div>
    <div className="reaction-box">
      <h4>Reaction: {reaction}</h4>
      <p>{why}</p>
    </div>
    <div className="majority">Majority position: {majority}</div>
  </div>
);

const DiversitySlide = ({ title, mainVoice, critique, proposal, example, value }) => (
  <div className="slide slide-diversity">
    <h2>{title}</h2>
    <div className="main-voice">{mainVoice}</div>
    <div className="critique-box">
      <h4>Critique:</h4>
      <p>{critique}</p>
    </div>
    <div className="proposal-box">
      <h4>Proposal:</h4>
      <p>{proposal}</p>
      <p className="example">Example: {example}</p>
    </div>
    <div className="value">✓ {value}</div>
  </div>
);

const DataSlide = ({ title, wordCloud, dilemmas, conclusion, image }) => (
  <div className="slide slide-data">
    <h2>{title}</h2>
    <div className="word-cloud">
      <h4>Word Cloud (top words):</h4>
      <div className="words">
        {wordCloud.top.map((word, idx) => (
          <span key={idx} className="word">{word}</span>
        ))}
      </div>
    </div>
    <div className="dilemmas">
      {dilemmas.map((dil, idx) => (
        <div key={idx} className="dilemma">
          <h4>{dil.question}</h4>
          {dil.results.map((res, i) => (
            <div key={i} className="result">
              <span className="option">{res.option}</span>
              <span className="percent">{res.percent}%</span>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div className="conclusion">✓ {conclusion}</div>
    {image && <div className="image-placeholder">[Image: {image}]</div>}
  </div>
);

const HopeSlide = ({ title, finding, despite, meaning, feedback, interest }) => (
  <div className="slide slide-hope">
    <h2>{title}</h2>
    <div className="finding green">{finding}</div>
    <div className="despite-box">
      <h4>Despite:</h4>
      <ul>
        {despite.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="meaning">✓ {meaning}</div>
    <div className="feedback-box">
      <h4>Feedback:</h4>
      <p>{feedback}</p>
    </div>
    <div className="interest">🙋 {interest}</div>
  </div>
);

const CrisisSlide = ({ title, problem, action, company, meeting, showed, interest, confession, critical, outcome, image }) => (
  <div className="slide slide-crisis">
    <h2>{title}</h2>
    <div className="problem-box">❌ {problem}</div>
    <div className="action-box">
      <h4>💪 {action}</h4>
      <p>{company}</p>
    </div>
    <div className="meeting-flow">
      <div className="step">→ {meeting}</div>
      <div className="step">→ {showed}</div>
      <div className="step">✓ {interest}</div>
    </div>
    <div className="confession">💬 {confession}</div>
    <div className="critical">⚡ {critical}</div>
    <div className="outcome">→ {outcome}</div>
    {image && <div className="image-placeholder">[Image: {image}]</div>}
  </div>
);

const FailureSlide = ({ title, date, attendance, composition, format, quality, perspectives, shocking, conclusions }) => (
  <div className="slide slide-failure">
    <h2>{title}</h2>
    <p className="date">{date}</p>
    <div className="attendance-small">
      {attendance.inPerson} in-person, {attendance.virtual} virtual
    </div>
    <div className="composition">
      {composition.map((comp, idx) => (
        <div key={idx}>• {comp}</div>
      ))}
    </div>
    <div className="format-box">
      <h4>{format}</h4>
      <p>Quality: {quality}</p>
    </div>
    <div className="perspectives">{perspectives}</div>
    <div className="shocking-box">⚠️ {shocking}</div>
    <div className="conclusions">
      <h4>Conclusions:</h4>
      <ul>
        {conclusions.map((con, idx) => (
          <li key={idx}>{con}</li>
        ))}
      </ul>
    </div>
  </div>
);

const LessonSlide = ({ title, failure, gain, method, critical, why, applies, note }) => (
  <div className="slide slide-lesson">
    <h2>{title}</h2>
    <div className="failure-gain">
      <div className="box-red">Failure: {failure}</div>
      <div className="box-green">Gain: {gain}</div>
    </div>
    <div className="method-box">{method}</div>
    <div className="critical-lesson">
      <h3>💡 {critical}</h3>
      <p>Why: {why}</p>
      <p>Applies to: {applies}</p>
    </div>
    <div className="note">ℹ️ {note}</div>
  </div>
);

const ReflectionSlide = ({ title, insight, depends, requirement, enables, context, conclusion }) => (
  <div className="slide slide-reflection">
    <h2>{title}</h2>
    <div className="insight-box">{insight}</div>
    <div className="flow">
      <div className="flow-item">Depends on: {depends}</div>
      <div className="flow-arrow">↓</div>
      <div className="flow-item">Requirement: {requirement}</div>
      <div className="flow-arrow">↓</div>
      <div className="flow-item">Enables: {enables}</div>
    </div>
    <div className="context-box">
      <h4>Especially in contexts of:</h4>
      <ul>
        {context.map((ctx, idx) => (
          <li key={idx}>{ctx}</li>
        ))}
      </ul>
    </div>
    <div className="conclusion-bold">{conclusion}</div>
  </div>
);

const CurrentSlide = ({ title, processing, criticalData, analysis }) => (
  <div className="slide slide-current">
    <h2>{title}</h2>
    <div className="processing">
      <h4>Processing:</h4>
      <ul>
        {processing.map((item, idx) => (
          <li key={idx}>✓ {item}</li>
        ))}
      </ul>
    </div>
    <div className="critical-data">
      <h4>Critical data:</h4>
      <ul>
        {criticalData.map((data, idx) => (
          <li key={idx}>⚠️ {data}</li>
        ))}
      </ul>
    </div>
    <div className="analysis">
      <h4>Comparative analysis:</h4>
      <ul>
        {analysis.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const NextSlide = ({ title, method, target, tool, explores, allows }) => (
  <div className="slide slide-next">
    <h2>{title}</h2>
    <h3>{method}</h3>
    <p className="target">Target: {target}</p>
    <p className="tool">Tool: {tool}</p>
    <div className="explores">
      <h4>Explores:</h4>
      <ul>
        {explores.map((exp, idx) => (
          <li key={idx}>{exp}</li>
        ))}
      </ul>
    </div>
    <div className="allows">
      <h4>This allows us to:</h4>
      <ul>
        {allows.map((all, idx) => (
          <li key={idx}>✓ {all}</li>
        ))}
      </ul>
    </div>
  </div>
);

const FutureSlide = ({ title, timeline, format, convenes, beforehand, continue: cont, goal, instead }) => (
  <div className="slide slide-future">
    <h2>{title}</h2>
    <div className="meta">
      <span>Timeline: {timeline}</span>
      <span>Format: {format}</span>
    </div>
    <div className="convenes-box">Convenes: {convenes}</div>
    <div className="process">
      <div>→ Beforehand: {beforehand}</div>
      <div>→ Continue: {cont}</div>
    </div>
    <div className="goal-box">
      <h4>Goal: NOT {goal}</h4>
      <h4>Instead:</h4>
      <ul>
        {instead.map((item, idx) => (
          <li key={idx}>✓ {item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const ClosingSlide = ({ title, message, topics, contact, thanks }) => (
  <div className="slide slide-closing">
    <h1>{title}</h1>
    <h3>{message}</h3>
    <div className="topics">
      {topics.map((topic, idx) => (
        <div key={idx}>• {topic}</div>
      ))}
    </div>
    <div className="contact-box">
      <h4>{contact.name}</h4>
      <p>{contact.email}</p>
    </div>
    <div className="thanks">{thanks}</div>
  </div>
);

export default Presentation;
