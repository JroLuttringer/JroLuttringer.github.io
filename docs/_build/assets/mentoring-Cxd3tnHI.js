import{t as o,j as e,b as u,a as $,S as b,F as w}from"./web-CgP7nCAW.js";import{T as x}from"./index-rzb3QVRB.js";import{j as C}from"./js-yaml-mbYHt68G.js";const k=`phdStudents: []\r
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
    description: "Conducting a comprehensive study on gray failures in computer networks, focusing on taxonomy and data generation techniques."\r
\r
master1Students:\r
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
bachelorStudents: []`,s=C.load(k);var M=o("<section class=mentoring-section><h2></h2><div class=students-grid>"),F=o("<span class=supervision>(<!>)"),R=o("<div class=student-card><div class=student-header><h3></h3><span class=year-badge></span></div><p class=student-name></p><p>"),D=o('<div class="student-card empty-card"><p>'),A=o("<div class=container><h1>Mentoring</h1><div class=mentoring-container>");function T(){const a=(t,i=[])=>(()=>{var n=M(),d=n.firstChild,f=d.nextSibling;return e(d,t),e(f,(()=>{var v=$(()=>i.length>0);return()=>v()?u(w,{each:i,children:r=>(()=>{var c=R(),p=c.firstChild,g=p.firstChild,S=g.nextSibling,l=p.nextSibling,y=l.nextSibling;return e(g,()=>r.title),e(S,()=>r.year),e(l,()=>r.name,null),e(l,u(b,{get when(){return r.supervision},get children(){var m=F(),_=m.firstChild,h=_.nextSibling;return h.nextSibling,e(m,()=>r.supervision,h),m}}),null),e(y,()=>r.description),c})()}):D()})()),n})();return(()=>{var t=A(),i=t.firstChild,n=i.nextSibling;return e(t,u(x,{children:"Mentoring - Jean-Romain Luttringer"}),i),e(n,()=>a("PhD Students",s.phdStudents),null),e(n,()=>a("Master 2 Students",s.master2Students),null),e(n,()=>a("Master 1 Students",s.master1Students),null),e(n,()=>a("Bachelor Students",s.bachelorStudents),null),t})()}export{T as default};
