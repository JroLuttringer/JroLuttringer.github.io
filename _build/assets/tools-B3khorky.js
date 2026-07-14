import{t as l,j as t,b as o,F as g,S as _,k as d,n as h}from"./web-YBJNgLqY.js";import{T as x}from"./index-DCoksHYJ.js";import{j as C}from"./js-yaml-mbYHt68G.js";const E=`tools:
  - title: "Graphic Subnetting Tool"
    category: "Teaching Tools"
    focus:
      - "IP Addressing"
      - "Subnetting"
    description: "Help students visualize IP address space and check whether their scheme is correct."
    image: "/images/GST-pic.webp"
    alt: "Graphic Subnetting Tool screenshot"
    primaryAction:
      label: "Use Tool"
      href: "https://jr.luttringer.pages.unistra.fr/gst/"
    secondaryActions:
      - label: "Documentation"
        href: "https://git.unistra.fr/jr.luttringer/gst"

  - title: "Net Playground"
    category: "Teaching Tools"
    focus:
      - "Layer 2"
      - "Layer 3"
    description: "Visual configurable network simulation to illustrate Layer 2 and Layer 3 concepts (encapsulation, spanning tree, learning switches...)."
    image: "/images/L2P-picture.png"
    alt: "L2P screenshot"
    primaryAction:
      label: "Use Tool"
      href: "https://jro.pages.unistra.fr/stpviz/"
    secondaryActions: []

  - title: "The Signal Frontier"
    category: "Interactive Visualizations"
    focus:
      - "LEO/GEO"
      - "Latency"
    description: "A linear-scale solar system and beyond, showing LEO/GEO orbits and deep-space communication latency."
    image: "/images/TSF-picture.png"
    alt: "The Signal Frontier screenshot"
    primaryAction:
      label: "Use Tool"
      href: "https://jro.pages.unistra.fr/thesignalfrontier/"
    secondaryActions: []

  - title: "Yet Another Realistic Graph Generator"
    category: "Research Software"
    focus:
      - "Topology"
      - "Geographical Data"
    description: "Network topology generator based on geographical data."
    image: "/images/YARGG-pic.webp"
    alt: "Yet Another Realistic Graph Generator screenshot"
    primaryAction:
      label: "Code"
      href: "https://github.com/JroLuttringer/YARGG"
    secondaryActions:
      - label: "Explanation"
        href: "https://arxiv.org/abs/2110.09320"
      - label: "Examples"
        href: "https://zenodo.org/records/5535430#.ZAEBfi8w04g"
  
  - title: "Bienvenue en Fransse"
    category: "Experimental / Random"
    description: "Prepare for the French civil exam when applying for citizenship or a visa."
    image: "/images/BEF.png"
    primaryAction:
      label: "Check it out"
      href: "https://jro.pages.unistra.fr/bienvenuenfransse/"

  - title: "Should I Grab the Coin?"
    category: "Experimental / Random"
    description: "Check whether grabbing a coin on the ground is worth your time."
    image: "/images/SIGTC.png"
    primaryAction:
      label: "Check it out"
      href: "https://jro.pages.unistra.fr/shouldigrabthecoin/"  `,R=C.load(E)?.tools??[],j=R.map(e=>({title:e.title??e.name??"Untitled Tool",category:e.category??"Experimental / Random",focus:Array.isArray(e.focus)?e.focus:[],description:e.description??"",image:e.image??"",alt:e.alt??`${e.title??e.name??"Tool"} screenshot`,primaryAction:e.primaryAction,secondaryActions:Array.isArray(e.secondaryActions)?e.secondaryActions:[]}));var L=l('<div class="container page-shell page-enter"><header class="page-heading fade-in"><p class=page-kicker>Software</p><h1>Tools</h1><p class=page-summary>Small, practical pieces of software for teaching, experimentation, and network research.'),F=l('<section class="tool-category-section stagger-in"><header class=tool-category-header><h2></h2></header><div class=tools-list>'),z=l("<p class=tool-focus><span>Focus"),I=l('<a class="tool-link tool-link-primary"target=_blank rel="noopener noreferrer">'),O=l("<article class=tool-entry><div class=tool-image><img></div><div class=tool-entry-main><h3></h3><p></p></div><div class=tool-actions>"),P=l('<a class="tool-link tool-link-secondary"target=_blank rel="noopener noreferrer">');const $=["Teaching Tools","Interactive Visualizations","Research Software","Experimental / Random"];function V(){const e=j.reduce((r,c)=>{const i=c.category||"Experimental / Random";return r[i]||(r[i]=[]),r[i].push(c),r},{}),w=[...$.filter(r=>e[r]?.length),...Object.keys(e).filter(r=>!$.includes(r))];return(()=>{var r=L(),c=r.firstChild;return t(r,o(x,{children:"Tools - Jean-Romain Luttringer"}),c),t(r,o(g,{each:w,children:i=>(()=>{var m=F(),u=m.firstChild,S=u.firstChild,k=u.nextSibling;return t(S,i),t(k,o(g,{get each(){return e[i]??[]},children:a=>(()=>{var f=O(),y=f.firstChild,b=y.firstChild,p=y.nextSibling,A=p.firstChild,G=A.nextSibling,v=p.nextSibling;return t(A,()=>a.title),t(G,()=>a.description),t(p,o(_,{get when(){return a.focus?.length>0},get children(){var n=z();return n.firstChild,t(n,()=>a.focus.join(" · "),null),n}}),null),t(v,o(_,{get when(){return a.primaryAction?.href&&a.primaryAction?.label},get children(){var n=I();return t(n,()=>a.primaryAction.label),d(()=>h(n,"href",a.primaryAction.href)),n}}),null),t(v,o(g,{get each(){return a.secondaryActions??[]},children:n=>(()=>{var s=P();return t(s,()=>n.label),d(()=>h(s,"href",n.href)),s})()}),null),d(n=>{var s=a.image,T=a.alt??"";return s!==n.e&&h(b,"src",n.e=s),T!==n.t&&h(b,"alt",n.t=T),n},{e:void 0,t:void 0}),f})()})),m})()}),null),r})()}export{V as default};
