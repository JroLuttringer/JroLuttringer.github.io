import { Title } from "@solidjs/meta";
import { presentations, formatDate, type Presentation } from "~/lib/presentations";
import "./presentations.css";

export const prerender = true;

export default function PresentationsPage() {
  const PresentationCard = (props: { presentation: Presentation }) => {
    const { presentation } = props;
    
    return (
      <div class="presentation-card">
        <h3>{presentation.title}</h3>
        <p class="presentation-meta">
          <span class="venue">{presentation.venue}</span>
          <span class="date">{formatDate(presentation.date)}</span>
        </p>
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
    );
  };

  return (
    <main class="container p-4">
      <Title>Presentations - Jean-Romain Luttringer</Title>
      <h1 class="text-2xl font-bold mb-6">Presentations</h1>
      
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
        <div class="presentations-grid">
          {presentations.scientific.map((presentation) => (
            <PresentationCard presentation={presentation} />
          ))}
        </div>
      </section>

      {/* Miscellaneous Presentations */}
      <section class="presentation-section">
        <h2 class="section-title">Miscellaneous Presentations</h2>
        <div class="presentations-grid">
          {presentations.misc.map((presentation) => (
            <PresentationCard presentation={presentation} />
          ))}
        </div>
      </section>
    </main>
  );
}
