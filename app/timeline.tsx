type Event = {
  id: string;
  date: string;
  dateLabel: string;
  year: number;
  title: string;
  summary: string;
  why: string;
  category: string;
  status?: string;
  featured?: boolean;
  sources: { label: string; url: string }[];
  image?: { src: string; alt: string; credit: string; url: string; width: number; height: number };
};

export default function Timeline({ events }: { events: Event[] }) {
  const years = [...new Set(events.filter(event => event.year >= 2015).map(event => event.year))].sort((a, b) => a - b);
  const latest = events[events.length - 1];

  return (
    <>
      <a href="#timeline" className="skip-link">Skip to timeline</a>
      <div className="page" id="top">
        <header className="header">
          <h1>The AI timeline</h1>
          <nav aria-label="Page navigation">
            <a href={`#${latest.id}`}>Latest</a>
            <a href="#about">About</a>
          </nav>
        </header>

        <main>
          <div className="intro">
            <p>The posts, breakthroughs, and cultural moments that shaped AI.</p>
            <p className="updated">{events.length} moments, through September 9, 2026.</p>
          </div>

          <nav className="years" aria-label="Jump to a year">
            <a href="#before">Before 2015</a>
            {years.map(year => <a key={year} href={`#year-${year}`}>{year}</a>)}
          </nav>

          <div id="timeline">
            <section id="before" className="prehistory" aria-labelledby="before-heading">
              <h2 id="before-heading">Before 2015</h2>
              {events.filter(event => event.year < 2015).map(event => (
                <div className="precursor" key={event.id} id={event.id}>
                  <time dateTime={event.date}>{event.year}</time>
                  <div>
                    <p>{event.summary}</p>
                    <a className="source" href={event.sources[0].url} target="_blank" rel="noreferrer">{event.sources[0].label}</a>
                  </div>
                </div>
              ))}
            </section>

            {years.map(year => (
              <section className="year" id={`year-${year}`} key={year} aria-labelledby={`heading-${year}`}>
                <h2 id={`heading-${year}`}>{year}</h2>
                {events.filter(event => event.year === year).map(event => (
                  <article className="event" id={event.id} key={event.id}>
                    <div className="event-heading">
                      <h3><a href={`#${event.id}`}>{event.title}</a></h3>
                      <time dateTime={event.date}>{event.dateLabel}</time>
                    </div>
                    {event.status && ['reported', 'prediction', 'debate'].includes(event.status) && (
                      <p className="evidence">{event.status === 'prediction' ? 'Prediction' : event.status === 'reported' ? 'Reported account' : 'Debate'}</p>
                    )}
                    <p>{event.summary}</p>
                    <p className="why">{event.why}</p>
                    {event.image && (
                      <figure>
                        <img src={event.image.src} alt={event.image.alt} width={event.image.width} height={event.image.height} loading="lazy" />
                        <figcaption><a href={event.image.url} target="_blank" rel="noreferrer">{event.image.credit}</a></figcaption>
                      </figure>
                    )}
                    <div className="sources">
                      {event.sources.map(source => (
                        <a className="source" key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
                      ))}
                    </div>
                  </article>
                ))}
              </section>
            ))}
          </div>

          <section className="about" id="about" aria-labelledby="about-heading">
            <h2 id="about-heading">About this timeline</h2>
            <p>A curated history for people who don’t follow AI every day. Entries are selected for their significance to technology, culture, or public opinion.</p>
            <p>Each entry links to its sources. Dates refer to the event or public post; where only a month is established, only a month is shown. Predictions and reported accounts are labeled. Individual posts illustrate public debate; they are not opinion polls.</p>
            <p><a href="https://github.com/prinz-ai/accelerando" target="_blank" rel="noreferrer">Accelerando</a> was a starting point for the recent chronology. Its linked sources were assessed individually.</p>
            <p>Last checked September 9, 2026.</p>
            <a href="#top">Back to top</a>
          </section>
        </main>
      </div>
    </>
  );
}
