import { Title } from "@solidjs/meta";
import { For, Show } from "solid-js";
import { courses } from "../lib/courses";
import "./courses.css";

const roleLabel = (role: string) => {
  switch (role) {
    case "coordinator":
      return "Coordinator";
    case "co-coordinator":
      return "Co-coordinator";
    default:
      return "Instructor";
  }
};

export default function Courses() {
  return (
    <div class="container page-shell page-enter">
      <Title>Courses & Materials - Jean-Romain Luttringer</Title>
      <header class="page-heading fade-in">
        <p class="page-kicker">Teaching</p>
        <h1>Courses & Materials</h1>
        <p class="page-summary">
          A compact overview of current and past teaching with access to course material when it is publicly available.
        </p>
      </header>
      
      <section class="section courses-section">
        <h2>Current Courses</h2>

        <div class="courses-list courses-list--two-column stagger-in">
          <For each={courses.currentCourses}>
            {(course) => (
              <article class={`course-row ${course.role}`}>
                <div class="course-sidebar">
                  <span class="course-role">{roleLabel(course.role)}</span>
                </div>

                <div class="course-main">
                  <h3>{course.title}</h3>
                  <div class="course-meta-line" aria-label="Course details">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                    <Show when={course.volume}>
                      <span>{course.volume}</span>
                    </Show>
                  </div>
                  <Show when={course.description}>
                    <p class="course-description">{course.description}</p>
                  </Show>
                  <Show when={course.materials}>
                    <a href={course.materials} class="materials-link" target="_blank" rel="noopener noreferrer">Materials</a>
                  </Show>
                </div>
              </article>
            )}
          </For>
        </div>
      </section>
      
      <section class="section courses-section section-past">
        <h2>Previous Courses</h2>
        {/* <p class="courses-section-summary">
          Historical teaching activity covering systems, routing, and network programming fundamentals.
        </p> */}
        
        <div class="courses-list courses-list--two-column stagger-in">
          <For each={courses.previousCourses}>
            {(course) => (
              <article class={`course-row ${course.role}`}>
                <div class="course-sidebar">
                  <span class="course-role">{roleLabel(course.role)}</span>
                </div>

                <div class="course-main">
                  <h3>{course.title}</h3>
                  <div class="course-meta-line" aria-label="Course details">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                    <Show when={course.volume}>
                      <span>{course.volume}</span>
                    </Show>
                  </div>
                  <Show when={course.description}>
                    <p class="course-description">{course.description}</p>
                  </Show>
                  <Show when={course.materials}>
                    <a href={course.materials} class="materials-link" target="_blank" rel="noopener noreferrer">Materials</a>
                  </Show>
                </div>
              </article>
            )}
          </For>
        </div>
      </section>
      
      <section class="section courses-section">
        <h2>TER Subjects</h2>
        <p class="courses-section-summary">
          Research-oriented project topics proposed for supervised TER work.
        </p>
        
        <div class="ter-container">
          <div class="ter-column">
            <ul class="ter-list">
              <For each={courses.terSubjects.column1}>
                {(subject) => <li>{subject}</li>}
              </For>
            </ul>
          </div>
          
          <div class="ter-column">
            <ul class="ter-list">
              <For each={courses.terSubjects.column2}>
                {(subject) => <li>{subject}</li>}
              </For>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}