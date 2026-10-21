/* =====================================================================
   valentine lemasson b00840214 & charlotte bucsila b00836753 website
   script.js — the behaviour: what happens on click, typing or submit
   ===================================================================== */

'use strict';

const ACCENT = '#D4FF3A';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =====================================================================
   ================  SESSION CONTENT DATA  ==============================
   One block per session. To add Session 2: copy the `session1` object
   below, rename it `session2`, change every field, then add it to the
   SESSIONS array. Nothing else in this file needs to know about it
   until you wire a new "chapter" into the timeline/game UI.
   ===================================================================== */

const session1 = {
  id: 'session-1',
  number: '01',
  title: 'LaunchLab',
  subtitle: 'From Idea to Live Website',
  dates: 'Oct 2026 · 2 × 1h',
  quote: '"Design it, build it, store it, ship it. Four tools, one live link."',
  speakersLine: 'Rishabh Modi · Yibo Yang · Nirvan Anand',
  headline: 'Three high schoolers taught a room of master’s students',
  headlineEm: 'how to ship a website.',
  lead: 'From a blank prompt to a live link, without writing code by hand.',
  fine: 'Two one-hour guest sessions on vibe coding for 100+ master’s students, invited by Professor Madina Kalyayeva.',

  story: 'Rishabh used to not see the point of networking. At a Junior Achievement Asia Pacific workshop, he started a conversation at a networking breakfast with Professor Madina Kalyayeva, told her about his team’s vibe coding work, and she offered them an hour with her students.',

  speakers: [
    {
      name: 'Rishabh Modi', ini: 'RM', bg: '#F3D3CF', photo: 'assets/rishabh.svg',
      role: 'Senior (Grade 12) at Singapore American School, into business, entrepreneurship and engineering',
      chips: [
        'CEO of EcoBean: 3rd at the Junior Achievement Entrepreneurship Competition, the first SAS team in the top three in six years',
        'Founder and President of Project Wish, a club supporting Ambulance Wish Singapore',
        'Co-President of CFA Club, officer of the Entrepreneurship Club'
      ],
      line: 'The networking story that got them into ESSEC is his.',
      li: 'https://www.linkedin.com/in/rishabh-modi-2b0b06307/'
    },
    {
      name: 'Yibo Yang', ini: 'YY', bg: '#C9D8B6', photo: 'assets/yibo.svg',
      role: 'Sophomore at Singapore American School, into machine learning and AI education',
      chips: [
        'Founder of OpenSkills, an applied AI education non-profit for migrant workers and students',
        'Ran a five-Sunday program with ItsRainingRaincoats: 15+ migrant workers built their own websites',
        'Over 5.6k SGD raised for causes'
      ],
      line: '“Keep building.”',
      li: 'https://www.linkedin.com/in/yiboyang8/'
    },
    {
      name: 'Nirvan Anand', ini: 'NA', bg: '#E4E0F2', photo: 'assets/nirvan.svg',
      role: 'Student at Singapore American School and co-presenter of the session',
      chips: [
        'Co-built the LaunchLab presentation',
        'Recently earned the Investment Foundations Certificate from the CFA Institute'
      ],
      line: '',
      li: 'https://www.linkedin.com/in/nirvan-anand-597133407/'
    }
  ],

  stages: [
    { n: '01', part: 'Design & Build', t: 'Design', tool: 'Claude Design' },
    { n: '02', part: 'Design & Build', t: 'Handoff', tool: 'Share menu' },
    { n: '03', part: 'Design & Build', t: 'Build', tool: 'Claude Code' },
    { n: '04', part: 'Store & Ship', t: 'Store', tool: 'GitHub' },
    { n: '05', part: 'Store & Ship', t: 'Ship', tool: 'Vercel' },
    { n: '06', part: 'Remember', t: 'The limits', tool: 'Basic sites' },
    { n: '07', part: 'Remember', t: 'Logging in', tool: 'Tokens' },
    { n: '08', part: 'Remember', t: 'Supabase', tool: 'Backend' }
  ],

  flips: [
    { k: 'r', t: 'Routines', d: 'Repeated background tasks, like "check this folder for errors every hour".' },
    { k: 'f', t: 'Refactoring', d: 'Clean up or reorganize code without changing what it does.' },
    { k: 'c', t: 'Session context', d: 'It remembers what commands ran, what broke and what you were trying to fix.' }
  ],

  goodParts: [
    { k: 'Role', v: 'You are a creative web designer.' },
    { k: 'Goal', v: 'A site that helps classmates revise our guest sessions.' },
    { k: 'Target audience', v: 'Marketing master’s students and our professor.' },
    { k: 'Pages needed', v: 'Home, one tab per session, a leaderboard.' },
    { k: 'Design style', v: 'Editorial, cream and navy, bold motion.' },
    { k: 'Key features', v: 'A short game per session and a progress bar.' },
    { k: 'Output required', v: 'A polished, responsive design ready to hand off.' }
  ],

  takeaways: [
    'A detailed prompt beats a vague one every time',
    'Design first, then hand off to Claude Code to build',
    'GitHub stores your code, Vercel turns it into a live website',
    'Push when you work solo, open a pull request when you work as a team',
    'A real site needs a database to remember users and data',
    'Say yes to opportunities: this whole session started with one conversation'
  ],

  game: {
    good: ['Role', 'Goal', 'Target audience', 'Pages needed', 'Design style', 'Output required'],
    chips: ['Role', 'Make it nice', 'Goal', 'Target audience', 'Use any colours', 'Pages needed', 'Design style', 'Output required'],
    pipeline: ['Claude Design', 'Handoff to Claude Code', 'Push to GitHub', 'Import into Vercel', 'Live link'],
    pipelineShuffled: ['Push to GitHub', 'Live link', 'Claude Design', 'Import into Vercel', 'Handoff to Claude Code'],
    terms: [
      { term: 'Fork', m: 'Your own copy of someone else’s repo' },
      { term: 'Clone', m: 'Download a repo onto your computer' },
      { term: 'Commit', m: 'Save a snapshot of your changes locally' },
      { term: 'Push', m: 'Send your commits up to GitHub' },
      { term: 'Pull Request', m: 'Ask teammates to review your changes' },
      { term: 'Merge', m: 'Combine approved changes into the main project' }
    ],
    meaningOrder: [3, 0, 5, 1, 4, 2],
    fileQuestions: [
      { q: 'Change the text on the main button', a: 'index.html' },
      { q: 'Make that button orange', a: 'styles.css' },
      { q: 'Make the button do something when clicked', a: 'script.js' },
      { q: 'Add a new heading', a: 'index.html' },
      { q: 'Change the font size on phones', a: 'styles.css' },
      { q: 'Show a message when a form is submitted', a: 'script.js' }
    ],
    trueFalse: [
      { s: 'A commit saves your work on GitHub.', a: false, why: 'It stays on your computer until you push.' },
      { s: 'Vercel stores your code.', a: false, why: 'GitHub stores it, Vercel hosts it.' },
      { s: 'Every pull request on Vercel gets its own preview link.', a: true, why: 'Each PR gets a preview to check before merging.' },
      { s: 'After logging in, you type your password on every click.', a: false, why: 'A token does that job.' },
      { s: 'Without a database, a Wordle clone forgets you when you close the tab.', a: true, why: 'Nothing is stored, so nothing is remembered.' },
      { s: 'Supabase can add sign-ups and a user database to your site.', a: true, why: 'That is exactly what a backend-as-a-service does.' },
      { s: 'Claude Code can only autocomplete code, not run commands.', a: false, why: 'It reads your project, runs commands and fixes its own errors.' }
    ]
  }
};

