import fs from 'node:fs';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname.replace(/^\//, '').replace(/^([A-Za-z]):/, '$1:'));
const chapters = [
  { id: 'opening', title: 'Adventure Island', kicker: 'A WORLD BUILT FOR CURIOSITY', duration: 5, mode: 'hero', images: ['adventure-island-cover.webp'] },
  { id: 'maps', title: 'A world to explore', kicker: '01 / ISLAND MAPS', duration: 12, images: ['maps/01-parchment-map.webp', 'maps/02-island-map-variation.webp', 'maps/03-map-assets-overview.webp'] },
  { id: 'environments', title: 'Every island has a story', kicker: '02 / ENVIRONMENT DESIGN', duration: 12, images: ['maps/04-environment-background-redesign.webp', 'maps/05-forest-background-result.webp', 'maps/06-desert-background-result.webp', 'maps/07-volcano-background-continuation.webp'] },
  { id: 'interface', title: 'Playful by design', kicker: '03 / GAME UI', duration: 10, images: ['game-ui/01-quest-book-overview.webp', 'game-ui/02-dog-dialogue-panel.webp', 'game-ui/03-character-collection-screens.webp', 'game-ui/04-magic-book-item.webp'] },
  { id: 'elements', title: 'Details that bring it to life', kicker: '04 / GAME ART & INTERFACE ELEMENTS', duration: 11, images: ['elements/02-victory-and-defeat-states.webp', 'elements/03-challenge-panels.webp', 'elements/04-character-equipment-panels.webp', 'elements/05-game-interface-panels.webp'] },
  { id: 'letters', title: 'Meet the letter cast', kicker: '05 / CHARACTER DESIGN · A—Z', duration: 20, mode: 'letters', images: ['letters/00-letter-island-wordmark.webp', ...fs.readdirSync(path.join(root, 'assets/adventure-island/letters')).filter(f => /^\d+-letter-[a-z](?:-new)?\.webp$/.test(f)).sort().map(f => `letters/${f}`)] },
  { id: 'outro', title: 'Adventure Island', kicker: 'EXPLORE · SOLVE · LEARN · DISCOVER', duration: 5, mode: 'hero', images: ['adventure-island-cover.webp', 'elements/01-adventure-island-title-logo.webp'] },
];

const palette = { night: '#10172c', paper: '#faf7f0', ink: '#272b43', gold: '#edc887', lavender: '#e9e3f1', muted: '#b9bfd0' };
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const fmt = n => Number(n.toFixed(3));
const chaptersDir = path.join(root, 'compositions');
fs.mkdirSync(chaptersDir, { recursive: true });

for (const c of chapters) {
  const per = c.mode === 'letters' ? (c.duration - 1) / 5 : (c.duration - 1) / c.images.length;
  const inner = c.mode === 'letters'
    ? Array.from({ length: 5 }, (_, i) => c.images.slice(1 + i * 6, Math.min(1 + (i + 1) * 6, c.images.length)))
    : c.images.map(x => [x]);
  const items = inner.map((group, i) => ({ group, start: fmt(i * per), duration: fmt(per + 0.15), index: i }));
  const visual = items.map(({ group, start, duration, index }) => {
    let contents;
    if (c.mode === 'hero') {
      const cover = group[0];
      const isCover = cover === 'adventure-island-cover.webp';
      contents = isCover
        ? `<img class="hero-cover" src="assets/adventure-island/${cover}" alt=""/><div class="hero-shade"></div>`
        : `<img class="hero-logo" src="assets/adventure-island/${cover}" alt="Adventure Island"/>`;
    } else if (c.mode === 'letters') {
      const letters = group.map((src, j) => {
        const label = src.match(/letter-([a-z])(?:-new)?\.webp$/)?.[1]?.toUpperCase() || '';
        return `<div class="letter"><img src="assets/adventure-island/${src}" alt=""/><span>${label}</span></div>`;
      }).join('');
      contents = `<div class="letter-wall">${letters}</div>`;
    } else {
      contents = `<img class="art-image" src="assets/adventure-island/${group[0]}" alt=""/>`;
    }
    return `<div class="beat beat-${index}" data-beat="${index}" style="--beat-start:${start}s;--beat-duration:${duration}s">${contents}</div>`;
  }).join('\n');
  const logo = c.mode === 'letters' ? '<img class="wordmark" src="assets/adventure-island/letters/00-letter-island-wordmark.webp" alt=""/>' : '';
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/></head><body><template>
<style>
@font-face{font-family:Fraunces;src:url("assets/fonts/fraunces-latin-500.woff2") format("woff2");font-style:normal;font-weight:500}
@font-face{font-family:"DM Sans";src:url("assets/fonts/dm-sans-latin-400.woff2") format("woff2");font-style:normal;font-weight:400}
#root{position:absolute;inset:0;overflow:hidden;background:${palette.night};color:${palette.paper};font-family:"DM Sans",sans-serif}
.ambient{position:absolute;inset:0;background:radial-gradient(ellipse at 78% 18%,rgba(66,114,148,.2),transparent 38%),radial-gradient(ellipse at 16% 85%,rgba(91,74,128,.16),transparent 42%)}
.chapter{position:absolute;inset:0;padding:78px 112px 82px;display:flex;flex-direction:column}
.topline{display:flex;justify-content:space-between;align-items:center;z-index:5}.kicker{font-size:20px;letter-spacing:.18em;text-transform:uppercase;color:${palette.gold};font-weight:700}.index{font:600 17px "DM Sans",sans-serif;letter-spacing:.16em;color:${palette.muted}}
h1{font-family:Fraunces,Georgia,serif;font-size:54px;line-height:1.05;font-weight:500;letter-spacing:-.025em;margin:28px 0 24px;z-index:5;color:${palette.paper}}
.stage{position:relative;flex:1;min-height:0;display:grid;place-items:center}
.beat{position:absolute;inset:0;display:grid;place-items:center;opacity:0;visibility:hidden}
.art-image{width:100%;height:100%;max-width:1580px;max-height:700px;object-fit:contain;filter:drop-shadow(0 26px 50px rgba(0,0,0,.3));}
.letter-wall{width:100%;height:100%;display:grid;grid-template-columns:repeat(6,1fr);align-items:center;justify-items:center;gap:10px;padding:10px 20px}
.letter{height:100%;width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;min-width:0}.letter img{width:100%;height:calc(100% - 45px);object-fit:contain;filter:drop-shadow(0 16px 18px rgba(0,0,0,.28))}.letter span{font-size:24px;font-weight:700;letter-spacing:.14em;color:${palette.gold}}
.wordmark{position:absolute;left:112px;top:144px;width:340px;max-height:90px;object-fit:contain;object-position:left center;z-index:4}
.hero-cover{position:absolute;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 25px 50px rgba(0,0,0,.38))}.hero-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(16,23,44,.32),transparent 68%);pointer-events:none}.hero-logo{width:76%;height:76%;object-fit:contain;filter:drop-shadow(0 24px 42px rgba(0,0,0,.42))}
.rule{height:1px;width:100%;background:linear-gradient(90deg,${palette.gold},rgba(237,200,135,.08));margin-top:22px}
</style>
<div id="root" data-composition-id="chapter-${c.id}" data-width="1920" data-height="1080" data-start="0" data-duration="${c.duration}"><div class="ambient"></div><section class="chapter"><div class="topline"><span class="kicker">${esc(c.kicker)}</span><span class="index">ADVENTURE ISLAND&nbsp;&nbsp; / &nbsp;&nbsp;${String(chapters.indexOf(c)+1).padStart(2,'0')}</span></div><h1>${esc(c.title)}</h1><div class="stage">${logo}${visual}</div><div class="rule"></div></section></div>
<script>window.__timelines=window.__timelines||{};const tl=gsap.timeline({paused:true});${items.map(({start,duration,index}) => `tl.fromTo(".beat-${index}",{autoAlpha:0,scale:.975,y:18},{autoAlpha:1,scale:1,y:0,duration:.65,ease:"power2.out"},${start});${index < items.length-1 ? `tl.to(".beat-${index}",{autoAlpha:0,duration:.4,ease:"power1.in"},${fmt(start+duration-.4)});` : ''}`).join('')}window.__timelines["chapter-${c.id}"]=tl;</script>
</template></body></html>`;
  fs.writeFileSync(path.join(chaptersDir, `${c.id}.html`), html);
}

let cursor = 0;
const gap = 0.72;
const total = chapters.reduce((a,c)=>a+c.duration,0) - gap*(chapters.length-1);
const mounts = chapters.map((c,i) => {
  const start = fmt(cursor);
  cursor += c.duration - gap;
  return `<div id="mount-${c.id}" class="mount" data-layout-allow-overlap="intentional chapter crossfade" data-composition-id="chapter-${c.id}" data-composition-src="compositions/${c.id}.html" data-start="${start}" data-duration="${c.duration}" data-track-index="${i}" data-width="1920" data-height="1080"></div>`;
}).join('\n');
const hostTweens = chapters.map((c,i) => {
  const start = fmt(chapters.slice(0,i).reduce((a,x)=>a+x.duration-gap,0));
  return i===0 ? `tl.set("#mount-${c.id}",{autoAlpha:1},0);` : `tl.fromTo("#mount-${c.id}",{autoAlpha:0},{autoAlpha:1,duration:${gap},ease:"power1.inOut"},${start});tl.to("#mount-${chapters[i-1].id}",{autoAlpha:0,duration:${gap},ease:"power1.inOut"},${start});`;
}).join('\n');
const main = `<!doctype html><html lang="en" data-resolution="landscape"><head><meta charset="utf-8"/><meta name="viewport" content="width=1920,height=1080"/><script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script><style>*{box-sizing:border-box}html,body{margin:0;width:1920px;height:1080px;overflow:hidden;background:${palette.night}}#root{position:relative;width:1920px;height:1080px;background:${palette.night};overflow:hidden}.mount{position:absolute;inset:0;opacity:0;visibility:hidden}</style></head><body><div id="root" data-composition-id="main" data-start="0" data-duration="${fmt(total)}" data-width="1920" data-height="1080">${mounts}</div><script>window.__timelines=window.__timelines||{};const tl=gsap.timeline({paused:true});${hostTweens}window.__timelines.main=tl;tl.seek(0);</script></body></html>`;
fs.writeFileSync(path.join(root, 'index.html'), main);

