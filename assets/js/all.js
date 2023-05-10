// let lang = "/essences/assets/json/chinese"; // 預設繁中
let lang = "/assets/json/chinese";

// 將 JSON 文件中的內容加載到網頁上
function loadLang(lang) {
  $.getJSON(lang + ".json", function (data) {
    // header
    $("#headerHomeLink").text(data.header.homeLink);
    $("#headerServicesLink").text(data.header.servicesLink);
    $("#headerNewsLink").text(data.header.newsLink);
    $("#headerPhotoGalleryLink").text(data.header.photoGalleryLink);
    $("#headerSocialParticipationLink").text(
      data.header.socialParticipationLink
    );
    $("#headerTeamLink").text(data.header.teamLink);
    $("#headerJoinUsLink").text(data.header.joinUsLink);
    $("#headerContactLink").text(data.header.contactLink);
    $("#headerSwitchLangBtn").text(data.header.switchLangBtn);
    // banner
    $("#bannerCompanyName").text(data.bannerArea.title);
    $("#bannerCtaIntroTitle1").text(data.bannerArea.ctaIntroTitle1);
    $("#bannerCtaIntroTitle2").text(data.bannerArea.ctaIntroTitle2);
    $("#joinEssenceBtn").text(data.bannerArea.joinEssenceBtn);
    $("#contactUsBtn").text(data.bannerArea.contactUsBtn);
  });
}

$(document).ready(function () {
  loadLang(lang); // 加載默認語言版本的內容
  $("#chineseCta").show();

  $("#headerSwitchLangBtn").click(function () {
    if (lang === "/assets/json/en") {
      lang = "/assets/json/chinese";
      $("#chineseCta").removeClass().addClass("d-block mb-4 content-style");
      $("#enCta").addClass("d-none");
      $("#en-logo").removeClass().addClass("d-block mb-3");
      $("#joinEssenceBtn").show();
    } else {
      lang = "/assets/json/en";
      $("#chineseCta").addClass("d-none");
      $("#enCta").removeClass().addClass("d-block mb-4 content-style text-light");
      $("#en-logo").removeClass().addClass("d-none");
      $("#joinEssenceBtn").hide();
    }
    $("body").removeClass().addClass(lang);
    loadLang(lang); // 加載切換後的語言版本的內容
  });

  const swiper = new Swiper(".swiper", {
    loop: false,
    direction: "horizontal",
    breakpoints: {
      492: {
        slidesPerView: 2, // 每行顯示卡片數量
        spaceBetween: 15, // 卡片間距
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 2000,
    },
  });
});

// 聯絡我們的表格
function submitHandler() {
  let receiver = "judychien@essences.com.tw";
  let body = "";
  body += "From：" + contactName.value + "%0A";
  body += "E-mail：" + mailAddress.value + "%0A";
  body += "Tel：" + phone.value + "%0A%0A%0A";
  body += content.value;
  // 將 body 資料送出
  mailTo.href = `mailto:${receiver}?subject=${mailTitle.value}&body=${body}`;
  mailTo.click();
  // 清除 form
  contactName.value = "";
  mailAddress.value = "";
  phone.value = "";
  content.value = "";
  mailTitle.value = "";
}