/* Registry of sessions. Only session1 is unlocked today; the timeline
   and session tabs render three extra "coming soon" slots regardless
   of how many real sessions exist, matching the four-chapter semester. */
const SESSIONS = [session1];
const TOTAL_CHAPTERS = 4;

/* =====================================================================
   ================  SMOOTH SCROLL (Lenis + GSAP ScrollTrigger)  =======
   ===================================================================== */

let lenis = null;

function initSmoothScroll() {
  if (reduceMotion || typeof Lenis === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  lenis = new Lenis({ smoothWheel: true, duration: 1.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* =====================================================================
   ================  HERO: THREE.JS ROTATING OBJECT  ===================
   ===================================================================== */

function initHeroOrb() {
  const canvas = document.getElementById('heroCanvas');
  const stage = canvas ? canvas.closest('.hero-orb-stage') : null;
  const fallback = document.getElementById('heroFallback');
  if (!canvas || !stage || typeof THREE === 'undefined') return;

  let renderer, scene, camera, group, raf;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    group = new THREE.Group();
    scene.add(group);

    // gradient "planet" sphere via vertex colours: cream -> pink -> green -> navy
    const geo = new THREE.SphereGeometry(1.5, 64, 64);
    const stops = [
      { t: -1, c: new THREE.Color('#fbe6e1') },
      { t: -0.3, c: new THREE.Color('#f3d3cf') },
      { t: 0.35, c: new THREE.Color('#c9d8b6') },
      { t: 1, c: new THREE.Color('#14213d') }
    ];
    const colors = [];
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / 1.5;
      let c0 = stops[0], c1 = stops[stops.length - 1];
      for (let s = 0; s < stops.length - 1; s++) {
        if (y >= stops[s].t && y <= stops[s + 1].t) { c0 = stops[s]; c1 = stops[s + 1]; break; }
      }
      const span = (c1.t - c0.t) || 1;
      const f = Math.min(1, Math.max(0, (y - c0.t) / span));
      const col = c0.c.clone().lerp(c1.c, f);
      colors.push(col.r, col.g, col.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.05 });
    const sphere = new THREE.Mesh(geo, mat);
    group.add(sphere);

    // thin accent ring, tilted like the CSS spin3d ring
    const ringGeo = new THREE.TorusGeometry(2.05, 0.02, 8, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x14213d, transparent: true, opacity: 0.35 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.6;
    group.add(ring);

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const dir = new THREE.DirectionalLight(0xffffff, 1.1);
    dir.position.set(2, 3, 4);
    scene.add(dir);
    const rim = new THREE.PointLight(0xd4ff3a, 0.6, 10);
    rim.position.set(-2, -1, 2);
    scene.add(rim);

    fallback.style.display = 'none';

    function resize() {
      const w = stage.clientWidth, h = stage.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    let mx = 0, my = 0;
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    });

    const clock = new THREE.Clock();
    function tick() {
      raf = requestAnimationFrame(tick);
      const dt = clock.getDelta();
      if (!reduceMotion) {
        sphere.rotation.y += dt * 0.25;
        ring.rotation.z += dt * 0.15;
      }
      group.rotation.y += (mx * 0.6 - group.rotation.y) * 0.06;
      group.rotation.x += (-my * 0.4 - group.rotation.x) * 0.06;
      renderer.render(scene, camera);
    }
    tick();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else tick();
    });
  } catch (err) {
    if (fallback) fallback.style.display = 'block';
    if (canvas) canvas.style.display = 'none';
  }
}

/* =====================================================================
   ================  WORD-BY-WORD TEXT REVEAL  =========================
   ===================================================================== */

function renderStoryWords() {
  const el = document.getElementById('storyText');
  if (!el) return;
  el.setAttribute('aria-label', session1.story);
  const words = session1.story.split(' ');
  el.innerHTML = words.map((w) => '<span aria-hidden="true" class="word">' + w + '&nbsp;</span>').join('');
}

function initWordReveal() {
  const el = document.getElementById('storyText');
  if (!el) return;
  const spans = el.querySelectorAll('.word');
  if (!spans.length) return;
  if (reduceMotion || typeof gsap === 'undefined') {
    spans.forEach((s) => { s.style.opacity = 1; s.style.transform = 'none'; });
    return;
  }
  gsap.set(spans, { opacity: 0, y: 14 });
  ScrollTrigger.create({
    trigger: el,
    start: 'top 80%',
    once: true,
    onEnter: () => gsap.to(spans, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.035 })
  });
}