const storyboard = `# Adventure Island Showreel\n\n## Intent\nA cinematic visual portfolio tour: establish the world, then reveal its maps, environments, game interface, art elements, and letter-character cast. English titles, no narration, approximately ${fmt(total)} seconds.\n\n## Design\nAdapted from the project DESIGN.md: night indigo canvas, warm paper headlines, starlight-gold chapter labels, Fraunces display and DM Sans utility typography. Art remains the focal point; transitions crossfade through adjacent chapters.\n\n` + chapters.map((c,i)=>`## Frame ${String(i+1).padStart(2,'0')} — ${c.title}\n- status: outline\n- duration: ${c.duration}s\n- src: compositions/${c.id}.html\n- assets: ${c.images.length===1?'one focused image':`${c.images.length} authored visuals, sequenced within the chapter`}\n- motion: seek-safe fromTo reveals; gentle transform-only push; crossfade chapter handoff\n- rule: multi-phase-camera (cinematic slow focus)\n`).join('\n');
fs.writeFileSync(path.join(root, 'STORYBOARD.md'), storyboard);
fs.writeFileSync(path.join(root, 'frame.md'), `# Adventure Island / Expedition\n\n## Brand\nAdapt DESIGN.md tokens: canvas ${palette.night}, warm display ${palette.paper}, body ${palette.muted}, starlight accent ${palette.gold}, Fraunces display and DM Sans supporting text.\n\n## Frame\n16:9, 1920×1080. Artwork fills the visual stage with generous margins and object-fit containment. Keep all art unobstructed; labels sit in a fixed editorial rail. Indigo ambient glows remain low contrast.\n\n## Motion\nSlow ease-out reveals, transform-only image settles, and short chapter crossfades. No spin, bounce, or fast montage. Hold the letter groups long enough to scan.\n`);
console.log(`Wrote ${chapters.length} chapters, ${fmt(total)} seconds; ${chapters.reduce((n,c)=>n+c.images.length,0)} referenced image entries.`);
