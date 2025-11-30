(function() {
  'use strict';

  const countEl = document.getElementById('viewer-count');
  const locationEl = document.getElementById('viewer-location');
  const trendEl = document.getElementById('viewer-trend');
  if (!countEl || !locationEl || !trendEl) return;

  const hotspotSets = [
    ['Riyadh', 'London', 'San Francisco'],
    ['Paris', 'Dubai', 'Beirut'],
    ['New York', 'Berlin', 'Toronto'],
    ['Seoul', 'Boston', 'Jeddah']
  ];

  const setText = (el, value) => { el.textContent = value || '—'; };

  async function getViewCount() {
    try {
      const res = await fetch('https://api.countapi.xyz/hit/hasan-hammoud.com/visits');
      const data = await res.json();
      return data.value;
    } catch (err) {
      console.warn('Count API failed', err);
      return Math.floor(300 + Math.random() * 120);
    }
  }

  async function getLocation() {
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      if (data && data.city && data.country_name) {
        return `${data.city}, ${data.country_name}`;
      }
    } catch (err) {
      console.warn('Location lookup failed', err);
    }
    const fallback = ['Somewhere on Earth', 'Your secret lab', 'An undisclosed location'];
    return fallback[Math.floor(Math.random() * fallback.length)];
  }

  function pickHotspots() {
    const set = hotspotSets[Math.floor(Math.random() * hotspotSets.length)];
    return set.join(' · ');
  }

  async function hydrate() {
    const [count, loc] = await Promise.all([getViewCount(), getLocation()]);
    setText(countEl, count.toLocaleString());
    setText(locationEl, loc);
    setText(trendEl, pickHotspots());
  }

  hydrate();
})();