/* =====================================================================
   ================  HORIZONTAL TIMELINE (pinned)  ======================
   ===================================================================== */

function initHorizontalTimeline() {
  const section = document.getElementById('journey');
  const viewport = document.getElementById('journeyViewport');
  const track = document.getElementById('journeyTrack');
  if (!section || !viewport || !track) return;

  if (reduceMotion || typeof gsap === 'undefined') return;

  function build() {
    ScrollTrigger.getById('journeyPin') && ScrollTrigger.getById('journeyPin').kill();
    const distance = track.scrollWidth - viewport.clientWidth;
    if (distance <= 0) return;
    gsap.to(track, {
      x: -distance,
      ease: 'none',
      scrollTrigger: {
        id: 'journeyPin',
        trigger: section,
        start: 'top top',
        end: () => '+=' + distance,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true
      }
    });
  }
  build();
  window.addEventListener('resize', () => ScrollTrigger.refresh());
}

/* =====================================================================
   ================  SPEAKERS  ==========================================
   ===================================================================== */

function renderSpeakers() {
  const grid = document.getElementById('speakersGrid');
  if (!grid) return;
  grid.innerHTML = session1.speakers.map((s) => (
    '<div class="tiltwrap">' +
      '<article class="speaker-card tilt">' +
        '<div class="speaker-photo-wrap" style="background:' + s.bg + '">' +
          '<div aria-hidden="true" class="glow"></div>' +
          '<img class="speaker-photo" src="' + s.photo + '" alt="' + s.name + '">' +
          '<span class="serif speaker-ini" aria-hidden="true">' + s.ini + '</span>' +
        '</div>' +
        '<div class="speaker-body">' +
          '<h4 class="serif">' + s.name + '</h4>' +
          '<p>' + s.role + '</p>' +
        '</div>' +
        '<div class="speaker-chips">' + s.chips.map((c) => '<div>' + c + '</div>').join('') + '</div>' +
        (s.line ? '<p class="serif speaker-line">' + s.line + '</p>' : '') +
        '<a href="' + s.li + '" target="_blank" rel="noopener" class="speaker-li btn">View LinkedIn' +
          '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg>' +
        '</a>' +
      '</article>' +
    '</div>'
  )).join('');
}

/* =====================================================================
   ================  INTERACTIVE SUMMARY (pinned stage stepper)  =======
   ===================================================================== */

const summaryState = { stage: 0, flips: {} };

function partBg(part) {
  if (part === 'Design & Build') return '#F3D3CF';
  if (part === 'Store & Ship') return '#C9D8B6';
  return ACCENT;
}

function renderStageList() {
  const list = document.getElementById('stageList');
  if (!list) return;
  const stages = session1.stages;
  let html = '';
  for (let i = 0; i < stages.length; i++) {
    const st = stages[i];
    if (i === 0 || stages[i - 1].part !== st.part) {
      html = '<li><div class="stage-part-label">' + st.part + '</div></li>' + html;
    }
    const cls = i === summaryState.stage ? 'on' : (i < summaryState.stage ? 'done' : '');
    html = '<li><button type="button" class="stage ' + cls + ' stage-btn" data-stage="' + i + '">' +
      '<span class="n">' + st.n + '</span><span class="t">' + st.t + '</span><span class="tool">' + st.tool + '</span>' +
      '</button></li>' + html;
  }
  list.innerHTML = html;
  list.querySelectorAll('[data-stage]').forEach((btn) => {
    btn.addEventListener('click', () => setStage(parseInt(btn.dataset.stage, 10)));
  });
}

