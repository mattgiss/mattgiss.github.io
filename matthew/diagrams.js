/* Starts the line-diagram animations when they scroll into view; click to replay. */
(function () {
  var els = document.querySelectorAll('.bp[data-bp]');
  if (!els.length) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { els.forEach(function (el) { var s = el.querySelector('svg'); if (s && s.pauseAnimations) s.pauseAnimations(); }); return; }
  els.forEach(function (el) { el.classList.add('js'); });
  function replay(el) { el.classList.remove('in'); void el.offsetWidth; el.classList.add('in'); }
  els.forEach(function (el) { el.addEventListener('click', function () { replay(el); }); });
  if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.25 });
  els.forEach(function (el) { io.observe(el); });
})();
