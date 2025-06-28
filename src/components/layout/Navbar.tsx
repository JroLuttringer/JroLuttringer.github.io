import { createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen());

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    const pathToCheck = location.pathname;
    return path === '/'
      ? (pathToCheck === '/' || pathToCheck === '')
      : pathToCheck.startsWith(path);
  };

  const navLinks = [
    { href: "/", path: "/", label: "Home" },
    { href: "/experience", path: "/experience", label: "Experience" },
    { href: "/publications", path: "/publications", label: "Publications" },
    { href: "/presentations", path: "/presentations", label: "Presentations" },
    { href: "/courses", path: "/courses", label: "Courses & Materials" },
    { href: "/mentoring", path: "/mentoring", label: "Mentoring" },
    { href: "/projects", path: "/projects", label: "Projects" },
    { href: "/tools", path: "/tools", label: "Tools" },
    { href: "/awards", path: "/awards", label: "Awards" },
    { href: "/activities", path: "/activities", label: "Other Activities" }
  ];

  return (
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <A href="/" class="logo-link">Jean-Romain Luttringer</A>
        </div>

        <button class="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <div class={`navbar-links ${isMenuOpen() ? 'active' : ''}`}>
          {navLinks.map(link => (
            <A
              href={link.href}
              class={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </A>
          ))}
        </div>
      </div>
    </nav>
  );
}