function stageBodyHtml(i) {
  const D = session1.game;
  if (i === 0) {
    return (
      '<p>Build the visual shell of your site by describing it. No code.</p>' +
      '<div class="prompt-card">' +
        '<div class="prompt-card-top">' +
          '<div class="serif" style="font-size:24px">The art of prompting</div>' +
          '<div class="prompt-tabs" role="group" aria-label="Prompt quality">' +
            '<button type="button" id="showBadBtn" aria-pressed="true">Bad prompt</button>' +
            '<button type="button" id="showGoodBtn" aria-pressed="false">Good prompt</button>' +
          '</div>' +
        '</div>' +
        '<div id="promptBody"></div>' +
      '</div>'
    );
  }
  if (i === 1) {
    return (
      '<p>When the design is done, open the Share menu and click <strong>Handoff to Claude Code</strong>.</p>' +
      '<div class="handoff-card">' +
        '<div class="hd">Share</div>' +
        '<div class="row">Copy link</div>' +
        '<div class="row">Export</div>' +
        '<div class="row hl">Handoff to Claude Code <span>→</span></div>' +
      '</div>' +
      '<div class="handoff-tip">Tip: find this button before you start. It’s easy to miss.</div>'
    );
  }
  if (i === 2) {
    return (
      '<p>An agentic coding tool that reads your whole project, runs commands and fixes its own errors. Tap a card to flip it.</p>' +
      '<div class="flip-grid" id="flipGrid"></div>' +
      '<div class="tool-grid">' +
        '<div class="tool-card"><div class="t">Snapiq</div><div class="d">Screenshot Chrome extension for students · snapiq.tools</div></div>' +
        '<div class="tool-card"><div class="t">Doq</div><div class="d">Competition finder for high schoolers · doq.world</div></div>' +
        '<div class="tool-card dash"><div class="t">Quick deploy</div><div class="d">localhost, or tiiny.host: zip files with index.html at the top level, then upload</div></div>' +
      '</div>'
    );
  }
  if (i === 3) {
    return (
      '<p>Your project’s online home is a <strong>repository</strong>. Store files and their history, share them publicly, collaborate without overwriting each other.</p>' +
      '<div class="store-diagram col-m">' +
        '<div class="store-box local"><div class="t">Your computer</div><div class="commit">↻ Commit (local loop)</div></div>' +
        '<div class="store-mid">' +
          '<div><div class="lbl">Push →</div><div class="store-track"><span class="store-dot dotflow"></span></div></div>' +
          '<div><div class="lbl right">← Clone</div><div class="store-track"><span class="store-dot back dotback"></span></div></div>' +
        '</div>' +
        '<div class="store-box github"><div class="t">GitHub</div><div class="mini">Fork: copy a repo</div><div class="mini">Pull request → Merge</div></div>' +
      '</div>' +
      '<p class="serif store-quote">“Most Git actions just move your work between these two copies.”</p>' +
      '<div class="store-cards">' +
        '<div class="store-card push"><div class="t">Push</div><div class="d">Uploads straight away, no review. Use it solo or on your own branch.</div></div>' +
        '<div class="store-card pr"><div class="t">Pull request</div><div class="d">Teammates review, comment and approve first. Use it in a team.</div></div>' +
      '</div>'
    );
  }
  if (i === 4) {
    return (
      '<p>GitHub stores your code, but nothing there is a website yet. Vercel reads the repo, builds the site and hosts it at a public link.</p>' +
      '<div class="ship-steps">' +
        '<div class="ship-step"><div class="serif num">1</div><div class="t">Sign in with GitHub</div></div>' +
        '<div class="ship-step"><div class="serif num">2</div><div class="t">Import your repo</div></div>' +
        '<div class="ship-step on"><div class="serif num">3</div><div class="t">Click Deploy</div></div>' +
      '</div>' +
      '<div class="ship-notes">' +
        '<div class="ship-note">Every push updates the live site automatically.</div>' +
        '<div class="ship-note">Every pull request gets its own preview link.</div>' +
        '<div class="ship-note warn">Claude can connect to GitHub through the GitHub connector and work inside your repositories.</div>' +
      '</div>'
    );
  }
  if (i === 5) {
    return (
      '<div class="limits-grid">' +
        '<div class="limits-card"><div class="t serif">It forgets everyone</div><p class="d">A Wordle clone has no idea who you were once you close the tab.</p></div>' +
        '<div class="limits-card"><div class="t serif">It only knows its own files</div><p class="d">No live data, like today’s weather, unless something feeds it in.</p></div>' +
      '</div>'
    );
  }
  if (i === 6) {
    return (
      '<div class="token-grid">' +
        '<div class="token-card"><div class="t">Sign up</div><div class="d">Creates a row in a user table: email + scrambled password.</div></div>' +
        '<div class="token-card hl"><div class="t">Log in</div><div class="d">Checks that table and hands your browser a token, a temporary sticker that says who you are.</div></div>' +
        '<div class="token-card"><div class="t">Log out</div><div class="d">Throws the token away.</div></div>' +
      '</div>' +
      '<p class="serif token-quote">No retyping your password on every click. All three are just API calls.</p>'
    );
  }
  return (
    '<p>A backend-as-a-service that adds sign-up, log-in and a database to your site, connects with GitHub and Vercel, and shows usage stats.</p>' +
    '<div class="pill-row">' +
      '<span class="a">Auth</span><span class="a">Database</span><span class="b">GitHub + Vercel</span><span class="b">Usage stats</span>' +
    '</div>'
  );
}

function renderStagePanel() {
  const stages = session1.stages;
  const cur = stages[summaryState.stage];
  document.getElementById('stagePartChip').textContent = cur.part;
  document.getElementById('stagePartChip').style.background = partBg(cur.part);
  document.getElementById('stageCount').textContent = 'Stage ' + cur.n + ' / 08';
  document.getElementById('stageTitle').innerHTML = cur.t + ' <em>· ' + cur.tool + '</em>';
  document.getElementById('stageContent').innerHTML = stageBodyHtml(summaryState.stage);
  document.getElementById('stageNext').textContent = summaryState.stage < 7 ? 'Next stage →' : 'Play the game →';

  if (summaryState.stage === 0) wirePromptTabs();
  if (summaryState.stage === 2) wireFlipCards();

  const pct = summaryState.stage / 7;
  const fill = document.getElementById('stageTrackFill');
  const rocket = document.getElementById('stageRocket');
  if (fill) fill.style.height = (pct * 100) + '%';
  if (rocket) rocket.style.bottom = 'calc(24px + (100% - 48px) * ' + pct.toFixed(3) + ')';
}

function wirePromptTabs() {
  const badBtn = document.getElementById('showBadBtn');
  const goodBtn = document.getElementById('showGoodBtn');
  const body = document.getElementById('promptBody');
  function render(showGood) {
    badBtn.style.background = showGood ? 'transparent' : '#14213D';
    badBtn.style.color = showGood ? '#14213D' : '#F6F1E7';
    goodBtn.style.background = showGood ? '#14213D' : 'transparent';
    goodBtn.style.color = showGood ? '#F6F1E7' : '#14213D';
    badBtn.setAttribute('aria-pressed', String(!showGood));
    goodBtn.setAttribute('aria-pressed', String(showGood));
    if (!showGood) {
      body.innerHTML = '<div class="bad-prompt-box">Create a website for my course</div>' +
        '<p class="serif bad-prompt-quote">“Not sure if bad model… or bad prompt.”</p>';
    } else {
      body.innerHTML = '<div class="good-parts">' + session1.goodParts.map((g) =>
        '<div class="good-part"><div class="k">' + g.k + '</div><div class="v">' + g.v + '</div></div>'
      ).join('') + '</div>';
    }
  }
  badBtn.addEventListener('click', () => render(false));
  goodBtn.addEventListener('click', () => render(true));
  render(false);
}

