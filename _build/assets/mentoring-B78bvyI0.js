import{t as o,j as e,b as c,a as $,S as w,F as b}from"./web-CgP7nCAW.js";import{T as C}from"./index-rzb3QVRB.js";import{j as k}from"./js-yaml-mbYHt68G.js";const x=`phdStudents: \r
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
bachelorStudents: []`,a=k.load(x);var A=o("<section class=mentoring-section><h2></h2><div class=students-grid>"),M=o("<span class=supervision>(<!>)"),R=o("<div class=student-card><div class=student-header><h3></h3><span class=year-badge></span></div><p class=student-name></p><p>"),F=o('<div class="student-card empty-card"><p>'),D=o("<div class=container><h1>Mentoring</h1><div class=mentoring-container>");function T(){const s=(t,i=[])=>(()=>{var n=A(),u=n.firstChild,h=u.nextSibling;return e(u,t),e(h,(()=>{var v=$(()=>i.length>0);return()=>v()?c(b,{each:i,children:r=>(()=>{var p=R(),d=p.firstChild,g=d.firstChild,S=g.nextSibling,l=d.nextSibling,y=l.nextSibling;return e(g,()=>r.title),e(S,()=>r.year),e(l,()=>r.name,null),e(l,c(w,{get when(){return r.supervision},get children(){var m=M(),_=m.firstChild,f=_.nextSibling;return f.nextSibling,e(m,()=>r.supervision,f),m}}),null),e(y,()=>r.description),p})()}):F()})()),n})();return(()=>{var t=D(),i=t.firstChild,n=i.nextSibling;return e(t,c(C,{children:"Mentoring - Jean-Romain Luttringer"}),i),e(n,()=>s("PhD Students",a.phdStudents),null),e(n,()=>s("Master 2 Students",a.master2Students),null),e(n,()=>s("Master 1 Students",a.master1Students),null),e(n,()=>s("Bachelor Students",a.bachelorStudents),null),t})()}export{T as default};
