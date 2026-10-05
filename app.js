// Discover Andong Web Application Logic
(function () {
  "use strict";

  // Application State
  const state = {
    lang: localStorage.getItem("andong_lang") || "en", // 'en' or 'ko'
    activeTab: "attractions",
    activeFilter: "all",
    searchQuery: "",
    favorites: JSON.parse(localStorage.getItem("andong_favs") || "[]"),
    showingOnlyFavs: false,
    mapInstance: null,
    markers: []
  };

  // Translations Dictionary for UI elements
  const i18n = {
    en: {
      siteTitle: "DISCOVER ANDONG",
      siteSubtitle: "SPIRIT OF KOREA",
      heroBadge: "UNESCO Cultural Capital of Korea",
      heroTitle: "Step Into Timeless Korea",
      heroDesc: "600 years of living Joseon heritage, UNESCO Confucian academies, legendary spicy braised chicken, and moonlit river bridges in Andong, Gyeongsangbuk-do.",
      searchPlaceholder: "Search attractions, food, or keywords (e.g. Hahoe, Jjimdak, photo)...",
      tabAttractions: "🏛️ Attractions & UNESCO",
      tabFood: "🍗 Food & Gourmet",
      tabItinerary: "🗺️ Recommended Trails",
      tabDriver: "🚕 Show to Driver (Cards)",
      tabTransit: "🚌 Transit & Practical Tips",
      tabMap: "📌 Interactive Map",
      filterAll: "All",
      filterUnesco: "UNESCO Heritage",
      filterPhoto: "Scenic & Photo Spots",
      filterNight: "Night Views",
      filterFood: "Market & Food",
      btnDetails: "Explore Details",
      btnShowDriver: "Show to Driver",
      btnShowServer: "Show to Server",
      btnListen: "Listen Pronunciation",
      btnCopy: "Copy Korean",
      btnNavi: "Open in Map",
      toastCopied: "Copied Korean text to clipboard!",
      toastTtsError: "Audio pronunciation not available on this browser.",
      favFilterActive: "Showing Bookmarks",
      favEmpty: "No bookmarked places yet. Click the heart icon on any card to save it!",
      foodBannerTitle: "Gourmet Capital: Andong Flavor Guide",
      foodBannerDesc: "From sizzling spicy braised chicken to centuries-old salted mackerel and 45% craft soju, discover dining etiquettes and ordering phrases.",
      transitTitle: "How to Travel in Andong",
      transitSub: "Key transit lines, KTX high-speed train connections, and luggage storage.",
      itineraryTitle: "Curated Travel Courses",
      itinerarySub: "Designed for smooth transit connections between downtown and historic rural clusters.",
      driverTitle: "Show to Driver & Server Flashcards",
      driverSub: "Tap any card to open a full-screen jumbo view or click 'Pronounce' to hear natural Korean speech.",
      mapTitle: "Interactive Landmark Map",
      mapSub: "Explore geographic locations of UNESCO sites, bridges, and markets across Andong.",
      cultureTipsTitle: "Helpful Cultural & Travel Tips",
      modalClose: "Close",
      jumboDriverNote: "Show this large screen directly to your taxi driver or local server:",
      fullscreenBtn: "🔍 Fullscreen",
      hoursLabel: "🕒 Hours:",
      feeLabel: "🎟️ Fee:",
      areaLabel: "📍 Area:"
    },
    ko: {
      siteTitle: "디스커버 안동",
      siteSubtitle: "한국정신문화의 수도",
      heroBadge: "유네스코 세계유산의 도시",
      heroTitle: "시간이 멈춘 한국의 멋, 안동",
      heroDesc: "600년을 이어온 살아있는 하회마을, 유네스코 서원, 매콤달콤 안동찜닭, 그리고 달빛 은은한 월영교를 만나보세요.",
      searchPlaceholder: "명소, 음식, 키워드 검색 (예: 하회마을, 찜닭, 월영교)...",
      tabAttractions: "🏛️ 명소 & 세계유산",
      tabFood: "🍗 안동 별미 & 맛집",
      tabItinerary: "🗺️ 추천 여행 코스",
      tabDriver: "🚕 택시/식당 쇼카드",
      tabTransit: "🚌 교통 및 실용 팁",
      tabMap: "📌 안동 관광 지도",
      filterAll: "전체보기",
      filterUnesco: "유네스코 세계유산",
      filterPhoto: "인생샷 & 포토존",
      filterNight: "로맨틱 야경",
      filterFood: "전통시장 & 미식",
      btnDetails: "상세보기",
      btnShowDriver: "기사님께 보여주기",
      btnShowServer: "직원에게 보여주기",
      btnListen: "한국어 발음 듣기",
      btnCopy: "한국어 복사",
      btnNavi: "지도에서 위치보기",
      toastCopied: "한국어 문구가 클립보드에 복사되었습니다!",
      toastTtsError: "현재 브라우저에서 음성 출력을 지원하지 않습니다.",
      favFilterActive: "내 보관함 보기",
      favEmpty: "아직 찜한 장소가 없습니다. 카드 우측 상단의 하트를 눌러보세요!",
      foodBannerTitle: "안동의 맛: 대표 미식 가이드",
      foodBannerDesc: "원조 안동찜닭부터 간고등어 정식, 헛제사밥, 700년 전통 안동소주까지 맛있게 즐기는 팁과 주문 문구 모음입니다.",
      transitTitle: "안동 시내외 교통 안내",
      transitSub: "주요 대중교통 노선, KTX-이음 고속철도, 무료 물품보관함 정보입니다.",
      itineraryTitle: "안동 추천 여행 코스",
      itinerarySub: "도심과 유네스코 유적지 간 원활한 동선을 고려해 기획된 맞춤형 코스입니다.",
      driverTitle: "택시 기사님 & 식당 쇼카드",
      driverSub: "카드를 탭하여 전체 화면으로 크게 보여주거나, '발음 듣기'를 눌러 한국어 음성을 들려주세요.",
      mapTitle: "안동 관광 인터랙티브 지도",
      mapSub: "하회마을, 도산서원, 월영교 등 주요 명소들의 지리적 위치를 확인해보세요.",
      cultureTipsTitle: "외국인 여행자를 위한 실용 팁 & 에티켓",
      modalClose: "닫기",
      jumboDriverNote: "택시 기사님이나 식당 직원분께 아래 화면을 크게 보여주세요:",
      fullscreenBtn: "🔍 크게보기",
      hoursLabel: "🕒 운영시간:",
      feeLabel: "🎟️ 요금:",
      areaLabel: "📍 위치:"
    }
  };

  // DOM Elements
  const el = {
    langBtnEn: document.getElementById("lang-btn-en"),
    langBtnKo: document.getElementById("lang-btn-ko"),
    favFilterBtn: document.getElementById("fav-filter-btn"),
    favCountBadge: document.getElementById("fav-count-badge"),
    searchInput: document.getElementById("search-input"),
    searchClearBtn: document.getElementById("search-clear-btn"),
    tabs: document.querySelectorAll(".tab-btn"),
    tabContents: document.querySelectorAll(".tab-content"),
    filterChips: document.querySelectorAll(".chip-btn"),
    cardsGrid: document.getElementById("attractions-grid"),
    foodGrid: document.getElementById("food-grid"),
    itineraryList: document.getElementById("itinerary-list"),
    driverGrid: document.getElementById("driver-cards-grid"),
    transitGrid: document.getElementById("transit-grid"),
    cultureTipsList: document.getElementById("culture-tips-list"),
    // Modal
    modalOverlay: document.getElementById("modal-overlay"),
    modalCard: document.getElementById("modal-card"),
    modalCloseBtn: document.getElementById("modal-close-btn"),
    modalContent: document.getElementById("modal-body"),
    toast: document.getElementById("toast-msg")
  };

  // Toast Helper
  let toastTimer = null;
  function showToast(message) {
    if (!el.toast) return;
    el.toast.textContent = message;
    el.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.toast.classList.remove("show");
    }, 2500);
  }

  // Text to Speech (TTS) Helper
  function speakKorean(text) {
    if (!("speechSynthesis" in window)) {
      showToast(i18n[state.lang].toastTtsError);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const koreanVoice = voices.find(v => v.lang.includes("ko") || v.lang.includes("KO"));
    if (koreanVoice) utterance.voice = koreanVoice;

    window.speechSynthesis.speak(utterance);
    showToast(state.lang === "ko" ? "🔊 한국어 발음 재생 중..." : "🔊 Playing Korean pronunciation...");
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  // Copy to Clipboard
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(i18n[state.lang].toastCopied);
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      showToast(i18n[state.lang].toastCopied);
    } catch (err) {
      showToast("Unable to copy.");
    }
    document.body.removeChild(textArea);
  }

  // Favorite / Bookmark Logic
  function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    if (idx > -1) {
      state.favorites.splice(idx, 1);
      showToast(state.lang === "ko" ? "보관함에서 제거되었습니다." : "Removed from bookmarks");
    } else {
      state.favorites.push(id);
      showToast(state.lang === "ko" ? "보관함에 저장되었습니다! ❤️" : "Saved to bookmarks! ❤️");
    }
    localStorage.setItem("andong_favs", JSON.stringify(state.favorites));
    updateFavoritesBadge();
    renderAttractions();
  }

  function updateFavoritesBadge() {
    if (el.favCountBadge) {
      el.favCountBadge.textContent = state.favorites.length;
    }
  }

  // Render Attractions Cards
  function renderAttractions() {
    if (!el.cardsGrid) return;
    const isKo = state.lang === "ko";
    const q = state.searchQuery.toLowerCase().trim();

    let items = ANDONG_DATA.destinations.filter(d => {
      if (state.showingOnlyFavs && !state.favorites.includes(d.id)) {
        return false;
      }
      if (state.activeFilter !== "all" && d.category !== state.activeFilter) {
        return false;
      }
      if (q) {
        const matchName = d.name_en.toLowerCase().includes(q) || d.name_ko.includes(q);
        const matchDesc = (d.desc_en && d.desc_en.toLowerCase().includes(q)) || (d.desc_ko && d.desc_ko.includes(q));
        const matchTag = d.tags.some(t => t.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchTag) return false;
      }
      return true;
    });

    if (items.length === 0) {
      el.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <h3 style="color: #fff; margin-bottom: 8px;">${isKo ? "검색 결과가 없습니다" : "No matching places found"}</h3>
          <p>${state.showingOnlyFavs ? i18n[state.lang].favEmpty : (isKo ? "검색어나 필터 조건을 변경해보세요." : "Try adjusting your search query or filter chips.")}</p>
        </div>
      `;
      return;
    }

    el.cardsGrid.innerHTML = items.map(item => {
      const isFav = state.favorites.includes(item.id);
      const title = isKo ? item.name_ko : item.name_en;
      const subTitle = isKo ? item.name_en : item.name_ko;
      const desc = isKo ? item.desc_ko : item.desc_en;
      const tagline = isKo ? (item.tagline_ko || item.tagline) : (item.tagline_en || item.tagline);
      const badge = isKo ? (item.badge_ko || item.badge) : (item.badge_en || item.badge);
      const hours = isKo ? (item.operating_hours_ko || item.operating_hours) : (item.operating_hours_en || item.operating_hours);
      const fee = isKo ? (item.fee_ko || item.fee) : (item.fee_en || item.fee);

      return `
        <article class="dest-card" data-id="${item.id}">
          <div class="card-top-cover" style="background: linear-gradient(135deg, ${item.color}cc, #13171f);">
            <div class="card-top-pattern"></div>
            <span class="card-badge">${badge || item.category.toUpperCase()}</span>
            <button class="card-fav-btn ${isFav ? 'active' : ''}" 
                    title="Bookmark this place" 
                    onclick="window.AndongApp.toggleFav('${item.id}')"
                    aria-label="Bookmark">
              ${isFav ? '❤️' : '🤍'}
            </button>
            <div>
              <h3 class="card-main-title">${title}</h3>
              <p class="card-korean-title">${subTitle}</p>
            </div>
          </div>
          
          <div class="card-body">
            <p class="card-tagline">${tagline}</p>
            <p class="card-desc">${desc}</p>
            
            <div class="card-info-list">
              <div class="card-info-row">
                <strong>${i18n[state.lang].hoursLabel}</strong>
                <span>${hours}</span>
              </div>
              <div class="card-info-row">
                <strong>${i18n[state.lang].feeLabel}</strong>
                <span>${fee}</span>
              </div>
              <div class="card-info-row">
                <strong>${i18n[state.lang].areaLabel}</strong>
                <span>${item.address_ko}</span>
              </div>
            </div>

            <div class="card-tags-row">
              ${item.tags.map(t => `<span class="tag-pill">#${t}</span>`).join('')}
            </div>

            <div class="card-actions-row">
              <button class="card-action-btn btn-secondary" onclick="window.AndongApp.showDetails('${item.id}')">
                ℹ️ ${i18n[state.lang].btnDetails}
              </button>
              <button class="card-action-btn btn-primary-action" onclick="window.AndongApp.openDriverCard('${item.id}')">
                🚕 ${i18n[state.lang].btnShowDriver}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Render Cuisines Section
  function renderFood() {
    if (!el.foodGrid) return;
    const isKo = state.lang === "ko";

    el.foodGrid.innerHTML = ANDONG_DATA.cuisines.map(c => {
      const name = isKo ? c.name_ko : c.name_en;
      const subName = isKo ? c.name_en : c.name_ko;
      const desc = isKo ? (c.desc_ko || c.desc_en) : c.desc_en;
      const eatingTip = isKo ? (c.eating_tip_ko || c.eating_tip_en) : c.eating_tip_en;
      const spice = isKo ? (c.spice_level_ko || c.spice_level) : (c.spice_level_en || c.spice_level);
      const whereToEat = isKo ? (c.where_to_eat_ko || c.where_to_eat) : (c.where_to_eat_en || c.where_to_eat);

      return `
        <div class="food-card">
          <div class="food-header">
            <div class="food-name-group">
              <h3>${name}</h3>
              <p class="ko-name">${subName}</p>
            </div>
            <span class="spice-tag">${spice}</span>
          </div>

          <p class="food-desc">${desc}</p>

          <div class="eating-tip-card">
            <strong>${isKo ? "🥢 현지인처럼 맛있게 먹는 팁:" : "🥢 How to Eat like a Local:"}</strong><br>
            ${eatingTip}
          </div>

          <div style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 14px;">
            <span>📍 ${isKo ? "추천 식당가" : "Best at"}: <strong>${whereToEat}</strong></span><br>
            <span>💰 ${isKo ? "예상 가격" : "Est. Price"}: <strong>${c.price_range}</strong></span>
          </div>

          <div class="order-showcard-box">
            <div class="order-showcard-label">
              <span>${isKo ? "식당 주문용 카드" : "Show to Server / Order Card"}</span>
              <span>${isKo ? "한국어 원문" : "Korean"}</span>
            </div>
            <div class="order-korean-text">${c.dining_card}</div>
            <div class="order-roman-text">${c.dining_card_roman}</div>
            
            <div class="order-action-btns">
              <button class="btn-mini-sound" onclick="window.AndongApp.speak('${c.dining_card.replace(/'/g, "\\'")}')">
                🔊 ${i18n[state.lang].btnListen}
              </button>
              <button class="btn-mini-sound" onclick="window.AndongApp.copy('${c.dining_card.replace(/'/g, "\\'")}')">
                📋 ${i18n[state.lang].btnCopy}
              </button>
              <button class="btn-mini-sound" onclick="window.AndongApp.openJumboCard('${c.name_en.replace(/'/g, "\\'")}', '${c.dining_card.replace(/'/g, "\\'")}', '${c.dining_card_roman.replace(/'/g, "\\'")}', 'Show this order card directly to the restaurant staff.')">
                ${i18n[state.lang].fullscreenBtn}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Itineraries
  function renderItineraries() {
    if (!el.itineraryList) return;
    const isKo = state.lang === "ko";

    el.itineraryList.innerHTML = ANDONG_DATA.itineraries.map(it => {
      const title = isKo ? it.title_ko : it.title_en;
      const subTitle = isKo ? it.title_en : it.title_ko;
      const duration = isKo ? (it.duration_ko || it.duration) : (it.duration_en || it.duration);
      const pace = isKo ? (it.pace_ko || it.pace) : (it.pace_en || it.pace);
      const summary = isKo ? (it.summary_ko || it.summary_en) : it.summary_en;
      const stops = isKo ? (it.stops_ko || it.stops_en || it.stops) : (it.stops_en || it.stops);

      return `
        <div class="itinerary-card">
          <div class="itinerary-head">
            <div class="itinerary-title-box">
              <h3>${title}</h3>
              <p>${subTitle}</p>
            </div>
            <div class="itinerary-meta-badges">
              <span class="meta-pill">⏱️ ${duration}</span>
              <span class="meta-pill">🚶 ${pace}</span>
            </div>
          </div>

          <p class="itinerary-summary">${summary}</p>

          <div class="timeline-stepper">
            ${stops.map(s => `
              <div class="timeline-step">
                <div class="timeline-step-dot"></div>
                <div class="timeline-step-time">${s.time}</div>
                <div class="timeline-step-title">${s.place}</div>
                <div class="timeline-step-tip">💡 ${s.tip}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Driver Flashcards
  function renderDriverCards() {
    if (!el.driverGrid) return;
    const isKo = state.lang === "ko";

    el.driverGrid.innerHTML = ANDONG_DATA.driver_phrases.map((p) => {
      const title = isKo ? (p.title_ko || p.title_en) : p.title_en;
      const desc = isKo ? (p.desc_ko || p.english_desc) : (p.desc_en || p.english_desc);
      const category = isKo ? (p.category_ko || p.category) : (p.category_en || p.category);

      return `
        <div class="flashcard-item" onclick="window.AndongApp.openJumboCard('${p.title_en.replace(/'/g, "\\'")}', '${p.korean_big.replace(/'/g, "\\'")}', '${p.phonetic.replace(/'/g, "\\'")}', '${desc.replace(/'/g, "\\'")}')">
          <div class="flashcard-top">
            <span class="flashcard-category">${category}</span>
            <span class="flashcard-icon">${p.icon}</span>
          </div>
          <h4 class="flashcard-title-en">${title}</h4>
          <div class="flashcard-korean-big">${p.korean_big}</div>
          <div class="flashcard-phonetic">${p.phonetic}</div>
          <p class="flashcard-desc">${desc}</p>
          
          <div class="flashcard-bottom-actions" onclick="event.stopPropagation()">
            <button class="flashcard-btn btn-tts" onclick="window.AndongApp.speak('${p.korean_big.replace(/'/g, "\\'")}')">
              🔊 ${isKo ? "발음 듣기" : "Pronounce"}
            </button>
            <button class="flashcard-btn btn-tts" onclick="window.AndongApp.copy('${p.korean_big.replace(/'/g, "\\'")}')">
              📋 ${isKo ? "복사" : "Copy"}
            </button>
            <button class="flashcard-btn btn-bigscreen" onclick="window.AndongApp.openJumboCard('${p.title_en.replace(/'/g, "\\'")}', '${p.korean_big.replace(/'/g, "\\'")}', '${p.phonetic.replace(/'/g, "\\'")}', '${desc.replace(/'/g, "\\'")}')">
              ${isKo ? "🔍 전체화면" : "🔍 Fullscreen"}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Transit & Practical Tips
  function renderTransit() {
    if (!el.transitGrid) return;
    const isKo = state.lang === "ko";

    el.transitGrid.innerHTML = ANDONG_DATA.transit_guide.map(t => {
      const mode = isKo ? (t.mode_ko || t.mode) : (t.mode_en || t.mode);
      const time = isKo ? (t.time_ko || t.time) : (t.time_en || t.time);
      const cost = isKo ? (t.cost_ko || t.cost) : (t.cost_en || t.cost);
      const summary = isKo ? (t.summary_ko || t.summary) : (t.summary_en || t.summary);

      return `
        <div class="transit-card">
          <h4 class="transit-mode">${mode}</h4>
          <div class="transit-tags">
            <span class="transit-tag-pill">⏱️ ${time}</span>
            <span class="transit-tag-pill">💳 ${cost}</span>
          </div>
          <p class="transit-summary">${summary}</p>
        </div>
      `;
    }).join('');

    if (el.cultureTipsList) {
      el.cultureTipsList.innerHTML = ANDONG_DATA.culture_tips.map(tip => {
        const title = isKo ? (tip.title_ko || tip.title) : (tip.title_en || tip.title);
        const desc = isKo ? (tip.desc_ko || tip.desc) : (tip.desc_en || tip.desc);
        return `
          <div class="tip-box">
            <h4>💡 ${title}</h4>
            <p>${desc}</p>
          </div>
        `;
      }).join('');
    }
  }

  // Modal System
  function openModal(contentHtml) {
    if (!el.modalContent || !el.modalOverlay) return;
    el.modalContent.innerHTML = contentHtml;
    el.modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!el.modalOverlay) return;
    el.modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  // Show-to-Driver / Server Jumbo Screen Modal
  function openJumboCard(title, koreanText, phonetic, explanation) {
    const naverSearchUrl = `https://map.naver.com/v5/search/${encodeURIComponent(koreanText)}`;
    const kakaoSearchUrl = `https://map.kakao.com/link/search/${encodeURIComponent(koreanText)}`;

    const html = `
      <div class="jumbo-showcard">
        <span class="jumbo-badge">SHOW THIS TO DRIVER / SERVER</span>
        <h3 style="color: var(--text-main); font-size: 1.35rem; font-weight: 800; margin-bottom: 8px;">${title}</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px;">
          ${i18n[state.lang].jumboDriverNote}
        </p>

        <div class="jumbo-text-korean">${koreanText}</div>
        <div class="jumbo-text-roman">Pronunciation: ${phonetic}</div>
        <p class="jumbo-text-meaning">${explanation}</p>

        <div class="jumbo-actions">
          <button class="jumbo-btn jumbo-btn-speak" onclick="window.AndongApp.speak('${koreanText.replace(/'/g, "\\'")}')">
            🔊 Play Voice (한국어 듣기)
          </button>
          <button class="jumbo-btn jumbo-btn-copy" onclick="window.AndongApp.copy('${koreanText.replace(/'/g, "\\'")}')">
            📋 Copy Korean Text
          </button>
        </div>

        <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: center; gap: 14px; font-size: 0.85rem;">
          <a href="${naverSearchUrl}" target="_blank" rel="noopener" style="color: #03c75a; text-decoration: none; font-weight: 700;">
            🗺️ Open Naver Map
          </a>
          <a href="${kakaoSearchUrl}" target="_blank" rel="noopener" style="color: #e5a700; text-decoration: none; font-weight: 700;">
            🟡 Open Kakao Map
          </a>
        </div>
      </div>
    `;
    openModal(html);
  }

  // Destination Driver Card Helper
  function openDriverCard(destId) {
    const d = ANDONG_DATA.destinations.find(x => x.id === destId);
    if (!d) return;
    openJumboCard(d.name_en, d.taxi_phrase, d.taxi_roman, `Official Address: ${d.address_ko} (${d.address_en || d.address})`);
  }

  // Destination Details Modal
  function showDetails(destId) {
    const d = ANDONG_DATA.destinations.find(x => x.id === destId);
    if (!d) return;
    const isKo = state.lang === "ko";
    const title = isKo ? d.name_ko : d.name_en;
    const subTitle = isKo ? d.name_en : d.name_ko;
    const desc = isKo ? d.desc_ko : d.desc_en;
    const tagline = isKo ? (d.tagline_ko || d.tagline) : (d.tagline_en || d.tagline);
    const highlights = isKo ? (d.highlights_ko || d.highlights) : (d.highlights_en || d.highlights);
    const transport = isKo ? (d.transport_ko || d.transport) : (d.transport_en || d.transport);
    const hours = isKo ? (d.operating_hours_ko || d.operating_hours) : (d.operating_hours_en || d.operating_hours);
    const fee = isKo ? (d.fee_ko || d.fee) : (d.fee_en || d.fee);

    const html = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; padding-right: 32px;">
          <div>
            <span style="font-size: 0.78rem; color: var(--primary); font-weight: 800; text-transform: uppercase;">
              ${d.category.toUpperCase()} • ${(isKo ? d.badge_ko : d.badge_en) || d.badge || ""}
            </span>
            <h2 style="color: var(--text-main); font-size: 1.8rem; font-weight: 900; line-height: 1.2; margin-top: 4px;">${title}</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem; font-weight: 600;">${subTitle}</p>
          </div>
        </div>

        <p style="color: var(--primary); font-size: 0.98rem; font-weight: 700; margin-bottom: 16px;">
          "${tagline}"
        </p>

        <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.7; margin-bottom: 20px;">
          ${desc}
        </p>

        <div style="background: #f7f4ed; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
          <h4 style="color: var(--text-main); font-size: 0.95rem; font-weight: 800; margin-bottom: 10px;">🌟 ${isKo ? "주요 볼거리 & 관람 포인트:" : "Key Highlights:"}</h4>
          <ul style="padding-left: 20px; color: var(--text-muted); font-size: 0.88rem; display: flex; flex-direction: column; gap: 8px;">
            ${highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div style="background: #fff6f2; border-left: 4px solid var(--primary); padding: 14px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 20px;">
          <h4 style="color: var(--primary); font-size: 0.9rem; font-weight: 800; margin-bottom: 6px;">🚌 ${isKo ? "찾아가는 대중교통 팁:" : "How to Get There:"}</h4>
          <p style="color: var(--text-main); font-size: 0.88rem;">${transport}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.86rem; color: var(--text-muted); margin-bottom: 24px;">
          <div>📍 <strong>${isKo ? "주소(도로명):" : "Address (Korean):"}</strong> <span style="color:var(--text-main); font-weight: 600;">${d.address_ko}</span></div>
          <div>📍 <strong>${isKo ? "영문 주소:" : "Address (English):"}</strong> ${d.address_en || d.address}</div>
          <div>🕒 <strong>${i18n[state.lang].hoursLabel}</strong> ${hours}</div>
          <div>🎟️ <strong>${i18n[state.lang].feeLabel}</strong> ${fee}</div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="jumbo-btn jumbo-btn-speak" style="flex: 1;" onclick="window.AndongApp.openDriverCard('${d.id}')">
            🚕 ${i18n[state.lang].btnShowDriver}
          </button>
          <button class="jumbo-btn jumbo-btn-copy" onclick="window.AndongApp.copy('${d.address_ko.replace(/'/g, "\\'")}')">
            📋 ${isKo ? "도로명 주소 복사" : "Copy Korean Address"}
          </button>
        </div>
      </div>
    `;
    openModal(html);
  }

  // Initialize Interactive Map (Leaflet)
  function initMap() {
    if (state.mapInstance) return;
    const mapEl = document.getElementById("andong-map");
    if (!mapEl || typeof L === "undefined") return;

    try {
      state.mapInstance = L.map("andong-map", {
        center: [36.5684, 128.7294],
        zoom: 11,
        zoomControl: true
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
      }).addTo(state.mapInstance);

      ANDONG_DATA.destinations.forEach(item => {
        const marker = L.circleMarker([item.lat, item.lng], {
          radius: 9,
          fillColor: item.color || "#c25e36",
          color: "#ffffff",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.9
        }).addTo(state.mapInstance);

        const isKo = state.lang === "ko";
        const title = isKo ? item.name_ko : item.name_en;
        const subTitle = isKo ? item.name_en : item.name_ko;
        const tagline = isKo ? (item.tagline_ko || item.tagline) : (item.tagline_en || item.tagline);

        const popupContent = `
          <div style="font-family: sans-serif; min-width: 180px;">
            <strong style="font-size: 1rem; color: #12151a;">${title}</strong><br>
            <span style="font-size: 0.8rem; color: #647082;">${subTitle}</span>
            <p style="font-size: 0.78rem; margin: 6px 0; color: #333;">${tagline}</p>
            <div style="margin-top: 8px;">
              <button onclick="window.AndongApp.showDetails('${item.id}')" 
                      style="background: #c25e36; color: #fff; border: none; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">
                ${i18n[state.lang].btnDetails}
              </button>
            </div>
          </div>
        `;
        marker.bindPopup(popupContent);
        state.markers.push(marker);
      });
    } catch (e) {
      console.warn("Leaflet map initialization skipped or offline:", e);
    }
  }

  // Switch Active Tab
  function setActiveTab(tabKey) {
    state.activeTab = tabKey;
    el.tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tabKey));
    el.tabContents.forEach(c => c.classList.toggle("active", c.id === `tab-${tabKey}`));

    if (tabKey === "map") {
      setTimeout(() => {
        initMap();
        if (state.mapInstance) state.mapInstance.invalidateSize();
      }, 100);
    }
  }

  // Explicit Set Language (for Segmented Switcher in Top Right)
  function setLanguage(lang) {
    if (state.lang === lang) return;
    state.lang = lang;
    localStorage.setItem("andong_lang", lang);
    applyLanguage();
  }

  // Toggle Language between 'en' and 'ko'
  function toggleLanguage() {
    setLanguage(state.lang === "en" ? "ko" : "en");
  }

  function applyLanguage() {
    const isKo = state.lang === "ko";
    const t = i18n[state.lang];

    // Update Top Right Switcher Button Active States
    if (el.langBtnEn && el.langBtnKo) {
      el.langBtnEn.classList.toggle("active", !isKo);
      el.langBtnKo.classList.toggle("active", isKo);
    }

    // Update HTML lang attribute
    document.documentElement.lang = state.lang;

    // Update Text Elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.dataset.i18n;
      if (t[key]) node.textContent = t[key];
    });

    if (el.searchInput) {
      el.searchInput.placeholder = t.searchPlaceholder;
    }

    renderAttractions();
    renderFood();
    renderItineraries();
    renderDriverCards();
    renderTransit();

    showToast(isKo ? "🇰🇷 한국어로 변경되었습니다." : "🇺🇸 Switched to English mode.");
  }

  // Event Listeners Setup
  function initEvents() {
    // Favorites Filter Toggle
    if (el.favFilterBtn) {
      el.favFilterBtn.addEventListener("click", () => {
        state.showingOnlyFavs = !state.showingOnlyFavs;
        el.favFilterBtn.style.background = state.showingOnlyFavs ? "rgba(255, 71, 114, 0.25)" : "";
        el.favFilterBtn.style.borderColor = state.showingOnlyFavs ? "#ff4772" : "";
        setActiveTab("attractions");
        renderAttractions();
        if (state.showingOnlyFavs) {
          showToast(state.lang === "ko" ? "보관한 장소만 모아봅니다." : "Filtering your bookmarked spots");
        }
      });
    }

    // Tabs
    el.tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        state.showingOnlyFavs = false;
        if (el.favFilterBtn) {
          el.favFilterBtn.style.background = "";
          el.favFilterBtn.style.borderColor = "";
        }
        setActiveTab(tab.dataset.tab);
      });
    });

    // Sub Filter Chips
    el.filterChips.forEach(chip => {
      chip.addEventListener("click", () => {
        el.filterChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        state.activeFilter = chip.dataset.filter;
        renderAttractions();
      });
    });

    // Search Input
    if (el.searchInput) {
      el.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (el.searchClearBtn) {
          el.searchClearBtn.style.display = state.searchQuery ? "block" : "none";
        }
        renderAttractions();
      });
    }

    if (el.searchClearBtn) {
      el.searchClearBtn.addEventListener("click", () => {
        el.searchInput.value = "";
        state.searchQuery = "";
        el.searchClearBtn.style.display = "none";
        renderAttractions();
      });
    }

    // Modal Close
    if (el.modalCloseBtn) {
      el.modalCloseBtn.addEventListener("click", closeModal);
    }

    if (el.modalOverlay) {
      el.modalOverlay.addEventListener("click", (e) => {
        if (e.target === el.modalOverlay) closeModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && el.modalOverlay.classList.contains("open")) {
        closeModal();
      }
    });
  }

  // Initialize App
  function init() {
    updateFavoritesBadge();
    initEvents();
    applyLanguage();
  }

  // Expose Global Public API for inline onclick handlers
  window.AndongApp = {
    setLanguage: setLanguage,
    toggleLanguage: toggleLanguage,
    toggleFav: toggleFavorite,
    speak: speakKorean,
    copy: copyText,
    openJumboCard: openJumboCard,
    openDriverCard: openDriverCard,
    showDetails: showDetails,
    closeModal: closeModal
  };

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