function wireFlipCards() {
  const grid = document.getElementById('flipGrid');
  grid.innerHTML = session1.flips.map((f) =>
    '<button type="button" class="flip flip-card" data-flip="' + f.k + '">' +
      '<div class="in">' +
        '<div class="face front"><span class="tag">TAP TO FLIP</span><span class="big">' + f.t + '</span></div>' +
        '<div class="face back"><span class="tag">' + f.t + '</span><span class="desc">' + f.d + '</span></div>' +
      '</div>' +
    '</button>'
  ).join('');
  grid.querySelectorAll('[data-flip]').forEach((btn) => {
    const k = btn.dataset.flip;
    if (summaryState.flips[k]) btn.classList.add('on');
    btn.addEventListener('click', () => {
      summaryState.flips[k] = !summaryState.flips[k];
      btn.classList.toggle('on', !!summaryState.flips[k]);
      btn.setAttribute('aria-pressed', String(!!summaryState.flips[k]));
    });
  });
}

function setStage(i) {
  summaryState.stage = Math.max(0, Math.min(7, i));
  renderStageList();
  renderStagePanel();
}

function initStageStepper() {
  renderStageList();
  renderStagePanel();
  document.getElementById('stagePrev').addEventListener('click', () => setStage(summaryState.stage - 1));
  document.getElementById('stageNext').addEventListener('click', () => {
    if (summaryState.stage < 7) setStage(summaryState.stage + 1);
    else document.getElementById('game').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  if (reduceMotion || typeof gsap === 'undefined') return;

  // Scroll-driven rocket: pin the summary block and scrub through the 8 stages.
  const summary = document.getElementById('summary');
  let lastScrubbed = -1;
  ScrollTrigger.create({
    id: 'summaryPin',
    trigger: summary,
    start: 'top top',
    end: '+=200%',
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      const idx = Math.min(7, Math.round(self.progress * 7));
      if (idx !== lastScrubbed) { lastScrubbed = idx; setStage(idx); }
    }
  });
}

/* =====================================================================
   ================  TAKEAWAYS  =========================================
   ===================================================================== */

const takeawayState = { n: 0 };

function renderTakeaways() {
  const list = document.getElementById('takeawaysList');
  const bgs = ['#fff', '#C9D8B6', '#F3D3CF'];
  list.innerHTML = session1.takeaways.map((t, i) =>
    '<li class="takeaway-item tk ' + (i < takeawayState.n ? '' : 'hid') + '" style="background:' + bgs[i % 3] + '">' +
      '<span class="serif n">0' + (i + 1) + '</span><span class="t">' + t + '</span>' +
    '</li>'
  ).join('');
  document.getElementById('revealNextBtn').textContent = 'Reveal next (' + takeawayState.n + '/6)';
}

function initTakeaways() {
  renderTakeaways();
  document.getElementById('revealNextBtn').addEventListener('click', () => {
    takeawayState.n = Math.min(6, takeawayState.n + 1);
    renderTakeaways();
  });
  document.getElementById('revealAllBtn').addEventListener('click', () => {
    takeawayState.n = 6;
    renderTakeaways();
  });
}

/* =====================================================================
   ================  LEADERBOARD (localStorage — Supabase later)  ======
   ===================================================================== */

const LB_KEY = 'essec_launchlab_leaderboard';

function loadBoard() {
  try { return JSON.parse(localStorage.getItem(LB_KEY)) || []; } catch (e) { return []; }
}
function saveBoard(board) {
  try { localStorage.setItem(LB_KEY, JSON.stringify(board)); } catch (e) {}
}
function addToBoard(name, score) {
  const board = loadBoard().concat([{ name, score }]).sort((a, b) => b.score - a.score).slice(0, 10);
  saveBoard(board);
  return board;
}
function renderBoard() {
  const board = loadBoard();
  const list = document.getElementById('boardList');
  const empty = document.getElementById('boardEmpty');
  empty.style.display = board.length ? 'none' : 'block';
  list.innerHTML = board.map((r, i) =>
    '<li class="board-row"><span class="serif rank">' + (i + 1) + '</span><span class="name">' + escapeHtml(r.name) + '</span><span class="score">' + r.score + '</span></li>'
  ).join('');
}
function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

/* =====================================================================
   ================  DRAG & DROP (pointer events, mouse + touch)  ======
   A chip can be tapped/clicked for an immediate action (keeps every
   level fully playable on any device), AND dragged with a floating
   ghost that works identically for mouse and touch pointers.
   ===================================================================== */

function makeDraggable(el, { onDrop, onTap }) {
  let ghost = null, startX = 0, startY = 0, dragging = false, moved = false;

  el.addEventListener('pointerdown', (e) => {
    if (el.disabled) return;
    startX = e.clientX; startY = e.clientY; moved = false; dragging = true;
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  });

  el.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (!moved && Math.hypot(dx, dy) > 8) {
      moved = true;
      ghost = el.cloneNode(true);
      ghost.style.position = 'fixed';
      ghost.style.pointerEvents = 'none';
      ghost.style.zIndex = '999';
      ghost.style.opacity = '.9';
      ghost.style.width = el.offsetWidth + 'px';
      document.body.appendChild(ghost);
      el.classList.add('dragging');
    }
    if (ghost) {
      ghost.style.left = (e.clientX - el.offsetWidth / 2) + 'px';
      ghost.style.top = (e.clientY - el.offsetHeight / 2) + 'px';
      document.querySelectorAll('.dropzone, .pipeline-slots, .meaning-btn').forEach((z) => z.classList.remove('dragover'));
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const zone = target && target.closest('.dropzone, .pipeline-slots, .meaning-btn');
      if (zone) zone.classList.add('dragover');
    }
  });

  function finish(e) {
    if (!dragging) return;
    dragging = false;
    if (ghost) {
      document.querySelectorAll('.dropzone, .pipeline-slots, .meaning-btn').forEach((z) => z.classList.remove('dragover'));
      const target = document.elementFromPoint(e.clientX, e.clientY);
      ghost.remove(); ghost = null;
      el.classList.remove('dragging');
      if (target) onDrop(target);
      else onTap();
    } else {
      onTap();
    }
  }
  el.addEventListener('pointerup', finish);
  el.addEventListener('pointercancel', () => {
    dragging = false;
    if (ghost) { ghost.remove(); ghost = null; el.classList.remove('dragging'); }
  });
}

