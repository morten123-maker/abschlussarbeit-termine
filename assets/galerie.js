(function () {
  var list = document.querySelector('.gal');
  var btn = document.getElementById('shuffle');
  if (!list || !btn) return;

  var R = 18, C = 4;
  // Nur zwei Größen: 1x1 (Zeilen, Spalten) oder 2x2, also viermal so groß
  var S = { s: [1, 1], l: [2, 2] };

  function pick() {
    return Math.random() < 0.38 ? 'l' : 's';
  }

  function layout() {
    var occ = [], items = [], r, c, i, j;
    for (r = 0; r < R; r++) occ.push([0, 0, 0, 0]);
    function fits(r, c, h, w) {
      if (r + h > R || c + w > C) return false;
      for (i = 0; i < h; i++) for (j = 0; j < w; j++) if (occ[r + i][c + j]) return false;
      return true;
    }
    function put(k, r, c) {
      for (i = 0; i < S[k][0]; i++) for (j = 0; j < S[k][1]; j++) occ[r + i][c + j] = 1;
      items.push({ k: k, r: r + 1, c: c + 1 });
    }
    var prevEmpty = false;
    for (r = 0; r < R; r++) {
      for (c = 0; c < C; c++) {
        if (occ[r][c] || Math.random() >= 0.3) continue;
        var k = pick();
        if (!fits(r, c, S[k][0], S[k][1])) k = 's';
        put(k, r, c);
      }
      var empty = !occ[r].some(Boolean);
      if (empty && prevEmpty) { put('s', r, Math.floor(Math.random() * C)); empty = false; }
      prevEmpty = empty;
    }
    return items;
  }

  function render() {
    var html = '';
    layout().forEach(function (it) {
      html += '<li class="' + it.k + '" style="--r:' + it.r + ';--c:' + it.c + '"></li>';
    });
    list.innerHTML = html;
  }

  btn.addEventListener('click', function () {
    render();
    var top = list.getBoundingClientRect().top + window.pageYOffset - 170;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  });
})();
