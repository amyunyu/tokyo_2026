/*
 * TOKYO CITY GUIDE 2026｜GitHub Pages 版
 *
 * 所有行程內容都保存在下方的 days 陣列中，沒有壓縮或混淆。
 * 要修改時間、標題、說明或地圖，只需編輯對應欄位即可。
 */

function mapSearch(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
}

const days = [
  {
    date: "09.12",
    weekday: "SAT",
    place: "ARRIVAL",
    title: "抵達東京，從大塚開始",
    showLodging: true,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/12–9/18 連住",
    stops: [
      {
        time: "FLIGHT",
        eyebrow: "台中 → 成田",
        title: "JX314・抵達東京",
        summary: "09:30 台中出發，14:00 抵達成田機場。",
        detail: "搭乘星宇航空 JX314，預計 09:30 自台中國際機場起飛，14:00 抵達成田國際機場。\n\n抵達後以入境、領行李與前往大塚為主，不在第一天塞太多行程。",
        highlights: ["JX314", "RMQ 09:30 → NRT 14:00", "抵達後直接前往大塚"],
        map: mapSearch("成田國際機場"),
        tags: ["FLIGHT", "ARRIVAL"],
        status: "confirmed"
      },
      {
        time: "STAY",
        eyebrow: "大塚",
        title: "OMO5 東京大塚",
        summary: "這次東京 7 天 6 夜的固定住宿。",
        detail: "抵達大塚後先完成入住、放行李，再依體力決定要不要在大塚站周邊散步或吃晚餐。",
        highlights: ["9/12–9/18 連住", "不用每天搬行李", "第一晚保持輕鬆"],
        map: mapSearch("OMO5 東京大塚 by 星野集團"),
        tags: ["STAY", "大塚"],
        status: "confirmed"
      },
      {
        time: "AREA",
        eyebrow: "大塚",
        title: "大塚站周邊",
        summary: "第一晚不排滿，先熟悉住宿附近。",
        detail: "晚餐、便利商店或簡單散步都留在大塚周邊，依抵達時間與體力決定。",
        highlights: ["第一晚保持彈性", "以步行範圍為主"],
        map: mapSearch("大塚站 東京"),
        tags: ["AREA", "EAT", "WALK"],
        status: "flex"
      }
    ]
  },

  {
    date: "DAY",
    weekday: "TRIP",
    place: "KAWAGOE",
    title: "川越一日，走進小江戶",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/12–9/18 連住",
    stops: [
      {
        time: "SEE",
        eyebrow: "川越",
        title: "川越冰川神社",
        summary: "川越一日遊的主要固定點。",
        detail: "這一頁先保留成一日遊骨架；之後可以再補交通、參拜重點、御守與想拍的角度。",
        highlights: ["川越一日遊主線", "之後補交通與停留時間"],
        map: mapSearch("川越冰川神社"),
        tags: ["SEE", "神社", "川越"],
        status: "confirmed"
      },
      {
        time: "WALK",
        eyebrow: "川越",
        title: "一番街・藏造老街",
        summary: "把午後留給老街、商店與小吃。",
        detail: "不需要逐店排死，之後再把真正想去的店家放進 nearby 或獨立成卡片。",
        highlights: ["老街散步", "甜點與伴手禮", "保留逛街彈性"],
        map: mapSearch("川越 一番街"),
        tags: ["WALK", "SHOP", "川越"],
        status: "flex"
      }
    ]
  },

  {
    date: "DAY",
    weekday: "CITY",
    place: "MARUNOUCHI",
    title: "丸之內到秋葉原，城市與電氣街",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/12–9/18 連住",
    stops: [
      {
        time: "AREA",
        eyebrow: "丸之內",
        title: "MARUNOUCHI",
        summary: "東京站與丸之內一帶先保留成自由城市散步。",
        detail: "這裡之後可以再補想逛的商場、店家、建築或咖啡。",
        highlights: ["東京站周邊", "購物與城市散步"],
        map: mapSearch("丸之內 東京"),
        tags: ["AREA", "WALK", "SHOP"],
        status: "flex"
      },
      {
        time: "SHOP",
        eyebrow: "秋葉原",
        title: "秋葉原電氣街",
        summary: "把電器、模型與動漫店留成一段完整逛街時間。",
        detail: "之後再把真正想去的店家一間一間加入，不先塞滿。",
        highlights: ["秋葉原主要逛街區", "保留大量彈性"],
        map: mapSearch("秋葉原電氣街"),
        tags: ["SHOP", "秋葉原"],
        status: "flex"
      },
      {
        time: "EAT",
        eyebrow: "秋葉原",
        title: "LUIDA'S BAR",
        summary: "先列入秋葉原候選行程。",
        detail: "之後再確認最新營業方式、是否需要預約，以及實際位置。",
        highlights: ["出發前再確認最新資訊"],
        map: mapSearch("LUIDA'S BAR Tokyo"),
        tags: ["EAT", "秋葉原"],
        status: "flex"
      }
    ]
  },

  {
    date: "DAY",
    weekday: "CITY",
    place: "HARAJUKU",
    title: "穿過表參道，慢慢逛到澀谷",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/12–9/18 連住",
    stops: [
      {
        time: "SHOP",
        eyebrow: "表參道",
        title: "PORTER OMOTESANDO",
        summary: "這趟東京想好好逛的一站，先把時間留給 PORTER。",
        detail: "原宿・澀谷這天可以從表參道開始，把 PORTER 當作第一個主要購物點。\n\n這張卡之後可以再補：想看的系列、想買的品項、營業時間，以及是否有其他 PORTER 店需要比較。",
        highlights: [
          "主要購物點",
          "建議安排在逛街前段，體力和時間都比較充裕",
          "之後可往裏原宿、Cat Street 方向慢慢走"
        ],
        nearby: [
          {
            name: "裏原宿",
            note: "PORTER 之後可以順著神宮前巷弄慢慢往原宿內側逛。",
            map: mapSearch("裏原宿 東京")
          },
          {
            name: "Cat Street",
            note: "可接著往澀谷方向散步，沿途以服飾、選物店為主。",
            map: mapSearch("Cat Street Tokyo")
          }
        ],
        map: mapSearch("PORTER OMOTESANDO"),
        tags: ["SHOP", "PORTER", "表參道"],
        status: "confirmed"
      },
      {
        time: "WALK",
        eyebrow: "原宿",
        title: "裏原宿",
        summary: "離開大路，進巷子慢慢找店。",
        detail: "這裡不需要設定明確的「完成景點」，比較適合當成自由散步區。\n\n看到喜歡的服飾、選物、雜貨店就進去，重點不是打卡，而是把時間留給臨時發現。",
        highlights: ["不用排固定時間", "以巷弄購物和臨時發現為主", "可依當天體力決定停留多久"],
        map: mapSearch("裏原宿 東京"),
        tags: ["WALK", "SHOP", "原宿"],
        status: "flex"
      },
      {
        time: "WALK / SHOP",
        eyebrow: "神宮前",
        title: "Cat Street",
        summary: "沿著神宮前一路往澀谷走，把移動本身變成逛街。",
        detail: "Cat Street 很適合放在原宿與澀谷之間，作為這一天的主要步行軸線。\n\n不需要事先規定每一間店都要進去，可以把真正想逛的店另外做成卡片，其餘保留自由。",
        highlights: ["原宿 → 澀谷的自然步行路線", "沿途可穿插購物與咖啡", "適合保留大量彈性"],
        map: mapSearch("Cat Street Tokyo"),
        tags: ["WALK", "SHOP", "神宮前"],
        status: "flex"
      },
      {
        time: "COFFEE",
        eyebrow: "神宮前",
        title: "Satella",
        summary: "逛街途中安排一段坐下來喝咖啡的時間。",
        detail: "這張卡的定位不是一定要幾點抵達，而是當作原宿・澀谷這天的休息點。\n\n之後確認店家最新營業資訊後，可以再補營業時間、休息日與推薦品項。",
        highlights: ["逛街中途休息", "不綁固定時間", "之後補最新營業時間與想喝的品項"],
        map: mapSearch("Satella Tokyo"),
        tags: ["COFFEE", "神宮前"],
        status: "flex"
      },
      {
        time: "AREA",
        eyebrow: "澀谷",
        title: "SHIBUYA",
        summary: "最後留給澀谷，不排滿，想逛什麼當天再決定。",
        detail: "原宿、神宮前一路走到澀谷之後，後半段不需要再塞很多固定景點。\n\n之後如果找到真正想去的店，再一間一間加進這個區域；目前先保留成自由購物與吃飯的收尾區。",
        highlights: ["不綁固定店家", "可依當天購物進度調整", "晚餐也可以留在澀谷再決定"],
        map: mapSearch("Shibuya Tokyo"),
        tags: ["AREA", "SHOP", "澀谷"],
        status: "flex"
      }
    ]
  },

  {
    date: "DAY",
    weekday: "CITY",
    place: "ODAIBA",
    title: "台場，把一天留給灣岸",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/12–9/18 連住",
    stops: [
      {
        time: "SHOP",
        eyebrow: "台場",
        title: "THE GUNDAM BASE TOKYO",
        summary: "台場目前最明確的目的地。",
        detail: "先保留 Gundam Base 作為主卡，之後再補台場想逛的商場、餐廳或其他景點。",
        highlights: ["台場主目的地", "出發前再確認最新營業資訊"],
        map: mapSearch("THE GUNDAM BASE TOKYO"),
        tags: ["SHOP", "GUNDAM", "台場"],
        status: "confirmed"
      }
    ]
  },

  {
    date: "DAY",
    weekday: "LOCAL",
    place: "IKEBUKURO",
    title: "池袋與大塚，住進東京的日常",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/12–9/18 連住",
    stops: [
      {
        time: "SEE",
        eyebrow: "大塚",
        title: "天祖神社",
        summary: "住宿附近可以順路走訪的神社。",
        map: mapSearch("天祖神社 大塚 東京"),
        tags: ["SEE", "神社", "大塚"],
        status: "flex"
      },
      {
        time: "SWEET",
        eyebrow: "大塚",
        title: "千成最中本舗",
        summary: "住宿附近的和菓子候選。",
        map: mapSearch("千成最中本舗 大塚"),
        tags: ["SWEET", "大塚"],
        status: "flex"
      },
      {
        time: "EAT",
        eyebrow: "大塚",
        title: "GOTOO",
        summary: "先列入大塚周邊餐廳候選。",
        map: mapSearch("GOTOO 大塚 東京"),
        tags: ["EAT", "大塚"],
        status: "flex"
      },
      {
        time: "EAT",
        eyebrow: "大塚",
        title: "北斎",
        summary: "先列入大塚周邊餐廳候選。",
        map: mapSearch("北斎 大塚 東京"),
        tags: ["EAT", "大塚"],
        status: "flex"
      },
      {
        time: "EAT",
        eyebrow: "池袋",
        title: "かぶと",
        summary: "先列入池袋餐廳候選。",
        map: mapSearch("かぶと 池袋"),
        tags: ["EAT", "池袋"],
        status: "flex"
      }
    ]
  },

  {
    date: "09.18",
    weekday: "FRI",
    place: "DEPARTURE",
    title: "最後一天，回到成田",
    showLodging: false,
    lodging: "今日返台・無住宿",
    lodgingMap: "",
    lodgingNote: "",
    stops: [
      {
        time: "CHECK-OUT",
        eyebrow: "大塚",
        title: "OMO5 東京大塚・退房",
        summary: "整理行李，準備前往成田機場。",
        map: mapSearch("OMO5 東京大塚 by 星野集團"),
        tags: ["CHECK-OUT", "大塚"],
        status: "confirmed"
      },
      {
        time: "FLIGHT",
        eyebrow: "成田 → 台中",
        title: "JX315・回程",
        summary: "16:30 成田出發，19:10 抵達台中。",
        detail: "搭乘星宇航空 JX315，預計 16:30 自成田國際機場起飛，19:10 抵達台中國際機場。",
        highlights: ["JX315", "NRT 16:30 → RMQ 19:10", "預留機場報到與退稅時間"],
        map: mapSearch("成田國際機場"),
        tags: ["FLIGHT", "DEPARTURE"],
        status: "confirmed"
      }
    ]
  }
];

