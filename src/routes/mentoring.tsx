import { Title } from "@solidjs/meta";
import { For, Show } from "solid-js";
import { mentoring, type Student } from "~/lib/mentoring";
import "./mentoring.css";

export default function Mentoring() {
  // Reusable function to render a section of students
  const renderStudentSection = (title: string, students: Student[] = []) => (
    <section class="mentoring-section">
      <h2>{title}</h2>
      <div class="students-grid">
        {students.length > 0 ? (
          <For each={students}>
            {(student) => (
              <div class="student-card">
                <div class="student-header">
                  <h3>{student.title}</h3>
                  <span class="year-badge">{student.year}</span>
                </div>
                <p class="student-name">
                  {student.name}
                  <Show when={student.supervision}>
                    <span class="supervision">({ student.supervision})</span>
                  </Show>
                </p>
                <p>{student.description}</p>
              </div>
            )}
          </For>
        ) : (
          <div class="student-card empty-card">
            <p></p>
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div class="container">
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