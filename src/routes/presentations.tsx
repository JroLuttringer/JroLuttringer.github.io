import { Title } from "@solidjs/meta";
import { presentations, formatDate, type Presentation } from "~/lib/presentations";
import "./presentations.css";

export const prerender = true;

export default function PresentationsPage() {
  const PresentationCard = (props: { presentation: Presentation }) => {
    const { presentation } = props;
    
    return (
      <article class="presentation-row">
        <div class="presentation-meta-col">
          <p class="date">{formatDate(presentation.date)}</p>
          <p class="venue">{presentation.venue}</p>
        </div>
        <div class="presentation-main">
          <h3>{presentation.title}</h3>
          <p class="description">{presentation.description}</p>
          <div class="presentation-links">
          <a
            href={presentation.slides}
            class="button button-presentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Slides
          </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <main class="container page-shell page-enter">
      <Title>Presentations - Jean-Romain Luttringer</Title>
      <header class="page-heading fade-in">
        <p class="page-kicker">Talks</p>
        <h1>Presentations</h1>
        {/* <p class="page-summary">
          Standalone talks and seminar interventions, organized as a compact record of dates, venues, and supporting slides.
        </p> */}
      </header>
      
      {/* Disclaimer */}
      <div class="disclaimer">
        <p>
          <strong>Note:</strong> This page contains standalone presentations. 
          For slides related to scientific papers, please visit the{" "}
          <a href="/publications">Publications</a> section. 
          For project presentation slides, please visit the{" "}
          <a href="/projects">Projects</a> section.
        </p>
      </div>

      {/* Scientific Presentations */}
      <section class="presentation-section">
        <h2 class="section-title">Scientific Presentations</h2>
        <div class="presentations-list stagger-in">
          {presentations.scientific.map((presentation) => (
            <PresentationCard presentation={presentation} />
          ))}
        </div>
      </section>

      {/* Miscellaneous Presentations */}
      <section class="presentation-section">
        <h2 class="section-title">Miscellaneous Presentations</h2>
        <div class="presentations-list stagger-in">
          {presentations.misc.map((presentation) => (
            <PresentationCard presentation={presentation} />
          ))}
        </div>
      </section>
    </main>
  );
}
