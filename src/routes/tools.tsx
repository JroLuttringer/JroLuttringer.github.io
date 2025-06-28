import { Title } from "@solidjs/meta";
import "./tools.css";

export const prerender = true;

export default function Tools() {
  return (
    <div class="container">
      <Title>Tools - Jean-Romain Luttringer</Title>
      <h1>Tools</h1>
      
      <section class="tools-section">
        <div class="tool-card">
          <div class="tool-content">
            <h2>Graphic Subnetting Tool</h2>
            <p>Help students visualize the IP addressing space and checking if their scheme is correct.</p>
            
            <div class="tool-actions">
              <a href="https://jr.luttringer.pages.unistra.fr/gst/" class="button" target="_blank" rel="noopener noreferrer">Use Tool</a>
              <a href="https://git.unistra.fr/jr.luttringer/gst" class="button button-outline" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>
          
          <div class="tool-image">
            <img src="/images/GST-pic.webp" alt="Graphic Subnetting Tool screenshot" />
          </div>
        </div>
        
        <div class="tool-card">
          <div class="tool-content">
            <h2>Yet Another Realistic Graph Generator</h2>
            <p>Network topology generator based on geographical data.</p>
            
            <div class="tool-actions">
              <a href="https://github.com/JroLuttringer/YARGG" class="button" target="_blank" rel="noopener noreferrer">Code</a>
              <a href="https://arxiv.org/abs/2110.09320" class="button button-outline" target="_blank" rel="noopener noreferrer">Explanation</a>
              <a href="https://zenodo.org/records/5535430#.ZAEBfi8w04g" class="button button-outline" target="_blank" rel="noopener noreferrer">Examples</a>
            </div>
          </div>
          
          <div class="tool-image">
            <img src="/images/YARGG-pic.webp" alt="Yet Another Realistic Graph Generator screenshot" />
          </div>
        </div>
      </section>
    </div>
  );
}