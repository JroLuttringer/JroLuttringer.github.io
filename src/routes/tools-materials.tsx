import { Title } from "@solidjs/meta";

export const prerender = true;

export default function ToolsMaterials() {
  return (
    <div class="container">
      <Title>Tools & Materials - Academic Portfolio</Title>
      <h1>Tools & Materials</h1>
      
      <section class="section">
        <h2>Research Tools</h2>
        
        <div class="card">
          <h3>Tool/Software Name 1</h3>
          <p>Description of the tool, its purpose, and how it can be used in research or education.</p>
          <a href="#" class="button">Access Tool</a>
          <a href="#" class="button button-outline">Documentation</a>
        </div>
        
        <div class="card">
          <h3>Tool/Software Name 2</h3>
          <p>Description of the tool, its purpose, and how it can be used in research or education.</p>
          <a href="#" class="button">Access Tool</a>
          <a href="#" class="button button-outline">Documentation</a>
        </div>
      </section>
      
      <section class="section">
        <h2>Educational Materials</h2>
        
        <div class="card">
          <h3>Lecture Notes</h3>
          <p>Collection of lecture notes on various topics in [Your Field].</p>
          <ul>
            <li><a href="#">Topic 1 - PDF</a></li>
            <li><a href="#">Topic 2 - PDF</a></li>
            <li><a href="#">Topic 3 - PDF</a></li>
          </ul>
        </div>
        
        <div class="card">
          <h3>Tutorials</h3>
          <p>Step-by-step tutorials for students and researchers.</p>
          <ul>
            <li><a href="#">Tutorial 1: Getting Started with [Topic]</a></li>
            <li><a href="#">Tutorial 2: Advanced [Topic] Techniques</a></li>
          </ul>
        </div>
      </section>
      
      <section class="section">
        <h2>Datasets</h2>
        
        <div class="card">
          <h3>Dataset Name 1</h3>
          <p>Description of the dataset, how it was collected, and potential applications.</p>
          <a href="#" class="button">Download Dataset</a>
          <a href="#" class="button button-outline">Citation Information</a>
        </div>
      </section>
    </div>
  );
}