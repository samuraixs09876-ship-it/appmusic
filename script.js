const songs = [
  {
    id: "danh-doi",
    title: "Đánh Đổi",
    artist: "Obito ft. MCK",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/Obito%20-%20Danh%20Doi%20ft.%20MCK.mp3",
    cover_url: "https://i.scdn.co/image/ab6761610000e5eba385bd3e0f67945f277792c2"
  },
  {
    id: "fly-up",
    title: "Fly Up",
    artist: "Lookism OST",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/FLY%20UP%20-%20LOOKISM.mp3",
    cover_url: "https://i.pinimg.com/originals/71/34/67/713467662d8bc26e382a8e3720def168.jpg"
  },
  {
    id: "khong-buong",
    title: "Không Buông",
    artist: "Hngle ft. Ari",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/Hngle%20-%20KHONG%20BUONG%20ft.%20Ari%20%20Official%20Music%20Video.mp3",
    cover_url: "https://i.ytimg.com/vi/9UcQ7ddVjoc/maxresdefault.jpg"
  },
  {
    id: "vung-an-toan",
    title: "Vùng An Toàn",
    artist: "B Ray ft. V#",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/vung%20an%20toan.mp3",
    cover_url: "https://lyricsvn.com/wp-content/uploads/2025/07/cho-bao-02-vung-an-toan-b-ray-ft-v-prod-hipz.jpg"
  },
  {
    id: "mot-nua-su-that",
    title: "Một Nửa Sự Thật",
    artist: "24K.RIGHT",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/24K.RIGHT%20-%20MOT%20NUA%20SU%20THAT.mp3",
    cover_url: "https://tse4.mm.bing.net/th/id/OIP.16-B7G4zAm3BjXK9RKwiDgHaHa?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "thuoc-la-va-ca-phe",
    title: "Thuốc Lá Và Cà Phê",
    artist: "B Ray",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/thuoc%20la%20va%20ca%20phe%20B%20RAY%20%20Official%20Lyrics%20Video.mp3",
    cover_url: "https://tse4.mm.bing.net/th/id/OIP.VvQ3ekgjllt2aASKIDh-vAHaEK?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "anh-da-lon-hon",
    title: "Anh Đã Lớn Hơn Thế Nhiều Rồi",
    artist: "Dick ft. Michelle Ngn",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/ANH%20DA%20LON%20HON%20THE%20NHIEU%20ROI%20%20-%20Dick%20ft.%20Michelle%20Ngn%20%20(%20Official%20Music%20Video%20).mp3",
    cover_url: "https://tse2.mm.bing.net/th/id/OIP.KD-Gi2JgwMhrrG1BiaXnHQHaEK?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "starboy",
    title: "Starboy",
    artist: "The Weeknd",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/Starboy.mp3",
    cover_url: "https://tse4.mm.bing.net/th/id/OIP.0LXxgLMngz0vD4ruImXsWgAAAA?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "d2",
    title: "D2",
    artist: "Audio",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/21.mp3",
    cover_url: "https://tse2.mm.bing.net/th/id/OIP.CYKEC4iMt6FhZg3Ft-z67AHaEK?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "thang-12-anh-co",
    title: "Tháng 12 Anh Có",
    artist: "KidZ",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/thang%2012%20anh%20co.mp3",
    cover_url: "https://tse3.mm.bing.net/th/id/OIP.ClNW42ls6c1fDRALtS56jgHaD4?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "xuong-rong",
    title: "Xương Rồng",
    artist: "Dangrangto",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/xuong%20rong.mp3",
    cover_url: "https://tse3.mm.bing.net/th/id/OIP.kFcJsV1OebV3Z3_xiXjc8wAAAA?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "thap-trap-tu-do",
    title: "Tháp Trap Tự Do (Remix)",
    artist: "Lý Lữ Ca prod. tyronee",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/thap%20trap%20tu%20do.mp3",
    cover_url: "https://tse3.mm.bing.net/th/id/OIP.9W4c65IOzFz9J6oXOxii6QHaHa?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "cao-oc-20",
    title: "Cao Ốc 20",
    artist: "B RAY x DatG (ft. MASEW x K-ICM)",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/cao%20oc%2020%20.mp3",
    cover_url: "https://tse4.mm.bing.net/th/id/OIP.bnwQOXavnq5n30vyasPchQHaD4?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "mat-ket-noi",
    title: "Mất Kết Nối",
    artist: "Dương Domic",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/mat%20ket%20noi.mp3",
    cover_url: "https://tse3.mm.bing.net/th/id/OIP.esDT1X7J7NeYsW5xxoSVagHaD7?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "exit-sign",
    title: "Exit Sign",
    artist: "HIEUTHUHAI ft. marzuz (prod. by Kewtiie)",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/exit%20sign.mp3",
    cover_url: "https://images.genius.com/fa2431d60dac54b3f3815cc6dd036845.1000x1000x1.png"
  },
  {
    id: "bsnl-2",
    title: "B.S.N.L 2",
    artist: "B-RAY ft. YOUNG-H",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/B.S.N.L%202%20-%20B-RAY%20ft.%20YOUNG-H.mp3",
    cover_url: "https://tse3.mm.bing.net/th/id/OIP.PTuYBXMg2jngaBetTfx0IQHaEK?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "vet-thuong",
    title: "VẾT THƯƠNG",
    artist: "fishy",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/vet%20thuong%20.mp3",
    cover_url: "https://tse4.mm.bing.net/th/id/OIP.jq1ceGAYWf22BVLdtc1n-gHaFj?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "exs-hate-me",
    title: "Ex's Hate Me",
    artist: "B Ray x Masew (Ft AMEE)",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/Ex's%20Hate%20Me%20%20B%20Ray%20x%20Masew%20(Ft%20AMEE)%20%20Official%20Lyrics%20Video.mp3",
    cover_url: "https://tse3.mm.bing.net/th/id/OIP.S88HY5Q_DMoKu1de-_0bTgHaHa?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "beauty-and-a-beat",
    title: "Beauty And A Beat",
    artist: "Justin Bieber, Nicki Minaj",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/Justin%20Bieber,%20Nicki%20Minaj%20%20Beauty%20And%20A%20Beat%20(Lyrics).mp3",
    cover_url: "https://tse1.mm.bing.net/th/id/OIP.0P4PdVEZMUBXZCQz2fI_AQHaEK?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "despacito",
    title: "Despacito",
    artist: "Justin Bieber ft. Luis Fonsi & Daddy Yankee",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/Justin%20Bieber%20-%20Despacito%20(Lyrics%20%20Letra)%20ft.%20Luis%20Fonsi%20&%20Daddy%20Yankee.mp3",
    cover_url: "https://tse1.mm.bing.net/th/id/OIP.0P4PdVEZMUBXZCQz2fI_AQHaEK?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "shape-of-you",
    title: "Shape of You",
    artist: "Ed Sheeran",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/Ed%20Sheeran%20-%20Shape%20of%20You%20(Lyrics).mp3",
    cover_url: "https://tse4.mm.bing.net/th/id/OIP.XIJBQx-uE6xTOr4LKdOYngHaEK?r=0&pid=Api&h=220&P=0"
  },
  {
    id: "we-dont-talk-anymore",
    title: "We Dont Talk Anymore",
    artist: "Charlie Puth , Selena Gomez",
    type: "music",
    song_url: "https://erztaoznustolbuaxeze.supabase.co/storage/v1/object/public/songs/Charlie%20Puth%20,%20Selena%20Gomez%20-%20We%20Dont%20Talk%20%20Anymore%20%20(Lyrics).mp3",
    cover_url: "https://images.genius.com/4755e86249a7b3dd223a8aadebb53155.1000x1000x1.png"
  }
];

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const currentTimeElement = document.getElementById("current-time");
const durationElement = document.getElementById("duration");