// -----------------------------------------------------------------------------
// 畫面互動。以下程式負責日期切換、卡片詳細說明、地圖連結與底部導覽。
// -----------------------------------------------------------------------------

let activeDayIndex = 0;
let lastFocusedElement = null;

const dateRail = document.querySelector("#date-rail");
const dayView = document.querySelector("#day-view");
const scheduleSection = document.querySelector("#schedule-section");
const infoSection = document.querySelector("#info-section");
const scheduleNav = document.querySelector("#schedule-nav");
const infoNav = document.querySelector("#info-nav");
const hotelList = document.querySelector("#hotel-list");
const modalBackdrop = document.querySelector("#modal-backdrop");
const closeModalButton = document.querySelector("#close-modal");
const modalDoneButton = document.querySelector("#modal-done");

function mapLink(url, compact = false) {
  if (!url) return "";

  const compactClass = compact ? " compact" : "";
  const text = compact ? "" : "地圖";

  return `<a class="map-link${compactClass}" href="${url}" target="_blank" rel="noreferrer" aria-label="在 Google 地圖開啟"><span aria-hidden="true">⌖</span>${text}</a>`;
}

function renderDateRail() {
  dateRail.innerHTML = days.map((day, index) => `
    <button class="date-button ${index === activeDayIndex ? "active" : ""}" type="button" data-day-index="${index}" ${index === activeDayIndex ? 'aria-current="date"' : ""}>
      <span>${day.weekday}</span>
      <strong>${day.date}</strong>
      <small>${day.place}</small>
    </button>
  `).join("");

  const activeButton = dateRail.querySelector(".date-button.active");
  activeButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

function renderDay() {
  const day = days[activeDayIndex];
  const timeline = day.stops.map((stop, stopIndex) => {
    const isFlex = stop.status === "flex";
    return `
  <article class="stop ${isFlex ? "is-flex" : ""}">
    <div class="stop-card" role="button" tabindex="0" data-stop-index="${stopIndex}" aria-label="查看 ${stop.title} 詳細說明">
      <div class="card-topline">
  <div class="time">
  <span>${stop.time}</span>
  ${stop.eyebrow ? `<span class="eyebrow">${stop.eyebrow}</span>` : ""}
  </div>
</div>
          <div class="title-row">
            <h2>${stop.title}</h2>
            ${mapLink(stop.map, true)}
          </div>
          <p>${stop.summary}</p>
        </div>
        ${stopIndex < day.stops.length - 1 ? '<span class="timeline-thread" aria-hidden="true"></span>' : ""}
      </article>
    `;
  }).join("");

  dayView.innerHTML = `
    <header class="day-heading">
  <h1>${day.title}</h1>
  <span class="brush" aria-hidden="true"></span>
</header>
    <div class="timeline">${timeline}</div>
    ${day.showLodging === false ? "" : `
    <section class="lodging-card">
      <div>
        <p>STAY</p>
        <h2>${day.lodging}</h2>
        ${day.lodgingNote ? `<small>${day.lodgingNote}</small>` : ""}
      </div>
      ${mapLink(day.lodgingMap)}
    </section>`}
    <div class="day-controls">
      <button id="previous-day" type="button" ${activeDayIndex === 0 ? "disabled" : ""}>← 前一天</button>
      <button id="next-day" type="button" ${activeDayIndex === days.length - 1 ? "disabled" : ""}>後一天 →</button>
    </div>
  `;
}

function openStop(stopIndex, triggerElement) {
  const stop = days[activeDayIndex].stops[stopIndex];
  lastFocusedElement = triggerElement;

  document.querySelector("#detail-eyebrow").textContent =
stop.eyebrow ? `${stop.time} · ${stop.eyebrow}` : stop.time;
  document.querySelector("#detail-title").textContent = stop.title;
  document.querySelector("#detail-text").textContent =
  stop.detail || stop.summary || "";
  const detailMap = document.querySelector("#detail-map");

if (stop.map) {
  detailMap.href = stop.map;
  detailMap.hidden = false;
} else {
  detailMap.removeAttribute("href");
  detailMap.hidden = true;
}
  document.querySelector("#detail-tags").innerHTML =
  (stop.tags || []).map(tag => `<span>${tag}</span>`).join("");
  document.querySelector("#detail-highlights").innerHTML =
  (stop.highlights || []).map(item => `<li>${item}</li>`).join("");
  
const nearbyBlock = document.querySelector("#detail-nearby");
const nearbyList = document.querySelector("#nearby-list");

if (stop.nearby) {
  nearbyBlock.hidden = false;
  nearbyList.innerHTML = stop.nearby.map(item => `
    <article class="restaurant-item">
      <h4>${item.name}</h4>
<p>${item.note || ""}</p>
${
  item.image
    ? `<a href="${item.image}" target="_blank">查看圖片</a>`
    : ""
}
      ${
  item.image
    ? ""
    : item.maps
      ? item.maps.map((url, index) =>
          `<a href="${url}" target="_blank">地圖連結 ${index + 1}</a>`
        ).join("　")
      : item.map
        ? `<a href="${item.map}" target="_blank">地圖連結</a>`
        : ""
}
    </article>
  `).join("");
} else {
  nearbyBlock.hidden = true;
  nearbyList.innerHTML = "";
}

  const restaurantBlock = document.querySelector("#detail-restaurants");
const restaurantList = document.querySelector("#restaurant-list");

if (stop.restaurants) {
  restaurantBlock.hidden = false;

  restaurantList.innerHTML = stop.restaurants.map(item => `
    <article class="restaurant-item">
      <h4>${item.name}</h4>
      <p>${item.note || ""}</p>

      ${
  item.maps
    ? item.maps.map((url, index) =>
        `<a href="${url}" target="_blank">地圖連結 ${index + 1}</a>`
      ).join("　")
    : item.map
      ? `<a href="${item.map}" target="_blank">地圖連結</a>`
      : ""
}
    </article>
  `).join("");
} else {
  restaurantBlock.hidden = true;
  restaurantList.innerHTML = "";
}
  
  const note = document.querySelector("#detail-note");
  note.hidden = !stop.note;
  note.querySelector("p").textContent = stop.note || "";

  modalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  closeModalButton.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

function changeDay(index) {
  if (index < 0 || index >= days.length) return;
  activeDayIndex = index;
  renderDateRail();
  renderDay();
  window.scrollTo({ top: document.querySelector(".date-dock").offsetTop, behavior: "smooth" });
}

function renderHotelList() {
  const hotels = [];

  days
  .filter(day => day.lodging !== "今日返台・無住宿")
  .forEach(day => {
    const previousHotel = hotels.at(-1);
    if (previousHotel && previousHotel.name === day.lodging) {
      previousHotel.endDate = day.date;
    } else {
      hotels.push({
        startDate: day.date,
        endDate: day.date,
        name: day.lodging,
        map: day.lodgingMap,
        note: day.lodgingNote || ""
      });
    }
  });

  hotelList.innerHTML = hotels.map(hotel => {
    const dates = hotel.startDate === hotel.endDate ? hotel.startDate : `${hotel.startDate}–${hotel.endDate}`;
    return `
      <article>
        <div>
          <time>${dates}</time>
          <h3>${hotel.name}</h3>
          ${hotel.note ? `<p>${hotel.note}</p>` : ""}
        </div>
        ${mapLink(hotel.map, true)}
      </article>
    `;
  }).join("");
}

function showSection(sectionName) {
  const showSchedule = sectionName === "schedule";
  scheduleSection.hidden = !showSchedule;
  infoSection.hidden = showSchedule;
  scheduleNav.classList.toggle("active", showSchedule);
  infoNav.classList.toggle("active", !showSchedule);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

dateRail.addEventListener("click", event => {
  const button = event.target.closest("[data-day-index]");
  if (!button) return;
  changeDay(Number(button.dataset.dayIndex));
});

dayView.addEventListener("click", event => {
  const mapAnchor = event.target.closest("a.map-link");
  if (mapAnchor) return;

  const card = event.target.closest("[data-stop-index]");
  if (card) openStop(Number(card.dataset.stopIndex), card);

  if (event.target.closest("#previous-day")) changeDay(activeDayIndex - 1);
  if (event.target.closest("#next-day")) changeDay(activeDayIndex + 1);
});

dayView.addEventListener("keydown", event => {
  const card = event.target.closest("[data-stop-index]");
  if (!card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  openStop(Number(card.dataset.stopIndex), card);
});

modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

closeModalButton.addEventListener("click", closeModal);
modalDoneButton.addEventListener("click", closeModal);
scheduleNav.addEventListener("click", () => showSection("schedule"));
infoNav.addEventListener("click", () => showSection("info"));

renderDateRail();
renderDay();
renderHotelList();
