import { Title } from "@solidjs/meta";
import { For, Show } from "solid-js";
import { mentoring, type Student } from "~/lib/mentoring";
import "./mentoring.css";

export default function Mentoring() {
  // Reusable function to render a section of students
  const renderStudentSection = (title: string, students: Student[] = []) => (
    <section class="mentoring-section">
      <h2>{title}</h2>
      <div class="students-list stagger-in">
        {students.length > 0 ? (
          <For each={students}>
            {(student) => {
              const isCurrent = student.ongoing;

              return (
              <article class="student-row" classList={{ "is-current": isCurrent }}>
                <div class="student-meta">
                  <Show when={isCurrent}>
                    <span class="status-badge">Current</span>
                  </Show>
                  <span class="year-badge">{student.year}</span>
                </div>
                <div class="student-main">
                  <h3 class="student-title">{student.title}</h3>
                  <p class="student-name">
                    {student.name}
                    <Show when={student.supervision}>
                      <span class="supervision"> · {student.supervision}</span>
                    </Show>
                  </p>
                  <Show when={student.description && student.description.trim().length > 0}>
                    <p class="student-description">{student.description}</p>
                  </Show>
                  <Show when={student.ongoing && (!student.description || student.description.trim().length === 0)}>
                    <p class="student-description student-description-muted">Ongoing work</p>
                  </Show>
                </div>
              </article>
              );
            }}
          </For>
        ) : (
          <div class="student-row empty-card">
            <p>No student listed yet.</p>
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div class="container page-shell page-enter">
      <Title>Mentoring - Jean-Romain Luttringer</Title>
      <header class="page-heading fade-in">
        <p class="page-kicker">Supervision</p>
        <h1>Mentoring</h1>
        <p class="page-summary">
          Current and past student supervision across doctoral, master, and bachelor levels. For TER projects, see the Courses page.
        </p>
      </header>
      
      <div class="mentoring-container">
        {renderStudentSection("PhD Students", mentoring.phdStudents)}
        {renderStudentSection("Master 2 Students", mentoring.master2Students)}
        {renderStudentSection("Master 1 Students", mentoring.master1Students)}
        {renderStudentSection("Bachelor Students", mentoring.bachelorStudents)}
      </div>
    </div>
  );
}