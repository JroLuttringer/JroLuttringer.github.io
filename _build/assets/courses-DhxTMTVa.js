import{t as h,j as e,b as m,a as g,k as v,n as k,p as B,F as f}from"./web-CgP7nCAW.js";import{T as U}from"./index-rzb3QVRB.js";import{j as z}from"./js-yaml-mbYHt68G.js";const O=`currentCourses:\r
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
  \r
  column2:\r
    - "The Insecurity of BGP"\r
    - "BGP is Turing-Complete"\r
    - "Towards Neuro-Symbolic AI for Network Diagnostics"\r
    - "Visualizing OPTIC, an inter-intradomaine FRR solution"\r
    - "Visualizing Best2cop, a DCLC algorithm"\r
    - "Visualizing Time-traveling algorithms"\r
    - "Checking the coherence of time-travels to prevent paradoxes"\r
`,p=z.load(O);var Q=h("<div class=container><h1>Courses & Materials</h1><section class=section><h2>Current Courses</h2><div class=courses-grid></div></section><section class=section><h2>Previous Courses</h2><div class=courses-grid></div></section><section class=section><h2>TER Subjects</h2><div class=ter-container><div class=ter-column><ul class=ter-list></ul></div><div class=ter-column><ul class=ter-list>"),w=h("<div><span class=course-role></span><div class=card-content><h3></h3><p><strong>Level:</strong> </p><p><strong>Duration:</strong> </p><p class=description><em>"),N=h("<p><strong>Volume:</strong> "),y=h('<div class=button-container><a class=button target=_blank rel="noopener noreferrer">Materials'),R=h("<li>");function H(){return(()=>{var C=Q(),b=C.firstChild,P=b.nextSibling,L=P.firstChild,I=L.nextSibling,T=P.nextSibling,D=T.firstChild,j=D.nextSibling,A=T.nextSibling,G=A.firstChild,M=G.nextSibling,x=M.firstChild,V=x.firstChild,E=x.nextSibling,F=E.firstChild;return e(C,m(U,{children:"Courses & Materials - Jean-Romain Luttringer"}),b),e(I,m(f,{get each(){return p.currentCourses},children:r=>(()=>{var n=w(),s=n.firstChild,c=s.nextSibling,d=c.firstChild,i=d.nextSibling,$=i.firstChild;$.nextSibling;var l=i.nextSibling,_=l.firstChild;_.nextSibling;var u=l.nextSibling,S=u.firstChild;return e(s,()=>r.role==="coordinator"?"Coordinator":r.role==="co-coordinator"?"Co-coordinator":"Instructor"),e(d,()=>r.title),e(i,()=>r.level,null),e(l,()=>r.duration,null),e(c,(()=>{var o=g(()=>!!r.volume);return()=>o()&&(()=>{var t=N(),a=t.firstChild;return a.nextSibling,e(t,()=>r.volume,null),t})()})(),u),e(S,()=>r.description),e(n,(()=>{var o=g(()=>!!r.materials);return()=>o()&&(()=>{var t=y(),a=t.firstChild;return v(()=>k(a,"href",r.materials)),t})()})(),null),v(()=>B(n,`card ${r.role}`)),n})()})),e(j,m(f,{get each(){return p.previousCourses},children:r=>(()=>{var n=w(),s=n.firstChild,c=s.nextSibling,d=c.firstChild,i=d.nextSibling,$=i.firstChild;$.nextSibling;var l=i.nextSibling,_=l.firstChild;_.nextSibling;var u=l.nextSibling,S=u.firstChild;return e(s,()=>r.role==="coordinator"?"Coordinator":r.role==="co-coordinator"?"Co-coordinator":"Instructor"),e(d,()=>r.title),e(i,()=>r.level,null),e(l,()=>r.duration,null),e(c,(()=>{var o=g(()=>!!r.volume);return()=>o()&&(()=>{var t=N(),a=t.firstChild;return a.nextSibling,e(t,()=>r.volume,null),t})()})(),u),e(S,()=>r.description),e(n,(()=>{var o=g(()=>!!r.materials);return()=>o()&&(()=>{var t=y(),a=t.firstChild;return v(()=>k(a,"href",r.materials)),t})()})(),null),v(()=>B(n,`card ${r.role}`)),n})()})),e(V,m(f,{get each(){return p.terSubjects.column1},children:r=>(()=>{var n=R();return e(n,r),n})()})),e(F,m(f,{get each(){return p.terSubjects.column2},children:r=>(()=>{var n=R();return e(n,r),n})()})),C})()}export{H as default};
