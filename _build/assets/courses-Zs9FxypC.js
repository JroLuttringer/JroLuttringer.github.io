import{t as l,j as e,b as u,a as m,k as p,n as b,p as k,F as v}from"./web-YBJNgLqY.js";import{T as V}from"./index-DCoksHYJ.js";import{j as F}from"./js-yaml-mbYHt68G.js";const U=`currentCourses:\r
  - title: "Production Pipeline Automation"\r
    level: "BUT3"\r
    duration: "2023 - Present"\r
    volume: "8h CI, 12h TP"\r
    description: "Git workflow, CI"\r
    role: "coordinator"\r
    materials: "https://seafile.unistra.fr/d/f2e3240bf7a94857ba70/"\r
  \r
  - title: "Programmable Networks"\r
    level: "Master 2"\r
    duration: "2022 - Present" \r
    volume: "8h CM (2023), 14h TP"\r
    description: "SDN, P4"\r
    role: "co-coordinator"\r
    materials: "https://seafile.unistra.fr/d/a506d1e1749a4f88b4bb/"\r
  \r
  - title: "Development Quality"\r
    level: "BUT3"\r
    duration: "2023 - Present"\r
    volume: "14h CI + 24h TP"\r
    description: "CD, dev. techniques"\r
    role: "instructor"\r
    materials: ""\r
  \r
  - title: "Introduction to Networking"\r
    level: "BUT1"\r
    duration: "2022 - Present"\r
    volume: "12h TD + 34h TP"\r
    description: "Layer 2 and 3, STP, Routing"\r
    role: "instructor"\r
    materials: ""\r
  \r
  - title: "Network Programming"\r
    level: "BUT2"\r
    duration: "2023 - Present"\r
    volume: "24h TP" \r
    description: "C Sockets, TCP, UDP"\r
    role: "instructor"\r
    materials: ""\r
\r
previousCourses:\r
  - title: "Computer Architecture"\r
    level: "Bs.c 1st year"\r
    duration: "2019 - 2020"\r
    description: "Cardiac, Assembly, C"\r
    role: "instructor"\r
    materials: ""\r
  \r
  - title: "Local Networks"\r
    level: " Pro. Bs.c"\r
    duration: "2019 - 2020"\r
    description: "STP, VLAN"\r
    role: "instructor"\r
    materials: ""\r
  \r
  - title: "Local Networks"\r
    level: "Bs.c 2nd year"\r
    duration: "2020 - 2023"\r
    description: "STP, VLAN, ECC"\r
    role: "co-coordinator"\r
    materials: "https://seafile.unistra.fr/d/73c2aff79cf94453a981/"\r
  \r
  - title: "Network Algorithms"\r
    level: "Bs.c 3rd year"\r
    duration: "2019 - 2023"\r
    description: "Layer 4, C Sockets"\r
    role: "co-coordinator"\r
    materials: "https://seafile.unistra.fr/d/3f43f34b1090480dafa1/"\r
  \r
  - title: "Inter-Domain Routing"\r
    level: "Master 1"\r
    duration: "2021 - 2024"\r
    description: "BGP, MPLS, VPN"\r
    role: "co-coordinator"\r
    materials: "https://seafile.unistra.fr/d/7df9d1fd7d414220b455/"\r
  \r
  - title: "TCP/IP"\r
    level: "Eng. School"\r
    duration: "2022 - 2023"\r
    description: "STP, VLAN, Routing"\r
    role: "instructor"\r
    materials: ""\r
\r
  - title: "Project"\r
    level: "Eng. School"\r
    duration: "2022 - 2023"\r
    description: "Project on ECC"\r
    role: "instructor"\r
    materials: ""\r
\r
  - title: "Systems Programming"\r
    level: "Bs.c 2nd year"\r
    duration: "2022 - 2023"\r
    description: "C language primitives, threads, processes"\r
    role: "instructor"\r
    materials: ""\r
    \r
  - title: "IP Networks"\r
    level: "Bs.c 2nd year"\r
    duration: "2022 - 2023"\r
    description: "Layer 2 and 3"\r
    role: "instructor"\r
    materials: ""\r
\r
terSubjects:\r
  column1:\r
    - "GOFOR-SR, a generic SR optimization framework"\r
    - "P4 State of the art"\r
    - "YARGG, topology generator"\r
    - "Blockchain and Lightning Network"\r
    - "Data-plane Fast Re-route"\r
    - "P4Dummies, Generating code for programmable networks"\r
    - "BGP Blackjack"\r
    - "Quality of Service with Segment Routing"\r
    - "Lord of the Links : Evolving Network Topologies"\r
\r
  \r
  column2:\r
    - "The Insecurity of BGP"\r
    - "BGP is Turing-Complete"\r
    - "Towards Neuro-Symbolic AI for Network Diagnostics"\r
    - "Visualizing OPTIC, an inter-intradomaine FRR solution"\r
    - "Visualizing Best2cop, a DCLC algorithm"\r
    - "Visualizing Time-traveling algorithms"\r
    - "Checking the coherence of time-travels to prevent paradoxes"\r
    - "Back to the Future : Evaluating Green Networking Solutions"\r
`,g=F.load(U);var z=l('<div class="container page-enter"><h1>Courses & Materials</h1><section class=section><h2>Current Courses</h2><div class="courses-grid stagger-in"></div></section><section class="section section-past"><h2>Previous Courses</h2><div class="courses-grid stagger-in"></div></section><section class=section><h2>TER Subjects</h2><div class=ter-container><div class=ter-column><ul class=ter-list></ul></div><div class=ter-column><ul class=ter-list>'),T=l("<div><span class=course-role></span><h3></h3><div class=card-meta><span></span><span class=meta-sep>·</span><span></span></div><div class=card-topics>"),x=l("<div class=card-volume>"),w=l("<span class=topic-chip>"),B=l('<a class=materials-link target=_blank rel="noopener noreferrer">Materials'),N=l("<li>");function q(){return(()=>{var h=z(),_=h.firstChild,C=_.nextSibling,y=C.firstChild,L=y.nextSibling,S=C.nextSibling,R=S.firstChild,I=R.nextSibling,j=S.nextSibling,A=j.firstChild,D=A.nextSibling,P=D.firstChild,G=P.firstChild,E=P.nextSibling,M=E.firstChild;return e(h,u(V,{children:"Courses & Materials - Jean-Romain Luttringer"}),_),e(L,u(v,{get each(){return g.currentCourses},children:r=>(()=>{var n=T(),a=n.firstChild,o=a.nextSibling,s=o.nextSibling,c=s.firstChild,f=c.nextSibling,$=f.nextSibling,d=s.nextSibling;return e(a,()=>r.role==="coordinator"?"Coordinator":r.role==="co-coordinator"?"Co-coordinator":"Instructor"),e(o,()=>r.title),e(c,()=>r.level),e($,()=>r.duration),e(n,(()=>{var i=m(()=>!!r.volume);return()=>i()&&(()=>{var t=x();return e(t,()=>r.volume),t})()})(),d),e(d,()=>r.description.split(",").map(i=>(()=>{var t=w();return e(t,()=>i.trim()),t})())),e(n,(()=>{var i=m(()=>!!r.materials);return()=>i()&&(()=>{var t=B();return p(()=>b(t,"href",r.materials)),t})()})(),null),p(()=>k(n,`card ${r.role}`)),n})()})),e(I,u(v,{get each(){return g.previousCourses},children:r=>(()=>{var n=T(),a=n.firstChild,o=a.nextSibling,s=o.nextSibling,c=s.firstChild,f=c.nextSibling,$=f.nextSibling,d=s.nextSibling;return e(a,()=>r.role==="coordinator"?"Coordinator":r.role==="co-coordinator"?"Co-coordinator":"Instructor"),e(o,()=>r.title),e(c,()=>r.level),e($,()=>r.duration),e(n,(()=>{var i=m(()=>!!r.volume);return()=>i()&&(()=>{var t=x();return e(t,()=>r.volume),t})()})(),d),e(d,()=>r.description.split(",").map(i=>(()=>{var t=w();return e(t,()=>i.trim()),t})())),e(n,(()=>{var i=m(()=>!!r.materials);return()=>i()&&(()=>{var t=B();return p(()=>b(t,"href",r.materials)),t})()})(),null),p(()=>k(n,`card ${r.role}`)),n})()})),e(G,u(v,{get each(){return g.terSubjects.column1},children:r=>(()=>{var n=N();return e(n,r),n})()})),e(M,u(v,{get each(){return g.terSubjects.column2},children:r=>(()=>{var n=N();return e(n,r),n})()})),h})()}export{q as default};
