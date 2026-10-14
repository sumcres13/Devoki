const page = document.body.dataset.page || "home";

document.getElementById("site-header-mount").innerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner container-wide">
      <a class="company-brand" href="index.html" aria-label="サッカール森下店 ホーム" data-i18n-aria="companyHome"><span class="company-wordmark"><span class="company-title">Deuki International</span><span class="company-name-suffix" data-i18n="companySuffix">合同会社</span></span></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション" data-i18n-aria="mainNavigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a>
        <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a>
        <a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a>
        <a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a>
      </nav>
      <div class="header-actions"><button class="language-switch" type="button" id="language-switch" aria-label="英語に切り替える"><span class="language-track"><span class="language-option language-ja is-active">JP</span><span class="language-option language-en">EN</span></span></button><button class="menu-toggle" type="button" id="menu-toggle" aria-label="メニューを開く" data-i18n-aria="openMenu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" data-i18n-aria="mobileNavigation" hidden><a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a><a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a><a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a></nav>
  </header>`;

document.getElementById("site-footer-mount").innerHTML = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a href="index.html"><span class="company-wordmark"><span class="company-title">Deuki International</span><span class="company-name-suffix" data-i18n="companySuffix">合同会社</span></span></a><p data-i18n="footerStatement">本場の味と、心を込めたおもてなし。</p></div>
    <div><h2 data-i18n="contactLabel">お問い合わせ</h2><p><span data-i18n="addressFull">東京都江東区森下１丁目１０−７</span></p><a href="tel:0336335232">03-3633-5232</a><a class="footer-email" href="mailto:thakurk401@gmail.com">thakurk401@gmail.com</a></div>
    <div class="footer-nav"><h2 data-i18n="navigationLabel">ナビゲーション</h2><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">私たちについて</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></div>
  </div><div class="container footer-bottom"><span>© <span id="year">2026</span> <span data-i18n="companyName">Deuki International合同会社</span> <span data-i18n="rightsReserved">無断転載を禁じます。</span></span><a href="#main-content" data-i18n="footerBack">ページ上部へ ↑</a></div></footer>`;

