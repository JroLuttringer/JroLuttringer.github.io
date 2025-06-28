import { Title } from "@solidjs/meta";
import "./projects.css";

export const prerender = true;

export default function Projects() {
  return (
    <div class="container">
      <Title>Projects - Jean-Romain Luttringer</Title>
      <h1>Research Projects</h1>
      
      <div class="projects-container">
        {/* Project as Lead */}
        <div class="project-card lead-project">
          <div class="project-header">
            <div>
              <h2>GARDEN</h2>
              <h3>leveraGing programmAbility to cReate aDaptive grEen Networks</h3>
              <div class="project-badge-container">
                <span className="project-badge lead">Project Lead</span>
                <span className="project-badge">ANR JCJC Project</span>
                <span className="project-badge">ANR-24-CE25-6318</span>
                <a 
                  href="https://seafile.unistra.fr/f/5be29aa827b14d4795d2/" 
                  className="project-badge project-badge-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="5-minute presentation slides"
                >
                  Slides
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-details">
              <p>
                GARDEN is focused on creating adaptive and energy-efficient network infrastructures 
                through programmable networking technologies.
              </p>
              
              <div class="project-info">
                <div class="info-item">
                  <span class="info-label">Duration:</span>
                  <span class="info-value">2024 - 2028</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Coordinator:</span>
                  <span class="info-value">Jean-Romain Luttringer</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Website:</span>
                  <a href="http://garden.icube.unistra.fr" target="_blank" rel="noopener noreferrer">
                    garden.icube.unistra.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project as Collaborator */}
        <div class="project-card collaborator-project">
          <div class="project-header">
            <div>
              <h2>TURFU</h2>
              <h3>Transcending the Usual Rationale for the Future of Ubiquitous NETworks</h3>
              <div class="project-badge-container">
                <span className="project-badge">Collaborator</span>
                <span className="project-badge">ANR TSIA Project</span>
                <span className="project-badge">ANR-24-IAS1-0001</span>
                <a 
                  href="https://seafile.unistra.fr/f/3e7cd8f6c91544778dfb/" 
                  className="project-badge project-badge-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="5-minute presentation slides"
                >
                  Slides
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-details">
              <p>
                TURFU explores novel approaches for next-generation ubiquitous networks,
                addressing challenges in connectivity, efficiency, and scalability.
              </p>
              
              <div class="project-info">
                <div class="info-item">
                  <span class="info-label">Duration:</span>
                  <span class="info-value">2024 - 2028</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Coordinator:</span>
                  <span class="info-value">Quentin Bramas</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Website:</span>
                  <a href="https://turfu.icube.unistra.fr" target="_blank" rel="noopener noreferrer">
                    turfu.icube.unistra.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}