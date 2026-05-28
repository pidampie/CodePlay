let currentIdx = 0;
let skor = 0;
let waktu = 180;
let timerInterval = null;
let ditemukan = [];
let inputUser = "";
let isGameOver = false; // KUNCI SAFETY

const gridEl = document.getElementById("grid");
const listEl = document.getElementById("wordList");
const inputEl = document.getElementById("inputKata");

function createLevelButtons() {
  const container = document.getElementById("levelContainer");
  const unlockedLevel = parseInt(localStorage.getItem("unlockedLevel")) || 1;
  container.innerHTML = "";

  for (let i = 1; i <= 30; i++) {
    const btn = document.createElement("div");
    btn.className = i <= unlockedLevel ? "level-item" : "level-item locked";
    btn.innerHTML = i <= unlockedLevel ? i : `🔒`;
    if (i <= unlockedLevel) {
      btn.onclick = () => startFlow(i - 1);
    }
    container.appendChild(btn);
  }
}

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("gameBoard").classList.add("hidden");
  if (id === "gameBoard")
    document.getElementById("gameBoard").classList.remove("hidden");
  else document.getElementById(id).classList.add("active");
}

function startFlow(idx) {
  currentIdx = idx;
  isGameOver = false;
  document.getElementById("txtLevelTitle").innerText = "LEVEL " + (idx + 1);
  showScreen("screenTransisi");
}

function showStory() {
  document.getElementById("txtCerita").innerText = SOAL[currentIdx].cerita;
  showScreen("screenSoal");
}

function showMission() {
  document.getElementById("txtMisi").innerText = SOAL[currentIdx].misi;
  showScreen("screenMisi");
}

function startGame() {
  // Reset Total
  isGameOver = false;
  ditemukan = [];
  skor = 0;
  waktu = 180;
  inputUser = "";
  listEl.innerHTML = "";
  inputEl.value = "";

  if (timerInterval) clearInterval(timerInterval);

  generateGrid(SOAL[currentIdx].jawaban);
  showScreen("gameBoard");
  startTimer();
  document.getElementById("bgm").play();
}

function generateGrid(words) {
  let letters = words.join("").split("");
  const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  while (letters.length < 20)
    letters.push(abjad[Math.floor(Math.random() * 26)]);
  letters.sort(() => Math.random() - 0.5);

  gridEl.innerHTML = "";
  letters.forEach((l) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerText = l;
    cell.onclick = () => {
      if (isGameOver) return;
      inputUser += l;
      inputEl.value = inputUser;
      document.getElementById("clickSound").play();
      cell.classList.add("selected");
    };
    gridEl.appendChild(cell);
  });
}

function cekJawaban() {
  if (isGameOver) return;
  const jawabanLevel = SOAL[currentIdx].jawaban;
  if (jawabanLevel.includes(inputUser) && !ditemukan.includes(inputUser)) {
    ditemukan.push(inputUser);
    document.getElementById("correctSound").play();
    listEl.innerHTML += `<div>${inputUser} <span>OK</span></div>`;
    inputUser = "";
    inputEl.value = "";
    if (ditemukan.length === jawabanLevel.length) menang();
  } else {
    document.getElementById("wrongSound").play();
    resetSelection();
  }
}

function resetSelection() {
  inputUser = "";
  inputEl.value = "";
  document
    .querySelectorAll(".cell")
    .forEach((c) => c.classList.remove("selected"));
}

function menang() {
  isGameOver = true;
  clearInterval(timerInterval);
  document.getElementById("winSound").play();
  let unlocked = parseInt(localStorage.getItem("unlockedLevel")) || 1;
  if (currentIdx + 1 === unlocked) {
    localStorage.setItem("unlockedLevel", unlocked + 1);
  }
  document.getElementById("popupWin").classList.remove("hidden");
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (isGameOver) return;
    waktu--;
    let min = Math.floor(waktu / 60);
    let sec = waktu % 60;
    document.getElementById("timer").innerText =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

    if (waktu <= 0) {
      isGameOver = true;
      clearInterval(timerInterval);
      document.getElementById("loseSound").play();
      document.getElementById("popupLose").classList.remove("hidden");
    }
  }, 1000);
}

function handleReload() {
  isGameOver = true;
  if (timerInterval) clearInterval(timerInterval);
  location.reload();
}

document.getElementById("enterBtn").onclick = cekJawaban;
document.getElementById("cancelBtn").onclick = resetSelection;
createLevelButtons();
