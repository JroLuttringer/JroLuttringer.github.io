import { Title } from "@solidjs/meta";
import "./index.css";

export const prerender = true; 

export default function Home() {
  return (
    <div class="container">
      <Title>Jean-Romain Luttringer - Academic Portfolio</Title>
      
      <div class="home-grid">
        {/* Left Column (1/3) */}
        <div class="profile-column">
          <div class="profile-photo-container">
            {/* Updated path to profile photo */}
            <img src="/images/jro-pic.jpg" alt="Jean-Romain Luttringer" class="profile-photo" />
          </div>
          <div class="profile-info">
            <h2>Jean-Romain Luttringer</h2>
            <p>Assistant Professor at the University of Strasbourg</p>
            <p>IUT Robert Schuman</p>
            <p>ICube Laboratory, Network Research Group</p>
          </div>
        </div>
        
        {/* Right Column (2/3) */}
        <div class="content-column">
          <section class="biography-section">
            <p>
              I am a <strong>Ph.D. in Computer Networks</strong> working as an <strong>Assistant Professor</strong> at the University of Strasbourg 
              in the <strong>Networks Teams</strong> of the ICube laboratory. My work focuses on <strong>routing and network discovery</strong>, 
              from inter-domain routing to intra-domain traffic engineering and Internet topology discovery.
              I've taught <strong>~400h</strong> in the past 4 years (and thoroughly enjoyed doing so!).
            </p>
          </section>
          
          <div class="info-grid">
            {/* Interests Section */}
            <section class="interests-section">
              <h3>Interests</h3>
              <ul>
                <li>Routing & Path computation</li>
                <li>Programmable Networks</li>
                <li>Network measurements/discovery</li>
              </ul>
            </section>
            
            {/* Education Section */}
            <section class="education-section">
              <h3>Education</h3>
              <div class="education-item">
                <h4><span class="graduation-cap">🎓</span> PhD in Computer Science</h4>
                <p>University of Strasbourg, 2019-2022</p>
              </div>
              <div class="education-item">
                <h4><span class="graduation-cap">🎓</span> MSc in Computer Networks and Embedded Systems</h4>
                <p>University of Strasbourg, 2019, with high honors</p>
              </div>
              <div class="education-item">
                <h4><span class="graduation-cap">🎓</span> BSc in Maths and Computer Science</h4>
                <p>University of Strasbourg, 2017, with honors</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Reviews Section - Full Width */}
      <section class="reviews-section">
        <h2>What Colleagues Say</h2>
        <div class="reviews-container">
          <div class="review-card">
            <p class="review-text">
              <em>"Sometimes has intuitions that can sometimes prove useful"</em>
            </p>
            <p class="reviewer">— Very esteemed colleague</p>
          </div>
          
          <div class="review-card">
            <p class="review-text">
              <em>"Almost as competent as he is funny"</em>
            </p>
            <p class="reviewer">— Esteemed colleague</p>
          </div>
          
          <div class="review-card">
            <p class="review-text">
              <em>"Just shy of being interesting"</em>
            </p>
            <p class="reviewer">— Very esteemed colleague</p>
          </div>
        </div>
      </section>
    </div>
  );
}
