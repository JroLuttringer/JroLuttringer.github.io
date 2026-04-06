import{t as i,j as e,b as l,a as w,S as f,F as $}from"./web-YBJNgLqY.js";import{T as C}from"./index-DCoksHYJ.js";import{j as b}from"./js-yaml-mbYHt68G.js";const k=`phdStudents: \r
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
bachelorStudents: []`,d=b.load(k);var M=i('<section class=mentoring-section><h2></h2><div class="students-grid stagger-in">'),A=i("<span class=status-badge>Current"),F=i("<span class=supervision> · "),N=i("<p class=student-description>"),R=i("<div class=student-card><div class=student-topline><span class=year-badge></span></div><h3 class=student-title></h3><p class=student-name>"),D=i('<p class="student-description student-description-muted">Ongoing work'),x=i('<div class="student-card empty-card"><p>No student listed yet.'),P=i('<div class="container page-enter"><h1>Mentoring</h1><div class=mentoring-container>');function G(){const _=s=>{const n=new Date().getFullYear(),o=String(s).match(/(\d{4})(?:\s*-\s*(\d{4}))?/);if(!o)return!1;const c=Number(o[1]),p=o[2]?Number(o[2]):c;return c<=n&&p>=n},u=(s,n=[])=>(()=>{var t=M(),o=t.firstChild,c=o.nextSibling;return e(o,s),e(c,(()=>{var p=w(()=>n.length>0);return()=>p()?l($,{each:n,children:r=>{const h=_(r.year);return(()=>{var m=R(),g=m.firstChild,y=g.firstChild,v=g.nextSibling,S=v.nextSibling;return m.classList.toggle("is-current",!!h),e(g,l(f,{when:h,get children(){return A()}}),y),e(y,()=>r.year),e(v,()=>r.title),e(S,()=>r.name,null),e(S,l(f,{get when(){return r.supervision},get children(){var a=F();return a.firstChild,e(a,()=>r.supervision,null),a}}),null),e(m,l(f,{get when(){return w(()=>!!r.description)()&&r.description.trim().length>0},get fallback(){return D()},get children(){var a=N();return e(a,()=>r.description),a}}),null),m})()}}):x()})()),t})();return(()=>{var s=P(),n=s.firstChild,t=n.nextSibling;return e(s,l(C,{children:"Mentoring - Jean-Romain Luttringer"}),n),e(t,()=>u("PhD Students",d.phdStudents),null),e(t,()=>u("Master 2 Students",d.master2Students),null),e(t,()=>u("Master 1 Students",d.master1Students),null),e(t,()=>u("Bachelor Students",d.bachelorStudents),null),s})()}export{G as default};
