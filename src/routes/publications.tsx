// src/routes/publications.tsx
import { publications } from "~/lib/publications";
import { Title } from "@solidjs/meta";
import { createMemo, createSignal, createEffect, onMount, onCleanup, Show } from "solid-js";
import { Chart, registerables } from 'chart.js';
import "./publications.css";

// Register all Chart.js components
Chart.register(...registerables);

export default function PublicationsPage() {
  // Refs for chart
  let chartRef: HTMLCanvasElement | undefined;
  let chartInstance: Chart | undefined;
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = createSignal("");
  const [selectedTypes, setSelectedTypes] = createSignal<string[]>([
    "journals", "conferences", "national_conferences", "workshops", "preprints", "thesis"
  ]);

  const publicationTypeOptions = [
    { id: "journals", label: "Journals", color: "#c46a3a" },
    { id: "conferences", label: "International Conferences", color: "#5b8fb9" },
    { id: "national_conferences", label: "National Conferences", color: "#5a9e6f" },
    { id: "workshops", label: "Workshops", color: "#8b7bb0" },
    { id: "preprints", label: "Preprints", color: "#c4a24e" },
    { id: "thesis", label: "Thesis", color: "#5a6b7a" },
  ] as const;
  
  // Additional filter states
  const [selectedVenues, setSelectedVenues] = createSignal<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = createSignal<string[]>([]);
  
  // Toggle filter item
  const toggleFilterItem = (item: string, current: string[], setter: (items: string[]) => void) => {
    if (current.includes(item)) {
      setter(current.filter(i => i !== item));
    } else {
      setter([...current, item]);
    }
  };

  // Toggle all items
  const toggleAllItems = (allItems: string[], current: string[], setter: (items: string[]) => void) => {
    if (current.length === allItems.length) {
      setter([]);
    } else {
      setter([...allItems]);
    }
  };
  
  // Simplified toggle functions using the generic functions above
  const toggleType = (type: string) => toggleFilterItem(type, selectedTypes(), setSelectedTypes);
  const toggleVenue = (venue: string) => toggleFilterItem(venue, selectedVenues(), setSelectedVenues);
  const toggleAuthor = (author: string) => toggleFilterItem(author, selectedAuthors(), setSelectedAuthors);

  const toggleAllTypes = () => toggleAllItems(
    ["journals", "conferences", "national_conferences", "workshops", "preprints", "thesis"], 
    selectedTypes(), 
    setSelectedTypes
  );
  
  // Extract all unique venues and authors
  const allVenues = createMemo(() => {
    const venues = new Set<string>();
    const excludedVenues = ["Ph.D. Thesis, University of Strasbourg", "Master's Thesis, University of Strasbourg"];
    
    // Collect venues from all publication types except thesis
    for (const type of ['journals', 'conferences', 'national_conferences', 'workshops', 'preprints'] as const) {
      for (const pub of publications[type] || []) {
        if (pub.venue && !excludedVenues.includes(pub.venue)) venues.add(pub.venue);
      }
    }
    
    return Array.from(venues).sort();
  });
  
  const allAuthors = createMemo(() => {
    const authors = new Set<string>();
    
    // Collect all authors from all publication types
    for (const type of ['journals', 'conferences', 'national_conferences', 'workshops', 'preprints', 'thesis'] as const) {
      for (const pub of publications[type] || []) {
        if (pub.authors) {
          pub.authors.forEach((author: string) => authors.add(author));
        }
      }
    }
    
    return Array.from(authors).sort();
  });
  
  // Check if all types are selected
  const allTypesSelected = () => selectedTypes().length === 6;
  const someTypesSelected = () => selectedTypes().length > 0 && !allTypesSelected();
  
  // Check if all venues/authors are selected
  const allVenuesSelected = () => selectedVenues().length === allVenues().length && allVenues().length > 0;
  const someVenuesSelected = () => selectedVenues().length > 0 && !allVenuesSelected();
  
  const allAuthorsSelected = () => selectedAuthors().length === allAuthors().length && allAuthors().length > 0;
  const someAuthorsSelected = () => selectedAuthors().length > 0 && !allAuthorsSelected();
  
  // Toggle all venues/authors
  const toggleAllVenues = () => toggleAllItems(allVenues(), selectedVenues(), setSelectedVenues);
  const toggleAllAuthors = () => toggleAllItems(allAuthors(), selectedAuthors(), setSelectedAuthors);
  
  // Group publications by year
  const publicationsByYear = createMemo(() => {
    const years = new Set<number>();
    
    // Collect all years
    for (const type of ['journals', 'conferences', 'national_conferences', 'workshops', 'preprints', 'thesis'] as const) {
      for (const pub of publications[type] || []) {
        years.add(pub.year);
      }
    }
    
    // Sort years in descending order (newest first)
    const sortedYears = Array.from(years).sort((a, b) => b - a); // Remove the .reverse()
    
    // Create an object with years as keys
    const result: Record<number, {
      journals: any[],
      conferences: any[],
      national_conferences: any[],
      workshops: any[],
      preprints: any[],
      thesis: any[]
    }> = {};
    
    for (const year of sortedYears) {
      result[year] = {
        journals: publications.journals?.filter(pub => pub.year === year) || [],
        conferences: publications.conferences?.filter(pub => pub.year === year) || [],
        national_conferences: publications.national_conferences?.filter(pub => pub.year === year) || [],
        workshops: publications.workshops?.filter(pub => pub.year === year) || [],
        preprints: publications.preprints?.filter(pub => pub.year === year) || [],
        thesis: publications.thesis?.filter(pub => pub.year === year) || []
      };
    }
    
    return result;
  });
  
  // Enhanced filter logic - must be defined before filteredPublicationCountsByYear
  const filteredPublicationsByYear = createMemo(() => {
    const result: Record<number, Record<string, any[]>> = {};
    const query = searchQuery().toLowerCase();
    const venues = selectedVenues();
    const authors = selectedAuthors();
    
    for (const [year, yearData] of Object.entries(publicationsByYear())) {
      const yearNum = parseInt(year);
      result[yearNum] = {};
      
      for (const type of ['journals', 'conferences', 'national_conferences', 'workshops', 'preprints', 'thesis'] as const) {
        if (!selectedTypes().includes(type)) {
          result[yearNum][type] = [];
          continue;
        }
        
        result[yearNum][type] = yearData[type].filter(pub => {
          // Skip if venue doesn't match (if venues are selected)
          if (venues.length > 0) {
            if (pub.venue) {
              if (!venues.includes(pub.venue)) return false;
            } else {
              return false;
            }
          }
          
          // Skip if author doesn't match (if authors are selected)
          if (authors.length > 0) {
            const pubAuthors = pub.authors || [];
            if (!pubAuthors.some((author: string) => authors.includes(author))) {
              return false;
            }
          }
          
          // Text search
          if (query) {
            // Search in title
            if (pub.title?.toLowerCase().includes(query)) return true;
            
            // Search in authors
            if (pub.authors?.some((author: string) => author.toLowerCase().includes(query))) return true;
            
            // Search in venue
            if (pub.journal?.toLowerCase().includes(query)) return true;
            if (pub.conference?.toLowerCase().includes(query)) return true;
            if (pub.workshop?.toLowerCase().includes(query)) return true;
            
            return false;
          }
          
          return true;
        });
      }
    }
    
    // Remove years with no publications after filtering
    return Object.fromEntries(
      Object.entries(result).filter(([_, yearData]) => 
        Object.values(yearData).some(pubs => pubs.length > 0)
      )
    );
  });

  // Count publications by year for the chart based on filtered data
  // This memo depends on filteredPublicationsByYear, so it must be defined after it
  const filteredPublicationCountsByYear = createMemo(() => {
    const counts: Record<number, Record<string, number>> = {};
    const filteredData = filteredPublicationsByYear();
    
    // Get all years from the filtered data
    const years = Object.keys(filteredData).map(Number).sort((a, b) => a - b);
    
    for (const year of years) {
      counts[year] = {
        journals: filteredData[year].journals.length,
        conferences: filteredData[year].conferences.length,
        national_conferences: filteredData[year].national_conferences.length,
        workshops: filteredData[year].workshops.length,
        preprints: filteredData[year].preprints.length,
        thesis: filteredData[year].thesis.length,
        total: 0
      };
      
      counts[year].total = 
        counts[year].journals + 
        counts[year].conferences + 
        counts[year].national_conferences + 
        counts[year].workshops + 
        counts[year].preprints + 
        counts[year].thesis;
    }
    
    return counts;
  });
  
  // Create and update chart - ensure this is defined after both memos above
  createEffect(() => {
    if (!chartRef) return;
    
    // Use filtered data for the chart
    const filteredCounts = filteredPublicationCountsByYear();
    const years = Object.keys(filteredCounts).map(Number).sort((a, b) => a - b);
    
    const datasets = [
      {
        label: 'Journal Articles',
        data: years.map(year => filteredCounts[year]?.journals || 0),
        backgroundColor: '#c46a3a',
      },
      {
        label: 'International Conferences',
        data: years.map(year => filteredCounts[year]?.conferences || 0),
        backgroundColor: '#5b8fb9',
      },
      {
        label: 'National Conferences',
        data: years.map(year => filteredCounts[year]?.national_conferences || 0),
        backgroundColor: '#5a9e6f',
      },
      {
        label: 'Workshops',
        data: years.map(year => filteredCounts[year]?.workshops || 0),
        backgroundColor: '#8b7bb0',
      },
      {
        label: 'Preprints',
        data: years.map(year => filteredCounts[year]?.preprints || 0),
        backgroundColor: '#c4a24e',
      },
      {
        label: 'Thesis',
        data: years.map(year => filteredCounts[year]?.thesis || 0),
        backgroundColor: '#5a6b7a',
      }
    ];
    
    if (chartInstance) {
      chartInstance.destroy();
    }
    
    chartInstance = new Chart(chartRef, {
      type: 'bar',
      data: {
        labels: years,
        datasets: datasets
      },
      options: {
        plugins: {
          title: {
            display: false,
            text: 'Publications by Year'
          },
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              padding: 10,
              font: {
                size: 11
              }
            }
          },
          tooltip: {
            callbacks: {
              // Add total count to tooltip
              footer: (tooltipItems) => {
                const item = tooltipItems[0];
                const year = Number(item.label);
                const total = filteredCounts[year]?.total || 0;
                return `Total: ${total}`;
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            ticks: {
              font: {
                size: 10
              }
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              font: {
                size: 10
              }
            }
          }
        },
        animation: {
          duration: 300 // Shorter animation for better responsiveness
        }
      }
    });
  });
  
  // Clean up chart on component unmount
  onCleanup(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  });
  
  // Reusable Filter Checkbox component
  const FilterCheckbox = (props: {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
    color?: string;
  }) => (
    <label class="inline-flex items-center">
      <input
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onChange}
        class={`form-checkbox h-4 w-4 ${props.color || 'text-gray-800'} transition duration-150 ease-in-out`}
      />
      <span class="ml-2 text-sm text-gray-700">{props.label}</span>
    </label>
  );

  // Filter section component for type, venue, and authors - updated with inline styles
  const FilterSection = (props: {
    title: string;
    allSelected: boolean;
    someSelected: boolean;
    toggleAll: () => void;
    items: { id: string; label: string; checked: boolean; onChange: () => void; color?: string }[];
    showSearch?: boolean;
    searchPlaceholder?: string;
    onSearch?: (value: string) => void;
  }) => {
    const [filterQuery, setFilterQuery] = createSignal('');
    const filteredItems = createMemo(() => {
      const query = filterQuery().toLowerCase();
      if (!query) return props.items;
      return props.items.filter(item => item.label.toLowerCase().includes(query));
    });

    return (
      <div style="margin-bottom: 1rem;">
        <div class="publications-filter-header">
          <span class="publications-filter-title">{props.title}</span>
          <button 
            onClick={props.toggleAll}
            class="publications-link-button"
          >
            {props.allSelected ? 'Deselect All' : props.someSelected ? 'Select All' : 'Select All'}
          </button>
        </div>
        
        {props.showSearch && (
          <div style="margin-bottom: 0.5rem;">
            <input
              type="text"
              placeholder={props.searchPlaceholder || `Filter ${props.title.toLowerCase()}...`}
              value={filterQuery()}
              onInput={(e) => setFilterQuery(e.currentTarget.value)}
              class="publications-input"
              style="font-size: 0.75rem;"
            />
          </div>
        )}
        
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; max-height: 12rem; overflow-y: auto; padding: 0.25rem;">
          {filteredItems().map(item => (
            <label style="display: flex; align-items: center; cursor: pointer; position: relative; padding: 0.25rem 0.5rem; background-color: var(--color-surface-alt); border-radius: 0.25rem; border: 1px solid var(--color-border);">
              <div style={`
                width: 0.875rem; 
                height: 0.875rem; 
                margin-right: 0.375rem; 
                border: 1px solid ${item.checked ? 'var(--color-accent)' : 'var(--color-border)'};
                border-radius: 0.25rem;
                background-color: ${item.checked ? 'var(--color-accent)' : 'var(--color-surface)'};
                position: relative;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
              `}>
                {item.checked && (
                  <svg 
                    style="width: 0.675rem; height: 0.675rem; color: var(--color-surface); position: absolute;"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                id={item.id}
                checked={item.checked}
                onChange={item.onChange}
                style="position: absolute; opacity: 0; width: 0.875rem; height: 0.875rem;"
              />
              <span style="font-size: 0.75rem; color: var(--color-text-secondary);">
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
    
  };

  // Publication type display information
  const publicationTypeInfo = {
    journals: { title: "Journal Articles", buttonClass: "journal" },
    conferences: { title: "International Conference Papers", buttonClass: "conference" },
    national_conferences: { title: "National Conference Papers", buttonClass: "national-conference" },
    workshops: { title: "Workshop Papers", buttonClass: "workshop" },
    preprints: { title: "Preprints", buttonClass: "preprint" },
    thesis: { title: "Thesis", buttonClass: "thesis" }
  };

  // Reusable component for publication sections
  const PublicationTypeSection = (props: { 
    type: string; 
    publications: any[]; 
    typeInfo: { 
      title: string; 
      buttonClass: string;
    } 
  }) => {
    const { type, publications, typeInfo } = props;
    
    return (
      <div class="publication-type-section">
        <h2 class="text-xl font-semibold mt-6 mb-4">{typeInfo.title}</h2>
        {publications.map((pub) => (
          <div class={`card publication-card ${typeInfo.buttonClass}`}>
            <h3>{pub.title}</h3>
            <Show when={pub.awards && pub.awards.length > 0}>
              <div class="award-badges">
                {pub.awards.map((award: string) => (
                  <span class="award-badge" title={award}>{award}</span>
                ))}
              </div>
            </Show>
            <p>
              {/* Display venue, editor, and year on a single line */}
              <em>
                {pub.venue}
                {pub.editor && ` • ${pub.editor}`}
                {pub.year && ` • ${pub.year}`}
              </em>
              <br />
              {pub.authors.join(", ")}
            </p>
            <div class="publication-links">
              {Object.entries(pub.links).map(([key, url]) => (
                <a
                  href={url as string}
                  class={`button button-outline ${typeInfo.buttonClass}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Add state for advanced filters visibility
  const [showAdvancedFilters, setShowAdvancedFilters] = createSignal(false);

  return (
    <main class="container p-4 page-enter">
      <Title>Publications - Jean-Romain Luttringer</Title>
      <h1 class="text-2xl font-bold mb-6">Publications</h1>
      
      {/* Publications Statistics Chart */}
      <div class="publications-chart">
        <canvas ref={chartRef}></canvas>
      </div>
      
      <div class="publications-filter-panel">
        <div class="publications-filter-row">
          <label 
            for="search-publications" 
            class="publications-filter-label"
          >
            Search Publications:
          </label>
          <div class="publications-filter-input-wrap">
            <input
              id="search-publications"
              type="text"
              placeholder="Title, author, venue..."
              value={searchQuery()}
              onInput={(e) => setSearchQuery(e.currentTarget.value)}
              class="publications-input"
            />
            {searchQuery() && (
              <button 
                onClick={() => setSearchQuery("")}
                class="publications-clear-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div>
          <div class="publications-filter-header">
            <span class="publications-filter-title">Publication Types</span>
            <button 
              onClick={toggleAllTypes}
              class="publications-link-button"
            >
              {allTypesSelected() ? 'Deselect All' : 'Select All'}
            </button>
          </div>
          
          <div class="publications-types-grid">
            {publicationTypeOptions.map(item => (
              <label class="publications-type-option">
                <div
                  class="publications-type-checkbox"
                  classList={{ checked: selectedTypes().includes(item.id) }}
                  style={{ "--type-color": item.color }}
                >
                  {selectedTypes().includes(item.id) && (
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={selectedTypes().includes(item.id)}
                  onChange={() => toggleType(item.id)}
                  style="position: absolute; opacity: 0; width: 1rem; height: 1rem;"
                />
                <span class="publications-type-label">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        <div class="publications-filter-footer">
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedTypes(["journals", "conferences", "national_conferences", "workshops", "preprints", "thesis"]);
              setSelectedVenues([]);
              setSelectedAuthors([]);
              setShowAdvancedFilters(false);
            }}
            class="publications-reset-button"
          >
            Reset All Filters
          </button>
          
          <button 
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters())}
            class="publications-more-button"
          >
            {showAdvancedFilters() ? 'Hide additional filters' : 'More filters'}
            <svg 
              style={{
                width: '0.75rem', 
                height: '0.75rem', 
                marginLeft: '0.375rem',
                transform: showAdvancedFilters() ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s'
              }}
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <Show when={showAdvancedFilters()}>
        <div class="publications-advanced-panel">
          <div class="publications-advanced-grid">
            {/* Venue Filter */}
            <FilterSection
              title="Venue"
              allSelected={allVenuesSelected()}
              someSelected={someVenuesSelected()}
              toggleAll={toggleAllVenues}
              items={allVenues().map(venue => ({
                id: `venue-${venue.replace(/\s+/g, '-').toLowerCase()}`,
                label: venue,
                checked: selectedVenues().includes(venue),
                onChange: () => toggleVenue(venue)
              }))}
              showSearch={true}
              searchPlaceholder="Filter venues..."
            />
            
            {/* Co-Author Filter */}
            <FilterSection
              title="Co-Authors"
              allSelected={allAuthorsSelected()}
              someSelected={someAuthorsSelected()}
              toggleAll={toggleAllAuthors}
              items={allAuthors().map(author => ({
                id: `author-${author.replace(/\s+/g, '-').toLowerCase()}`,
                label: author,
                checked: selectedAuthors().includes(author),
                onChange: () => toggleAuthor(author)
              }))}
              showSearch={true}
              searchPlaceholder="Filter authors..."
            />
          </div>
        </div>
      </Show>
      
      {/* Publications List */}
      {Object.entries(filteredPublicationsByYear()).length > 0 ? (
        Object.entries(filteredPublicationsByYear())
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Sort years descending
          .map(([year, yearPubs]) => (
          <section style="margin-bottom: 3rem;">
            <div class="year-divider">
              <div class="year-line"></div>
              <span class="year-label">{year}</span>
              <div class="year-line"></div>
            </div>

            {/* Render each publication type using the reusable component */}
            {(Object.keys(yearPubs) as Array<keyof typeof yearPubs>).map(type => 
              yearPubs[type].length > 0 && (
                <PublicationTypeSection 
                  type={type} 
                  publications={yearPubs[type]} 
                  typeInfo={publicationTypeInfo[type as keyof typeof publicationTypeInfo]}
                />
              )
            )}
          </section>
        ))
      ) : (
        <div class="publications-empty">
          <p>No publications found matching your search criteria.</p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setSelectedTypes(["journals", "conferences", "national_conferences", "workshops", "preprints", "thesis"]);
            }}
            class="button"
          >
            Reset Filters
          </button>
        </div>
      )}
    </main>
  );
}