const searchInput = document.getElementById("search-input");
const songList = document.getElementById("song-list");
const sidebarList = document.getElementById("sidebar-list");

const shuffleButton = document.getElementById("shuffle-button");
const shuffleControl = document.getElementById("shuffle-control");
const playAllButton = document.getElementById("play-all-button");
const volumeControl = document.getElementById("volume");
const repeatButton = document.getElementById("repeat-button");

const usernameInput = document.getElementById("username-input");
const saveUserButton = document.getElementById("save-user-button");
const playerFavoriteButton = document.getElementById("player-favorite-button");
const pageTitle = document.getElementById("page-title");

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let currentCategory = "all";

let currentUser = localStorage.getItem("currentUser") || "guest";

if (currentUser !== "guest" && usernameInput) {
  usernameInput.value = currentUser;
}

function formatTime(time) {
  if (!time || isNaN(time)) {
    return "0:00";
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
}

function getStorageKey() {
  return `likedSongs_${currentUser}`;
}

function getLikedSongs() {
  return JSON.parse(
    localStorage.getItem(getStorageKey()) || "[]"
  );
}

function isLiked(songId) {
  return getLikedSongs().includes(songId);
}

function toggleFavorite(songId) {
  const likedSongs = getLikedSongs();
  const songIndex = likedSongs.indexOf(songId);

  if (songIndex === -1) {
    likedSongs.push(songId);
  } else {
    likedSongs.splice(songIndex, 1);
  }

  localStorage.setItem(
    getStorageKey(),
    JSON.stringify(likedSongs)
  );

  renderSongs();
  updatePlayerFavorite();
}

function getSongsByCategory() {
  if (currentCategory === "music") {
    return songs.filter(song => song.type === "music");
  }

  if (currentCategory === "podcast") {
    return songs.filter(song => song.type === "podcast");
  }

  if (currentCategory === "liked") {
    const likedSongs = getLikedSongs();
    return songs.filter(song => likedSongs.includes(song.id));
  }

  return songs;
}

function getCurrentPlaylist() {
  let playlist = getSongsByCategory();

  const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";

  if (keyword) {
    playlist = playlist.filter(song => {
      return (
        song.title.toLowerCase().includes(keyword) ||
        song.artist.toLowerCase().includes(keyword)
      );
    });
  }

  return playlist;
}

function updatePageTitle() {
  const titles = {
    all: "Tất cả bài hát",
    music: "Music",
    podcast: "Podcast",
    liked: "Bài hát yêu thích"
  };

  if (pageTitle) {
    pageTitle.textContent = titles[currentCategory];
  }
}

function renderSongs() {
  const filteredSongs = getCurrentPlaylist();

  if (songList) songList.innerHTML = "";
  if (sidebarList) sidebarList.innerHTML = "";

  if (filteredSongs.length === 0) {
    if (songList) {
      songList.innerHTML = `
        <div class="empty-message">
          Không tìm thấy bài hát phù hợp
        </div>
      `;
    }
    return;
  }

  filteredSongs.forEach(song => {
    const originalIndex = songs.indexOf(song);
    const liked = isLiked(song.id);

    const songElement = document.createElement("div");

    songElement.className = "song-item";
    songElement.dataset.index = originalIndex;

    songElement.innerHTML = `
      <div class="song-number">
        ${originalIndex + 1}
      </div>

      <img src="${song.cover_url}" alt="${song.title}">

      <div class="song-info">
        <strong>${song.title}</strong>
        <span>${song.artist}</span>
      </div>

      <button class="song-play-button" title="Phát bài hát">
        <i class="fa-solid fa-play"></i>
      </button>

      <button
        class="song-favorite-button ${liked ? "liked" : ""}"
        title="Thích bài hát"
      >
        <i class="${liked ? "fa-solid" : "fa-regular"} fa-heart"></i>
      </button>

      <span class="song-duration">
        <i class="fa-solid fa-music"></i>
      </span>
    `;

    songElement.addEventListener("click", event => {
      if (
        event.target.closest(".song-favorite-button") ||
        event.target.closest(".song-play-button")
      ) {
        return;
      }

      currentSongIndex = originalIndex;
      loadSong(currentSongIndex);
      playSong();
    });

    const playSongButton = songElement.querySelector(".song-play-button");
    if (playSongButton) {
      playSongButton.addEventListener("click", event => {
        event.stopPropagation();
        currentSongIndex = originalIndex;
        loadSong(currentSongIndex);
        playSong();
      });
    }

    const favoriteSongButton = songElement.querySelector(".song-favorite-button");
    if (favoriteSongButton) {
      favoriteSongButton.addEventListener("click", event => {
        event.stopPropagation();
        toggleFavorite(song.id);
      });
    }

    if (songList) songList.appendChild(songElement);

    const sidebarItem = document.createElement("div");
    sidebarItem.className = "sidebar-song";
    sidebarItem.innerHTML = `
      <img src="${song.cover_url}" alt="${song.title}">
      <div>
        <strong>${song.title}</strong>
        <span>${song.artist}</span>
      </div>
    `;

    sidebarItem.addEventListener("click", () => {
      currentSongIndex = originalIndex;
      loadSong(currentSongIndex);
      playSong();
    });

    if (sidebarList) sidebarList.appendChild(sidebarItem);
  });

  updateActiveSong();
  updatePlayerFavorite();
}

function loadSong(index) {
  const song = songs[index];

  if (!song) {
    return;
  }

  if (title) title.textContent = song.title;
  if (artist) artist.textContent = song.artist;
  if (cover) cover.src = song.cover_url;
  
  if (audio) {
    audio.src = song.song_url;
    audio.load();
  }

  if (currentTimeElement) currentTimeElement.textContent = "0:00";
  if (durationElement) durationElement.textContent = "0:00";
  if (progress) progress.style.width = "0%";

  updateActiveSong();
  updatePlayerFavorite();

  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: song.artist,
      artwork: [
        {
          src: song.cover_url,
          sizes: "512x512",
          type: "image/jpeg"
        }
      ]
    });
  }
}

