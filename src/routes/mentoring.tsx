import { Title } from "@solidjs/meta";
import { For, Show } from "solid-js";
import { mentoring, type Student } from "~/lib/mentoring";
import "./mentoring.css";

export default function Mentoring() {
  const isCurrentMentoring = (yearValue: string) => {
    const currentYear = new Date().getFullYear();
    const year = String(yearValue);
    const match = year.match(/(\d{4})(?:\s*-\s*(\d{4}))?/);

    if (!match) return false;

    const startYear = Number(match[1]);
    const endYear = match[2] ? Number(match[2]) : startYear;

    // Treat entries as active only if they cover the present year.
    return startYear <= currentYear && endYear >= currentYear;
  };

  // Reusable function to render a section of students
  const renderStudentSection = (title: string, students: Student[] = []) => (
    <section class="mentoring-section">
      <h2>{title}</h2>
      <div class="students-grid stagger-in">
        {students.length > 0 ? (
          <For each={students}>
            {(student) => {
              const isCurrent = isCurrentMentoring(student.year);

              return (
              <div class="student-card" classList={{ "is-current": isCurrent }}>
                <div class="student-topline">
                  <Show when={isCurrent}>
                    <span class="status-badge">Current</span>
                  </Show>
                  <span class="year-badge">{student.year}</span>
                </div>
                <h3 class="student-title">{student.title}</h3>
                <p class="student-name">
                  {student.name}
                  <Show when={student.supervision}>
                    <span class="supervision"> · {student.supervision}</span>
                  </Show>
                </p>
                <Show
                  when={student.description && student.description.trim().length > 0}
                  fallback={<p class="student-description student-description-muted">Ongoing work</p>}
                >
                  <p class="student-description">{student.description}</p>
                </Show>
              </div>
              );
            }}
          </For>
        ) : (
          <div class="student-card empty-card">
            <p>No student listed yet.</p>
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div class="container page-enter">
      <Title>Mentoring - Jean-Romain Luttringer</Title>
      <h1>Mentoring</h1>
      
      <div class="mentoring-container">
        {renderStudentSection("PhD Students", mentoring.phdStudents)}
        {renderStudentSection("Master 2 Students", mentoring.master2Students)}
        {renderStudentSection("Master 1 Students", mentoring.master1Students)}
        {renderStudentSection("Bachelor Students", mentoring.bachelorStudents)}
      </div>
    </div>
  );
}