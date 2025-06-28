import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { courses } from "../lib/courses";
import "./courses.css";

export default function Courses() {
  return (
    <div class="container">
      <Title>Courses & Materials - Jean-Romain Luttringer</Title>
      <h1>Courses & Materials</h1>
      
      <section class="section">
        <h2>Current Courses</h2>
        
        <div class="courses-grid">
          <For each={courses.currentCourses}>
            {(course) => (
              <div class={`card ${course.role}`}>
                <span class="course-role">{course.role === 'coordinator' ? 'Coordinator' : 
                                          course.role === 'co-coordinator' ? 'Co-coordinator' : 'Instructor'}</span>
                <div class="card-content">
                  <h3>{course.title}</h3>
                  <p><strong>Level:</strong> {course.level}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                  {course.volume && <p><strong>Volume:</strong> {course.volume}</p>}
                  <p class="description"><em>{course.description}</em></p>
                </div>
                {course.materials && (
                  <div class="button-container">
                    <a href={course.materials} class="button" target="_blank" rel="noopener noreferrer">Materials</a>
                  </div>
                )}
              </div>
            )}
          </For>
        </div>
      </section>
      
      <section class="section">
        <h2>Previous Courses</h2>
        
        <div class="courses-grid">
          <For each={courses.previousCourses}>
            {(course) => (
              <div class={`card ${course.role}`}>
                <span class="course-role">{course.role === 'coordinator' ? 'Coordinator' : 
                                          course.role === 'co-coordinator' ? 'Co-coordinator' : 'Instructor'}</span>
                <div class="card-content">
                  <h3>{course.title}</h3>
                  <p><strong>Level:</strong> {course.level}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                  {course.volume && <p><strong>Volume:</strong> {course.volume}</p>}
                  <p class="description"><em>{course.description}</em></p>
                </div>
                {course.materials && (
                  <div class="button-container">
                    <a href={course.materials} class="button" target="_blank" rel="noopener noreferrer">Materials</a>
                  </div>
                )}
              </div>
            )}
          </For>
        </div>
      </section>
      
      <section class="section">
        <h2>TER Subjects</h2>
        
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