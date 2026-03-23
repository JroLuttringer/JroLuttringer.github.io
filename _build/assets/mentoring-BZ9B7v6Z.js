import{t as o,j as e,b as u,a as _,S as $,F as b}from"./web-CgP7nCAW.js";import{T as C}from"./index-rzb3QVRB.js";import{j as k}from"./js-yaml-mbYHt68G.js";const x=`phdStudents: \r
  - title: "Towards Eco-Efficient Autonomous Networks: Deep Programmability and Energy-Aware Routing Protocols"\r
    year: 2025-2028\r
    name: "Florent Hardy"\r
    supervision: "co-supervision"\r
    description: "ANR JCJC Project GARDEN"\r
  \r
  - title: "Detection and Mitigation of Performance Anomalies in Core Networks"\r
    year: 2025-2028\r
    name: "Maxime Friess"\r
    supervision: "co-supervision"\r
    description: "ANR TSIA Project TURFU"\r
\r
master2Students:\r
  - title: "Study of Gray Failures in Computer Networks : Testbed and Diagnosis"\r
    year: 2026\r
    name: "Céleste Kerlogot"\r
    supervision: "co-supervision"\r
    description: "Creation of a testbed to study gray failures in computer networks, and development of diagnosis techniques."\r
\r
\r
  - title: "Improving energy efficiency of (programmable) networks"\r
    year: 2025\r
    name: "Florent Hardy"\r
    supervision: "co-supervision"\r
    description: "Working on the GARDEN ANR Project to develop and implement solutions for energy-efficient programmable networks."\r
  \r
  - title: "Symroute: an efficient, ECMP-aware fast reroute solution"\r
    year: 2025\r
    name: "Maxime Friess"\r
    supervision: "co-supervision"\r
    description: "Developing and evaluating a fast reroute mechanism that works efficiently with Equal-Cost Multi-Path routing environments."\r
  \r
  - title: "Study of Gray Failures in Computer Networks : Taxonomy and Data Generation"\r
    year: 2025\r
    name: "Amina Moalla"\r
    supervision: "co-supervision"\r
    description: ""\r
\r
master1Students:\r
  - title: "Investigating the use of Neuro-Symbolic AI within computer networks"\r
    year: 2025\r
    name: "Céleste Kerlogot"\r
    description: ""\r
\r
  - title: "GOFOR-SR: A general framework to compute path for segment routing"\r
    year: 2024\r
    name: "Florent Hardy"\r
    description: "Developed a flexible framework for computing optimal paths in Segment Routing networks."\r
  \r
  - title: "Symroute"\r
    year: 2024\r
    name: "Maxime Friess"\r
    description: "Worked on the development of Symroute, a fast reroute solution for network resilience."\r
  \r
  - title: "Implementation of Best2cop"\r
    year: 2020\r
    name: "Thomas Alfroy"\r
    description: "Implemented the Best2cop algorithm for computing Delay Constrained, Least Cost paths for Segment Routing."\r
\r
bachelorStudents: []`,a=k.load(x);var A=o("<section class=mentoring-section><h2></h2><div class=students-grid>"),M=o("<span class=supervision>(<!>)"),F=o("<div class=student-card><div class=student-header><h3></h3><span class=year-badge></span></div><p class=student-name></p><p>"),R=o('<div class="student-card empty-card"><p>'),D=o("<div class=container><h1>Mentoring</h1><div class=mentoring-container>");function E(){const s=(t,i=[])=>(()=>{var n=A(),c=n.firstChild,h=c.nextSibling;return e(c,t),e(h,(()=>{var v=_(()=>i.length>0);return()=>v()?u(b,{each:i,children:r=>(()=>{var d=F(),p=d.firstChild,g=p.firstChild,y=g.nextSibling,l=p.nextSibling,S=l.nextSibling;return e(g,()=>r.title),e(y,()=>r.year),e(l,()=>r.name,null),e(l,u($,{get when(){return r.supervision},get children(){var m=M(),w=m.firstChild,f=w.nextSibling;return f.nextSibling,e(m,()=>r.supervision,f),m}}),null),e(S,()=>r.description),d})()}):R()})()),n})();return(()=>{var t=D(),i=t.firstChild,n=i.nextSibling;return e(t,u(C,{children:"Mentoring - Jean-Romain Luttringer"}),i),e(n,()=>s("PhD Students",a.phdStudents),null),e(n,()=>s("Master 2 Students",a.master2Students),null),e(n,()=>s("Master 1 Students",a.master1Students),null),e(n,()=>s("Bachelor Students",a.bachelorStudents),null),t})()}export{E as default};