const en = {
  "companySuffix": "LLC",
  "navHome": "Home",
  "navAbout": "About us",
  "navStore": "Store & access",
  "navReservePlain": "Reservations",
  "companyName": "Deuki International LLC",
  "companySuffix": "LLC",
  "companyHome": "Satkar Morishita restaurant home",
  "brandCaption": "Indian Restaurant & Bar · Morishita",
  "footerStatement": "Authentic Indian flavors, served with heartfelt hospitality.",
  "heroLine1": "Spiced with tradition.",
  "heroLine2": "Served with warmth.",
  "heroCopy": "Fresh naan, fragrant curries, and heartfelt hospitality at Satkar Morishita.",
  "heroReserve": "Reserve a table",
  "heroAccess": "Store & access",
  "heroImageAlt": "A colorful spread of Indian dishes at Satkar Morishita",
  "aboutTitle": "<span class=\"about-heading-line\">Authentic flavor,</span><span class=\"about-heading-line\">heartfelt hospitality.</span>",
  "aboutBody": "Deuki International brings people together over authentic Indian cooking. At Satkar Morishita, enjoy comforting favorites and warm hospitality just one minute from Morishita Station.",
  "aboutLink": "About our company",
  "diningImageAlt": "Warmly lit dining room at Satkar Morishita",
  "homeStoreInfoLabel": "STORE INFORMATION",
  "shopName": "Satkar Indian Restaurant & Bar · Morishita",
  "homeQuality1Title": "A beloved Indian classic",
  "homeQuality1Text": "Discover butter chicken, cheese naan, and our signature butter chicken biryani.",
  "homeQuality2Title": "Room for every gathering",
  "homeQuality2Text": "Relax across the spacious first and second floors, from family meals to parties.",
  "homeQuality3Title": "At the restaurant or at home",
  "homeQuality3Text": "Dine in, take out, or order through our delivery partners.",
  "snsTitle": "Stay close to Satkar.",
  "snsCopy": "See the latest from our restaurant on Facebook.",
  "facebookFollow": "Visit Facebook",
  "homeReserveTitle": "Reservations & inquiries",
  "homeReserveCopy": "Find reservation methods and delivery services here.",
  "reservePage": "Reservations",
  "aboutPageTitle": "About us",
  "repRole": "Deuki International LLC / Representative Director",
  "representativeName": "Katuri Thakur Bahadur",
  "representativeAlt": "Katuri Thakur Bahadur, representative director of Deuki International",
  "ceoP1": "Thank you very much for visiting our website. I am Katuri Thakur Bahadur, representative director of Deuki International LLC.",
  "ceoP2": "We operate our restaurant with the hope of offering guests not only delicious food through authentic Indian cuisine, but also a moment of comfort and peace.",
  "ceoP3": "Food has the power to connect people across countries and cultures. While honoring traditional Indian flavors, we have worked to create a restaurant that feels welcoming to our guests in Japan and one they will want to visit again.",
  "ceoP4": "Every dish we serve is prepared with care for our ingredients and gratitude. We hope our freshly made, warming food and heartfelt service make time with family, friends, and colleagues even more special.",
  "ceoP5": "As a business rooted in the community, we value the trust we build with our guests and work to create a restaurant where everyone feels welcome. Your support and patronage encourage us more than anything.",
  "ceoP6": "We will continue pursuing authentic flavors and warm hospitality, striving to bring smiles to more guests. We sincerely appreciate your continued support.",
  "valuesTitle": "Our values",
  "value1Title": "Integrity & trust",
  "value1Text": "We build trust through integrity in everything we do.",
  "value2Title": "Teamwork & improvement",
  "value2Text": "We work together and value continuous improvement.",
  "value3Title": "Customer satisfaction",
  "value3Text": "We value customer satisfaction, sustainable growth, and a positive impact on society.",
  "companyTitle": "Company overview",
  "companyNameLabel": "Company",
  "companyRepLabel": "Owner",
  "companyRepValue": "Katuri Thakur Bahadur",
  "companyBusinessLabel": "Business",
  "companyBusiness": "Operating Satkar Morishita, an Indian restaurant and bar.",
  "companyLocationLabel": "Restaurant address",
  "storesPageTitle": "Store & access",
  "storeCuisine": "Authentic Indian Restaurant & Bar",
  "addressLabel": "Address",
  "addressFull": "1-10-7 Morishita, Koto City, Tokyo",
  "hoursLabel": "Hours",
  "hoursValue": "Every day 11:00–15:00 / 17:00–22:45",
  "closedLabel": "Closed",
  "closedValue": "Open every day",
  "phoneLabel": "Phone",
  "galleryTitle": "Inside Satkar Morishita",
  "slideOne": "A welcoming space, lit by colorful lanterns.",
  "slideTwo": "One minute from Morishita Station.",
  "slideThree": "Room to gather across two spacious floors.",
  "locationTitle": "Location",
  "openMap": "Open in Google Maps ↗",
  "mapTitle": "Map to Satkar Morishita",
  "storeImageAlt": "Satkar Morishita storefront",
  "bookingTitle": "Reservations & inquiries",
  "bookingIntro": "For reservations and restaurant information, visit Tabelog or Rakuten Gurunavi, or call us directly.",
  "telephoneTitle": "Reserve by phone",
  "telephoneAction": "Call now",
  "deliveryTitle": "Delivery",
  "deliveryIntro": "Enjoy Satkar's Indian favorites at home through our delivery partners.",
  "orderAction": "Order now",
  "uberAlt": "Uber Eats",
  "demaeAlt": "Demae-can",
  "rocketAlt": "Rocket Now",
  "lineAlt": "Facebook",
  "mainNavigation": "Main navigation",
  "mobileNavigation": "Mobile navigation",
  "openMenu": "Open menu",
  "closeMenu": "Close menu",
  "contactLabel": "CONTACT",
  "navigationLabel": "NAVIGATION",
  "previousPhoto": "Previous photo",
  "nextPhoto": "Next photo",
  "galleryPhotos": "Choose a gallery photo",
  "photoOne": "Photo 1",
  "photoTwo": "Photo 2",
  "photoThree": "Photo 3",
  "skipLink": "Skip to content",
  "footerBack": "BACK TO TOP ↑",
  "rightsReserved": "All rights reserved.",
  "companyEmailLabel": "Email",
  "interiorWideAlt": "Satkar Morishita's warmly lit dining room",
  "interiorDetailAlt": "Dining tables at Satkar Morishita",
  "gurunaviTitle": "Rakuten Gurunavi",
  "gurunaviAlt": "Rakuten Gurunavi",
  "listingExternal": "View restaurant information",
  "listingAction": "View store details",
  "ceoCatch": "Authentic flavors.<br>Warm moments together.",
  "ceoMessageLabel": "A MESSAGE FROM OUR REPRESENTATIVE",
  "companyPhoneLabel": "Restaurant phone",
  "restaurantDescription": "Satkar Morishita is an authentic Indian restaurant and bar just one minute from Morishita Station. Enjoy favorites like butter chicken and cheese naan, along with our signature butter chicken biryani. Our spacious first and second floors welcome everything from family meals to parties, and we are loved by local guests and visitors staying at nearby hotels.",
  "tabelogTitle": "Tabelog",
  "tabelogAlt": "Tabelog",
  "tabelogDetails": "Menus & restaurant information",
  "tabelogAction": "Open Tabelog"
};

