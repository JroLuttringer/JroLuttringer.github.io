import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import "./tools.css";

export const prerender = true;

export default function Tools() {
  const tools = [
    {
      title: "Graphic Subnetting Tool",
      category: "Teaching Tool",
      focus: ["IP Addressing", "Subnetting"],
      description: "Help students visualize the IP addressing space and checking if their scheme is correct.",
      image: "/images/GST-pic.webp",
      alt: "Graphic Subnetting Tool screenshot",
      primaryAction: { label: "Use Tool", href: "https://jr.luttringer.pages.unistra.fr/gst/" },
      secondaryActions: [
        { label: "Documentation", href: "https://git.unistra.fr/jr.luttringer/gst" },
      ],
    },
    {
      title: "Layer 2 Playground",
      category: "Teaching Tool",
      focus: ["Layer 2", "Layer 3"],
      description: "Visual network simulation to illustrate Layer 2 and Layer 3 concepts (encapsulation, spanning tree, learning switches...).",
      image: "/images/L2P-picture.png",
      alt: "L2P screenshot",
      primaryAction: { label: "Use Tool", href: "https://jro.pages.unistra.fr/stpviz/" },
      secondaryActions: [],
    },
    {
      title: "The Signal Frontier",
      category: "Educational Visualization",
      focus: ["LEO/GEO", "Latency"],
      description: "Linear scale solar system and beyond to see LEO/GEO orbits, and the latency of deep-space communications.",
      image: "/images/TSF-picture.png",
      alt: "The Signal Frontier screenshot",
      primaryAction: { label: "Use Tool", href: "https://jro.pages.unistra.fr/thesignalfrontier/" },
      secondaryActions: [],
    },
    {
      title: "Yet Another Realistic Graph Generator",
      category: "Research Tool",
      focus: ["Topology", "Geographical Data"],
      description: "Network topology generator based on geographical data.",
      image: "/images/YARGG-pic.webp",
      alt: "Yet Another Realistic Graph Generator screenshot",
      primaryAction: { label: "Code", href: "https://github.com/JroLuttringer/YARGG" },
      secondaryActions: [
        { label: "Explanation", href: "https://arxiv.org/abs/2110.09320" },
        { label: "Examples", href: "https://zenodo.org/records/5535430#.ZAEBfi8w04g" },
      ],
    },
  ];

  return (
    <div class="container page-enter">
      <Title>Tools - Jean-Romain Luttringer</Title>
      <h1>Tools</h1>
      
      <section class="tools-section stagger-in">
        <For each={tools}>
          {(tool) => (
            <article class="tool-card">
              <div class="tool-image">
                <img src={tool.image} alt={tool.alt} />
              </div>

              <div class="tool-content">
                <p class="tool-kicker">{tool.category}</p>
                <h2>{tool.title}</h2>
                <p>{tool.description}</p>

                <div class="tool-tags">
                  <For each={tool.focus}>
                    {(tag) => <span class="tool-tag">{tag}</span>}
                  </For>
                </div>

                <div class="tool-actions">
                  <a href={tool.primaryAction.href} class="tool-link tool-link-primary" target="_blank" rel="noopener noreferrer">
                    {tool.primaryAction.label}
                  </a>

                  <For each={tool.secondaryActions}>
                    {(action) => (
                      <a href={action.href} class="tool-link tool-link-secondary" target="_blank" rel="noopener noreferrer">
                        {action.label}
                      </a>
                    )}
                  </For>
                </div>
              </div>
            </article>
          )}
        </For>
      </section>
    </div>
  );
}