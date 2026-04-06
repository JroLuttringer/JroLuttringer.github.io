import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { courses } from "../lib/courses";
import "./courses.css";

export default function Courses() {
  return (
    <div class="container page-enter">
      <Title>Courses & Materials - Jean-Romain Luttringer</Title>
      <h1>Courses & Materials</h1>
      
      <section class="section">
        <h2>Current Courses</h2>
        
        <div class="courses-grid stagger-in">
          <For each={courses.currentCourses}>
            {(course) => (
              <div class={`card ${course.role}`}>
                <span class="course-role">{course.role === 'coordinator' ? 'Coordinator' : 
                                        course.role === 'co-coordinator' ? 'Co-coordinator' : 'Instructor'}</span>
                <h3>{course.title}</h3>
                <div class="card-meta">
                  <span>{course.level}</span>
                  <span class="meta-sep">·</span>
                  <span>{course.duration}</span>
                </div>
                {course.volume && (
                  <div class="card-volume">{course.volume}</div>
                )}
                <div class="card-topics">
                  {course.description.split(',').map((topic: string) => (
                    <span class="topic-chip">{topic.trim()}</span>
                  ))}
                </div>
                {course.materials && (
                  <a href={course.materials} class="materials-link" target="_blank" rel="noopener noreferrer">Materials</a>
                )}
              </div>
            )}
          </For>
        </div>
      </section>
      
      <section class="section section-past">
        <h2>Previous Courses</h2>
        
        <div class="courses-grid stagger-in">
          <For each={courses.previousCourses}>
            {(course) => (
              <div class={`card ${course.role}`}>
                <span class="course-role">{course.role === 'coordinator' ? 'Coordinator' : 
                                        course.role === 'co-coordinator' ? 'Co-coordinator' : 'Instructor'}</span>
                <h3>{course.title}</h3>
                <div class="card-meta">
                  <span>{course.level}</span>
                  <span class="meta-sep">·</span>
                  <span>{course.duration}</span>
                </div>
                {course.volume && (
                  <div class="card-volume">{course.volume}</div>
                )}
                <div class="card-topics">
                  {course.description.split(',').map((topic: string) => (
                    <span class="topic-chip">{topic.trim()}</span>
                  ))}
                </div>
                {course.materials && (
                  <a href={course.materials} class="materials-link" target="_blank" rel="noopener noreferrer">Materials</a>
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