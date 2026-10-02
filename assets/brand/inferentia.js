(function () {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  // header state + back-to-top
  const header = $('.site-header');
  const toTop = $('.to-top');
  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle('scrolled', y > 20);
    toTop && toTop.classList.toggle('show', y > 900);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  const toggle = $('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open);
    });
    $$('.nav a').forEach(a => a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // marquees: duplicate the track so the loop is seamless
  $$('.marquee').forEach(m => {
    const track = m.querySelector('.marquee-track');
    if (!track) return;
    const clone = track.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', '-1'));
    m.appendChild(clone);
  });

  // reveal on scroll
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }) : null;
  $$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  // count-up stats
  const counters = $$('[data-count]');
  const countIo = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, suffix = el.dataset.suffix || '';
      const t0 = performance.now(), dur = 1400;
      const step = t => {
        const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countIo.unobserve(el);
    });
  }, { threshold: 0.4 }) : null;
  counters.forEach(el => countIo ? countIo.observe(el) : (el.textContent = el.dataset.count + (el.dataset.suffix || '')));

  // tap-to-open cards on touch devices
  $$('.proj-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      const was = card.classList.contains('open');
      $$('.proj-card.open').forEach(c => c.classList.remove('open'));
      if (!was) card.classList.add('open');
    });
  });

  // sliders
  $$('[data-slider]').forEach(wrap => {
    const track = $('.slider', wrap), prev = $('[data-prev]', wrap), next = $('[data-next]', wrap);
    if (!track) return;
    const stepBy = () => (track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + 24 : 300);
    const update = () => {
      prev.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -stepBy(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: stepBy(), behavior: 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });

  // method workflow: meeting -> (A: start directly | B: feasibility study) -> project -> delivery
  const wf = $('[data-wf]');
  if (wf) {
    const NS = 'http://www.w3.org/2000/svg';
    const svg = $('.wf-lines', wf);
    const node = k => $(`[data-node="${k}"]`, wf);
    const EDGES = [['meet', 'a'], ['meet', 'b'], ['a', 'start'], ['b', 'start'], ['start', 'deliver']];
    const ROUTES = [['meet', 'a', 'start', 'deliver'], ['meet', 'b', 'start', 'deliver']];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let played = false, drawn = {}, dots = [];

    const box = el => {
      const r = el.getBoundingClientRect(), o = wf.getBoundingClientRect();
      return { l: r.left - o.left, r: r.right - o.left, t: r.top - o.top, b: r.bottom - o.top, cx: r.left - o.left + r.width / 2, cy: r.top - o.top + r.height / 2 };
    };
    const vertical = () => getComputedStyle(wf).gridTemplateColumns.split(' ').length < 3;
    const edgePath = (from, to) => {
      const a = box(node(from)), b = box(node(to));
      if (vertical()) {
        const x1 = a.cx, y1 = a.b, x2 = b.cx, y2 = b.t, m = (y2 - y1) / 2;
        return `M${x1},${y1} C${x1},${y1 + m} ${x2},${y2 - m} ${x2},${y2}`;
      }
      const x1 = a.r, y1 = a.cy, x2 = b.l, y2 = b.cy, m = (x2 - x1) / 2;
      return `M${x1},${y1} C${x1 + m},${y1} ${x2 - m},${y2} ${x2},${y2}`;
    };
    // a route chains its edges; the jumps between them run straight behind the nodes
    const routePath = r => r.slice(1).map((k, i) => { const d = edgePath(r[i], k); return i ? d.replace(/^M/, 'L') : d; }).join(' ');

    const build = () => {
      svg.innerHTML = '';
      dots = [];
      EDGES.forEach(([f, t]) => {
        const d = edgePath(f, t);
        const base = document.createElementNS(NS, 'path');
        base.setAttribute('class', 'base'); base.setAttribute('d', d);
        const draw = document.createElementNS(NS, 'path');
        draw.setAttribute('class', 'draw'); draw.setAttribute('d', d);
        draw.dataset.edge = f + '-' + t;
        svg.append(base, draw);
        const len = draw.getTotalLength();
        draw.style.strokeDasharray = len;
        draw.style.strokeDashoffset = drawn[f + '-' + t] ? 0 : len;
      });
      if (reduced) return;
      ROUTES.forEach((r, i) => {
        const p = document.createElementNS(NS, 'path');
        p.setAttribute('id', 'wf-route-' + i); p.setAttribute('d', routePath(r)); p.setAttribute('fill', 'none');
        const c = document.createElementNS(NS, 'circle');
        c.setAttribute('r', 5); c.setAttribute('class', 'dot' + (i ? ' b' : ''));
        const anim = document.createElementNS(NS, 'animateMotion');
        anim.setAttribute('dur', i ? '5s' : '4s');
        anim.setAttribute('repeatCount', 'indefinite');
        anim.setAttribute('begin', 'indefinite');
        anim.setAttribute('path', routePath(r));
        c.appendChild(anim);
        svg.append(c);
        dots.push({ anim, dot: c, delay: i * 2000 });
      });
      if (wf.classList.contains('flowing')) startDots();
    };
    const startDots = () => dots.forEach(({ anim, dot, delay }) => setTimeout(() => {
      try { anim.beginElement(); dot.classList.add('go'); } catch (e) {}
    }, delay));
    const drawEdge = (f, t) => {
      drawn[f + '-' + t] = true;
      const el = svg.querySelector(`[data-edge="${f}-${t}"]`);
      if (el) el.style.strokeDashoffset = 0;
    };
    const show = k => node(k).classList.add('on');

    const play = () => {
      if (played) return;
      played = true;
      wf.classList.add('on');
      if (reduced) {
        ['meet', 'a', 'b', 'start', 'deliver'].forEach(show);
        EDGES.forEach(([f, t]) => drawEdge(f, t));
        return;
      }
      const seq = [
        [0, () => show('meet')],
        [500, () => { drawEdge('meet', 'a'); drawEdge('meet', 'b'); }],
        [1250, () => { show('a'); show('b'); }],
        [1700, () => { drawEdge('a', 'start'); drawEdge('b', 'start'); }],
        [2450, () => show('start')],
        [2850, () => drawEdge('start', 'deliver')],
        [3500, () => show('deliver')],
        [3800, () => { wf.classList.add('flowing'); startDots(); }]
      ];
      seq.forEach(([ms, fn]) => setTimeout(fn, ms));
    };

    build();
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(build, 150); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(build);
    window.addEventListener('load', build);
    if ('IntersectionObserver' in window) {
      const wio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { play(); wio.disconnect(); } }), { threshold: 0.3 });
      wio.observe(wf);
    } else play();
  }

  // year
  $$('[data-year]').forEach(el => (el.textContent = new Date().getFullYear()));
})();