function updateActiveSong() {
  document.querySelectorAll(".song-item").forEach(item => {
    item.classList.toggle(
      "active",
      Number(item.dataset.index) === currentSongIndex
    );
  });
}

function updatePlayerFavorite() {
  const song = songs[currentSongIndex];

  if (!song || !playerFavoriteButton) {
    return;
  }

  const liked = isLiked(song.id);

  playerFavoriteButton.innerHTML = `
    <i class="${liked ? "fa-solid" : "fa-regular"} fa-heart"></i>
  `;

  playerFavoriteButton.classList.toggle("liked", liked);
}

function playSong() {
  if (!audio) return;
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        if (playButton) playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      })
      .catch(error => {
        console.log("Không thể phát nhạc tự động trên trình duyệt:", error);
        isPlaying = false;
        if (playButton) playButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
      });
  }
}

function pauseSong() {
  isPlaying = false;
  if (playButton) {
    playButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
  if (audio) audio.pause();
}

function playNextSong() {
  const playlist = getSongsByCategory();

  if (playlist.length === 0) {
    return;
  }

  const currentPlaylistIndex = playlist.findIndex(
    song => songs.indexOf(song) === currentSongIndex
  );

  let nextPlaylistIndex = currentPlaylistIndex + 1;

  if (nextPlaylistIndex >= playlist.length || currentPlaylistIndex === -1) {
    nextPlaylistIndex = 0;
  }

  currentSongIndex = songs.indexOf(playlist[nextPlaylistIndex]);

  loadSong(currentSongIndex);
  playSong();
}

function playPreviousSong() {
  const playlist = getSongsByCategory();

  if (playlist.length === 0) {
    return;
  }

  const currentPlaylistIndex = playlist.findIndex(
    song => songs.indexOf(song) === currentSongIndex
  );

  let previousPlaylistIndex = currentPlaylistIndex - 1;

  if (previousPlaylistIndex < 0 || currentPlaylistIndex === -1) {
    previousPlaylistIndex = playlist.length - 1;
  }

  currentSongIndex = songs.indexOf(playlist[previousPlaylistIndex]);

  loadSong(currentSongIndex);
  playSong();
}

function playRandomSong() {
  const playlist = getCurrentPlaylist();

  if (playlist.length === 0) {
    alert("Danh sách hiện tại không có bài hát.");
    return;
  }

  let randomSong;

  if (playlist.length === 1) {
    randomSong = playlist[0];
  } else {
    do {
      randomSong = playlist[Math.floor(Math.random() * playlist.length)];
    } while (songs.indexOf(randomSong) === currentSongIndex);
  }

  currentSongIndex = songs.indexOf(randomSong);

  loadSong(currentSongIndex);
  playSong();
}

function toggleShuffle() {
  isShuffle = !isShuffle;

  if (shuffleButton) shuffleButton.classList.toggle("active", isShuffle);
  if (shuffleControl) shuffleControl.classList.toggle("active", isShuffle);
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  if (repeatButton) repeatButton.classList.toggle("active", isRepeat);
}

if (playButton) {
  playButton.addEventListener("click", () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
}

if (prevButton) prevButton.addEventListener("click", playPreviousSong);
if (nextButton) nextButton.addEventListener("click", playNextSong);

if (shuffleButton) {
  shuffleButton.addEventListener("click", () => {
    isShuffle = true;
    shuffleButton.classList.add("active");
    if (shuffleControl) shuffleControl.classList.add("active");
    playRandomSong();
  });
}

if (shuffleControl) {
  shuffleControl.addEventListener("click", () => {
    toggleShuffle();
    if (isShuffle) {
      playRandomSong();
    }
  });
}

if (repeatButton) repeatButton.addEventListener("click", toggleRepeat);

if (playAllButton) {
  playAllButton.addEventListener("click", () => {
    const playlist = getCurrentPlaylist();

    if (playlist.length === 0) {
      alert("Danh sách hiện tại không có bài hát.");
      return;
    }

    currentSongIndex = songs.indexOf(playlist[0]);

    loadSong(currentSongIndex);
    playSong();
  });
}

if (playerFavoriteButton) {
  playerFavoriteButton.addEventListener("click", () => {
    const song = songs[currentSongIndex];

    if (song) {
      toggleFavorite(song.id);
    }
  });
}

if (audio) {
  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) {
      return;
    }

    const progressPercent = (audio.currentTime / audio.duration) * 100;

    if (progress) progress.style.width = `${progressPercent}%`;
    if (currentTimeElement) currentTimeElement.textContent = formatTime(audio.currentTime);
    if (durationElement) durationElement.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("loadedmetadata", () => {
    if (durationElement) durationElement.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("ended", () => {
    if (isRepeat) {
      audio.currentTime = 0;
      playSong();
    } else if (isShuffle) {
      playRandomSong();
    } else {
      playNextSong();
    }
  });

  audio.addEventListener("error", (e) => {
    console.log("Không thể tải file nhạc này.", e);
  });
}

if (progressContainer) {
  progressContainer.addEventListener("click", event => {
    if (!audio || !audio.duration) {
      return;
    }

    const width = progressContainer.clientWidth;
    const clickX = event.offsetX;

    audio.currentTime = (clickX / width) * audio.duration;
  });
}

if (volumeControl && audio) {
  volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    renderSongs();
  });
}

document.querySelectorAll(".menu-item").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    document.querySelectorAll(".menu-item").forEach(item => {
      item.classList.toggle("active", item.dataset.category === category);
    });

    currentCategory = category;

    updatePageTitle();
    renderSongs();
  });
});

if (saveUserButton) {
  saveUserButton.addEventListener("click", () => {
    const username = usernameInput ? usernameInput.value.trim() : "";

    if (!username) {
      alert("Vui lòng nhập tên người dùng.");
      return;
    }

    currentUser = username;

    localStorage.setItem("currentUser", currentUser);

    renderSongs();

    alert(`Đã chuyển sang tài khoản: ${currentUser}`);
  });
}

loadSong(currentSongIndex);
updatePageTitle();
renderSongs();
