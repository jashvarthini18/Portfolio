import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import {
  personalInfo,
  education,
  skills,
  experience,
  projects,
  publications,
  achievements,
  certifications,
  volunteering,
} from "./data";

const IconLinkedin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconGithub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const IconMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconPhone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);
const IconDownload = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);
const IconMoon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);
const IconSun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container nav-content">
        <h2
          style={{
            color: "var(--accent)",
            fontWeight: 800,
            fontSize: "1.5rem",
          }}
        >
          {personalInfo.name}
        </h2>

        <ul className="nav-links">
          {[
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Publications",
            "Achievements",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              aria-label="Download Resume"
              className="btn"
              style={{ padding: "8px 16px", fontSize: "0.85rem" }}
            >
              <IconDownload /> Resume
            </a>
          </li>
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <IconSun /> : <IconMoon />}
            </button>
          </li>
        </ul>

        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {[
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Publications",
            "Achievements",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download
              aria-label="Download Resume"
              className="btn"
              style={{ justifyContent: "center", margin: "0 1.5rem" }}
            >
              <IconDownload /> Download Resume
            </a>
            {/* <a
              href="/resume.pdf"
              download
              aria-label="Download Resume"
              className="btn"
              style={{ justifyContent: "center", margin: "0 1.5rem" }}
            >
              <IconDownload /> Download Resume
            </a> */}
          </li>
          <li>
            <button
              className="theme-toggle-mobile"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <IconSun /> : <IconMoon />}
              {theme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero" id="home">
    <div className="container hero-container">
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={personalInfo.photo} alt={personalInfo.name} />
      </motion.div>
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p
          style={{
            color: "var(--accent)",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "1.25rem",
          }}
        >
          Hello, I'm
        </p>
        <h1>{personalInfo.name}</h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}
        >
          {personalInfo.role}
        </p>
        <p>{personalInfo.tagline}</p>
        <div className="hero-buttons" style={{ marginTop: "2rem" }}>
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="container">
    <h2 className="section-title">
      About <span>Me</span>
    </h2>
    <div className="grid">
      <motion.div
        className="card"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 style={{ marginBottom: "1.5rem", fontSize: "1.25rem" }}>
          Education
        </h3>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-date">{edu.period}</div>
              <div className="timeline-title">{edu.degree}</div>
              <div className="timeline-subtitle">
                {edu.institution} {edu.grade && ` | Grade: ${edu.grade}`}
              </div>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem",
                }}
              >
                {edu.details}
              </p>
              {edu.skills && (
                <div className="skill-tags" style={{ marginTop: "0.5rem" }}>
                  {edu.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="card"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 style={{ marginBottom: "1.5rem", fontSize: "1.25rem" }}>
          Certifications & Volunteering
        </h3>
        <div style={{ marginBottom: "2rem" }}>
          <h4
            style={{
              color: "var(--accent)",
              marginBottom: "0.75rem",
              fontSize: "1rem",
            }}
          >
            Certifications
          </h4>
          <ul className="cert-list">
            {certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            style={{
              color: "var(--accent)",
              marginBottom: "0.75rem",
              fontSize: "1rem",
            }}
          >
            Volunteering
          </h4>
          <ul className="volunteer-list">
            {volunteering.map((vol, idx) => (
              <li key={idx}>{vol}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" style={{ background: "var(--bg-secondary)" }}>
    <div className="container">
      <h2 className="section-title">
        Technical <span>Skills</span>
      </h2>
      <div className="grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="skill-category" style={{ marginBottom: "1rem" }}>
              {category}
            </h3>
            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="container">
    <h2 className="section-title">
      Professional <span>Experience</span>
    </h2>
    <div className="timeline">
      {experience.map((exp, idx) => (
        <motion.div
          key={idx}
          className="timeline-item card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="timeline-date">{exp.period}</div>
          <div className="timeline-title">{exp.title}</div>
          <div className="timeline-subtitle">{exp.company}</div>
          <ul>
            {exp.points.map((point, pIdx) => (
              <li key={pIdx}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" style={{ background: "var(--bg-secondary)" }}>
    <div className="container">
      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>
      <div className="grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {project.title}
            </h3>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "0.75rem",
                lineHeight: "1.6",
              }}
            >
              {project.description}
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              {project.details}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "0.9rem",
              }}
            >
              View Project <IconExternalLink />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Publications = () => (
  <section id="publications" className="container">
    <h2 className="section-title">
      Recent <span>Publications</span>
    </h2>
    <div className="grid">
      {publications.map((pub, idx) => (
        <motion.div
          key={idx}
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            {pub.title}
          </h3>
          <p
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "0.5rem",
              fontSize: "0.95rem",
            }}
          >
            {pub.conference}
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.85rem",
              marginBottom: "1rem",
              fontStyle: "italic",
            }}
          >
            {pub.date}
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
              lineHeight: "1.6",
            }}
          >
            {pub.description}
          </p>
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{
              width: "100%",
              justifyContent: "center",
              fontSize: "0.9rem",
            }}
          >
            View Publication <IconExternalLink />
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

const Achievements = () => (
  <section id="achievements" className="container">
    <h2 className="section-title">
      Achievements & <span>Awards</span>
    </h2>
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <ul className="achievement-list">
        {achievements.map((ach, idx) => (
          <li key={idx}>{ach}</li>
        ))}
      </ul>
    </motion.div>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);

    formData.append("access_key", "ab0dc11d-b7c7-4936-afe9-82facc993b7b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
              Let's connect!
            </h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              I'm currently open to full-time opportunities and interesting
              projects. Feel free to reach out!
            </p>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <IconMail /> {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} aria-label="Phone">
              <IconPhone /> {personalInfo.phone}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconLinkedin /> LinkedIn Profile
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconGithub /> GitHub Profile
            </a>
          </motion.div>

          <motion.form
            className="contact-form card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              aria-label="Your Message"
            ></textarea>
            <button
              type="submit"
              className="btn"
              style={{ justifyContent: "center" }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p
                style={{
                  color: "green",
                  textAlign: "center",
                  marginTop: "1rem",
                  fontWeight: 600,
                }}
              >
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: "1rem",
                  fontWeight: 600,
                }}
              >
                Failed to send. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <p>
      © {new Date().getFullYear()} - {personalInfo.name}
    </p>
  </footer>
);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
