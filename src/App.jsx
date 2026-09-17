import { useEffect, useState } from 'react'
import './App.css'

function ProjectCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <article className={`project-card ${project.theme} ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="project-card-inner">
        <div className="project-card-face project-card-front">
          <div className="project-art">
            <span className="art-title">{project.artTitle}</span>
            <span className="art-code">{project.artCode}</span>
            <div className={project.artClass} />
          </div>
          <div className="project-card-content">
            <div className="project-card-top"><span>{String(index + 1).padStart(2, '0')} / PROJECT</span><span>↗</span></div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="project-link" href={project.href} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>{project.linkLabel} ↗</a>
          </div>
        </div>
        <div className="project-card-face project-card-back">
          <div className="project-back-top"><span>PROJECT / {String(index + 1).padStart(2, '0')}</span><span>{project.year}</span></div>
          <div className="project-back-copy"><p className="project-back-kicker">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p></div>
          <div className="project-back-footer"><div className="project-tags">{project.details.map((detail) => <span key={detail}>{detail}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>{project.linkLabel} ↗</a></div>
        </div>
      </div>
      <button className="project-flip-button" type="button" onClick={() => setIsFlipped((flipped) => !flipped)} aria-pressed={isFlipped}>{isFlipped ? 'BACK TO CARD' : 'ABOUT PROJECT'} <span>{isFlipped ? '↩' : '↗'}</span></button>
    </article>
  )
}

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.14 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="mark" href="#top" aria-label="Back to top">US<span>/</span>26</a>
        <nav aria-label="Main navigation">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Computer Science · University of Georgia <span>[ Athens, GA ]</span></p>
          <h1><em>UYGAR</em><br />SAFYUREK</h1>
          <p className="intro">B.S. in Computer Science student at the University of Georgia.</p>
          <div className="hero-actions">
            <a className="action-button action-primary" href="#about">Resume <span>↘</span></a>
            <a className="action-button" href="https://www.linkedin.com/in/uygar-safyurek" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a className="action-button" href="https://github.com/uygarsafyurek" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </div>
        <div className={`hero-signal ${isAboutOpen ? 'is-flipped' : ''}`} aria-label="Professional headshot and About Me card">
          <div className="portrait-frame">
            <div className="portrait-card">
              <div className="portrait-card-inner">
                <div className="portrait-face portrait-front">
                  <div className="portrait-photo"><img src="/e75f3992-8f53-4654-89b5-01cc34898e77.JPG" alt="Uygar Safyurek in a suit" /></div>
                  <span className="signal-label label-top">UGA / CS / GPA 3.73</span><span className="signal-label label-bottom">ATHENS<br />GEORGIA</span>
                </div>
                <div className="portrait-face portrait-back">
                  <p className="card-bio">I’m currently studying Computer Science at UGA, where I’ve had the chance to explore a wide range of topics from algorithms and data structures to machine learning and computer architecture. I love making fun websites with React, and finding cool ways to visualize data. I am also a huge fan of 3D graphics and some game development!</p>
                </div>
              </div>
            </div>
          </div>
          <button className="about-card-button" type="button" onClick={() => setIsAboutOpen((open) => !open)} aria-pressed={isAboutOpen}>{isAboutOpen ? 'HEADSHOT' : 'ABOUT ME'} <span>{isAboutOpen ? '↩' : '↗'}</span></button>
        </div>
      </section>

      <div className="section-rule"><span>selected work</span><span>01—03</span></div>

      <section className="work-section" id="projects">
        <div className="section-heading" data-reveal><p className="eyebrow">A snapshot of what I build</p><h2>Featured work</h2></div>
        <div className="project-grid">
          <ProjectCard index={0} project={{ theme: 'project-card-blue', artTitle: <>FOOD<br />TRACKER</>, artCode: 'UGA HACKS / 2026', artClass: 'art-grid', title: 'UGA Hacks Food Tracking App', year: 'SPRING 2026', category: 'Frontend application', summary: 'A food-tracking web application with dynamic forms, list interfaces, and a connected REST API.', description: 'Developed the frontend using React Native and Expo. Built user-input forms and dynamic list-based interfaces, integrated asynchronous GET and POST requests with a REST API, processed JSON food entries, managed component state, and collaborated with backend developers to debug API responses.', tags: ['React Native', 'Expo', 'REST API'], details: ['Forms', 'Dynamic lists', 'GET + POST', 'JSON'], href: 'https://github.com/andrew-babatunde2004/UGAHACKS11', linkLabel: 'View repository' }} />
          <ProjectCard index={1} project={{ theme: 'project-card-cream', artTitle: <>JAVA<br />ADVENTURE</>, artCode: 'RPG / 2025', artClass: 'art-dungeon', title: 'Java Adventure Game', year: 'FALL 2025', category: 'Text-based RPG', summary: 'A Java adventure game built around turn-based combat, inventory systems, and object-oriented design.', description: 'Developed a text-based RPG in Java using classes such as Player, Enemy, and Shop. Implemented turn-based combat and inventory systems with Object-Oriented Programming, and organized the code into multiple classes for modularity and easier maintenance.', tags: ['Java', 'OOP', 'Game Development'], details: ['Player', 'Enemy', 'Shop', 'Combat'], href: 'https://github.com/uygarsafyurek/Adventure-Game-JAVA-', linkLabel: 'View repository' }} />
          <ProjectCard index={2} project={{ theme: 'project-card-dark', artTitle: <>THIS<br />PORTFOLIO</>, artCode: 'REPOSITORY / SOON', artClass: 'art-orbit', title: 'Interactive Portfolio', year: '2026', category: 'Personal website', summary: 'A visual portfolio built around interactive cards, motion, and a technical visual language.', description: 'Designed and developed this responsive portfolio in React with Vite and CSS. Built interactive flip cards, scroll reveals, hover states, responsive layouts, and a visual system inspired by Uygar’s interests in web development, data visualization, 3D graphics, and game development.', tags: ['React', 'Vite', 'CSS'], details: ['Flip cards', 'Scroll reveals', 'Responsive UI', 'Motion'], href: '#projects', linkLabel: 'Repository coming soon' }} />
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="contact-heading"><p className="eyebrow">Open channel / Athens, GA</p><h2>CONTACT ME</h2></div>
        <div className="contact-actions">
          <a className="contact-button contact-button-primary" href="https://www.linkedin.com/in/uygar-safyurek" target="_blank" rel="noreferrer"><span className="contact-number">01</span><strong>LinkedIn</strong><span className="contact-arrow">↗</span></a>
          <a className="contact-button" href="mailto:safyurek-uygar@hotmail.com"><span className="contact-number">02</span><strong>Email</strong><span className="contact-arrow">↗</span></a>
          <a className="contact-button" href="https://github.com/uygarsafyurek" target="_blank" rel="noreferrer"><span className="contact-number">03</span><strong>GitHub</strong><span className="contact-arrow">↗</span></a>
        </div>
      </footer>
    </main>
  )
}

export default App