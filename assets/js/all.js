let lang = "/essences/assets/json/chinese"; // 預設繁中

function loadLang(lang) {
  $.getJSON(lang + ".json", function (data) {
    // 將 JSON 文件中的內容加載到網頁上
    $("#pageTitle").text(data.title);
    $("#ctaIntro").text(data.ctaIntro);
    $("#joinEssenceBtn").text(data.joinEssenceBtn);
    $("#contactUsBtn").text(data.contactUsBtn);
    $("#switchBtn").text(data.switchButton);
  });
}

$(document).ready(function () {
  loadLang(lang); // 加載默認語言版本的內容

  $("#switchBtn").click(function () {
    if (lang === "/essences/assets/json/en") {
      lang = "/essences/assets/json/chinese";
    } else {
      lang = "/essences/assets/json/en";
    }
    $("body").removeClass().addClass(lang);
    loadLang(lang); // 加載切換後的語言版本的內容
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

const swiper = new Swiper(".swiper", {
  loop: false,
  direction: "horizontal",
  slidesPerView: 5, // 每行顯示卡片數量
  spaceBetween: 30, // 卡片間距
  autoplay: {
    delay: 2500,
  },
});