const ja = {
  "companySuffix": "合同会社",
  "companyName": "Deuki International合同会社",
  "companyHome": "サッカール森下店 ホーム",
  "brandCaption": "インド料理＆バー サッカール森下店",
  "footerStatement": "本場の味と、心を込めたおもてなし。",
  "heroLine1": "スパイスの香りと、",
  "heroLine2": "心ほどけるおもてなし。",
  "heroCopy": "焼きたてのナンと香り豊かなカレー。<br class=\"desktop-break\">サッカールで、温かなひとときを。",
  "heroImageAlt": "サッカールの本格インド料理",
  "aboutTitle": "<span class=\"about-heading-line\">本場の味に、</span><span class=\"about-heading-line\">心をこめたおもてなし。</span>",
  "aboutBody": "Deuki International合同会社は、本格的なインド料理を通じて、おいしさだけでなく心安らぐひとときをお届けしたいと願っています。森下駅から徒歩1分のサッカール森下店で、何度でも訪れたくなる温かな時間をお過ごしください。",
  "diningImageAlt": "サッカール森下店の温かな店内",
  "shopName": "インド料理＆バー サッカール森下店",
  "homeQuality1Title": "人気のインド料理",
  "homeQuality1Text": "バターチキンやチーズナン、当店自慢のバターチキンビリヤニをどうぞ。",
  "homeQuality2Title": "集まりに合わせて使える広い店内",
  "homeQuality2Text": "1階・2階の広々とした空間は、ご家族でのお食事からパーティーまで幅広く対応します。",
  "homeQuality3Title": "店内でも、ご自宅でも",
  "homeQuality3Text": "店内でのお食事、テイクアウト、各種デリバリーをご利用いただけます。",
  "snsTitle": "サッカールを、もっと身近に。",
  "snsCopy": "最新情報はFacebookでご覧ください。",
  "facebookFollow": "Facebookを見る",
  "repRole": "Deuki International合同会社 / 代表取締役",
  "representativeName": "カトゥリ　タックルバハドゥール",
  "representativeAlt": "Deuki International合同会社 代表取締役 カトゥリ　タックルバハドゥール",
  "ceoP1": "当社ホームページをご覧いただき、誠にありがとうございます。Deuki International合同会社 代表取締役のカトウリ タックルバハドゥールです。",
  "ceoP2": "私たちは、本格的なインド料理を通じて、お客様に美味しさだけでなく、心が安らぐひとときをお届けしたいという想いで店舗を運営しております。",
  "ceoP3": "料理は国や文化の違いを越えて人と人をつなぐ力を持っています。私たちは伝統的なインドの味を大切にしながら、日本のお客様にも親しみやすく、何度でも足を運びたくなるような店づくりを目指してまいりました。",
  "ceoP4": "毎日お店で提供する一皿一皿には、素材へのこだわりと感謝の気持ちが込められています。出来立ての温かい料理と心を込めたサービスを通じて、ご家族、ご友人、お仕事仲間との大切な時間がより豊かなものになることを願っています。",
  "ceoP5": "また、地域に根ざした企業として、お客様との信頼関係を大切にしながら、安心してご利用いただける店舗づくりに努めております。皆さまからいただくご支援とご愛顧が、私たちの何よりの励みです。",
  "ceoP6": "これからも本場の味と温かなおもてなしを追求し、多くのお客様に笑顔をお届けできるよう努力を重ねてまいります。今後とも変わらぬご支援を賜りますよう、よろしくお願い申し上げます。",
  "value1Title": "誠実さと信頼",
  "value1Text": "誠実な姿勢で、お客様との信頼を築きます。",
  "value2Title": "チームワークと改善",
  "value2Text": "仲間と協力し、日々の改善を大切にします。",
  "value3Title": "お客様の満足",
  "value3Text": "お客様の満足を重視し、持続可能な成長と社会への貢献を目指します。",
  "companyRepValue": "カトゥリ　タックルバハドゥール",
  "companyBusiness": "本格インド料理店の運営",
  "companyEmailLabel": "メールアドレス",
  "storeCuisine": "本格インド料理＆バー",
  "addressFull": "東京都江東区森下１丁目１０−７",
  "hoursValue": "毎日 11時00分～15時00分、17時00分～22時45分",
  "closedValue": "なし",
  "galleryTitle": "サッカール森下店の風景",
  "slideOne": "ランタンの灯りに包まれる、温かな空間。",
  "slideTwo": "森下駅から徒歩1分。",
  "slideThree": "1階・2階の広々とした店内。",
  "mapTitle": "サッカール森下店の所在地の地図",
  "storeImageAlt": "サッカール森下店の外観",
  "interiorWideAlt": "サッカール森下店の温かな店内",
  "interiorDetailAlt": "サッカール森下店のテーブル席",
  "bookingIntro": "ご予約やお店の情報は、食べログ・ぐるなび、またはお電話からご確認ください。",
  "gurunaviTitle": "楽天ぐるなび",
  "gurunaviAlt": "楽天ぐるなび",
  "listingExternal": "店舗情報をご覧いただけます",
  "listingAction": "店舗情報を見る",
  "deliveryIntro": "サッカールの料理をご自宅でも。各サービスからご注文いただけます。",
  "ceoCatch": "本場の味と、<br>心安らぐひとときを。",
  "ceoMessageLabel": "代表からの挨拶",
  "companyPhoneLabel": "店舗電話",
  "restaurantDescription": "サッカール森下店は、森下駅から徒歩1分の場所にある本格インドレストラン＆バーです。人気のバターチキンやチーズナンに加え、当店自慢のバターチキンビリヤニをお楽しみいただけます。1階・2階の広々とした店内は、ご家族でのお食事からパーティー利用まで幅広く対応。地域のお客様はもちろん、周辺ホテルをご利用の観光客にも親しまれている一軒です。",
  "tabelogTitle": "食べログ",
  "tabelogAlt": "食べログ",
  "tabelogDetails": "メニュー・店舗情報をご覧いただけます",
  "tabelogAction": "食べログを見る"
};
document.querySelectorAll("[data-i18n]").forEach(element => {
  if (ja[element.dataset.i18n] !== undefined) element.innerHTML = ja[element.dataset.i18n];
});
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
  const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
  const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
  if (ja[key] !== undefined) element.setAttribute(attribute, ja[key]);
});
const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => originalText.set(element, element.innerHTML));
const originalAttributes = new Map();
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => originalAttributes.set(element, { aria: element.getAttribute("aria-label"), alt: element.getAttribute("alt"), title: element.getAttribute("title") }));
const languageButton = document.getElementById("language-switch");
let language = "ja";
try { language = localStorage.getItem("satkarLanguage") === "en" ? "en" : "ja"; } catch {}
function renderLanguage(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.innerHTML = language === "ja" ? originalText.get(element) : en[element.dataset.i18n] ?? originalText.get(element); });
  document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
    const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
    const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
    const original = originalAttributes.get(element)?.[element.dataset.i18nAria ? "aria" : element.dataset.i18nAlt ? "alt" : "title"];
    element.setAttribute(attribute, language === "ja" ? original : en[key] ?? original);
  });
  languageButton.classList.toggle("is-en", language === "en");
  languageButton.querySelector(".language-ja").classList.toggle("is-active", language === "ja");
  languageButton.querySelector(".language-en").classList.toggle("is-active", language === "en");
  languageButton.setAttribute("aria-label", language === "ja" ? "英語に切り替える" : "Switch to Japanese");
  const descriptions = {"ja": {"home": "森下駅徒歩1分。本格インド料理とバターチキンビリヤニ、チーズナンが楽しめるインド料理＆バー サッカール森下店。", "about": "Deuki International合同会社と代表取締役カトゥリ　タックルバハドゥールからのご挨拶。", "stores": "サッカール森下店の住所、営業時間、電話番号、店内写真とアクセスをご案内します。", "reservation": "サッカール森下店のご予約、お電話、Uber Eats、出前館、Rocket Nowをご案内します。"}, "en": {"home": "Satkar Morishita is an Indian restaurant and bar one minute from Morishita Station, serving butter chicken biryani and cheese naan.", "about": "A message from Katuri Thakur Bahadur, representative director of Deuki International LLC.", "stores": "Find Satkar Morishita address, hours, phone number, dining room photos, and map.", "reservation": "Contact Satkar Morishita, view restaurant listings, or order with Uber Eats, Demae-can, and Rocket Now."}};
  document.querySelector('meta[name="description"]').content = descriptions[language][page];
  document.title = (language === "ja"
    ? {home:"ホーム",about:"私たちについて",stores:"店舗・アクセス",reservation:"ご予約"}
    : {home:"Home",about:"About us",stores:"Store & access",reservation:"Reservations"})[page] + " | " + "Satkar Morishita";
  updateGalleryPlaybackLabel();
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) menuToggle.setAttribute("aria-label", mobileNav.hidden ? (language === "ja" ? "メニューを開く" : "Open menu") : (language === "ja" ? "メニューを閉じる" : "Close menu"));
}