/* =====================================================================
   ================  GAME ENGINE — Session 1 "Launch Your Site"  =======
   ===================================================================== */

function freshGameState() {
  return {
    level: 0, score: 0, fuel: 0,
    l1: [], l1bad: [],
    l2: [],
    l3: [], l3sel: '',
    l4i: 0, l4t: 10,
    bi: 0,
    lock: false, clear: false,
    phase: 'play', count: 3, typed: '', saved: false, name: ''
  };
}

const G = freshGameState();
const T = {}; // timers
let played = 0;
const badges = {};

function fire(ok, msg) {
  const panel = document.getElementById('gamePanel');
  panel.classList.toggle('shake', !ok);
  const burst = document.getElementById('gameBurst');
  burst.innerHTML = ok ? Array.from({ length: 10 }).map(() => '<span></span>').join('') : '';
  const msgEl = document.getElementById('gameMsg');
  msgEl.textContent = msg || '';
  msgEl.classList.toggle('bad', !ok);
  clearTimeout(T.fb);
  T.fb = setTimeout(() => { panel.classList.remove('shake'); burst.innerHTML = ''; }, 750);
}

function updateHud() {
  document.getElementById('scoreVal').textContent = G.score;
  const lv = G.level;
  document.getElementById('levelVal').textContent = lv === 0 ? '–' : (lv === 5 ? 'Bonus' : (lv === 6 ? 'Live' : lv + '/4'));
  const fuelPct = G.fuel * 25;
  document.getElementById('fuelFill').style.height = fuelPct + '%';
  document.getElementById('fuelPct').textContent = fuelPct + '%';
  document.getElementById('fuelRocketWrap').className = (G.phase === 'live' ? 'launch-anim' : 'float') + ' fuel-rocket-wrap';

  const resultLine = lv === 6 ? ('Launched with ' + G.score + ' points. Fuel 100%.') :
    (lv === 0 ? 'Not played yet. Fuel 0%.' : ('In progress: ' + G.score + ' points, fuel ' + fuelPct + '%.'));
  document.getElementById('resultLine').textContent = resultLine;

  const semPct = Math.round((G.fuel / 4) * 25);
  document.getElementById('semPctLabel').textContent = semPct + '%';
  document.getElementById('semFill').style.width = semPct + '%';

  renderBadges();
}

function renderBadges() {
  const defs = [
    { k: 'b1', t: 'Prompt pro', d: 'Level 1' },
    { k: 'b2', t: 'Pipeline builder', d: 'Level 2' },
    { k: 'b3', t: 'Git fluent', d: 'Level 3' },
    { k: 'b4', t: 'File whisperer', d: 'Level 4' },
    { k: 'b5', t: 'Liftoff', d: 'Session 1 done' }
  ];
  document.getElementById('badgesGrid').innerHTML = defs.map((b) => {
    const on = !!badges[b.k];
    return '<div class="badge-item' + (on ? ' on' : '') + '">' +
      '<div class="badge-disc"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.4 1 6.2L12 16.6 6.5 19.5l1-6.2L3 8.9 9 8z"></path></svg></div>' +
      '<div class="t">' + b.t + '</div><div class="d">' + (on ? b.d : 'Locked · ' + b.d) + '</div>' +
    '</div>';
  }).join('');
}

function showLevel(n) {
  document.querySelectorAll('.game-level').forEach((el) => el.classList.toggle('active', parseInt(el.dataset.level, 10) === n));
  document.getElementById('levelClear').style.display = 'none';
}

function clearLevel() {
  badges['b' + G.level] = true;
  G.fuel = Math.max(G.fuel, G.level);
  G.clear = true;
  updateHud();
  const notes = { 1: 'Your prompt now has a role, a goal and a real brief.', 2: 'Idea to live link, in the right order.', 3: 'Six Git words, all yours.', 4: 'You know which file to open.' };
  document.getElementById('levelClearNote').textContent = notes[G.level] || '';
  document.getElementById('nextLevelBtn').textContent = G.level < 4 ? 'Level ' + (G.level + 1) + ' →' : 'Bonus round →';
  document.getElementById('levelClear').style.display = 'flex';
}

function nextLevel() {
  G.level += 1; G.clear = false; G.l4i = 0; G.l4t = 10; G.lock = false; G.bi = 0;
  document.getElementById('gameMsg').textContent = '';
  showLevel(G.level);
  renderCurrentLevel();
  if (G.level === 4) startL4Timer();
}

/* ---- Level 1: fix the prompt ---- */

function renderL1() {
  const D = session1.game;
  const placed = document.getElementById('l1Placed');
  placed.innerHTML = G.l1.map((c) => '<span class="placed-chip">+ ' + c + '</span>').join('') +
    (G.l1.length === 0 ? '<span class="dropzone-empty">Drop ingredients here…</span>' : '');

  const chipsEl = document.getElementById('l1Chips');
  chipsEl.innerHTML = D.chips.map((c, i) => {
    const used = G.l1.includes(c) || G.l1bad.includes(c);
    return '<button type="button" class="chip" data-chip="' + i + '" ' + (used ? 'disabled' : '') + '>' + c + '</button>';
  }).join('');
  chipsEl.querySelectorAll('[data-chip]').forEach((btn) => {
    const chip = D.chips[parseInt(btn.dataset.chip, 10)];
    if (G.l1.includes(chip) || G.l1bad.includes(chip)) btn.classList.add('used');
    const act = () => pickChip(chip);
    makeDraggable(btn, { onDrop: act, onTap: act });
  });
}

