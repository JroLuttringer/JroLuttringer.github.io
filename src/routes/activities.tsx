import { Title } from "@solidjs/meta";
import "./activities.css";

export const prerender = true;

export default function Activities() {
  return (
    <div class="container">
      <Title>Other Activities - Jean-Romain Luttringer</Title>
      <h1>Other Activities</h1>
      
      <div class="activities-container">
        <section class="activities-section">
          <h2>Conference Organization</h2>
          <div class="activities-grid">
            <div class="activity-card">
              <div class="activity-icon">🌐</div>
              <div class="activity-content">
                <h3>IMC 2022 Conference</h3>
                <p>International conference on Internet measurements. On-site organization, designed posters.</p>
              </div>
            </div>
            
            <div class="activity-card">
              <div class="activity-icon">🎓</div>
              <div class="activity-content">
                <h3>RESCOM 2021 Autumn School</h3>
                <p>Autumn school on reproducibility. On-site help.</p>
              </div>
            </div>
            
            <div class="activity-card">
              <div class="activity-icon">🌐</div>
              <div class="activity-content">
                <h3>OPODIS 2021</h3>
                <p>International conference on distributed systems. On-site help.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section class="activities-section">
          <h2>Academic Service</h2>
          <div class="activities-grid">
            <div class="activity-card">
              <div class="activity-icon">👥</div>
              <div class="activity-content">
                <h3>Network Team PhD Students Representative (2021 to 2022)</h3>
                <p>Link between Ph.D. student and laboratory direction during counsel meetings.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section class="activities-section">
          <h2>Reviews & Scientific Contributions</h2>
          <div class="review-container">
            <div class="review-highlight">
              <div class="review-badge">TPC</div>
              <h3>Member of TPC for Algotel/Cores 2025</h3>
            </div>
            
            <h3>Occasional reviewer for:</h3>
            <div class="journal-grid">
              <div class="journal-item">IEEE Communication Letters</div>
              <div class="journal-item">IEEE TNSM</div>
              <div class="journal-item">IEEE TSAE</div>
              <div class="journal-item">Computer Communications</div>
              <div class="journal-item">IEEE TOIT</div>
              <div class="journal-item">IEEE/ACM ToN</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}