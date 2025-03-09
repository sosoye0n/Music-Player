// 요소 선택
const cards = document.querySelectorAll(".card");
const audios = document.querySelectorAll("audio");

const prevMusic = document.querySelector(".btnPrev");
const nextMusic = document.querySelector(".btnNext");

const buttons = document.querySelectorAll("button");
const play = document.querySelector(".play-button");

// 1번 자동 재생
window.onload = () => {
  cards[0].classList.add("active");
  audios[0].play();
  updateMusicInfo(0);
};

// 클릭시 음악 정보 업데이트
const musicInfo = document.querySelector(".music-info .song-name");
const artistInfo = document.querySelector(".music-info .artist-name");

let activeIndex = 0;

const len = cards.length;
const songDetails = [
  { song: "SNOOZE", artist: "SZA" },
  { song: "EXTRAL", artist: "Jenny (feat.Doechii)" },
  { song: "BETTER WITH YOU", artist: "Jeff Bernat" },
];

// 음악 초기화
const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};

// 다음 음악
const nextMusicPlay = () => {
  initMusic();
  activeIndex = (activeIndex + 1) % len;
  cards[activeIndex].classList.add("active");
  audios[activeIndex].play();
  updateMusicInfo(activeIndex);
};

// 이전 음악
const prevMusicPlay = () => {
  initMusic();
  activeIndex = (activeIndex - 1 + len) % len;
  cards[activeIndex].classList.add("active");
  audios[activeIndex].play();
  updateMusicInfo(activeIndex);
};

// 음악 정보 업데이트
const updateMusicInfo = (index) => {
  musicInfo.textContent = songDetails[index].song;
  artistInfo.textContent = songDetails[index].artist;
};

// 해당 음악 재생
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    initMusic();
    card.classList.add("active");
    audios[index].play();
    activeIndex = index;
    updateMusicInfo(index);
  });
});

// 하단 플레이 버튼
play.addEventListener("click", () => {
  if (audios[activeIndex].paused) {
    audios[activeIndex].play();
    play.querySelector("i").classList.remove("fa-play");
    play.querySelector("i").classList.add("fa-pause");
  } else {
    audios[activeIndex].pause();
    play.querySelector("i").classList.remove("fa-pause");
    play.querySelector("i").classList.add("fa-play");
  }
});

// 이전 및 다음 버튼 클릭 시 음악 전환
prevMusic.addEventListener("click", prevMusicPlay);
nextMusic.addEventListener("click", nextMusicPlay);
