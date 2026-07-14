import{t as r,j as e,b as o,a as g,S as u,F as _}from"./web-YBJNgLqY.js";import{T as $}from"./index-DCoksHYJ.js";import{j as k}from"./js-yaml-mbYHt68G.js";const b=`phdStudents: \r
  - title: "Towards Eco-Efficient Autonomous Networks: Deep Programmability and Energy-Aware Routing Protocols"\r
    year: 2025-2028\r
    ongoing: true\r
    name: "Florent Hardy"\r
    supervision: "co-supervision"\r
    description: "ANR JCJC Project GARDEN"\r
  \r
  - title: "Detection and Mitigation of Performance Anomalies in Core Networks"\r
    year: 2025-2028\r
    ongoing: true\r
    name: "Maxime Friess"\r
    supervision: "co-supervision"\r
    description: "ANR TSIA Project TURFU"\r
\r
master2Students:\r
  - title: "Study of Gray Failures in Computer Networks : Testbed and Diagnosis"\r
    year: 2026\r
    ongoing: true\r
    name: "Céleste Kerlogot"\r
    supervision: "co-supervision"\r
    description: "Creation of a testbed to study gray failures in computer networks, and development of diagnosis techniques."\r
\r
\r
  - title: "Improving energy efficiency of (programmable) networks"\r
    year: 2025\r
    ongoing: false\r
    name: "Florent Hardy"\r
    supervision: "co-supervision"\r
    description: "Working on the GARDEN ANR Project to develop and implement solutions for energy-efficient programmable networks."\r
  \r
  - title: "Symroute: an efficient, ECMP-aware fast reroute solution"\r
    year: 2025\r
    ongoing: false\r
    name: "Maxime Friess"\r
    supervision: "co-supervision"\r
    description: "Developing and evaluating a fast reroute mechanism that works efficiently with Equal-Cost Multi-Path routing environments."\r
  \r
  - title: "Study of Gray Failures in Computer Networks : Taxonomy and Data Generation"\r
    year: 2025\r
    ongoing: false\r
    name: "Amina Moalla"\r
    supervision: "co-supervision"\r
    description: ""\r
\r
master1Students:\r
  - title: "Investigating the use of Neuro-Symbolic AI within computer networks"\r
    year: 2025\r
    ongoing: false\r
    name: "Céleste Kerlogot"\r
    description: ""\r
\r
  - title: "GOFOR-SR: A general framework to compute path for segment routing"\r
    year: 2024\r
    ongoing: false\r
    name: "Florent Hardy"\r
    description: "Developed a flexible framework for computing optimal paths in Segment Routing networks."\r
  \r
  - title: "Symroute"\r
    year: 2024\r
    ongoing: false\r
    name: "Maxime Friess"\r
    description: "Worked on the development of Symroute, a fast reroute solution for network resilience."\r
  \r
  - title: "Implementation of Best2cop"\r
    year: 2020\r
    ongoing: false\r
    name: "Thomas Alfroy"\r
    description: "Implemented the Best2cop algorithm for computing Delay Constrained, Least Cost paths for Segment Routing."\r
\r
bachelorStudents: []`,c=k.load(b);var A=r('<section class=mentoring-section><h2></h2><div class="students-list stagger-in">'),F=r("<span class=status-badge>Current"),M=r("<span class=supervision> · "),R=r("<p class=student-description>"),N=r('<p class="student-description student-description-muted">Ongoing work'),x=r("<article class=student-row><div class=student-meta><span class=year-badge></span></div><div class=student-main><h3 class=student-title></h3><p class=student-name>"),D=r('<div class="student-row empty-card"><p>No student listed yet.'),P=r('<div class="container page-shell page-enter"><header class="page-heading fade-in"><p class=page-kicker>Supervision</p><h1>Mentoring</h1><p class=page-summary>Current and past student supervision across doctoral, master, and bachelor levels. For TER projects, see the Courses page.</p></header><div class=mentoring-container>');function G(){const l=(s,a=[])=>(()=>{var t=A(),h=t.firstChild,w=h.nextSibling;return e(h,s),e(w,(()=>{var C=g(()=>a.length>0);return()=>C()?o(_,{each:a,children:n=>{const f=n.ongoing;return(()=>{var p=x(),m=p.firstChild,v=m.firstChild,d=m.nextSibling,y=d.firstChild,S=y.nextSibling;return p.classList.toggle("is-current",!!f),e(m,o(u,{when:f,get children(){return F()}}),v),e(v,()=>n.year),e(y,()=>n.title),e(S,()=>n.name,null),e(S,o(u,{get when(){return n.supervision},get children(){var i=M();return i.firstChild,e(i,()=>n.supervision,null),i}}),null),e(d,o(u,{get when(){return g(()=>!!n.description)()&&n.description.trim().length>0},get children(){var i=R();return e(i,()=>n.description),i}}),null),e(d,o(u,{get when(){return g(()=>!!n.ongoing)()&&(!n.description||n.description.trim().length===0)},get children(){return N()}}),null),p})()}}):D()})()),t})();return(()=>{var s=P(),a=s.firstChild,t=a.nextSibling;return e(s,o($,{children:"Mentoring - Jean-Romain Luttringer"}),a),e(t,()=>l("PhD Students",c.phdStudents),null),e(t,()=>l("Master 2 Students",c.master2Students),null),e(t,()=>l("Master 1 Students",c.master1Students),null),e(t,()=>l("Bachelor Students",c.bachelorStudents),null),s})()}export{G as default};