const header = document.getElementById("site-header");
const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
renderLanguage(language);
languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ja" ? "en" : "ja";
  try { localStorage.setItem("satkarLanguage", nextLanguage); } catch {}
  renderLanguage(nextLanguage);
});
function updateHeader(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
menuToggle.addEventListener("click",()=>{ const opening=mobileNav.hidden; mobileNav.hidden=!opening; header.classList.toggle("menu-open",opening); menuToggle.setAttribute("aria-expanded",String(opening)); menuToggle.setAttribute("aria-label",opening?(language === "ja" ? "メニューを閉じる" : "Close menu"):(language === "ja" ? "メニューを開く" : "Open menu")); });
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");}));

function updateGalleryPlaybackLabel(){
  const control = document.querySelector(".gallery-play-toggle");
  if (!control) return;
  const paused = control.dataset.paused === "true";
  const label = language === "ja"
    ? (paused ? "スライドショーを再生" : "スライドショーを一時停止")
    : (paused ? "Play slideshow" : "Pause slideshow");
  control.textContent = paused ? "▶" : "Ⅱ";
  control.setAttribute("aria-label", label);
  control.setAttribute("title", label);
  control.setAttribute("aria-pressed", String(paused));
}

const slides = [...document.querySelectorAll(".gallery-slide")];
if (slides.length) {
  const stage = document.querySelector(".gallery-stage");
  const dots = [...document.querySelectorAll(".gallery-dots button")];
  const playback = stage.querySelector(".gallery-play-toggle");
  let current = 0;
  let timer;
  let hovered = false;
  let keyboardFocused = false;
  let userPaused = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === current);
      slide.setAttribute("aria-hidden", String(i !== current));
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === current);
      if (i === current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function scheduleAutoplay() {
    clearTimeout(timer);
    if (userPaused || hovered || keyboardFocused || document.hidden) return;
    timer = setTimeout(() => {
      showSlide(current + 1);
      scheduleAutoplay();
    }, 5000);
  }

  function showManualSlide(index) {
    showSlide(index);
    scheduleAutoplay();
  }

  stage.querySelector(".gallery-prev").addEventListener("click", () => showManualSlide(current - 1));
  stage.querySelector(".gallery-next").addEventListener("click", () => showManualSlide(current + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => showManualSlide(i)));
  stage.addEventListener("pointerenter", event => {
    if (event.pointerType === "touch") return;
    hovered = true;
    clearTimeout(timer);
  });
  stage.addEventListener("pointerleave", () => {
    hovered = false;
    scheduleAutoplay();
  });
  stage.addEventListener("pointerdown", () => clearTimeout(timer));
  stage.addEventListener("pointerup", scheduleAutoplay);
  stage.addEventListener("pointercancel", scheduleAutoplay);
  stage.addEventListener("focusin", event => {
    keyboardFocused = event.target.matches(":focus-visible");
    scheduleAutoplay();
  });
  stage.addEventListener("focusout", event => {
    if (!stage.contains(event.relatedTarget)) keyboardFocused = false;
    scheduleAutoplay();
  });
  document.addEventListener("visibilitychange", scheduleAutoplay);
  if (playback) {
    playback.dataset.paused = String(userPaused);
    playback.addEventListener("click", () => {
      userPaused = !userPaused;
      playback.dataset.paused = String(userPaused);
      updateGalleryPlaybackLabel();
      scheduleAutoplay();
    });
  }
  showSlide(0);
  updateGalleryPlaybackLabel();
  scheduleAutoplay();
}

const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:"0px 0px 30px 0px"});reveals.forEach(element=>observer.observe(element));}else reveals.forEach(element=>element.classList.add("is-visible"));
document.getElementById("year").textContent=new Date().getFullYear();
