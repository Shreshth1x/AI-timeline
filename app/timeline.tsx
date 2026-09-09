'use client';
import { useEffect, useState, useRef } from 'react';

type Event = {id:string; date:string; dateLabel:string; year:number; title:string; summary:string; why:string; category:string; status?:string; featured?:boolean; sources:{label:string;url:string}[]; image?:{src:string;alt:string;credit:string;url:string;width:number;height:number}};
const chapters: Record<number,{title:string;line:string}> = {
  2015:{title:'The machines start seeing.',line:'Neural networks leave the research paper and enter the imagination.'},
  2016:{title:'An unexpected move.',line:'AI surprises world champions. The internet surprises AI.'},
  2017:{title:'The engine of the boom.',line:'A new way to process language quietly changes what comes next.'},
  2018:{title:'Reality gets editable.',line:'Synthetic faces, synthetic art, and the first questions about trust.'},
  2019:{title:'Too good to release?',line:'Writing starts to look human. So do people who never existed.'},
  2020:{title:'It learns to improvise.',line:'One model can write, answer and code. Another tackles biology.'},
  2021:{title:'Just describe it.',line:'Language becomes a way to make images and software.'},
  2022:{title:'Everyone gets a turn.',line:'The technology escapes the demo. Millions start experimenting.'},
  2023:{title:'The world catches up.',line:'Awe, anxiety, absurdity—and an argument about what comes next.'},
  2024:{title:'It can see. It can speak.',line:'AI becomes more convincing, more useful, and harder to ignore.'},
  2025:{title:'From answers to actions.',line:'Models begin doing the work. The promises and the stakes grow.'},
  2026:{title:'The future stops feeling distant.',line:'Personal breakthroughs, autonomous research, and warnings from inside the labs.'}
};
export default function Timeline({events}:{events:Event[]}) {
 const years=[...new Set(events.filter(e=>e.year>=2015).map(e=>e.year))].sort((a,b)=>a-b);
 const [active,setActive]=useState('before');
 const progressRef=useRef<HTMLDivElement>(null);
 useEffect(()=>{
   // Adapted from personal Osmo: Sticky Steps (Basic). Batch scroll work in rAF.
   const sections=[...document.querySelectorAll<HTMLElement>('[data-sticky-steps-item]')];
   let frame=0;
   function update(){
     const line=Math.min(window.innerHeight*.3,220);
     let current='before';
     sections.forEach(section=>{ if(section.getBoundingClientRect().top<=line) current=section.id; });
     sections.forEach(section=>section.setAttribute('data-sticky-steps-item-status',section.id===current?'active':'after'));
     setActive(current);
     const range=document.documentElement.scrollHeight-window.innerHeight;
     if(progressRef.current) progressRef.current.style.transform=`scaleX(${range>0?Math.max(0,Math.min(1,window.scrollY/range)):0})`;
     frame=0;
   }
   const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update)};
   window.addEventListener('scroll',onScroll,{passive:true}); window.addEventListener('resize',onScroll);update();
   return()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);cancelAnimationFrame(frame)};
 },[events]);
 return <>
   <a href="#timeline" className="skip-link">Skip to timeline</a>
   <header className="masthead"><a className="wordmark" href="#top"><span className="mark" aria-hidden="true">ai</span> in order</a><span className="edition">An ongoing history <span aria-hidden="true">/</span> September 2026</span></header>
   <main id="top">
    <div className="intro"><div className="eyebrow">2015 — NOW</div><h1>The AI timeline<span className="title-dot">.</span></h1><p>The breakthroughs, the strange moments, and the posts that changed how we see the future.</p><div className="intro-bottom"><span>{events.length} moments · No background in AI required.</span><a href={"#"+events[events.length-1].id}>Jump to the latest <span aria-hidden="true">↗</span></a></div></div>
    <nav className="year-nav" aria-label="Jump to a year"><div className="year-nav-inner"><a href="#before" aria-current={active==='before'?'location':undefined}>Before</a>{years.map(year=><a key={year} href={'#year-'+year} aria-current={active==='year-'+year?'location':undefined}>{year}</a>)}</div><div className="reading-line" ref={progressRef} style={{transform:"scaleX(0)"}} aria-hidden="true" /></nav>
    <div id="timeline" className="timeline" data-sticky-steps-init>
     <section id="before" className="prehistory" data-sticky-steps-item><div className="year-label"><span>Before 2015</span><small>The short version</small></div><div className="prehistory-content">{events.filter(e=>e.year<2015).length?events.filter(e=>e.year<2015).map(e=><div className="precursor" key={e.id}><span>{e.year}</span><div><h3>{e.title}</h3><p>{e.summary}</p><a className="source" href={e.sources[0].url} target="_blank" rel="noreferrer">{e.sources[0].label} ↗</a></div></div>):<p>For decades, people asked whether machines could think. Early systems followed rules. By the 2010s, larger datasets and powerful chips helped neural networks learn patterns from examples. Then their abilities became visible to everyone.</p>}</div></section>
     {years.map(year=><section className="year-section" id={'year-'+year} key={year} data-sticky-steps-item><div className="year-label"><span>{year}</span><small>{String(events.filter(e=>e.year===year).length).padStart(2,'0')} moments</small></div><div className="year-content"><div className="chapter"><h2>{chapters[year]?.title}</h2><p>{chapters[year]?.line}</p></div>{events.filter(e=>e.year===year).map(e=><article className={'event'+(e.featured?' event-featured':'')} id={e.id} key={e.id}><div className="event-meta"><time dateTime={e.date}>{e.dateLabel}</time><span className={'category '+e.category}>{e.category==='stakes'?'The stakes':e.category==='culture'?'Culture':'Breakthrough'}</span>{e.status&&['reported','prediction','debate'].includes(e.status)&&<span className="evidence">{e.status==='prediction'?'Prediction':e.status==='reported'?'Reported':'Debate'}</span>}</div><h3><a href={'#'+e.id}>{e.title}</a></h3><p>{e.summary}</p>{e.image&&<figure><img src={e.image.src} alt={e.image.alt} width={e.image.width} height={e.image.height} loading="lazy"/><figcaption><a href={e.image.url} target="_blank" rel="noreferrer">{e.image.credit} ↗</a></figcaption></figure>}<div className="why">{e.why}</div><div className="sources">{e.sources.map(s=><a className="source" key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.label}<span aria-hidden="true"> ↗</span></a>)}</div></article>)}</div></section>)}
     <footer className="endnote"><span className="eyebrow">YOU ARE HERE</span><h2>Still being written.</h2><p>Capability, excitement and concern have grown together. What happens next is still an open question.</p><details><summary>About this timeline & sources <span aria-hidden="true">+</span></summary><div><p>A curated history of consequential breakthroughs and cultural moments, checked on 9 September 2026. It is selective, not an index of every model release. Dates refer to the event or public post; where only a month is established, only a month is shown.</p><p>“Reported” marks accounts or claims that need context. “Prediction” marks someone’s forecast, not a measured probability or a settled outcome. Public posts illustrate public debate; they are not opinion polls. Each entry links to its evidence.</p><p><a href="https://github.com/prinz-ai/accelerando" target="_blank" rel="noreferrer">Accelerando</a> was a starting point for the recent chronology. Its linked sources are assessed individually.</p></div></details><a className="back-top" href="#top">Back to the beginning ↑</a></footer>
    </div>
   </main><footer className="colophon"><span>AI, in order.</span><span>Curated through 9 September 2026</span></footer>
 </>;
}
