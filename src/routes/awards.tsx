import { Title } from "@solidjs/meta";
import "./awards.css";

export const prerender = true;

export default function Awards() {
  return (
    <div class="container">
      <Title>Awards - Jean-Romain Luttringer</Title>
      <h1>Awards & Recognition</h1>
      
      <div class="awards-grid">
        <div class="award-card">
          <div class="award-medal">🏆</div>
          <div class="award-content">
            <h3>Ph.D. Thesis Prize of the University of Strasbourg</h3>
            <p class="award-description">
              For <strong>"Path Computation in IP Networks: Reliable Hot-Potato Routing and Multi-Constrained Tunnels"</strong>
            </p>
            <p class="award-note">Awarded to 20 new Ph.D. graduates of the University</p>
          </div>
        </div>
        
        <div class="award-card">
          <div class="award-medal">🥇</div>
          <div class="award-content">
            <h3>Best Paper Award of ALGOTEL 21</h3>
            <p class="award-description">
              For <strong>"Le Problème à trois Contraintes: Calcul et Déploiement de Segments de Routage"</strong>
            </p>
            <p class="award-note">A three-way tie was broken according to the presentation.</p>
          </div>
        </div>
        
        <div class="award-card">
          <div class="award-medal">🏅</div>
          <div class="award-content">
            <h3>Internet Technical Committee/ISOC Paper of the Year 2019</h3>
            <p class="award-description">
              For <strong>"TNT, Watch me Explode: A Light in the Dark for Revealing MPLS Tunnels"</strong>
            </p>
          </div>
        </div>
        
        <div class="award-card">
          <div class="award-medal">🥇</div>
          <div class="award-content">
            <h3>Best Paper Award of TMA 19</h3>
            <p class="award-description">
              For <strong>"TNT, Watch me Explode: A Light in the Dark for Revealing MPLS Tunnels"</strong>
            </p>
          </div>
        </div>
        
        <div class="award-card">
          <div class="award-medal">🥈</div>
          <div class="award-content">
            <h3>Runner Up for Best Open Dataset of TMA 19</h3>
            <p class="award-description">
              For <strong>"TNT, Watch me Explode: A Light in the Dark for Revealing MPLS Tunnels"</strong>
            </p>
          </div>
        </div>
        
        <div class="award-card">
          <div class="award-medal">🥇</div>
          <div class="award-content">
            <h3>Best Poster Award (Doctoral School)</h3>
            <p class="award-description">
              For my thesis' poster
            </p>
            <p class="award-note">Chosen among ~100 Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}