function pickChip(c) {
  const D = session1.game;
  if (G.level !== 1 || G.clear || G.l1.includes(c) || G.l1bad.includes(c)) return;
  if (D.good.includes(c)) {
    G.l1.push(c); G.score += 10;
    fire(true, c + ' added to the prompt.');
    renderL1(); updateHud();
    if (G.l1.length === 6) clearLevel();
  } else {
    G.l1bad.push(c);
    const remaining = D.good.filter((g) => !G.l1.includes(g)).join(', ');
    fire(false, '"' + c + '" is too vague to help the model. The good ones are: ' + remaining + '.');
    renderL1();
  }
}

/* ---- Level 2: build the pipeline ---- */

function renderL2() {
  const D = session1.game;
  const slots = document.getElementById('l2Slots');
  slots.innerHTML = D.pipeline.map((p, i) => {
    const filled = G.l2[i];
    const cls = filled ? 'filled' : (i === G.l2.length ? 'next' : '');
    return '<div class="pipeline-slot ' + cls + '"><span class="n">STEP ' + (i + 1) + '</span><span class="t">' + (filled || '…') + '</span></div>';
  }).join('');

  const itemsEl = document.getElementById('l2Items');
  itemsEl.innerHTML = D.pipelineShuffled.map((c, i) => {
    const used = G.l2.includes(c);
    return '<button type="button" class="chip pipe-chip" data-pipe="' + i + '" ' + (used ? 'disabled' : '') + '>' + c + '</button>';
  }).join('');
  itemsEl.querySelectorAll('[data-pipe]').forEach((btn) => {
    const item = D.pipelineShuffled[parseInt(btn.dataset.pipe, 10)];
    if (G.l2.includes(item)) btn.classList.add('used');
    const act = () => pickPipe(item);
    makeDraggable(btn, { onDrop: act, onTap: act });
  });
}

function pickPipe(it) {
  const D = session1.game;
  if (G.level !== 2 || G.clear || G.l2.includes(it)) return;
  const i = G.l2.length;
  if (it === D.pipeline[i]) {
    G.l2.push(it); G.score += 10;
    fire(true, 'Step ' + (i + 1) + ': ' + it + '.');
    renderL2(); updateHud();
    if (G.l2.length === 5) clearLevel();
  } else {
    fire(false, 'Not yet. Step ' + (i + 1) + ' is "' + D.pipeline[i] + '".');
    renderL2();
  }
}

/* ---- Level 3: git vocab match ---- */

function renderL3() {
  const D = session1.game;
  const termsEl = document.getElementById('l3Terms');
  termsEl.innerHTML = D.terms.map((x, i) => {
    const used = G.l3.includes(x.term);
    const sel = G.l3sel === x.term;
    return '<button type="button" class="chip term-chip ' + (sel ? 'sel' : '') + '" data-term="' + i + '" ' + (used ? 'disabled' : '') + '>' + x.term + '</button>';
  }).join('');
  termsEl.querySelectorAll('[data-term]').forEach((btn) => {
    const term = D.terms[parseInt(btn.dataset.term, 10)].term;
    if (G.l3.includes(term)) btn.classList.add('used');
    makeDraggable(btn, {
      onDrop: (target) => {
        const meaningBtn = target.closest('.meaning-btn');
        if (meaningBtn) matchMeaning(term, parseInt(meaningBtn.dataset.meaning, 10));
        else selectTerm(term);
      },
      onTap: () => selectTerm(term)
    });
  });

  const meansEl = document.getElementById('l3Means');
  meansEl.innerHTML = D.meaningOrder.map((idx) => {
    const x = D.terms[idx];
    const used = G.l3.includes(x.term);
    return '<button type="button" class="meaning-btn" data-meaning="' + idx + '" ' + (used ? 'disabled' : '') + '>' +
      (used ? (x.term + ' · ' + x.m) : x.m) + '</button>';
  }).join('');
  meansEl.querySelectorAll('[data-meaning]').forEach((btn) => {
    const idx = parseInt(btn.dataset.meaning, 10);
    const x = D.terms[idx];
    if (G.l3.includes(x.term)) btn.classList.add('matched');
    btn.addEventListener('click', () => matchMeaning(G.l3sel, idx));
  });
}

function selectTerm(term) {
  if (G.level !== 3 || G.clear) return;
  G.l3sel = G.l3sel === term ? '' : term;
  renderL3();
}

function matchMeaning(term, idx) {
  const D = session1.game;
  if (G.level !== 3 || G.clear) return;
  const target = D.terms[idx];
  if (G.l3.includes(target.term)) return;
  if (!term) { fire(false, 'Pick a term first, then its meaning.'); return; }
  if (term === target.term) {
    G.l3.push(term); G.l3sel = ''; G.score += 10;
    fire(true, term + ': matched.');
    renderL3(); updateHud();
    if (G.l3.length === 6) clearLevel();
  } else {
    const right = D.terms.find((t) => t.term === term);
    G.l3sel = '';
    fire(false, 'Not quite. ' + term + ' means: ' + right.m.toLowerCase() + '.');
    renderL3();
  }
}

/* ---- Level 4: which file? (timed) ---- */

function renderL4() {
  const D = session1.game;
  const q = D.fileQuestions[Math.min(G.l4i, D.fileQuestions.length - 1)];
  document.getElementById('l4Eyebrow').textContent = 'Level 4 · Which file? · ' + (G.l4i + 1) + '/6';
  document.getElementById('l4Timer').textContent = G.l4t + 's';
  document.getElementById('l4TimerFill').style.width = (G.l4t * 10) + '%';
  document.getElementById('q4Text').textContent = q.q;
}

function startL4Timer() {
  clearInterval(T.l4);
  T.l4 = setInterval(() => {
    if (G.lock || G.level !== 4) return;
    G.l4t -= 1;
    if (G.l4t <= 0) { G.l4t = 0; renderL4(); answer4(null); }
    else renderL4();
  }, 1000);
}

