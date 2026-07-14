import { Title } from "@solidjs/meta";
import { For, Show } from "solid-js";
import { tools } from "~/lib/tools";
import "./tools.css";

export const prerender = true;

const categoryOrder = [
  "Teaching Tools",
  "Interactive Visualizations",
  "Research Software",
  "Experimental / Random",
] as const;

export default function Tools() {
  const toolsByCategory = tools.reduce<Record<string, typeof tools>>((acc, tool) => {
    const key = tool.category || "Experimental / Random";

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(tool);
    return acc;
  }, {});

  const categories = [
    ...categoryOrder.filter((category) => toolsByCategory[category]?.length),
    ...Object.keys(toolsByCategory).filter((category) => !categoryOrder.includes(category as (typeof categoryOrder)[number])),
  ];

  return (
    <div class="container page-shell page-enter">
      <Title>Tools - Jean-Romain Luttringer</Title>
      <header class="page-heading fade-in">
        <p class="page-kicker">Software</p>
        <h1>Tools</h1>
        <p class="page-summary">
          Small, practical pieces of software for teaching, experimentation, and network research.
        </p>
      </header>

      <For each={categories}>
        {(category) => (
          <section class="tool-category-section stagger-in">
            <header class="tool-category-header">
              <h2>{category}</h2>
            </header>

            <div class="tools-list">
              <For each={toolsByCategory[category] ?? []}>
                {(tool) => (
                  <article class="tool-entry">
                    <div class="tool-image">
                      <img src={tool.image} alt={tool.alt ?? ""} />
                    </div>
                    <div class="tool-entry-main">
                      <h3>{tool.title}</h3>
                      <p>{tool.description}</p>
                      <Show when={tool.focus?.length > 0}>
                        <p class="tool-focus">
                          <span>Focus</span>
                          {tool.focus.join(" · ")}
                        </p>
                      </Show>
                    </div>
                    <div class="tool-actions">
                      <Show when={tool.primaryAction?.href && tool.primaryAction?.label}>
                        <a href={tool.primaryAction!.href} class="tool-link tool-link-primary" target="_blank" rel="noopener noreferrer">
                          {tool.primaryAction!.label}
                        </a>
                      </Show>
                      <For each={tool.secondaryActions ?? []}>
                        {(action) => (
                          <a href={action.href} class="tool-link tool-link-secondary" target="_blank" rel="noopener noreferrer">
                            {action.label}
                          </a>
                        )}
                      </For>
                    </div>
                  </article>
                )}
              </For>
            </div>
          </section>
        )}
      </For>
    </div>
  );
}