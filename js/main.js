function go(p) {
  document.getElementById("clickSound")?.play();
  setTimeout(() => (window.location = p), 200);
}

function playSound(id) {
  const s = document.getElementById(id);
  if (s) {
    s.currentTime = 0;
    s.play();
  }
}