function answer4(f) {
  const D = session1.game;
  if (G.lock || G.level !== 4 || G.clear) return;
  const q = D.fileQuestions[G.l4i];
  const ok = f === q.a;
  G.lock = true;
  G.score += ok ? 5 + G.l4t : 0;
  fire(ok, ok ? ('Right: ' + q.a + '.') : (f ? ('It’s ' + q.a + '.') : ('Time’s up. It’s ' + q.a + '.')));
  updateHud();
  clearTimeout(T.n4);
  T.n4 = setTimeout(() => {
    const n = G.l4i + 1;
    if (n >= D.fileQuestions.length) { clearInterval(T.l4); G.lock = false; clearLevel(); }
    else { G.l4i = n; G.l4t = 10; G.lock = false; renderL4(); }
  }, 1100);
}

/* ---- Level 5: bonus true/false ---- */

function renderL5() {
  const D = session1.game;
  const q = D.trueFalse[Math.min(G.bi, D.trueFalse.length - 1)];
  document.getElementById('tfEyebrow').textContent = 'Bonus round · True or false · ' + (G.bi + 1) + '/7';
  document.getElementById('tfText').textContent = q.s;
}

function answerTF(v) {
  const D = session1.game;
  if (G.lock || G.level !== 5) return;
  const q = D.trueFalse[G.bi];
  const ok = v === q.a;
  G.lock = true;
  G.score += ok ? 10 : 0;
  fire(ok, (ok ? 'Correct. ' : (q.a ? 'Actually true. ' : 'False. ')) + q.why);
  updateHud();
  clearTimeout(T.nb);
  T.nb = setTimeout(() => {
    const n = G.bi + 1;
    if (n >= D.trueFalse.length) { G.lock = false; launch(); }
    else { G.bi = n; G.lock = false; renderL5(); }
  }, 1500);
}

/* ---- Level 6: launch ---- */

function launch() {
  clearTimeout(T.nb);
  badges.b5 = true;
  played += 1;
  G.level = 6; G.clear = false; G.phase = 'count'; G.count = 3; G.typed = ''; G.fuel = 4; G.saved = false; G.name = '';
  document.getElementById('gameMsg').textContent = '';
  showLevel(6);
  document.getElementById('countingBlock').style.display = 'block';
  document.getElementById('launchedBlock').style.display = 'none';
  document.getElementById('countDisplay').textContent = G.count;
  updateHud();
  document.getElementById('statPlayed').textContent = played;

  clearInterval(T.cd);
  T.cd = setInterval(() => {
    G.count -= 1;
    if (G.count <= 0) {
      clearInterval(T.cd);
      G.phase = 'live';
      document.getElementById('countingBlock').style.display = 'none';
      document.getElementById('launchedBlock').style.display = 'block';
      document.getElementById('finalScore').textContent = G.score;
      const burst = document.getElementById('launchBurst');
      burst.innerHTML = Array.from({ length: 10 }).map(() => '<span></span>').join('');
      updateHud();
      const url = 'your-site.vercel.app';
      clearInterval(T.ty);
      T.ty = setInterval(() => {
        if (G.typed.length >= url.length) { clearInterval(T.ty); return; }
        G.typed = url.slice(0, G.typed.length + 1);
        document.getElementById('typedUrl').textContent = G.typed;
      }, 70);
    } else {
      document.getElementById('countDisplay').textContent = G.count;
    }
  }, 850);
}

function wireLevel6() {
  document.getElementById('skipLaunchBtn').addEventListener('click', launch);
  document.getElementById('saveScoreBtn').addEventListener('click', () => {
    const name = (document.getElementById('lbname').value || '').trim();
    if (!name) { fire(false, 'Add a name first.'); return; }
    addToBoard(name, G.score);
    G.saved = true;
    document.getElementById('saveRow').style.display = 'none';
    document.getElementById('savedMsg').style.display = 'block';
    renderBoard();
  });
  document.getElementById('replayBtn').addEventListener('click', () => {
    Object.keys(T).forEach((k) => { clearInterval(T[k]); clearTimeout(T[k]); });
    Object.assign(G, freshGameState());
    G.level = 1;
    showLevel(1);
    renderCurrentLevel();
    updateHud();
  });
}

/* ---- level dispatch ---- */

function renderCurrentLevel() {
  if (G.level === 1) renderL1();
  else if (G.level === 2) renderL2();
  else if (G.level === 3) renderL3();
  else if (G.level === 4) renderL4();
  else if (G.level === 5) renderL5();
}

function initGame() {
  renderBoard();
  updateHud();
  showLevel(0);
  document.getElementById('startGameBtn').addEventListener('click', () => {
    G.level = 1;
    document.getElementById('gameMsg').textContent = '';
    showLevel(1);
    renderCurrentLevel();
    updateHud();
  });
  document.getElementById('nextLevelBtn').addEventListener('click', nextLevel);

  document.querySelectorAll('.q4-opt').forEach((btn) => {
    btn.addEventListener('click', () => answer4(btn.dataset.answer));
  });
  document.querySelectorAll('.tf-opt').forEach((btn) => {
    btn.addEventListener('click', () => answerTF(btn.dataset.answer === 'true'));
  });
  wireLevel6();
}

/* =====================================================================
   ================  BOOT  ==============================================
   ===================================================================== */

function animateStat(id, target, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  if (reduceMotion || typeof gsap === 'undefined') { el.textContent = target; return; }
  gsap.to({ v: 0 }, {
    v: target, duration: duration || 1.2, ease: 'power1.out',
    onUpdate() { el.textContent = Math.round(this.targets()[0].v); }
  });
}

function boot() {
  const steps = [initSmoothScroll, initHeroOrb, renderStoryWords, initWordReveal, initHorizontalTimeline, renderSpeakers, initStageStepper, initTakeaways, initGame];
  steps.forEach((fn) => {
    try { fn(); } catch (err) { console.error('Failed:', fn.name, err); }
  });
  try { animateStat('statSessions', 1); animateStat('statTakeaways', 6); } catch (e) {}
  if (typeof ScrollTrigger !== 'undefined') {
    window.addEventListener('load', () => ScrollTrigger.refresh());
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
